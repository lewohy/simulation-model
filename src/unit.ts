import { Vector2, Transform } from './types';

/**
 * 모드 시설들의 부모 클래스
 */
export abstract class Facility {
    private readonly _transform: Transform;
    public readonly agentList: Array<Agent>;

    public get transform(): Transform {
        return this._transform;
    }

    public inPort: Facility;
    public outPort: Facility;

    public constructor() {
        this._transform = new Transform(Vector2.ZERO, Vector2.ZERO, 0);
        this.agentList = new Array<Agent>();
    }

    /**
     * Agent 추가
     * @param agent 
     */
    public appendAgent(agent: Agent): void {
        this.agentList.push(agent);
        this.onAgentIn(agent);
    }

    /**
     * Agent 삭제
     * @param agent 
     */
    public removeAgent(agent: Agent): void {
        for (let i = 0; i < this.agentList.length; i++) {
            if (this.agentList[i] === agent) {
                this.agentList.splice(i, 1);
            }
        }
        this.onAgentIn(agent);
    }

    /**
     * Agent가 시설에 들어올 때 호출
     * @param agent 들어온 Agent
     */
    public abstract onAgentIn(agent: Agent): void;

    /**
     * Agent가 시설에서 나갈 때 호출
     * @param agent 나간 Agent
     */
    public abstract onAgentOut(agent: Agent): void;
}

/**
 * 모든 Agent의 부모 클래스
 */
export class Agent {
    private readonly _transform: Transform;

    public get transform(): Transform {
        return this._transform;
    }

    public constructor() {
        this._transform = new Transform(Vector2.ZERO, Vector2.ZERO, 0);
    }
}

export class TruckDestination extends Facility {

    public constructor() {
        super();
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