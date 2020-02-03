import { Model } from "../ts/model";
import { Road, Facility, Environment, Agent } from "../ts/unit";
import { Vector2 } from "../ts/types";
import { Renderer } from "../ts/renderer";
import { Quad, Font } from "../ts/drawer";
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
        let truckGenerator = new TruckGenerator(this.environment);
        truckGenerator.transform.position = Vector2.ZERO;

        let testFacility = new TestFacility(this.environment);
        testFacility.transform.position = new Vector2(100, 0);

        let road = new Road(this.environment);
        let tmp = truckGenerator.getSidePosition(0);
        road.speedLimit = 10;
        road.addPoint(tmp);
        road.addPoint(Vector2.add(tmp, new Vector2(10, 0)));
        road.addPoint(Vector2.add(tmp, new Vector2(20, -10)));
        road.addPoint(Vector2.add(tmp, new Vector2(30, 10)));
        road.addPoint(Vector2.add(tmp, new Vector2(40, -10)));
        road.addPoint(Vector2.add(tmp, new Vector2(50, 10)));
        road.addPoint(Vector2.add(tmp, new Vector2(60, -10)));
        road.addPoint(Vector2.add(tmp, new Vector2(70, 0)));
        road.addPoint(testFacility.getSidePosition(Math.PI));
        road.portList.push(testFacility);
        
        truckGenerator.portList.push(road);

        truckGenerator.register();
        testFacility.register();

        road.register();
    }
}


class TruckGenerator extends Facility {
    private time: number;

    public constructor(environment: Environment) {
        super(environment);

        this.name = 'TruckGenerator';

        this.time = 0;
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
        let quad = new Quad(this.transform);
        renderer.draw(quad);

        let font = new Font(this.transform);
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

        if (this.time > 1) {
            this.time = 0;
            let truck = new SeaBulkTruck(this.environment);
            truck.register();
            this.portList[0].appendAgent(truck);
        }

        this.time += this.environment.deltaTime;
    }
}

class TestFacility extends Facility {
    public constructor(environment: Environment) {
        super(environment);

        this.name = 'TestFacility';
    }

    /**
     * @override
     */
    public onAgentIn(agent: Agent): void {
        agent.transform.position = this.transform.position;
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
        let quad = new Quad(this.transform);
        renderer.draw(quad);

        let font = new Font(this.transform);
        font.text = this.name;
        renderer.draw(font);

        let font2 = new Font(this.transform);
        font2.transform.position = Vector2.add(font2.transform.position, new Vector2(0, -5));
        font2.text = 'Agent count: ' + this.agentCount;
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