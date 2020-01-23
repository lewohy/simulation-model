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

        this.truckGenerator.outPort = this.truckDestination;

        this.truckGenerator.register();
        this.truckDestination.register();

        let road1 = new Road(this.environment);
        road1.wayPointList.push(new Vector2(0, 0));
        road1.wayPointList.push(new Vector2(10, 0));
        road1.wayPointList.push(new Vector2(10, 10));
        road1.register();
    }
}

/**
 * 트럭이 지나다닐 길
 */
class Road extends Facility {
    public readonly wayPointList: Array<Vector2>;

    public constructor(environment: Environment) {
        super(environment);

        this.wayPointList = new Array<Vector2>();
    }

    public onAgentIn(agent: Agent): void {
        
    }
    
    public onAgentOut(agent: Agent): void {
        
    }

    public render(canvasDelegator: CanvasDelegator): void {
        let path = new Path(this.transform);
        this.wayPointList.forEach(point => {
            path.pointList.push(point);
        });

        canvasDelegator.draw(path);
    }

    public onStart(): void {
        
    }

    public onUpdate(): void {
        
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
        this.truckArrivalTimeDataList = new Array<TruckArrivalData>();
        this.nextTruckIndex = 0;
    }

    public onAgentIn(agent: Agent): void {
        
    }
    
    public onAgentOut(agent: Agent): void {
        
    }

    public render(canvasDelegator: CanvasDelegator): void {
        let circle = new Circle(this.transform);
        canvasDelegator.draw(circle);

        let font = new Font(this.transform);
        font.text = '트럭 생성기';
        canvasDelegator.draw(font);
    }

    public onStart(): void {
        this.transform.scale = new Vector2(1, 1);

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
                this.outPort.appendAgent(truck);

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
    }

    /**
     * 
     * @override
     */
    public onAgentIn(agent: Agent): void {
        let randomDeltaPosition = new Vector2(Math.random() * this.transform.scale.x - this.transform.scale.x / 2, Math.random() * this.transform.scale.y - this.transform.scale.y / 2);
        //agent.transform.position = Vector2.add(this.transform.position, randomDeltaPosition);
        //agent.transform.rotation = Math.random() * 2 * Math.PI;

        this.removeAgent(agent);
    }

    /**
     * 
     * @override
     */
    public onAgentOut(agent: Agent): void {
        
    }

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
     * 
     */
    public onUpdate(): void {
        
    }
}

abstract class Truck extends Agent {
    public static readonly WIDTH = 1.85;
    public static readonly LENGTH = 4.3;
}

class SeaBulkTruck extends Truck {

    public constructor(environment: Environment) {
        super(environment);
    }

    public render(canvasDelegator: CanvasDelegator): void {
        let quad = new Quad(this.transform, 'rgba(256, 0, 0, 0.2)');
        canvasDelegator.draw(quad);
    }
    
    public onStart(): void {
        this.transform.scale = new Vector2(Truck.WIDTH, Truck.LENGTH);
    }

    public onUpdate(): void {
        
    }
}

class TankBulkTruck extends Truck {

    public constructor(environment: Environment) {
        super(environment);
    }

    public render(canvasDelegator: CanvasDelegator): void {
        let quad = new Quad(this.transform, 'rgba(0, 256, 0, 0.2)');
        canvasDelegator.draw(quad);
    }
    
    public onStart(): void {
        this.transform.scale = new Vector2(Truck.WIDTH, Truck.LENGTH);
    }

    public onUpdate(): void {
        
    }
}

class DockTruck extends Truck {

    public constructor(environment: Environment) {
        super(environment);
    }

    public render(canvasDelegator: CanvasDelegator): void {
        let quad = new Quad(this.transform, 'rgba(0, 0, 256, 0.2)');
        canvasDelegator.draw(quad);
    }
    
    public onStart(): void {
        this.transform.scale = new Vector2(Truck.WIDTH, Truck.LENGTH);
    }

    public onUpdate(): void {
        
    }
}