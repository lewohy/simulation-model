import random from 'random';

import { Facility, Environment, Agent, Road, Intersection, ControlTower } from "../../ts/unit";
import { TruckArrivalData, Wait, Vector2 } from "../../ts/types";
import { Renderer } from "../../ts/renderer";
import { Circle, Font, Quad } from "../../ts/drawer";
import { Vehicle } from '../../ts/component';

/**
 * 디버깅시 각 시설에서 걸리는 시간 비율 조절용
 */
const tmp = 0.001;

/**
 * 트럭 도착지로 들어올 트럭들을 생성하는 장소
 */
export class TruckGenerator extends Facility {
    private truckArrivalTimeDataList: Array<TruckArrivalData>;
    private nextTruckIndex: number;
    private arrivalTruckCount: number;

    private dockTruckRatio: number;
    private bulkTruckRatio: number;
    private looseBackRatio: number;
    private palletRatio: number;
    private seaBulkRatio: number;
    private tankBulkRatio: number;

    public constructor(environment: Environment) {
        super(environment);

        this.name = 'TruckGenerator';
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
        
        
        if (this.nextTruckIndex < this.truckArrivalTimeDataList.length) {
            let nextTruckArrivalTimeData = this.truckArrivalTimeDataList[this.nextTruckIndex];

            if (nextTruckArrivalTimeData.time < this.environment.elapsedTime) {
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
    }

    /**
     * 트럭 도착 데이터 설정
     */
    private setTruckArrivalDataList(): void {
        
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
        
        /*
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
        */
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
        this.maxCapacity = 5 * 1.5;
    }

    /**
     * @override
     */
    public onAgentIn(agent: Agent): void {
        agent.transform.position = this.transform.position.clone();

        this.startCoroutine(this.checkTruck(<Truck> agent));
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
        yield* Wait.forSeconds(this.environment, 50 * 60 * tmp);

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
        this.maxCapacity = Math.ceil(34 * 1.5);
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
    private arrivedTruckCount: number;

    public constructor(environment: Environment) {
        super(environment);

        this.name = 'ExternalDestination';
        this.arrivedTruckCount = 0;
    }

    /**
     * @override
     */
    public onAgentIn(agent: Agent): void {
        agent.unregister();
        this.arrivedTruckCount++;
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

        let font2 = new Font(this.transform.clone());
        font2.transform.position = Vector2.substract(font2.transform.position, new Vector2(0, 2));
        font2.text = '도착한 트럭 수: ' + this.arrivedTruckCount;
        renderer.draw(font2);
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
    public constructor(environment: Environment) {
        super(environment);

        this.name = 'Intersection';
        this.maxCapacity = 1;

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
    
    public constructor(environment: Environment) {
        super(environment);

        this.name = 'BulkIntersectionControlTower';
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
        
    }
    /**
     * @override
     */
    public getResponse(intersection: Intersection, port: number): number {
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

    public currentRoadIndex: number = 0;
    public state = 0;

    protected vehicle: Vehicle;

    public constructor(environment: Environment) {
        super(environment);
        
        this.name = 'Truck';

        this.transform.scale = new Vector2(Truck.WIDTH, Truck.LENGTH);
        
        this.vehicle = new Vehicle();
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

        font = new Font(this.transform.clone(), 'rgba(0, 0, 0, 1)');
        font.text = '필요 제동 거리: ' + Math.floor(this.vehicle.brakingDistance * 10) / 10;
        renderer.draw(font);

        let tmp = this.transform.clone();
        tmp.position.y -= 1.8;
        font = new Font(tmp, 'rgba(0, 0, 0, 1)');
        font.text = '정차해야 할 곳까지 거리: ' + Math.floor(this.vehicle.stopDistance);
        renderer.draw(font);

        tmp = this.transform.clone();
        tmp.position.y -= 3.6;
        font = new Font(tmp, 'rgba(0, 0, 0, 1)');
        font.text = 'Acceleration: ' + this.vehicle.acceleration;
        renderer.draw(font);

        tmp = this.transform.clone();
        tmp.position.y -= 5.4;
        font = new Font(tmp, 'rgba(0, 0, 0, 1)');
        font.text = 'Deceleration: ' + this.vehicle.deceleration;
        renderer.draw(font);

        tmp = this.transform.clone();
        tmp.position.y -= 7.2;
        font = new Font(tmp, 'rgba(0, 0, 0, 1)');
        font.text = 'Velocity: ' + Math.floor(this.vehicle.velocity * 10) / 10;
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

        font = new Font(this.transform.clone(), 'rgba(0, 0, 0, 1)');
        font.text = '필요 제동 거리: ' + Math.floor(this.vehicle.brakingDistance * 10) / 10;
        renderer.draw(font);

        let tmp = this.transform.clone();
        tmp.position.y -= 1.8;
        font = new Font(tmp, 'rgba(0, 0, 0, 1)');
        font.text = '정차해야 할 곳까지 거리: ' + Math.floor(this.vehicle.stopDistance);
        renderer.draw(font);

        tmp = this.transform.clone();
        tmp.position.y -= 3.6;
        font = new Font(tmp, 'rgba(0, 0, 0, 1)');
        font.text = 'Acceleration: ' + this.vehicle.acceleration;
        renderer.draw(font);

        tmp = this.transform.clone();
        tmp.position.y -= 5.4;
        font = new Font(tmp, 'rgba(0, 0, 0, 1)');
        font.text = 'Deceleration: ' + this.vehicle.deceleration;
        renderer.draw(font);

        tmp = this.transform.clone();
        tmp.position.y -= 7.2;
        font = new Font(tmp, 'rgba(0, 0, 0, 1)');
        font.text = 'Velocity: ' + Math.floor(this.vehicle.velocity * 10) / 10;
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