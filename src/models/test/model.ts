import { Model } from "../../ts/model";
import { Road, Facility, Environment, Agent } from "../../ts/unit";
import { Vector2, Wait } from "../../ts/types";
import { Renderer } from "../../ts/renderer";
import { Quad, Font } from "../../ts/drawer";
import { Vehicle } from "../../ts/component";

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

        
        let destination = new Destination(this.environment);
        destination.transform.position = new Vector2(1000, 0);

        let r1 = new Road(this.environment);
        r1.addPoint(truckGenerator.getSidePosition(0));
        r1.addPoint(Vector2.add(truckGenerator.getSidePosition(0), new Vector2(500, 0)));

        let r2 = new Road(this.environment);
        r2.addPoint(Vector2.add(truckGenerator.getSidePosition(0), new Vector2(500, 0)));
        r2.addPoint(destination.getSidePosition(Math.PI));

        truckGenerator.portList.push(r1);

        r1.addOutPort(0, r2);
        r2.addOutPort(0, destination);

        truckGenerator.register();
        destination.register();

        r1.register();
        r2.register();

    }
}


class TruckGenerator extends Facility {

    public constructor(environment: Environment) {
        super(environment);

        this.name = 'TruckGenerator';
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
        this.startCoroutine(this.test());
    }

    /**
     * @override
     */
    public onUpdate(): void {
        
        
    }

    private *test(): any {
        let truck = new SeaBulkTruck(this.environment);
        truck.register();
        
        this.addOutAgentQueue(0, truck);
/*
        while (true) {
            yield* Wait.forSeconds(this.environment, 10);
            let truck = new SeaBulkTruck(this.environment);
            truck.register();
            
            this.addOutAgentQueue(0, truck);
        }*/
    }
}

class TestFacility extends Facility {

    public constructor(environment: Environment) {
        super(environment);

        this.name = 'TestFacility';
        this.maxCapacity = 1;
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

class Destination extends Facility {
    private count: number;

    public constructor(environment: Environment) {
        super(environment);

        this.name = 'Destination';
        this.maxCapacity = 5;
        this.count = 0;
    }

    /**
     * @override
     */
    public onAgentIn(agent: Agent): void {
        this.count++;

        agent.transform.position = this.transform.position.clone();

        this.startCoroutine(this.coroutine(agent));
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
        font2.transform.position = Vector2.add(font2.transform.position, new Vector2(0, -5));
        font2.text = 'Agent count: ' + this.count;
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

    private *coroutine(agent: Agent): any {
        yield* Wait.forSeconds(this.environment, 2);

        agent.unregister();
    }
}

abstract class Truck extends Agent {
    public static readonly WIDTH = 1.85;
    public static readonly LENGTH = 4.3;

    protected vehicle: Vehicle;

    public constructor(environment: Environment) {
        super(environment);
        
        this.name = 'Truck';

        this.transform.scale = new Vector2(Truck.WIDTH, Truck.LENGTH);
        
        this.vehicle = new Vehicle();
        this.vehicle.safetyDistance = 20;
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
        let quad = new Quad(this.transform, 'rgba(255, 0, 0, 0.2)');
        renderer.draw(quad);

        let font = new Font(this.transform.clone(), 'rgba(0, 0, 0, 1)');
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