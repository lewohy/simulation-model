import { Environment, Facility, Agent } from "./unit"
import { Renderer } from "./renderer";
import { Shape, Circle, CanvasDelegator, Font, Quad } from "./drawer";
import { Vector2 } from "./types";

export class Model {
    private readonly environment: Environment;
    private readonly renderer: Renderer;

    public constructor(elemeht: HTMLCanvasElement) {
        this.environment = new Environment();
        this.renderer = new Renderer(this.environment, elemeht);

        this.setup();
    }

    private setup(): void {

        for (let i = -20; i < 20; i += 10) {
            let t = new TruckDestination(this.environment);
            t.transform.position = new Vector2(i, i)
            this.environment.appendUnit(t);
        }
    }
}


/**
 * 트럭 도착지
 */
export class TruckDestination extends Facility {
    public constructor(environment: Environment) {
        super(environment);

    }

    public render(canvasDelegator: CanvasDelegator): void {
        let quad = new Quad(this.transform, 'rgba(0, 0, 0, 0.2)');
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
     * 
     */
    public onUpdate(): void {
        
    }

    /**
     * 
     * @override
     */
    public onAgentIn(agent: Agent): void {

    }

    /**
     * 
     * @override
     */
    public onAgentOut(agent: Agent): void {

    }
}