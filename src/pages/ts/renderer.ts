import { Vector2, Transform } from './types';
import { Environment, Unit, Facility, Agent } from './unit'
import { CanvasDelegator } from './drawer';

export class Renderer {
    public static readonly MAX_WIDTH = 1024;
    public static readonly MAX_HEIGHT = 1024;

    private readonly _environment: Environment;

    private canvasDelegator: CanvasDelegator;
    private running: boolean;
    private interval: NodeJS.Timeout;

    public get environment(): Environment {
        return this._environment;
    }

    public constructor(environment: Environment, element: HTMLCanvasElement) {
        this._environment = environment;
        this.canvasDelegator = new CanvasDelegator(element);

        this.running = true;

        this.interval = setInterval(() => {
            if (this.running) {
                this.onUpdate();
            }
        }, 10);
    }

    public start(): void {
        this.running = true;
    }

    public pause(): void {
        this.running = false;
    }

    private onUpdate(): void {
        this.canvasDelegator.update(this.environment.unitList);
    }
}
