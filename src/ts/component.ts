import { Agent } from "./unit";
import { Vector2 } from "./types";

export abstract class Component {
    public abstract do(agent: Agent): void;
}

/**
 * 역학 관련 처리를 수행하는 클래스
 */
export class Dynamics extends Component {
    public velocity: Vector2;

    public constructor() {
        super();

        this.velocity = Vector2.ZERO;
    }

    public do(agent: Agent): void {
        let deltaPosition = Vector2.multiply(new Vector2(this.velocity.x, this.velocity.y), agent.environment.deltaTime);
        
        agent.transform.position = Vector2.add(agent.transform.position, deltaPosition);
    }
}