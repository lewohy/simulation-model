import { Agent, Road } from "./unit";
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

    /**
     * @override
     */
    public do(agent: Agent): void {
        let deltaPosition = Vector2.multiply(new Vector2(this.velocity.x, this.velocity.y), agent.environment.deltaTime);
        
        agent.transform.position = Vector2.add(agent.transform.position, deltaPosition);
    }
}

export class Vehicle extends Component {
    private dynamic: Dynamics;
    private currentRoadIndex: number;
    private currentRoadProgress: number;

    public constructor() {
        super();

        this.dynamic = new Dynamics();
        this.currentRoadIndex = 0;
        this.currentRoadProgress = 0;
    }

    /**
     * @override
     */
    public do(agent: Agent): void {
        // 더 좋은 알고리즘 있을거같음
        
        if (agent.currentFacility instanceof Road) {
            let road = <Road> agent.currentFacility;

            this.refreshAngle(agent, road);
            this.refreshVelocity(agent, road);

            this.dynamic.do(agent);

            this.currentRoadProgress = Vector2.inverseLerp(road.getPoint(this.currentRoadIndex), road.getPoint(this.currentRoadIndex + 1), agent.transform.position);

            while (this.currentRoadProgress >= 1) {
                this.currentRoadProgress -= 1;
                this.currentRoadIndex++;

                if (this.currentRoadIndex === road.getPointLength() - 1) {
                    this.currentRoadIndex = 0;
                    this.dynamic.velocity = Vector2.ZERO;
                    road.portList[0].appendAgent(agent);
                    break;
                }

                this.currentRoadProgress = this.currentRoadProgress * Vector2.substract(road.getPoint(this.currentRoadIndex - 1), road.getPoint(this.currentRoadIndex)).magnitude / Vector2.substract(road.getPoint(this.currentRoadIndex), road.getPoint(this.currentRoadIndex + 1)).magnitude;
                
                if (this.currentRoadProgress < 1) {
                    agent.transform.position = Vector2.lerp(road.getPoint(this.currentRoadIndex), road.getPoint(this.currentRoadIndex + 1), this.currentRoadProgress);
                    this.refreshAngle(agent, road);
                    this.refreshVelocity(agent, road);
                }
            }
        }
    }

    /**
     * 해당 Road에 대한 Agent의 각도 설정
     */
    private refreshAngle(agent: Agent, road: Road): void {
        let angle = road.getRoadAngle(this.currentRoadIndex);
        agent.transform.rotation = angle;
    }

    /**
     * 해당 Road에 대한 Agent의 속도 설정
     */
    private refreshVelocity(agent: Agent,road: Road): void {
        this.dynamic.velocity = Vector2.multiply(agent.transform.forward(), road.speedLimit);
    }
}