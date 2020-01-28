import random from 'random';

import { Environment, Facility, Agent } from "./unit"
import { Renderer } from "./renderer";
import { Shape, Circle, CanvasDelegator, Font, Quad, Path } from "./drawer";
import { Vector2, TruckArrivalData } from "./types";
import { Dynamics } from './component';

export class Model {
    public readonly environment: Environment;
    public readonly renderer: Renderer;

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

    public constructor(elemeht: HTMLCanvasElement) {
        this.environment = new Environment();
        this.environment.timeScale = 100;
        this.renderer = new Renderer(this.environment, elemeht);

        this.setup();
    }

    private setup(): void {
        this.truckGenerator = new TruckGenerator(this.environment);
        this.truckGenerator.transform.position = new Vector2(-20, 0);

        this.truckDestination = new TruckDestination(this.environment);
        this.truckDestination.transform.position = new Vector2(0, 0);

        this.watingPlace = new WaitingPlace(this.environment);
        this.watingPlace.transform.position = new Vector2(100, 0);

        this.inGateway = new InGateway(this.environment);
        this.inGateway.transform.position = new Vector2(200, 0);

        this.linerPreparationPlace = new SeabulkTruckLinerPreparationPlace(this.environment);
        this.linerPreparationPlace.transform.position = new Vector2(300, 50);

        this.weightMesaurementPlace1 = new WeightMesaurementPlace(this.environment);
        this.weightMesaurementPlace1.transform.position = new Vector2(400, 0);

        this.bulkProductLoadingPlace = new BulkProductLoadingPlace(this.environment);
        this.bulkProductLoadingPlace.transform.position = new Vector2(500, 0);

        this.dockProductLoadingPlace = new DockProductLoadingPlace(this.environment);
        this.dockProductLoadingPlace.transform.position = new Vector2(500, -50);

        this.weightMesaurementPlace2 = new WeightMesaurementPlace(this.environment);
        this.weightMesaurementPlace2.transform.position = new Vector2(600, 0);

        this.outGateway = new OutGateway(this.environment);
        this.outGateway.transform.position = new Vector2(700, 0);

        this.externalDestination = new ExternalDestination(this.environment);
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
            let tmp1 = Vector2.add(this.inGateway.getSidePosition(0), new Vector2(0, 3));
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
            let tmp2 = Vector2.add(this.weightMesaurementPlace1.getSidePosition(Math.PI), new Vector2(0, 3));
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
            let tmp1 = Vector2.add(this.inGateway.getSidePosition(0), new Vector2(0, -3));
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
            let tmp2 = Vector2.add(this.outGateway.getSidePosition(Math.PI), new Vector2(0, -3));
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
 * 트럭이 지나다닐 길
 */
class Road extends Facility {
    public static readonly LANE_WIDTH = 2;

    private readonly pointList: Array<Vector2>;
    public forwardLaneCount = 1;
    public backwardLaneCount = 1;

    public constructor(environment: Environment) {
        super(environment);

        this._name = 'Road';
        this.pointList = new Array<Vector2>();
        this.transform.scale = new Vector2(Road.LANE_WIDTH, Road.LANE_WIDTH);
    }

    /**
     * @override
     */
    public onAgentIn(agent: Agent): void {
        agent.transform.position = this.pointList[0];
    }
    
    /**
     * @override
     */
    public onAgentOut(agent: Agent): void {
        
    }

    /**
     * @override
     */
    public render(canvasDelegator: CanvasDelegator): void {
        let path = new Path(this.transform, 'rgba(128, 255, 255, 0.4)');
        path.width = Road.LANE_WIDTH;
        this.pointList.forEach(point => {
            path.pointList.push(point);
        });

        canvasDelegator.draw(path);
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
     * point 추가
     * @param point 
     */
    public addPoint(position: Vector2): void {
        this.pointList.push(position);

        let minX: number = position.x;
        let minY: number = position.y;
        let maxX: number = position.x;
        let maxY: number = position.y;

        this.pointList.forEach(point => {
            if (point.x < minX) {
                minX = point.x;
            }

            if (point.x > maxX) {
                maxX = point.x;
            }

            if (point.y < minY) {
                minY = point.y;
            }

            if (point.y > maxY) {
                maxY = point.y;
            }
        });

        let lbPosition = new Vector2(minX, minY);
        let rtPosition = new Vector2(maxX, maxY);

        let tmp = Vector2.substract(rtPosition, lbPosition);
        this.transform.position = Vector2.add(lbPosition, Vector2.division(tmp, 2));
        
        if (tmp.x > Road.LANE_WIDTH) {
            this.transform.scale.y = tmp.x;
        }
        
        if (tmp.y > Road.LANE_WIDTH) {
            this.transform.scale.x = tmp.y;
        }
    }

    /**
     * point 반환
     * @param index 
     */
    public getPoint(index: number): Vector2 {
        return this.pointList[index];
    }

    /**
     * point 갯수 반환
     * @param index 
     */
    public getPointLength(): number {
        return this.pointList.length;
    }

    /**
     * 해당 길의 각도 반환
     * @param index 
     */
    public getRoadAngle(index: number): number {
        if (this.pointList.length <= index + 1) {
            return 0;
        }

        return Math.atan2(this.pointList[index + 1].y - this.pointList[index].y, this.pointList[index + 1].x - this.pointList[index].x);
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

        this._name = 'TruckGenerator';
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
    public render(canvasDelegator: CanvasDelegator): void {
        let circle = new Circle(this.transform);
        canvasDelegator.draw(circle);

        let font = new Font(this.transform);
        font.text = '트럭 생성기';
        canvasDelegator.draw(font);
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
            let timeData = new TruckArrivalData(Math.random() * 720000, TruckArrivalData.TRUCK_KIND_SEA_BULK);
            this.truckArrivalTimeDataList.push(timeData);
        }

        for (let i = 0; i < 70; i++) {
            let timeData = new TruckArrivalData(Math.random() * 720000, TruckArrivalData.TRUCK_KIND_TANK_BULK);
            this.truckArrivalTimeDataList.push(timeData);
        }

        for (let i = 0; i < 358; i++) {
            let timeData = new TruckArrivalData(Math.random() * 720000, TruckArrivalData.TRUCK_KIND_DOKE);
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
                } else if (nextTruckArrivalTimeData.kind == TruckArrivalData.TRUCK_KIND_DOKE) {
                    truck = new DockTruck(this.environment);
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

        this._name = 'TruckDestination';
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
    public render(canvasDelegator: CanvasDelegator): void {
        let quad = new Quad(this.transform);
        canvasDelegator.draw(quad);

        let font = new Font(this.transform);
        font.text = '트럭 도착지';
        canvasDelegator.draw(font);
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

        this._name = 'WaitingPlace';
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
    public render(canvasDelegator: CanvasDelegator): void {
        let quad = new Quad(this.transform);
        canvasDelegator.draw(quad);

        let font = new Font(this.transform);
        font.text = '트럭 대기실';
        canvasDelegator.draw(font);
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

        this._name = 'Gateway';
    }

    /**
     * @override
     */
    public onAgentIn(agent: Agent): void {
        if (agent instanceof SeaBulkTruck) {
            this.portList[0].appendAgent(agent);
        } else if (agent instanceof TankBulkTruck) {
            this.portList[1].appendAgent(agent);
        } else if (agent instanceof DockTruck) {
            this.portList[2].appendAgent(agent);
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
    public render(canvasDelegator: CanvasDelegator): void {
        let quad = new Quad(this.transform);
        canvasDelegator.draw(quad);

        let font = new Font(this.transform);
        font.text = '게이트웨이';
        canvasDelegator.draw(font);
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

class OutGateway extends Facility {
    public constructor(environment: Environment) {
        super(environment);

        this._name = 'Gateway';
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
    public render(canvasDelegator: CanvasDelegator): void {
        let quad = new Quad(this.transform);
        canvasDelegator.draw(quad);

        let font = new Font(this.transform);
        font.text = '게이트웨이';
        canvasDelegator.draw(font);
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

        this._name = 'LinerPreparationPlace';
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
    public render(canvasDelegator: CanvasDelegator): void {
        let quad = new Quad(this.transform);
        canvasDelegator.draw(quad);

        let font = new Font(this.transform);
        font.text = '씨벌크용 라이너 준비실';
        canvasDelegator.draw(font);
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

class WeightMesaurementPlace extends Facility {
    public constructor(environment: Environment) {
        super(environment);

        this._name = 'WeightMesaurementPlace';
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
    public render(canvasDelegator: CanvasDelegator): void {
        let quad = new Quad(this.transform);
        canvasDelegator.draw(quad);

        let font = new Font(this.transform);
        font.text = '무게 측정실';
        canvasDelegator.draw(font);
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

class BulkProductLoadingPlace extends Facility {
    public constructor(environment: Environment) {
        super(environment);

        this._name = 'BulkProductLoadingPlace';
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
    public render(canvasDelegator: CanvasDelegator): void {
        let quad = new Quad(this.transform);
        canvasDelegator.draw(quad);

        let font = new Font(this.transform);
        font.text = '벌크 제품 적제실';
        canvasDelegator.draw(font);
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

class DockProductLoadingPlace extends Facility {
    public constructor(environment: Environment) {
        super(environment);

        this._name = 'DockProductLoadingPlace';
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
    public render(canvasDelegator: CanvasDelegator): void {
        let quad = new Quad(this.transform);
        canvasDelegator.draw(quad);

        let font = new Font(this.transform);
        font.text = '도크 제품 적재실';
        canvasDelegator.draw(font);
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

class ExternalDestination extends Facility {
    public constructor(environment: Environment) {
        super(environment);

        this._name = 'ExternalDestination';
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
    public render(canvasDelegator: CanvasDelegator): void {
        let quad = new Quad(this.transform);
        canvasDelegator.draw(quad);

        let font = new Font(this.transform);
        font.text = '외부 목적지';
        canvasDelegator.draw(font);
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

    protected dynamic: Dynamics;

    public constructor(environment: Environment) {
        super(environment);
        
        this._name = 'Truck';

        this.transform.scale = new Vector2(Truck.WIDTH, Truck.LENGTH);
        
        this.dynamic = new Dynamics();
        this.addComponent(this.dynamic);
    }

    /**
     * 도로위에 있을 때 할 일들 처리
     * @override
     */
    public onUpdate(): void {
        if (this.currentFacility instanceof Road) {
            let road = <Road> this.currentFacility;

            this.reset();
            
            let currentProgress = Vector2.inverseLerp(road.getPoint(this.currentRoadIndex), road.getPoint(this.currentRoadIndex + 1), this.transform.position);

            while (currentProgress >= 1) {
                currentProgress -= 1;
                this.currentRoadIndex++;

                if (this.currentRoadIndex === road.getPointLength() - 1) {
                    this.currentRoadIndex = 0;
                    this.dynamic.velocity = Vector2.ZERO;
                    road.portList[0].appendAgent(this);

                    break;
                }
                currentProgress = currentProgress * Vector2.substract(road.getPoint(this.currentRoadIndex - 1), road.getPoint(this.currentRoadIndex)).magnitude / Vector2.substract(road.getPoint(this.currentRoadIndex), road.getPoint(this.currentRoadIndex + 1)).magnitude;
                
                if (currentProgress < 1) {
                    this.transform.position = Vector2.lerp(road.getPoint(this.currentRoadIndex), road.getPoint(this.currentRoadIndex + 1), currentProgress);
                    this.reset();
                }
            }
        }
    }

    /**
     * 이부분 수정필요
     */
    private reset(): void {
        let road = <Road> this.currentFacility;

        let angle = road.getRoadAngle(this.currentRoadIndex);
        this.transform.rotation = angle;
        this.dynamic.velocity = Vector2.multiply(this.transform.forward(), 2.7);
    }
}

class SeaBulkTruck extends Truck {

    public constructor(environment: Environment) {
        super(environment);
        
        this._name = 'SeaBulkTruck';
    }

    /**
     * @override
     */
    public render(canvasDelegator: CanvasDelegator): void {
        let quad = new Quad(this.transform, 'rgba(256, 0, 0, 0.2)');
        canvasDelegator.draw(quad);
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
        
        this._name = 'TankBulkTruck';
    }

    /**
     * @override
     */
    public render(canvasDelegator: CanvasDelegator): void {
        let quad = new Quad(this.transform, 'rgba(0, 256, 0, 0.2)');
        canvasDelegator.draw(quad);
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

    public constructor(environment: Environment) {
        super(environment);
        
        this._name = 'DockTruck';
    }

    /**
     * @override
     */
    public render(canvasDelegator: CanvasDelegator): void {
        let quad = new Quad(this.transform, 'rgba(0, 0, 256, 0.2)');
        canvasDelegator.draw(quad);
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