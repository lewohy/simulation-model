import { Agent } from "./unit";
import { Vector2 } from "./types";

export abstract class Component {
    public abstract do(agent: Agent): void;
}

/**
 * 역학 관련 처리를 수행하는 클래스
 */
export class Dynamics extends Component {
    public readonly velocity: Vector2;

    public constructor() {
        super();

        this.velocity = Vector2.ZERO;
    }

    public do(agent: Agent): void {
        let deltaPosition = new Vector2(this.velocity.x * Math.cos(agent.transform.rotation), this.velocity.y * Math.cos(agent.transform.rotation));
    }
}