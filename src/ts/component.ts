import { Agent, Road } from "./unit";
import { Vector2 } from "./types";

export abstract class Component {
    public abstract do(agent: Agent): void;
}

/**
 * 역학 관련 처리를 수행하는 컴포넌트
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

/**
 * Road위의 Agent를 관리하기 위한 컴포넌트
 */
export class Vehicle extends Component {
    private dynamic: Dynamics;
    public acceleration: number;
    public deceleration: number;
    public safetyDistance: number;
    public stopDistance: number;
    public brakingDistance: number;

    private _currentLaneIndex: number;
    private _currentWayIndex: number;
    private _currentWayProgress: number;

    public get currentLaneIndex(): number {
        return this._currentLaneIndex;
    }

    public get currentWayIndex(): number {
        return this._currentWayIndex;
    }

    public get currentWayProgress(): number {
        return this._currentWayProgress;
    }

    public get velocity(): number {
        return this.dynamic.velocity.magnitude;
    }

    public constructor() {
        super();

        this.dynamic = new Dynamics();
        this.acceleration = 10;
        this.deceleration = 20;
        this.safetyDistance = 10;
        this.stopDistance;
        this.brakingDistance = 0;
        this._currentLaneIndex = 0;
        this._currentWayIndex = 0;
        this._currentWayProgress = 0;
    }

    /**
     * @override
     */
    public do(agent: Agent): void {
        if (agent.currentFacility instanceof Road) {
            let road = <Road> agent.currentFacility;

            let roadPointLength = road.getPointLength();

            if (roadPointLength > 0) {

                if (this.currentWayIndex === roadPointLength - 1) {
                    this.onEndOfRoad(agent, road);
                } else {
                    this.refreshAngle(agent, road);
                    this.refreshVelocity(agent, road);

                    this.dynamic.do(agent);

                    this._currentWayProgress = Vector2.inverseLerp(road.getPoint(this.currentLaneIndex, this.currentWayIndex), road.getPoint(this.currentLaneIndex, this.currentWayIndex + 1), agent.transform.position);

                    while (this.currentWayProgress >= 1) {
                        this._currentWayProgress -= 1;
                        this._currentWayIndex++;

                        if (this.currentWayIndex === roadPointLength - 1) {
                            this._currentWayProgress = 0;
                            agent.transform.position = road.getPoint(this.currentLaneIndex, road.getPointLength() - 1);

                            return;
                        }

                        this._currentWayProgress = this.currentWayProgress * Vector2.substract(road.getPoint(this.currentLaneIndex, this.currentWayIndex - 1), road.getPoint(this.currentLaneIndex, this.currentWayIndex)).magnitude / Vector2.substract(road.getPoint(this.currentLaneIndex, this.currentWayIndex), road.getPoint(this.currentLaneIndex, this.currentWayIndex + 1)).magnitude;

                        if (this.currentWayProgress < 1) {
                            this.refreshAngle(agent, road);

                            agent.transform.position = Vector2.lerp(road.getPoint(this.currentLaneIndex, this.currentWayIndex), road.getPoint(this.currentLaneIndex, this.currentWayIndex + 1), this.currentWayProgress);
                            
                            break;
                        }
                    }
                }
            }
        }
    }

    /**
     * 이동한 거리 반환
     * @param agent 
     */
    public getMovedDistance(road: Road): number {
        let distance = 0;

        for (let i = 0; i < this.currentWayIndex; i++) {
            distance += road.getWayLength(this.currentLaneIndex, i);
        }

        distance += road.getWayLength(this.currentLaneIndex, this.currentWayIndex) * this.currentWayProgress;

        return distance;
    }

    /**
     * 해당 Road에 대한 Agent의 각도 설정
     */
    private refreshAngle(agent: Agent, road: Road): void {
        let angle = road.getWayAngle(this.currentWayIndex);
        agent.transform.rotation = angle;

        this.dynamic.velocity = Vector2.multiply(agent.transform.forward(), this.dynamic.velocity.magnitude);
    }

    /**
     * 해당 Road에 대한 Agent의 속도 설정
     */
    private refreshVelocity(agent: Agent, road: Road): void {
        //this.dynamic.velocity = Vector2.multiply(agent.transform.forward(), road.speedLimit);
        
        // 렉 원인일거임
        if (road.portList[0] instanceof Road) {
            this.stopDistance = road.getStopDistanceForVehicle((<Road> road.portList[0]).getEntranceNumber(road), this);
        } else {
            this.stopDistance = road.getStopDistanceForVehicle(0, this);
        }

        this.brakingDistance = this.dynamic.velocity.sqrMagnitude / (2 * this.deceleration);
        
        let targetSpeed = 0;

        if (this.stopDistance < this.brakingDistance) {
            targetSpeed = 0;
        } else {
            targetSpeed = road.speedLimit;
        }

        let sqrTargetSpeed = targetSpeed * targetSpeed;

        if (this.dynamic.velocity.sqrMagnitude < sqrTargetSpeed) {
            this.dynamic.velocity = Vector2.add(this.dynamic.velocity, Vector2.multiply(agent.transform.forward(), this.acceleration * agent.environment.deltaTime));

            if (this.dynamic.velocity.sqrMagnitude > sqrTargetSpeed) {
                this.dynamic.velocity = Vector2.multiply(agent.transform.forward(), targetSpeed);
            }
        } else if (this.dynamic.velocity.sqrMagnitude > sqrTargetSpeed) {
            let deltaVelocity = Vector2.multiply(agent.transform.forward(), this.deceleration * agent.environment.deltaTime);

            if (this.dynamic.velocity.sqrMagnitude <= deltaVelocity.sqrMagnitude) {
                this.dynamic.velocity = Vector2.multiply(agent.transform.forward(), targetSpeed);
            } else {
                this.dynamic.velocity = Vector2.substract(this.dynamic.velocity, deltaVelocity);
            }

            if (this.dynamic.velocity.sqrMagnitude < sqrTargetSpeed) {
                this.dynamic.velocity = Vector2.multiply(agent.transform.forward(), targetSpeed);
            }
        }
    }

    /**
     * 길 끝에 도달했을 시 호출
     */
    private onEndOfRoad(agent: Agent, road: Road): void {
        let nextFacility = road.portList[0];

        if (nextFacility.canEnter()) {
            this._currentWayIndex = 0;
            this._currentWayProgress = 0;
            this.brakingDistance = 0;
            if (!(nextFacility instanceof Road)) {
                this.dynamic.velocity = Vector2.ZERO;
            }
            nextFacility.appendAgent(agent);
        }
    }
}