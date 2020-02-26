import random from 'random';

import { Facility, Environment, Agent, Road, Intersection, ControlTower } from "../../ts/unit";
import { TruckArrivalData, Wait, Vector2 } from "../../ts/types";
import { Renderer } from "../../ts/renderer";
import { Circle, Font, Quad } from "../../ts/drawer";
import { Vehicle } from '../../ts/component';

/**
 * 트럭 생성기에 여러 정보가 담겨있어서 다른 클래서에서도 접근 가능하도록 하기 위함.
 */
let truckGenerator: TruckGenerator;

/**
 * 디버깅시 각 시설에서 걸리는 시간 비율 조절용
 */
const tmp = 0.001;

/**
 * 트럭 도착지로 들어올 트럭들을 생성하는 장소
 */
export class TruckGenerator extends Facility {
    public day: number;
    public timeOfDay: number;

    private truckArrivalTimeDataList: Array<TruckArrivalData>;
    private nextTruckIndex: number;
    private arrivalTruckCount: number;

    private dockTruckRatio: number;
    private bulkTruckRatio: number;
    private looseBackRatio: number;
    private palletRatio: number;
    private seaBulkRatio: number;
    private tankBulkRatio: number;

    public get unitCount(): number {
        return this.environment.unitList.length;
    }

    public constructor(environment: Environment) {
        super(environment);

        truckGenerator = this;

        this.name = 'TruckGenerator';
        this.day = 0;
        this.timeOfDay = 0;
        this.truckArrivalTimeDataList = new Array<TruckArrivalData>();
        this.nextTruckIndex = 0;
        this.arrivalTruckCount = 0;

        this.dockTruckRatio = 0.8;
        this.bulkTruckRatio = 0.2;
        this.looseBackRatio = 0.15;
        this.palletRatio = 0.85;
        this.seaBulkRatio = 0.15;
        this.tankBulkRatio = 0.85;

        this.setTruckArrivalDataList();
    }

    /**
     * @override
     */
    public onAgentIn(agent: Agent): void {

    }
    
    /**
     * @override
     */
    public onAgentOut(agent: Agent): void {
        
    }

    /**
     * @override
     */
    public render(renderer: Renderer): void {
        let circle = new Circle(this.transform.clone());
        renderer.draw(circle);

        let font = new Font(this.transform.clone());
        font.text = this.name;
        renderer.draw(font);
    }

    /**
     * @override
     */
    public onStart(): void {
        
    }

    /**
     * @override
     */
    public onUpdate(): void {
        this.timeOfDay += this.environment.deltaTime;

        if (this.timeOfDay < 43200) {
            if (this.nextTruckIndex < this.truckArrivalTimeDataList.length) {
                let nextTruckArrivalTimeData = this.truckArrivalTimeDataList[this.nextTruckIndex];

                if (nextTruckArrivalTimeData.time < this.timeOfDay) {
                    let truck: Truck;

                    if (nextTruckArrivalTimeData.kind == TruckArrivalData.TRUCK_KIND_SEA_BULK) {
                        truck = new SeaBulkTruck(this.environment);
                    } else if (nextTruckArrivalTimeData.kind == TruckArrivalData.TRUCK_KIND_TANK_BULK) {
                        truck = new TankBulkTruck(this.environment);
                    } else if (nextTruckArrivalTimeData.kind == TruckArrivalData.TRUCK_KIND_DOKE_LOOSE_BAG) {
                        truck = new DockTruck(this.environment, DockTruck.LOOSE_BAG);
                    } else if (nextTruckArrivalTimeData.kind == TruckArrivalData.TRUCK_KIND_DOKE_PALLET) {
                        truck = new DockTruck(this.environment, DockTruck.PALLET);
                    }

                    truck.register();
                    this.addOutAgentQueue(0, truck);

                    nextTruckArrivalTimeData.isArrived = true;
                    this.nextTruckIndex++;
                }
            }
        } else if (this.timeOfDay >= 43200) {

            if (this.day === 30) {
                this.environment.timeScale = 0;
            } else {
                if (this.environment.unitList.length === 300) {
                    this.timeOfDay = 0;
                    this.setTruckArrivalDataList();
                }
            }
        }
    }

    /**
     * 트럭 도착 데이터 설정
     */
    private setTruckArrivalDataList(): void {
        this.nextTruckIndex = 0;
        this.day++;

        let duration = 12 * 60 * 60;
        let averageArrivalCount = 591;
        let averageDelay = duration / averageArrivalCount;
        let nextDelay = random.exponential(1 / averageDelay);

        let arrivalTimeList = new Array<number>();
        let arrivalTimeDataList = new Array<TruckArrivalData>();

        for (let time = nextDelay(); time < duration; time += nextDelay()) {
            arrivalTimeList.push(time);
        }

        this.arrivalTruckCount = arrivalTimeList.length;
        
        for (let i = 0; i < Math.round(this.arrivalTruckCount * this.dockTruckRatio * this.looseBackRatio); i++) {
            let time = arrivalTimeList.splice(Math.floor(Math.random() * arrivalTimeList.length - 1), 1)[0];
            
            let timeData = new TruckArrivalData(time, TruckArrivalData.TRUCK_KIND_DOKE_LOOSE_BAG);
            arrivalTimeDataList.push(timeData);
        }
        
        for (let i = 0; i < Math.round(this.arrivalTruckCount * this.dockTruckRatio * this.palletRatio); i++) {
            let time = arrivalTimeList.splice(Math.floor(Math.random() * arrivalTimeList.length), 1)[0];
            
            let timeData = new TruckArrivalData(time, TruckArrivalData.TRUCK_KIND_DOKE_PALLET);
            arrivalTimeDataList.push(timeData);
        }
        
        for (let i = 0; i < Math.round(this.arrivalTruckCount * this.bulkTruckRatio * this.tankBulkRatio); i++) {
            let time = arrivalTimeList.splice(Math.floor(Math.random() * arrivalTimeList.length), 1)[0];
            
            let timeData = new TruckArrivalData(time, TruckArrivalData.TRUCK_KIND_TANK_BULK);
            arrivalTimeDataList.push(timeData);
        }
        
        for (; arrivalTimeList.length;) {
            let time = arrivalTimeList.splice(Math.floor(Math.random() * arrivalTimeList.length), 1)[0];
            
            let timeData = new TruckArrivalData(time, TruckArrivalData.TRUCK_KIND_SEA_BULK);
            arrivalTimeDataList.push(timeData);
        }

        this.truckArrivalTimeDataList = arrivalTimeDataList.sort((a, b) => {
            return a.time - b.time;
        });
    }
}

/**
 * 트럭 도착지
 */
export class TruckDestination extends Facility {
    public constructor(environment: Environment) {
        super(environment);

        this.name = 'TruckDestination';
    }

    /**
     * 
     * @override
     */
    public onAgentIn(agent: Agent): void {
        agent.transform.position = this.transform.position.clone();

        this.addOutAgentQueue(0, agent);
    }

    /**
     * 
     * @override
     */
    public onAgentOut(agent: Agent): void {
        
    }

    /**
     * @override
     */
    public render(renderer: Renderer): void {
        let quad = new Quad(this.transform.clone());
        renderer.draw(quad);

        let font = new Font(this.transform.clone());
        font.text = this.name;
        renderer.draw(font);
    }

    /**
     * @override
     */
    public onStart(): void {
        
    }

    /**
     * @override
     */
    public onUpdate(): void {
        
    }
}

/**
 * 대기 장소
 */
export class WaitingPlace extends Facility {
    public constructor(environment: Environment) {
        super(environment);

        this.name = 'WaitingPlace';
        this.maxCapacity = 1000;
    }

    /**
     * @override
     */
    public onAgentIn(agent: Agent): void {
        agent.transform.position = this.transform.position.clone();

        this.addOutAgentQueue(0, agent);
    }

    /**
     * @override
     */
    public onAgentOut(agent: Agent): void {
        
    }

    /**
     * @override
     */
    public render(renderer: Renderer): void {
        let quad = new Quad(this.transform.clone());
        renderer.draw(quad);

        let font = new Font(this.transform.clone());
        font.text = this.name;
        renderer.draw(font);
    }

    /**
     * @override
     */
    public onStart(): void {
        
    }

    /**
     * @override
     */
    public onUpdate(): void {
        
    }
}

/**
 * 입구 게이트웨이
 */
export class InGateway extends Facility {
    public constructor(environment: Environment) {
        super(environment);

        this.name = 'Gateway';
    }

    /**
     * @override
     */
    public onAgentIn(agent: Agent): void {
        if (truckGenerator && truckGenerator.timeOfDay < 43200) {
            agent.transform.position = this.transform.position.clone();

            this.startCoroutine(this.checkTruck(<Truck> agent));
        } else {
            agent.unregister();
        }
    }

    /**
     * @override
     */
    public onAgentOut(agent: Agent): void {
        
    }

    /**
     * @override
     */
    public render(renderer: Renderer): void {
        let quad = new Quad(this.transform.clone());
        renderer.draw(quad);

        let font = new Font(this.transform.clone());
        font.text = this.name;
        renderer.draw(font);
    }

    /**
     * @override
     */
    public onStart(): void {
        
    }

    /**
     * @override
     */
    public onUpdate(): void {
        
    }

    /**
     * 트럭 검문 구현
     * @param truck 
     */
    private *checkTruck(truck: Truck): any {
        yield* Wait.forSeconds(this.environment, 5 * 60 * tmp);
        
        if (truck instanceof DockTruck) {
            this.addOutAgentQueue(0, truck);
        } else if (truck instanceof TankBulkTruck) {
            this.addOutAgentQueue(1, truck);
        } else if (truck instanceof SeaBulkTruck) {
            this.addOutAgentQueue(2, truck);
        }
    }
}

/**
 * 출구 게이트웨이
 */
export class OutGateway extends Facility {
    public constructor(environment: Environment) {
        super(environment);

        this.name = 'Gateway';
        this.maxCapacity = 1;
    }

    /**
     * @override
     */
    public onAgentIn(agent: Agent): void {
        this.addOutAgentQueue(0, agent);
    }

    /**
     * @override
     */
    public onAgentOut(agent: Agent): void {
        
    }

    /**
     * @override
     */
    public render(renderer: Renderer): void {
        let quad = new Quad(this.transform.clone());
        renderer.draw(quad);

        let font = new Font(this.transform.clone());
        font.text = this.name;
        renderer.draw(font);
    }

    /**
     * @override
     */
    public onStart(): void {
        
    }

    /**
     * @override
     */
    public onUpdate(): void {
        
    }
}

/**
 * 씨벌크 트럭 라이너 준비실
 */
export class SeabulkTruckLinerPreparationPlace extends Facility {
    public constructor(environment: Environment) {
        super(environment);

        this.name = 'LinerPreparationPlace';
        this.maxCapacity = 1;
    }

    /**
     * @override
     */
    public onAgentIn(agent: Agent): void {
        agent.transform.position = this.transform.position.clone();

        this.startCoroutine(this.prepareLiner(<SeaBulkTruck> agent));
    }

    /**
     * @override
     */
    public onAgentOut(agent: Agent): void {
        
    }

    /**
     * @override
     */
    public render(renderer: Renderer): void {
        let quad = new Quad(this.transform.clone());
        renderer.draw(quad);

        let font = new Font(this.transform.clone());
        font.text = this.name;
        renderer.draw(font);
    }

    /**
     * @override
     */
    public onStart(): void {
        
    }

    /**
     * @override
     */
    public onUpdate(): void {
        
    }

    private *prepareLiner(truck: SeaBulkTruck): any {
        yield* Wait.forSeconds(this.environment, 15 * 60 * tmp);

        this.addOutAgentQueue(0, truck);
    }
}

/**
 * 무게 측정실
 */
export class WeightMesaurementPlace extends Facility {
    public constructor(environment: Environment) {
        super(environment);

        this.name = 'WeightMesaurementPlace';
        this.maxCapacity = 1;
    }

    /**
     * @override
     */
    public onAgentIn(agent: Agent): void {
        agent.transform.position = this.transform.position.clone();

        this.startCoroutine(this.measureWeight(<Truck> agent));
    }

    /**
     * @override
     */
    public onAgentOut(agent: Agent): void {
        
    }

    /**
     * @override
     */
    public render(renderer: Renderer): void {
        let quad = new Quad(this.transform.clone());
        renderer.draw(quad);

        let font = new Font(this.transform.clone());
        font.text = this.name;
        renderer.draw(font);
    }

    /**
     * @override
     */
    public onStart(): void {
        
    }

    /**
     * @override
     */
    public onUpdate(): void {
        
    }

    private *measureWeight(truck: Truck): any {
        yield* Wait.forSeconds(this.environment, 2 * 60 * tmp);

        this.addOutAgentQueue(0, truck);
    }
}

/**
 * 벌크 제품 적재실
 */
export class BulkProductLoadingPlace extends Facility {
    public constructor(environment: Environment) {
        super(environment);

        this.name = 'BulkProductLoadingPlace';
        this.maxCapacity = 28;
    }

    /**
     * @override
     */
    public onAgentIn(agent: Agent): void {
        agent.transform.position = this.transform.position.clone();

        this.startCoroutine(this.loadProduct(<Truck> agent));
    }

    /**
     * @override
     */
    public onAgentOut(agent: Agent): void {
        
    }

    /**
     * @override
     */
    public render(renderer: Renderer): void {
        let quad = new Quad(this.transform.clone());
        renderer.draw(quad);

        let font = new Font(this.transform.clone());
        font.text = this.name;
        renderer.draw(font);
    }

    /**
     * @override
     */
    public onStart(): void {
        
    }

    /**
     * @override
     */
    public onUpdate(): void {
        
    }

    private *loadProduct(truck: SeaBulkTruck): any {
        yield* Wait.forSeconds(this.environment, 50 * 60);

        truck.state = Truck.STATE_LOADED;
        this.addOutAgentQueue(0, truck);
    }
}

/**
 * 도크 제품 적재실
 */
export class DockProductLoadingPlace extends Facility {
    public constructor(environment: Environment) {
        super(environment);

        this.name = 'DockProductLoadingPlace';
        this.maxCapacity = 1;
    }

    /**
     * @override
     */
    public onAgentIn(agent: Agent): void {
        agent.transform.position = this.transform.position.clone();

        this.startCoroutine(this.loadProduct(<DockTruck> agent));
    }

    /**
     * @override
     */
    public onAgentOut(agent: Agent): void {
        
    }

    /**
     * @override
     */
    public render(renderer: Renderer): void {
        let quad = new Quad(this.transform.clone());
        renderer.draw(quad);

        let font = new Font(this.transform.clone());
        font.text = this.name;
        font.size = 0.8;
        renderer.draw(font);
    }

    /**
     * @override
     */
    public onStart(): void {
        
    }

    /**
     * @override
     */
    public onUpdate(): void {
        
    }

    private *loadProduct(truck: DockTruck): any {
        if (truck.type == DockTruck.LOOSE_BAG) {
            yield* Wait.forSeconds(this.environment, 60 * 60);
        } else if (truck.type == DockTruck.PALLET) {
            yield* Wait.forSeconds(this.environment, 50 * 60);
        }

        truck.state = Truck.STATE_LOADED;
        this.addOutAgentQueue(0, truck);
    }
}

/**
 * 외부 목적지
 */
export class ExternalDestination extends Facility {
    private statistics: {
        'tankBulk': Array<number>,
        'seaBulk': Array<number>,
        'looseDock': Array<number>,
        'palletDock': Array<number>,
        'total': Array<number>
    };

    public constructor(environment: Environment) {
        super(environment);

        this.name = 'ExternalDestination';

        this.statistics = {
            'tankBulk': [0, 0, 0, 0],
            'seaBulk': [0, 0, 0, 0],
            'looseDock': [0, 0, 0, 0],
            'palletDock': [0, 0, 0, 0],
            'total': [0, 0, 0, 0]
        };
    }

    /**
     * @override
     */
    public onAgentIn(agent: Agent): void {
        if (agent instanceof Truck) {
            let truck = <Truck> agent;

            if (truck instanceof TankBulkTruck) {
                let tank = <TankBulkTruck> truck;

                this.statistics['tankBulk'][0]++;
                this.statistics['tankBulk'][1] += tank.necessaryBrakeCount;
                this.statistics['tankBulk'][2] += tank.excessedBrakeCount;
                this.statistics['tankBulk'][3] += tank.necessaryBrakeCount + tank.excessedBrakeCount;
            } else if (truck instanceof SeaBulkTruck) {
                let sea = <SeaBulkTruck> truck;

                this.statistics['seaBulk'][0]++;
                this.statistics['seaBulk'][1] += sea.necessaryBrakeCount;
                this.statistics['seaBulk'][2] += sea.excessedBrakeCount;
                this.statistics['seaBulk'][3] += sea.necessaryBrakeCount + sea.excessedBrakeCount;
            } else if (truck instanceof DockTruck) {
                let dock = <DockTruck> truck;

                if (dock.type === DockTruck.LOOSE_BAG) {
                    this.statistics['looseDock'][0]++;
                    this.statistics['looseDock'][1] += dock.necessaryBrakeCount;
                    this.statistics['looseDock'][2] += dock.excessedBrakeCount;
                    this.statistics['looseDock'][3] += dock.necessaryBrakeCount + dock.excessedBrakeCount;
                } else if (dock.type === DockTruck.PALLET) {
                    this.statistics['palletDock'][0]++;
                    this.statistics['palletDock'][1] += dock.necessaryBrakeCount;
                    this.statistics['palletDock'][2] += dock.excessedBrakeCount;
                    this.statistics['palletDock'][3] += dock.necessaryBrakeCount + dock.excessedBrakeCount;
                }
            }

            this.statistics['total'][0]++;
            this.statistics['total'][1] += truck.necessaryBrakeCount;
            this.statistics['total'][2] += truck.excessedBrakeCount;
            this.statistics['total'][3] += truck.necessaryBrakeCount + truck.excessedBrakeCount;

            truck.unregister();
            
        }
    }

    /**
     * @override
     */
    public onAgentOut(agent: Agent): void {
        
    }

    /**
     * @override
     */
    public render(renderer: Renderer): void {
        let circle = new Circle(this.transform.clone());
        renderer.draw(circle);

        let font = new Font(this.transform.clone());
        font.text = this.name;
        renderer.draw(font);

        /*
        let font2 = new Font(this.transform.clone());
        font2.transform.position = Vector2.substract(font2.transform.position, new Vector2(0, 2));
        font2.text = JSON.stringify(this.statistics);
        renderer.draw(font2);
*/
        let statisticsForTankBulk = new Font(this.transform.clone());
        statisticsForTankBulk.transform.position = Vector2.substract(statisticsForTankBulk.transform.position, new Vector2(0, 2));
        statisticsForTankBulk.text = '탱크 벌크| 도착 수: ' + this.statistics['tankBulk'][0] + '  | 필수 제동 수: ' + this.statistics['tankBulk'][1] + '  | 간섭 제동 수: ' + this.statistics['tankBulk'][2] + '  | 총 제동 수: ' + this.statistics['tankBulk'][3];
        renderer.draw(statisticsForTankBulk);

        let statisticsForSeaBulk = new Font(this.transform.clone());
        statisticsForSeaBulk.transform.position = Vector2.substract(statisticsForSeaBulk.transform.position, new Vector2(0, 4));
        statisticsForSeaBulk.text = '씨벌크| 도착 수: ' + this.statistics['seaBulk'][0] + '  | 필수 제동 수: ' + this.statistics['seaBulk'][1] + '  | 간섭 제동 수: ' + this.statistics['seaBulk'][2] + '  | 총 제동 수: ' + this.statistics['seaBulk'][3];
        renderer.draw(statisticsForSeaBulk);

        let statisticsForLooseDock = new Font(this.transform.clone());
        statisticsForLooseDock.transform.position = Vector2.substract(statisticsForLooseDock.transform.position, new Vector2(0, 6));
        statisticsForLooseDock.text = '루즈백| 도착 수: ' + this.statistics['looseDock'][0] + '  | 필수 제동 수: ' + this.statistics['looseDock'][1] + '  | 간섭 제동 수: ' + this.statistics['looseDock'][2] + '  | 총 제동 수: ' + this.statistics['looseDock'][3];
        renderer.draw(statisticsForLooseDock);

        let statisticsForPalletDock = new Font(this.transform.clone());
        statisticsForPalletDock.transform.position = Vector2.substract(statisticsForPalletDock.transform.position, new Vector2(0, 8));
        statisticsForPalletDock.text = '팔렛| 도착 수: ' + this.statistics['palletDock'][0] + '| 필수 제동 수: ' + this.statistics['palletDock'][1] + '| 간섭 제동 수: ' + this.statistics['palletDock'][2] + '| 총 제동 수: ' + this.statistics['palletDock'][3];
        renderer.draw(statisticsForPalletDock);
    }

    /**
     * @override
     */
    public onStart(): void {
        
    }

    /**
     * @override
     */
    public onUpdate(): void {
        
    }
}


/**
 * 교차로
 */
export class BulkIntersection extends Intersection {
    public message: string;

    public constructor(environment: Environment) {
        super(environment);

        this.name = 'Intersection';
        this.maxCapacity = 1;
        this.message = '0';

        this.transform.scale = new Vector2(5, 5);
    }

    /**
     * @override
     */
    public onAgentIn(agent: Agent): void {
        if (agent instanceof Truck) {
            let truck = <Truck> agent;

            if (truck.state === Truck.STATE_NONE) {
                this.addOutAgentQueue(0, truck);
            } else if (truck.state === Truck.STATE_LOADED) {
                this.addOutAgentQueue(1, truck);
            }
        }

        this.refreshVehicleList();
    }

    /**
     * @override
     */
    public onAgentOut(agent: Agent): void {
        this.refreshVehicleList();
    }

    /**
     * @override
     */
    public render(renderer: Renderer): void {
        let circle = new Circle(this.transform.clone(), 'rgba(0, 0, 0, 0.1)');
        renderer.draw(circle);

        let font = new Font(this.transform.clone(), 'rgba(0, 0, 0, 1)');
        font.text = '' + this.message;
        renderer.draw(font);
    }

    /**
     * @override
     */
    public onStart(): void {
        
    }

    /**
     * @override
     */
    public onUpdate(): void {
        for (let i = 0; i < this.outPortList.length; i++) {
            this.portList[i] = this.outPortList[i][this.controlTower.getResponse(this, i)];
        }
    }
}

/**
 * 벌크 교차로용 관제탑
 */
export class BulkIntersectionControlTower extends ControlTower {
    private truckCountList: Array<number>;

    public constructor(environment: Environment) {
        super(environment);

        this.name = 'BulkIntersectionControlTower';
        this.truckCountList = new Array<number>();
    }

    /**
     * @override
     */
    public onAgentIn(agent: Agent): void {
        
    }

    /**
     * @override
     */
    public onAgentOut(agent: Agent): void {
        
    }

    /**
     * @override
     */
    public render(renderer: Renderer): void {
        let circle = new Circle(this.transform.clone(), 'rgba(0, 0, 0, 0.1)');
        renderer.draw(circle);

        let font = new Font(this.transform.clone(), 'rgba(0, 0, 0, 1)');
        font.text = this.name;
        renderer.draw(font);
    }

    /**
     * @override
     */
    public onStart(): void {
        
    }

    /**
     * @override
     */
    public onUpdate(): void {
        if (this.referenceFacilityList[1].agentCount > 0) {
            (<Road> this.referenceFacilityList[3]).speedLimit = 0;
        } else {
            (<Road> this.referenceFacilityList[3]).speedLimit = Road.DEFAULT_SPEED;
        }
        
        if (this.referenceFacilityList[5].agentCount > 0) {
            (<Road> this.referenceFacilityList[7]).speedLimit = 0;
        } else {
            (<Road> this.referenceFacilityList[7]).speedLimit = Road.DEFAULT_SPEED;
        }
        
        if (this.referenceFacilityList[9].agentCount > 0) {
            (<Road> this.referenceFacilityList[11]).speedLimit = 0;
        } else {
            (<Road> this.referenceFacilityList[11]).speedLimit = Road.DEFAULT_SPEED;
        }

        this.truckCountList[0] = this.referenceFacilityList[2].agentCount - this.referenceFacilityList[2].maxCapacity;
        this.truckCountList[1] = this.referenceFacilityList[6].agentCount - this.referenceFacilityList[6].maxCapacity;
        this.truckCountList[2] = this.referenceFacilityList[10].agentCount - this.referenceFacilityList[10].maxCapacity;
        this.truckCountList[3] = this.referenceFacilityList[13].agentCount - this.referenceFacilityList[13].maxCapacity;
        
        this.truckCountList[0] += this.referenceFacilityList[0].agentCount;
        this.truckCountList[1] += this.referenceFacilityList[4].agentCount + this.referenceFacilityList[1].agentCount / 3;
        this.truckCountList[2] += this.referenceFacilityList[8].agentCount + this.referenceFacilityList[1].agentCount / 3 + this.referenceFacilityList[5].agentCount / 2;
        this.truckCountList[3] += this.referenceFacilityList[12].agentCount + this.referenceFacilityList[1].agentCount / 3 + this.referenceFacilityList[5].agentCount / 2 + this.referenceFacilityList[9].agentCount;

    }

    /**
     * @override
     */
    public getResponse(intersection: BulkIntersection, port: number): number {
        let intersectionNumber = this.getIntersectionNumber(intersection);

        if (port === 0) {
            intersection.message = '' + this.truckCountList[intersectionNumber];

            if (intersectionNumber === 3) {
                return 0;
            } else {
                let result = intersectionNumber;

                for (let i = result; i < this.truckCountList.length; i++) {

                    if (this.truckCountList[i] < this.truckCountList[intersectionNumber]) {
                        result = i;
                    }
                }

                return result === intersectionNumber ? 0 : 1;
            }
        }


        return 0;
    }
}


/**
 * 교차로
 */
export class DockIntersection extends Intersection {
    public message: string;

    public constructor(environment: Environment) {
        super(environment);

        this.name = 'Intersection';
        this.maxCapacity = 1;
        this.message = '0';

        this.transform.scale = new Vector2(10, 10);
    }

    /**
     * @override
     */
    public onAgentIn(agent: Agent): void {
        if (agent instanceof Truck) {
            let truck = <Truck> agent;

            if (truck.state === Truck.STATE_NONE) {
                this.addOutAgentQueue(0, truck);
            } else if (truck.state === Truck.STATE_LOADED) {
                this.addOutAgentQueue(1, truck);
            }
        }

        this.refreshVehicleList();
    }

    /**
     * @override
     */
    public onAgentOut(agent: Agent): void {
        this.refreshVehicleList();
    }

    /**
     * @override
     */
    public render(renderer: Renderer): void {
        let circle = new Circle(this.transform.clone(), 'rgba(0, 0, 0, 0.1)');
        renderer.draw(circle);

        let font = new Font(this.transform.clone(), 'rgba(0, 0, 0, 1)');
        font.text = this.message;
        renderer.draw(font);
    }

    /**
     * @override
     */
    public onStart(): void {
        
    }

    /**
     * @override
     */
    public onUpdate(): void {
        for (let i = 0; i < this.outPortList.length; i++) {
            //this.portList[i] = this.outPortList[i][1];
            this.portList[i] = this.outPortList[i][this.controlTower.getResponse(this, i)];
        }
    }
}


/**
 * 도크 교차로용 관제탑
 */
export class DockIntersectionControlTower extends ControlTower {
    private truckCountList: Array<number>;
    
    public constructor(environment: Environment) {
        super(environment);

        this.name = 'DockIntersectionControlTower';
        this.truckCountList = new Array<number>();
    }

    /**
     * @override
     */
    public onAgentIn(agent: Agent): void {
        
    }

    /**
     * @override
     */
    public onAgentOut(agent: Agent): void {
        
    }

    /**
     * @override
     */
    public render(renderer: Renderer): void {
        let circle = new Circle(this.transform.clone(), 'rgba(0, 0, 0, 0.1)');
        renderer.draw(circle);

        let font = new Font(this.transform.clone(), 'rgba(0, 0, 0, 1)');
        font.text = this.name;
        renderer.draw(font);
    }

    /**
     * @override
     */
    public onStart(): void {
        
    }

    /**
     * @override
     */
    public onUpdate(): void {
        for (let i = 0; i < this.intersectionList.length - 1; i++) {
            if (this.referenceFacilityList[i * 4 + 3].agentCount > 0) {
                (<Road> this.referenceFacilityList[i * 4 + 1]).speedLimit = 0;
            } else {
                (<Road> this.referenceFacilityList[i * 4 + 1]).speedLimit = Road.DEFAULT_SPEED;
            }
        }

        for (let i = 0; i < this.intersectionList.length - 1; i++) {
            this.truckCountList[i] = this.referenceFacilityList[i * 4].agentCount - this.referenceFacilityList[i * 4].maxCapacity + this.referenceFacilityList[i * 4 + 2].agentCount;
        }

        for (let i = 0; i < this.intersectionList.length - 1; i++) {
            for (let j = i; j < this.intersectionList.length - 1; j++) {
                this.truckCountList[j] += this.referenceFacilityList[i * 4 + 1].agentCount / (this.intersectionList.length - j);
            }
        }
    }

    /**
     * @override
     */
    public getResponse(intersection: BulkIntersection, port: number): number {
        let intersectionNumber = this.getIntersectionNumber(intersection);

        if (port === 0) {
            intersection.message = '' + this.truckCountList[intersectionNumber];

            if (intersectionNumber === this.intersectionList.length - 1) {
                return 0;
            } else {
                let result = intersectionNumber;

                for (let i = result; i < this.truckCountList.length; i++) {

                    if (this.truckCountList[i] < this.truckCountList[intersectionNumber]) {
                        result = i;
                    }
                }
                
                return result === intersectionNumber ? 0 : 1;
            }
        }

        return 0;
    }
}

/**
 * 트럭
 */
export abstract class Truck extends Agent {
    public static readonly WIDTH = 1.85;
    public static readonly LENGTH = 4.3;
    
    public static readonly STATE_NONE = 0;
    public static readonly STATE_LOADED = 1;

    private brakeCount: number;
    protected _necessaryBrakeCount: number;

    public state: number;

    protected vehicle: Vehicle;

    public get velocity(): number {
        return this.vehicle.velocity;
    }

    public get necessaryBrakeCount(): number {
        return this._necessaryBrakeCount;
    }

    public get excessedBrakeCount(): number {
        let tmp = this.brakeCount - this.necessaryBrakeCount;

        return tmp < 0 ? 0 : tmp;
    }

    public constructor(environment: Environment) {
        super(environment);
        
        this.name = 'Truck';

        this.transform.scale = new Vector2(Truck.WIDTH, Truck.LENGTH);
        
        this.brakeCount = 0;
        this._necessaryBrakeCount = 0;
        this.state = Truck.STATE_NONE;

        this.vehicle = new Vehicle();
        this.vehicle.onBrake = () => {
            this.brakeCount++;
        };
        this.addComponent(this.vehicle);
    }

    /**
     * 도로위에 있을 때 할 일들 처리
     * @override
     */
    public onUpdate(): void {
        
    }

    /**
     * @override
     */
    public onEnter(facility: Facility): void {
        if (facility instanceof Road) {
            let road = <Road> facility;
            this.transform.position = road.getPoint(0, 0).clone();
        }
    }

    /**
     * @override
     */
    public onLeave(facility: Facility): void {

    }
}

/**
 * 씨벌크 트럭
 */
export class SeaBulkTruck extends Truck {

    public constructor(environment: Environment) {
        super(environment);
        
        this.name = 'SeaBulkTruck';
        this._necessaryBrakeCount = 9;
    }

    /**
     * @override
     */
    public render(renderer: Renderer): void {
        let quad = new Quad(this.transform.clone(), 'rgba(255, 0, 0, 0.2)');
        renderer.draw(quad);

        let font = new Font(this.transform.clone(), 'rgba(0, 0, 0, 1)');
        font.text = '씨벌크 트럭';
        renderer.draw(font);
    }
    
    /**
     * @override
     */
    public onStart(): void {
        
    }

    /**
     * @override
     */
    public onUpdate(): void {
        super.onUpdate();
        // TODO
    }
}

/**
 * 탱크 벌크
 */
export class TankBulkTruck extends Truck {

    public constructor(environment: Environment) {
        super(environment);
        
        this.name = 'TankBulkTruck';
        this._necessaryBrakeCount = 8;
    }

    /**
     * @override
     */
    public render(renderer: Renderer): void {
        let quad = new Quad(this.transform.clone(), 'rgba(0, 255, 0, 0.2)');
        renderer.draw(quad);

        let font = new Font(this.transform.clone(), 'rgba(0, 0, 0, 1)');
        font.text = '탱크벌크 트럭';
        renderer.draw(font);
    }
    
    /**
     * @override
     */
    public onStart(): void {
        
    }

    /**
     * @override
     */
    public onUpdate(): void {
        super.onUpdate();
        // TODO
    }
}

/**
 * 도크 트럭
 */
export class DockTruck extends Truck {
    public static readonly LOOSE_BAG = 1;
    public static readonly PALLET = 2;

    public readonly type: number;

    public constructor(environment: Environment, type: number) {
        super(environment);
        
        this.name = 'DockTruck';
        this._necessaryBrakeCount = 6;
        this.type = type;
    }

    /**
     * @override
     */
    public render(renderer: Renderer): void {
        let quad = new Quad(this.transform.clone(), this.type == DockTruck.LOOSE_BAG ? 'rgba(0, 0, 255, 0.2)' : 'rgba(0, 128, 255, 0.2)');
        renderer.draw(quad);

        let font = new Font(this.transform.clone(), 'rgba(0, 0, 0, 1)');
        font.text = '도크 트럭 (' + (this.type == DockTruck.LOOSE_BAG ? '루즈백용' : '팔렛용') + ')';
        renderer.draw(font);
    }
    
    /**
     * @override
     */
    public onStart(): void {
        
    }

    /**
     * @override
     */
    public onUpdate(): void {
        super.onUpdate();
        // TODO
    }
}