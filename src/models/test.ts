import { Model } from "../ts/model";
import { Road, Facility, Environment, Agent } from "../ts/unit";
import { Vector2, Wait } from "../ts/types";
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
        road.addPoint(Vector2.add(tmp, new Vector2(20, 20)));
        road.addPoint(Vector2.add(tmp, new Vector2(10, 10)));
        road.addPoint(Vector2.add(tmp, new Vector2(10, 50)));
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
        while (true) {
            yield* Wait.forSeconds(this.environment, 1);
            console.log(this.environment.elapsedTime);
            let truck = new SeaBulkTruck(this.environment);
            truck.register();
            this.portList[0].appendAgent(truck);
        }
    }
}

class TestFacility extends Facility {
    private count: number;

    public constructor(environment: Environment) {
        super(environment);

        this.name = 'TestFacility';
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
        yield* Wait.forSeconds(this.environment, 10);

        agent.unregister();
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
        let quad = new Quad(this.transform, 'rgba(255, 0, 0, 0.2)');
        renderer.draw(quad);

        let font = new Font(this.transform.clone(), 'rgba(0, 0, 0, 1)');
        font.text = '필요 제동 거리: ' + Math.floor(this.vehicle.brakingDistance);
        renderer.draw(font);

        let tmp = this.transform.clone();
        tmp.position.y -= 1.5;
        font = new Font(tmp, 'rgba(0, 0, 0, 1)');
        font.text = '가속도: ' + this.vehicle.acceleration;
        renderer.draw(font);

        tmp = this.transform.clone();
        tmp.position.y -= 3;
        font = new Font(tmp, 'rgba(0, 0, 0, 1)');
        font.text = '앞 차와의 간격: ' + Math.floor(this.vehicle.frontAgentDistance);
        renderer.draw(font);

        tmp = this.transform.clone();
        tmp.position.y -= 4.5;
        font = new Font(tmp, 'rgba(0, 0, 0, 1)');
        font.text = '감속도: ' + this.vehicle.deceleration;
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