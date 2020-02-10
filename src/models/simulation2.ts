import random from 'random';

import { Environment, Facility, Agent, Road } from "../ts/unit";
import { Renderer } from "../ts/renderer";
import { Shape, Circle, Font, Quad, Path } from "../ts/drawer";
import { Vector2, TruckArrivalData, Wait } from "../ts/types";
import { Dynamics, Vehicle } from '../ts/component';
import { Model } from '../ts/model';

export class SimulationModel2 extends Model {
    private truckGenerator: TruckGenerator;
    private truckDestination: TruckDestination;
    private watingPlace: WaitingPlace;
    private inGateway: InGateway;
    private linerPreparationPlace: SeabulkTruckLinerPreparationPlace;
    private weightMesaurementPlace1: WeightMesaurementPlace;
    private bulkProductLoadingPlace: BulkProductLoadingPlace;
    private dockProductLoadingPlace: DockProductLoadingPlace;
    private weightMesaurementPlace2: WeightMesaurementPlace;
    private outGateway: OutGateway;
    private externalDestination: ExternalDestination;

    public constructor(element: HTMLCanvasElement) {
        super(element);

        this.environment.timeScale = 50;

        this.setup();
    }

    /**
     * @override
     */
    protected setup(): void {
        this.truckGenerator = new TruckGenerator(this.environment);
        this.truckGenerator.name = '트럭 생성기';
        this.truckGenerator.transform.position = new Vector2(300, -50);

        this.truckDestination = new TruckDestination(this.environment);
        this.truckDestination.name = '트럭 도착지';
        this.truckDestination.transform.position = new Vector2(200, 0);

        this.watingPlace = new WaitingPlace(this.environment);
        this.watingPlace.name = '대기 장소';
        this.watingPlace.transform.position = new Vector2(150, 25);

        this.inGateway = new InGateway(this.environment);
        this.inGateway.name = '입구 게이트웨이';
        this.inGateway.transform.position = new Vector2(30, 0);

        this.linerPreparationPlace = new SeabulkTruckLinerPreparationPlace(this.environment);
        this.linerPreparationPlace.name = '씨벌크용 라이너 준비실';
        this.linerPreparationPlace.transform.position = new Vector2(225, 100);

        this.weightMesaurementPlace1 = new WeightMesaurementPlace(this.environment);
        this.weightMesaurementPlace1.name = '무게 측정실 1';
        this.weightMesaurementPlace1.transform.position = new Vector2(200, 150);

        this.bulkProductLoadingPlace = new BulkProductLoadingPlace(this.environment);
        this.bulkProductLoadingPlace.name = '벌크 제품 적재실';
        this.bulkProductLoadingPlace.transform.position = new Vector2(0, 200);

        this.dockProductLoadingPlace = new DockProductLoadingPlace(this.environment);
        this.dockProductLoadingPlace.name = '도크 제품 적재실';
        this.dockProductLoadingPlace.transform.position = new Vector2(-100, 100);

        this.weightMesaurementPlace2 = new WeightMesaurementPlace(this.environment);
        this.weightMesaurementPlace2.name = '무게 측정실 2';
        this.weightMesaurementPlace2.transform.position = new Vector2(-200, 150);

        this.outGateway = new OutGateway(this.environment);
        this.outGateway.name = '출구 게이트웨이';
        this.outGateway.transform.position = new Vector2(10, 0);

        this.externalDestination = new ExternalDestination(this.environment);
        this.externalDestination.name = '외부 목적지';
        this.externalDestination.maxCapacity = 10000;
        this.externalDestination.transform.position = new Vector2(-200, -50);

        let tg2td = new Road(this.environment);
        {
            let startPoint = this.truckGenerator.getSidePosition(Math.PI);
            let endPoint = this.truckDestination.getSidePosition(Math.PI * 3 / 2);

            tg2td.addPoint(startPoint);
            tg2td.addPoint(new Vector2(endPoint.x + 10, startPoint.y));
            tg2td.addPoint(new Vector2(endPoint.x, startPoint.y + 10));
            tg2td.addPoint(endPoint);
            tg2td.portList.push(this.truckDestination);
        }

        let td2wp = new Road(this.environment);
        {
            let startPoint = this.truckDestination.getSidePosition(Math.PI / 2);
            let endPoint = this.watingPlace.getSidePosition(0);

            td2wp.addPoint(startPoint);

            td2wp.addPoint(new Vector2(startPoint.x, endPoint.y - 10));
            td2wp.addPoint(new Vector2(startPoint.x - 10, endPoint.y));

            td2wp.addPoint(endPoint);
            td2wp.portList.push(this.watingPlace);
        }

        let wp2ig = new Road(this.environment);
        {
            let startPoint = this.watingPlace.getSidePosition(Math.PI);
            let endPoint = this.inGateway.getSidePosition(Math.PI * 3 / 2);

            wp2ig.addPoint(startPoint);

            wp2ig.addPoint(new Vector2((startPoint.x + endPoint.x) / 2 + 10, startPoint.y));
            wp2ig.addPoint(new Vector2((startPoint.x + endPoint.x) / 2, startPoint.y - 10));

            wp2ig.addPoint(new Vector2((startPoint.x + endPoint.x) / 2, endPoint.y - 20 + 10));
            wp2ig.addPoint(new Vector2((startPoint.x + endPoint.x) / 2 - 10, endPoint.y - 20));

            wp2ig.addPoint(new Vector2(endPoint.x + 10, endPoint.y - 20));
            wp2ig.addPoint(new Vector2(endPoint.x, endPoint.y - 20 + 10));
            
            wp2ig.addPoint(endPoint);
            wp2ig.portList.push(this.inGateway);
        }

        let ig2wmp1 = new Road(this.environment);
        {
            let startPoint = this.inGateway.getSidePosition(Math.PI / 2);
            let endPoint = Vector2.substract(this.weightMesaurementPlace1.getSidePosition(Math.PI * 3 / 2), new Vector2(Road.LANE_WIDTH * 0.6, 0));

            ig2wmp1.addPoint(startPoint);

            ig2wmp1.addPoint(new Vector2(startPoint.x, startPoint.y + 50 - 10));
            ig2wmp1.addPoint(new Vector2(startPoint.x + 10, startPoint.y + 50));

            ig2wmp1.addPoint(new Vector2(endPoint.x - 10, startPoint.y + 50));
            ig2wmp1.addPoint(new Vector2(endPoint.x, startPoint.y + 50 + 10));

            ig2wmp1.addPoint(endPoint);
            ig2wmp1.portList.push(this.weightMesaurementPlace1);
        }

        let ig2lpp = new Road(this.environment);
        {
            let startPoint = Vector2.add(this.inGateway.getSidePosition(Math.PI / 2), new Vector2(Road.LANE_WIDTH * 1.5, 0));
            let endPoint = this.linerPreparationPlace.getSidePosition(Math.PI * 3 / 2);

            ig2lpp.addPoint(startPoint);

            ig2lpp.addPoint(new Vector2(startPoint.x, startPoint.y + 50 - Road.LANE_WIDTH * 1.5 - 10));
            ig2lpp.addPoint(new Vector2(startPoint.x + 10, startPoint.y + 50 - Road.LANE_WIDTH * 1.5));

            ig2lpp.addPoint(new Vector2(endPoint.x - 10, startPoint.y + 50 - Road.LANE_WIDTH * 1.5));
            ig2lpp.addPoint(new Vector2(endPoint.x, startPoint.y + 50 - Road.LANE_WIDTH * 1.5 + 10));

            ig2lpp.addPoint(endPoint);
            ig2lpp.portList.push(this.linerPreparationPlace);
        }

        let ig2dpp = new Road(this.environment);
        {
            let startPoint = Vector2.substract(this.inGateway.getSidePosition(Math.PI / 2), new Vector2(Road.LANE_WIDTH * 1.5, 0));
            let endPoint = this.dockProductLoadingPlace.getSidePosition(0);

            ig2dpp.addPoint(startPoint);

            ig2dpp.addPoint(new Vector2(startPoint.x, endPoint.y - 10));
            ig2dpp.addPoint(new Vector2(startPoint.x - 10, endPoint.y));
            
            ig2dpp.addPoint(endPoint);
            ig2dpp.portList.push(this.dockProductLoadingPlace);
        }

        let dpp2og = new Road(this.environment);
        {
            let startPoint = this.dockProductLoadingPlace.getSidePosition(Math.PI);
            let endPoint = Vector2.add(this.outGateway.getSidePosition(Math.PI / 2), new Vector2(Road.LANE_WIDTH * 0.75, 0));

            dpp2og.addPoint(startPoint);

            dpp2og.addPoint(new Vector2(startPoint.x - 20 + 10, startPoint.y));
            dpp2og.addPoint(new Vector2(startPoint.x - 20, startPoint.y - 10));

            dpp2og.addPoint(new Vector2(startPoint.x - 20, endPoint.y + 50 + Road.LANE_WIDTH * 1.5 + 10));
            dpp2og.addPoint(new Vector2(startPoint.x - 20 + 10, endPoint.y + 50 + Road.LANE_WIDTH * 1.5));

            dpp2og.addPoint(new Vector2(endPoint.x - 10, endPoint.y + 50 + Road.LANE_WIDTH * 1.5));
            dpp2og.addPoint(new Vector2(endPoint.x, endPoint.y + 50 + Road.LANE_WIDTH * 1.5 - 10));

            dpp2og.addPoint(endPoint);
            dpp2og.portList.push(this.outGateway);
        }

        let lpp2wmp1 = new Road(this.environment);
        {
            let startPoint = this.linerPreparationPlace.getSidePosition(Math.PI / 2);
            let endPoint = Vector2.add(this.weightMesaurementPlace1.getSidePosition(Math.PI * 3 / 2), new Vector2(Road.LANE_WIDTH * 0.75, 0));

            lpp2wmp1.addPoint(startPoint);
            lpp2wmp1.addPoint(new Vector2(startPoint.x, startPoint.y + ((endPoint.y - startPoint.y) / 3)));
            lpp2wmp1.addPoint(new Vector2(endPoint.x, startPoint.y + ((endPoint.y - startPoint.y) * 2 / 3)));
            lpp2wmp1.addPoint(endPoint);
            lpp2wmp1.portList.push(this.weightMesaurementPlace1);
        }

        let wmp12bpp = new Road(this.environment);
        {
            let startPoint = this.weightMesaurementPlace1.getSidePosition(Math.PI / 2);
            let endPoint = this.bulkProductLoadingPlace.getSidePosition(0);

            wmp12bpp.addPoint(startPoint);

            wmp12bpp.addPoint(new Vector2(startPoint.x, endPoint.y - 10));
            wmp12bpp.addPoint(new Vector2(startPoint.x - 10, endPoint.y));

            wmp12bpp.addPoint(endPoint);
            wmp12bpp.portList.push(this.bulkProductLoadingPlace);
        }

        let bpp2wmp2 = new Road(this.environment);
        {
            let startPoint = this.bulkProductLoadingPlace.getSidePosition(Math.PI);
            let endPoint = this.weightMesaurementPlace2.getSidePosition(Math.PI / 2);

            bpp2wmp2.addPoint(startPoint);

            bpp2wmp2.addPoint(new Vector2(endPoint.x + 10, startPoint.y));
            bpp2wmp2.addPoint(new Vector2(endPoint.x, startPoint.y - 10));

            bpp2wmp2.addPoint(endPoint);
            bpp2wmp2.portList.push(this.weightMesaurementPlace2);
        }

        let wmp22og = new Road(this.environment);
        {
            let startPoint = this.weightMesaurementPlace2.getSidePosition(Math.PI * 3 / 2);
            let endPoint = Vector2.substract(this.outGateway.getSidePosition(Math.PI / 2), new Vector2(Road.LANE_WIDTH * 0.75, 0));

            wmp22og.addPoint(startPoint);

            wmp22og.addPoint(new Vector2(startPoint.x, endPoint.y + 50 + 10));
            wmp22og.addPoint(new Vector2(startPoint.x + 10, endPoint.y + 50));

            wmp22og.addPoint(new Vector2(endPoint.x - 10, endPoint.y + 50));
            wmp22og.addPoint(new Vector2(endPoint.x, endPoint.y + 50 - 10));

            wmp22og.addPoint(endPoint);
            wmp22og.portList.push(this.outGateway);
        }

        let og2ed = new Road(this.environment);
        {
            let startPoint = this.outGateway.getSidePosition(Math.PI * 3 / 2);
            let endPoint = this.externalDestination.getSidePosition(0);

            og2ed.addPoint(startPoint);

            og2ed.addPoint(new Vector2(startPoint.x, endPoint.y + 10));
            og2ed.addPoint(new Vector2(startPoint.x - 10, endPoint.y));

            og2ed.addPoint(endPoint);
            og2ed.portList.push(this.externalDestination);
        }

        this.truckGenerator.portList.push(tg2td);
        this.truckDestination.portList.push(td2wp);
        this.watingPlace.portList.push(wp2ig);
        this.inGateway.portList.push(ig2dpp);
        this.inGateway.portList.push(ig2wmp1);
        this.inGateway.portList.push(ig2lpp);
        this.linerPreparationPlace.portList.push(lpp2wmp1);
        this.weightMesaurementPlace1.portList.push(wmp12bpp);
        this.bulkProductLoadingPlace.portList.push(bpp2wmp2);
        this.dockProductLoadingPlace.portList.push(dpp2og);
        this.weightMesaurementPlace2.portList.push(wmp22og);
        this.outGateway.portList.push(og2ed);

        this.truckGenerator.register();
        this.truckDestination.register();
        this.watingPlace.register();
        this.inGateway.register();
        this.linerPreparationPlace.register();
        this.weightMesaurementPlace1.register();
        this.bulkProductLoadingPlace.register();
        this.dockProductLoadingPlace.register();
        this.weightMesaurementPlace2.register();
        this.outGateway.register();
        this.externalDestination.register();

        tg2td.register();
        td2wp.register();
        wp2ig.register();
        ig2wmp1.register();
        ig2lpp.register();
        ig2dpp.register();
        dpp2og.register();
        lpp2wmp1.register();
        wmp12bpp.register();
        bpp2wmp2.register();
        wmp22og.register();
        og2ed.register();
    }
}

/**
 * 트럭 도착지로 들어올 트럭들을 생성하는 장소
 */
class TruckGenerator extends Facility {
    private truckArrivalTimeDataList: Array<TruckArrivalData>;
    private nextTruckIndex: number;

    public constructor(environment: Environment) {
        super(environment);

        this.name = 'TruckGenerator';
        this.truckArrivalTimeDataList = new Array<TruckArrivalData>();
        this.nextTruckIndex = 0;
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
        let dockTruckRatio = 0.8;
        let bulkTruckRatio = 0.2;

        let looseBackRatio = 0.15;
        let palletRatio = 0.85;

        let seaBulkRatio = 0.15;
        let tankBulkRatio = 0.85;
        
        let duration = 12 * 60 * 60;
        let averageArrivalCount = 591;
        let averageDelay = duration / averageArrivalCount;
        let nextDelay = random.exponential(1 / averageDelay);

        let arrivalTimeList = new Array<number>();
        let arrivalTimeDataList = new Array<TruckArrivalData>();

        for (let time = nextDelay(); time < duration; time += nextDelay()) {
            arrivalTimeList.push(time);
        }
        console.log(arrivalTimeList.length);

        let arrivalTruckCount = arrivalTimeList.length;
        
        for (let i = 0; i < Math.round(arrivalTruckCount * dockTruckRatio * looseBackRatio); i++) {
            let time = arrivalTimeList.splice(Math.floor(Math.random() * arrivalTimeList.length - 1), 1)[0];
            
            let timeData = new TruckArrivalData(time, TruckArrivalData.TRUCK_KIND_DOKE_LOOSE_BAG);
            arrivalTimeDataList.push(timeData);
        }
        
        for (let i = 0; i < Math.round(arrivalTruckCount * dockTruckRatio * palletRatio); i++) {
            let time = arrivalTimeList.splice(Math.floor(Math.random() * arrivalTimeList.length), 1)[0];
            
            let timeData = new TruckArrivalData(time, TruckArrivalData.TRUCK_KIND_DOKE_PALLET);
            arrivalTimeDataList.push(timeData);
        }
        
        for (let i = 0; i < Math.round(arrivalTruckCount * bulkTruckRatio * tankBulkRatio); i++) {
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

        console.log(this.truckArrivalTimeDataList.length);
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
                this.portList[0].appendAgent(truck);

                nextTruckArrivalTimeData.isArrived = true;
                this.nextTruckIndex++;
            }
        }
        
    }
}

/**
 * 트럭 도착지
 */
class TruckDestination extends Facility {
    public constructor(environment: Environment) {
        super(environment);

        this.name = 'TruckDestination';
    }

    /**
     * 
     * @override
     */
    public onAgentIn(agent: Agent): void {
        let randomDeltaPosition = new Vector2(Math.random() * this.transform.scale.x - this.transform.scale.x / 2, Math.random() * this.transform.scale.y - this.transform.scale.y / 2);
        //agent.transform.position = Vector2.add(this.transform.position, randomDeltaPosition);
        //agent.transform.rotation = Math.random() * 2 * Math.PI;

        this.portList[0].appendAgent(agent);
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

class WaitingPlace extends Facility {
    public constructor(environment: Environment) {
        super(environment);

        this.name = 'WaitingPlace';
    }

    /**
     * @override
     */
    public onAgentIn(agent: Agent): void {
        this.portList[0].appendAgent(agent);
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

class InGateway extends Facility {
    public constructor(environment: Environment) {
        super(environment);

        this.name = 'Gateway';
        this.maxCapacity = 3;
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
        yield* Wait.forSeconds(this.environment, 5 * 60);
        
        if (truck instanceof DockTruck) {
            this.portList[0].appendAgent(truck);
        } else if (truck instanceof TankBulkTruck) {
            this.portList[1].appendAgent(truck);
        } else if (truck instanceof SeaBulkTruck) {
            this.portList[2].appendAgent(truck);
        }
    }
}

class OutGateway extends Facility {
    public constructor(environment: Environment) {
        super(environment);

        this.name = 'Gateway';
    }

    /**
     * @override
     */
    public onAgentIn(agent: Agent): void {
        this.portList[0].appendAgent(agent);
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

class SeabulkTruckLinerPreparationPlace extends Facility {
    public constructor(environment: Environment) {
        super(environment);

        this.name = 'LinerPreparationPlace';
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
        yield* Wait.forSeconds(this.environment, 15 * 60);

        this.portList[0].appendAgent(truck);
    }
}

class WeightMesaurementPlace extends Facility {
    public constructor(environment: Environment) {
        super(environment);

        this.name = 'WeightMesaurementPlace';
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
        yield* Wait.forSeconds(this.environment, 2 * 60);

        this.portList[0].appendAgent(truck);
    }
}

class BulkProductLoadingPlace extends Facility {
    public constructor(environment: Environment) {
        super(environment);

        this.name = 'BulkProductLoadingPlace';
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

        this.portList[0].appendAgent(truck);
    }
}

class DockProductLoadingPlace extends Facility {
    public constructor(environment: Environment) {
        super(environment);

        this.name = 'DockProductLoadingPlace';
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

        this.portList[0].appendAgent(truck);
    }
}

class ExternalDestination extends Facility {
    private arrivedTruckCount: number;

    public constructor(environment: Environment) {
        super(environment);

        this.name = this.name;
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

abstract class Truck extends Agent {
    public static readonly WIDTH = 1.85;
    public static readonly LENGTH = 4.3;

    public currentRoadIndex: number = 0;

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

class SeaBulkTruck extends Truck {

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

class TankBulkTruck extends Truck {

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

class DockTruck extends Truck {
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