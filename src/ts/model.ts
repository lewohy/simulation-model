import { Environment } from "./unit";
import { Renderer } from "./renderer";

export abstract class Model {
    public readonly environment: Environment;
    public readonly renderer: Renderer;

    public constructor(element: HTMLCanvasElement) {
        this.environment = new Environment();
        this.renderer = new Renderer(this.environment, element);
    }

    /**
     * 모델 세팅
     */
    protected abstract setup(): void;
}