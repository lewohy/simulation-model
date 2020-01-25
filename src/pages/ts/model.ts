import random from 'random';

import { Environment, Facility, Agent } from "./unit"
import { Renderer } from "./renderer";
import { Shape, Circle, CanvasDelegator, Font, Quad, Path } from "./drawer";
import { Vector2, TruckArrivalData } from "./types";
import { Dynamics } from './component';

export class Model {
    private readonly environment: Environment;
    private readonly renderer: Renderer;

    private truckGenerator: TruckGenerator;
    private truckDestination: TruckDestination;
    private truckList: Array<Truck>;

    public constructor(elemeht: HTMLCanvasElement) {
        this.environment = new Environment();
        this.environment.timeScale = 1;
        this.renderer = new Renderer(this.environment, elemeht);

        this.setup();
    }

    private setup(): void {
        this.truckGenerator = new TruckGenerator(this.environment);
        this.truckGenerator.transform.position = new Vector2(0, -20);

        this.truckDestination = new TruckDestination(this.environment);
        this.truckDestination.transform.position = new Vector2(0, 0);


        let road1 = new Road(this.environment);
        road1.pointList.push(new Vector2(0, 0));
        road1.pointList.push(new Vector2(10, 0));
        road1.pointList.push(new Vector2(20, 20));
        road1.pointList.push(new Vector2(30, 10));
        road1.pointList.push(new Vector2(40, 20));

        this.truckGenerator.outPort = this.truckDestination;
        this.truckDestination.outPort = road1;

        this.truckGenerator.register();
        this.truckDestination.register();
        road1.register();
    }
}

/**
 * 트럭이 지나다닐 길
 */
class Road extends Facility {
    public readonly pointList: Array<Vector2>;
    public forwardLaneCount = 1;
    public backwardLaneCount = 1;

    public constructor(environment: Environment) {
        super(environment);

        this._name = 'Road';
        this.pointList = new Array<Vector2>();
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
        let laneWidth = 2;

        let path = new Path(this.transform, 'rgba(128, 255, 255, 0.4)');
        this.pointList.forEach(point => {
            path.pointList.push(point);
        });
        path.width = laneWidth;

        canvasDelegator.draw(path);

        /*
        for (let i = 0; i < this.backwardLaneCount; i++) {
            let path = new Path(this.transform, 'rgba(255, 128, 255, 0.4)');
            this.pointList.forEach(point => {
                path.pointList.push(Vector2.add(point, Vector2.multiply(point.left(), laneWidth * 0.5)));
            });
            path.width = laneWidth;

            canvasDelegator.draw(path);
        }

        for (let i = 0; i < this.forwardLaneCount; i++) {
            let path = new Path(this.transform, 'rgba(128, 255, 255, 0.4)');
            this.pointList.forEach(point => {
                path.pointList.push(Vector2.add(point, Vector2.multiply(point.right(), laneWidth * 0.5)));
            });
            path.width = laneWidth;

            canvasDelegator.draw(path);
        }
        */
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

        let truck = new DockTruck(this.environment);
        truck.register();
        this.outPort.appendAgent(truck);

        /*
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
        });*/
    }

    /**
     * @override
     */
    public onUpdate(): void {
        /*
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
                this.outPort.appendAgent(truck);

                nextTruckArrivalTimeData.isArrived = true;
                this.nextTruckIndex++;
            }
        }*/
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

        this.outPort.appendAgent(agent);
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
        this.transform.scale = new Vector2(20, 20)
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
        //console.log(this.currentFacility.name);

        if (this.currentFacility instanceof Road) {
            let road = <Road> this.currentFacility;

            this.reset();
            
            if (Vector2.inverseLerp(road.pointList[this.currentRoadIndex], road.pointList[this.currentRoadIndex + 1], this.transform.position) >= 1) {
                this.currentRoadIndex++;
                this.transform.position = road.pointList[this.currentRoadIndex];

                this.reset();
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
        this.dynamic.velocity = Vector2.multiply(this.transform.forward(), 10);
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