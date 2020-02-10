import random from 'random';

import { Environment, Facility, Agent, Road } from "../ts/unit";
import { Renderer } from "../ts/renderer";
import { Shape, Circle, Font, Quad, Path } from "../ts/drawer";
import { Vector2, TruckArrivalData, Wait } from "../ts/types";
import { Dynamics, Vehicle } from '../ts/component';
import { Model } from '../ts/model';

export class SimulationModel extends Model {
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
        this.truckGenerator.transform.position = new Vector2(-100, 0);

        this.truckDestination = new TruckDestination(this.environment);
        this.truckDestination.name = '트럭 도착지';
        this.truckDestination.transform.position = new Vector2(0, 0);

        this.watingPlace = new WaitingPlace(this.environment);
        this.watingPlace.name = '대기 장소';
        this.watingPlace.transform.position = new Vector2(100, 0);

        this.inGateway = new InGateway(this.environment);
        this.inGateway.name = '입구 게이트웨이';
        this.inGateway.transform.position = new Vector2(200, 0);

        this.linerPreparationPlace = new SeabulkTruckLinerPreparationPlace(this.environment);
        this.linerPreparationPlace.name = '씨벌크용 라이너 준비실';
        this.linerPreparationPlace.transform.position = new Vector2(300, 50);

        this.weightMesaurementPlace1 = new WeightMesaurementPlace(this.environment);
        this.weightMesaurementPlace1.name = '무게 측정실 1';
        this.weightMesaurementPlace1.transform.position = new Vector2(400, 0);

        this.bulkProductLoadingPlace = new BulkProductLoadingPlace(this.environment);
        this.bulkProductLoadingPlace.name = '벌크 제품 적재실';
        this.bulkProductLoadingPlace.transform.position = new Vector2(500, 0);

        this.dockProductLoadingPlace = new DockProductLoadingPlace(this.environment);
        this.dockProductLoadingPlace.name = '도크 제품 적재실';
        this.dockProductLoadingPlace.transform.position = new Vector2(500, -50);

        this.weightMesaurementPlace2 = new WeightMesaurementPlace(this.environment);
        this.weightMesaurementPlace2.name = '무게 측정실 2';
        this.weightMesaurementPlace2.transform.position = new Vector2(600, 0);

        this.outGateway = new OutGateway(this.environment);
        this.outGateway.name = '출구 게이트웨이';
        this.outGateway.transform.position = new Vector2(700, 0);

        this.externalDestination = new ExternalDestination(this.environment);
        this.externalDestination.name = '외부 목적지';
        this.externalDestination.maxCapacity = 10000;
        this.externalDestination.transform.position = new Vector2(800, 0);

        // 트럭 도착지 -> 대기실
        let td2wp = new Road(this.environment);
        {
            td2wp.addPoint(this.truckDestination.getSidePosition(0));
            td2wp.addPoint(this.watingPlace.getSidePosition(Math.PI));
            td2wp.portList.push(this.watingPlace);
        }

        // 대기실 -> 게이트웨이
        let wp2ig = new Road(this.environment);
        {
            wp2ig.addPoint(this.watingPlace.getSidePosition(0));
            wp2ig.addPoint(this.inGateway.getSidePosition(Math.PI));
            wp2ig.portList.push(this.inGateway);
        }

        // 게이트웨이 -> 벌크용 무게 측정실1
        let ig2wmp1 = new Road(this.environment);
        {
            ig2wmp1.addPoint(this.inGateway.getSidePosition(0));
            ig2wmp1.addPoint(this.weightMesaurementPlace1.getSidePosition(Math.PI));
            ig2wmp1.portList.push(this.weightMesaurementPlace1);
        }

        // 벌크용 무게 측정실1 -> 벌크 제품 적재실
        let wmp12bplp = new Road(this.environment);
        {
            wmp12bplp.addPoint(this.weightMesaurementPlace1.getSidePosition(0));
            wmp12bplp.addPoint(this.bulkProductLoadingPlace.getSidePosition(Math.PI));
            wmp12bplp.portList.push(this.bulkProductLoadingPlace);
        }

        // 벌크 제품 적재실 -> 벌크용 무게 측정실2
        let bplp2wmp2 = new Road(this.environment);
        {
            bplp2wmp2.addPoint(this.bulkProductLoadingPlace.getSidePosition(0));
            bplp2wmp2.addPoint(this.weightMesaurementPlace2.getSidePosition(Math.PI));
            bplp2wmp2.portList.push(this.weightMesaurementPlace2);
        }

        // 벌크용 무게 측정실2 -> 출구 게이트웨이
        let wmp22og = new Road(this.environment);
        {
            wmp22og.addPoint(this.weightMesaurementPlace2.getSidePosition(0));
            wmp22og.addPoint(this.outGateway.getSidePosition(Math.PI));
            wmp22og.portList.push(this.outGateway);
        }
        // 출구 게이트웨이 -> 외부 목적지
        let og2ed = new Road(this.environment);
        {
            og2ed.addPoint(this.outGateway.getSidePosition(0));
            og2ed.addPoint(this.externalDestination.getSidePosition(Math.PI));
            og2ed.portList.push(this.externalDestination);
        }
        ////////////////////////////////////////////////////////////

        // 게이트웨이 -> 씨벌크용 라이너 준비실
        let ig2lpp = new Road(this.environment);
        {
            let tmp1 = Vector2.add(this.inGateway.getSidePosition(0), new Vector2(0, 5));
            let tmp2 = this.linerPreparationPlace.getSidePosition(Math.PI);
            let tmp3 = Vector2.substract(tmp2, tmp1);
            ig2lpp.addPoint(tmp1);
            ig2lpp.addPoint(new Vector2(tmp1.x + tmp3.x / 3, tmp1.y));
            ig2lpp.addPoint(new Vector2(tmp1.x + tmp3.x / 3 * 2, tmp2.y));
            ig2lpp.addPoint(tmp2);
            ig2lpp.portList.push(this.linerPreparationPlace);
        }

        // 씨벌크용 라이너 준비실 -> 벌크용 무게 측정실1
        let lpp2wmp1 = new Road(this.environment);
        {
            let tmp1 = this.linerPreparationPlace.getSidePosition(0);
            let tmp2 = Vector2.add(this.weightMesaurementPlace1.getSidePosition(Math.PI), new Vector2(0, 5));
            let tmp3 = Vector2.substract(tmp2, tmp1);
            lpp2wmp1.addPoint(tmp1);
            lpp2wmp1.addPoint(new Vector2(tmp1.x + tmp3.x / 3, tmp1.y));
            lpp2wmp1.addPoint(new Vector2(tmp1.x + tmp3.x / 3 * 2, tmp2.y));
            lpp2wmp1.addPoint(tmp2);
            lpp2wmp1.portList.push(this.weightMesaurementPlace1);
        }

        ////////////////////////////////////////////////////////////

        // 입구 게이트웨이 -> 도크용 제품 적재실
        let ig2dplp = new Road(this.environment);
        {
            let tmp1 = Vector2.add(this.inGateway.getSidePosition(0), new Vector2(0, -5));
            let tmp2 = this.dockProductLoadingPlace.getSidePosition(Math.PI);
            let tmp3 = Vector2.substract(tmp2, tmp1);
            ig2dplp.addPoint(tmp1);
            ig2dplp.addPoint(new Vector2(tmp1.x + tmp3.x / 3, tmp1.y));
            ig2dplp.addPoint(new Vector2(tmp1.x + tmp3.x / 3 * 2, tmp2.y));
            ig2dplp.addPoint(tmp2);
            ig2dplp.portList.push(this.dockProductLoadingPlace);
        }

        // 도크용 제품 적재실 -> 출구 게이트웨이
        let dplp2og = new Road(this.environment);
        {
            let tmp1 = this.dockProductLoadingPlace.getSidePosition(0);
            let tmp2 = Vector2.add(this.outGateway.getSidePosition(Math.PI), new Vector2(0, -5));
            let tmp3 = Vector2.substract(tmp2, tmp1);
            dplp2og.addPoint(tmp1);
            dplp2og.addPoint(new Vector2(tmp1.x + tmp3.x / 3, tmp1.y));
            dplp2og.addPoint(new Vector2(tmp1.x + tmp3.x / 3 * 2, tmp2.y));
            dplp2og.addPoint(tmp2);
            dplp2og.portList.push(this.outGateway);
        }

        this.truckGenerator.portList.push(this.truckDestination);
        this.truckDestination.portList.push(td2wp);
        this.watingPlace.portList.push(wp2ig);
        this.inGateway.portList.push(ig2lpp);
        this.inGateway.portList.push(ig2wmp1);
        this.inGateway.portList.push(ig2dplp);
        this.linerPreparationPlace.portList.push(lpp2wmp1);
        this.weightMesaurementPlace1.portList.push(wmp12bplp);
        this.bulkProductLoadingPlace.portList.push(bplp2wmp2);
        this.weightMesaurementPlace2.portList.push(wmp22og);
        this.dockProductLoadingPlace.portList.push(dplp2og);
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

        td2wp.register();
        wp2ig.register();
        ig2wmp1.register();
        wmp12bplp.register();
        bplp2wmp2.register();
        wmp22og.register();
        og2ed.register();
        ig2lpp.register();
        lpp2wmp1.register();
        ig2dplp.register();
        dplp2og.register();
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
        this.transform.scale = new Vector2(1, 1);

        /*
        let truck = new DockTruck(this.environment);
        truck.register();
        this.portList[0].appendAgent(truck);
        */
        
        for (let i = 0; i < 162; i++) {
            let timeData = new TruckArrivalData(Math.random() * 43200, TruckArrivalData.TRUCK_KIND_SEA_BULK);
            this.truckArrivalTimeDataList.push(timeData);
        }

        for (let i = 0; i < 70; i++) {
            let timeData = new TruckArrivalData(Math.random() * 43200, TruckArrivalData.TRUCK_KIND_TANK_BULK);
            this.truckArrivalTimeDataList.push(timeData);
        }

        for (let i = 0; i < 54; i++) {
            let timeData = new TruckArrivalData(Math.random() * 43200, TruckArrivalData.TRUCK_KIND_DOKE_LOOSE_BAG);
            this.truckArrivalTimeDataList.push(timeData);
        }

        for (let i = 0; i < 304; i++) {
            let timeData = new TruckArrivalData(Math.random() * 43200, TruckArrivalData.TRUCK_KIND_DOKE_PALLET);
            this.truckArrivalTimeDataList.push(timeData);
        }

        this.truckArrivalTimeDataList = this.truckArrivalTimeDataList.sort((a, b) => {
            return a.time - b.time;
        });
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
        
        if (truck instanceof SeaBulkTruck) {
            this.portList[0].appendAgent(truck);
        } else if (truck instanceof TankBulkTruck) {
            this.portList[1].appendAgent(truck);
        } else if (truck instanceof DockTruck) {
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
    public constructor(environment: Environment) {
        super(environment);

        this.name = this.name;
    }

    /**
     * @override
     */
    public onAgentIn(agent: Agent): void {
        agent.transform.position = this.transform.position.clone();
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

        let font2 = new Font(this.transform.clone());
        font2.transform.position = Vector2.substract(font2.transform.position, new Vector2(0, 10));
        font2.text = '도착한 트럭 수: ' + this.agentCount;
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