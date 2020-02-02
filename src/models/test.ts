import { Model } from "../ts/model";
import { Road, Facility, Environment, Agent } from "../ts/unit";
import { Vector2 } from "../ts/types";
import { Renderer } from "../ts/renderer";
import { Quad } from "../ts/drawer";
import { Vehicle } from "../ts/component";

export class TestModel extends Model {

    public constructor(element: HTMLCanvasElement) {
        super(element);

        this.setup();
    }

    /**
     * @override
     */
    protected setup(): void {
        let road = new Road(this.environment);
        road.speedLimit = 16;
        road.addPoint(new Vector2(0, 0));
        road.addPoint(new Vector2(10, 10));
        road.addPoint(new Vector2(20, -10));
        road.addPoint(new Vector2(30, 10));
        road.addPoint(new Vector2(40, -10));
        road.addPoint(new Vector2(50, 10));
        road.addPoint(new Vector2(40, 15));
        road.addPoint(new Vector2(30, 20));
        road.addPoint(new Vector2(20, 25));
        road.addPoint(new Vector2(0, 10));
        road.addPoint(new Vector2(-10, -5));
        road.portList.push(road);
        road.register();

        let truck = new SeaBulkTruck(this.environment);
        truck.register();
        road.appendAgent(truck);
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
        let quad = new Quad(this.transform, 'rgba(255, 0, 0, 0.2)');
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