import { Vector2, Transform } from './types';

export abstract class Environment {
    private tick: number;
    private _time: number;
    private _timeScale: number;
    public readonly unitList: Array<Unit>;

    public get time(): number {
        return this._time;
    };

    public get timeScale(): number {
        return this._timeScale;
    };

    public constructor() {
        this.tick = 0;
        this._time = 0;
        this._timeScale = 1;
        this.unitList = new Array<Unit>();

        setInterval(() => {
            this.tick += 10;

            if (this.tick > 170 / this.timeScale) {
                this.tick = 0;
                
                this.unitList.forEach(unit => {
                    unit.onUpdate();
                });
            }
        }, 10);
    }

    /**
     * 해당 환경에 유닛 추가
     * @param unit 
     */
    public appendUnit(unit: Unit): void {
        unit.onStart();
        this.unitList.push(unit);
    }
}

export class Unit {
    private environment: Environment;

    public constructor(environment: Environment) {
        this.environment = environment;
    }

    /**
     * 유닛이 만들어질 때 호출
     */
    public onStart(): void {

    }

    /**
     * 유닛 생성후 170 / timeScale ms 마다 호출
     */
    public onUpdate(): void {

    }
}

/**
 * 모드 시설들의 부모 클래스
 */
export abstract class Facility extends Unit {
    private readonly _transform: Transform;
    public readonly agentList: Array<Agent>;
    public inPort: Facility;
    public outPort: Facility;

    public get transform(): Transform {
        return this._transform;
    }

    public constructor(environment: Environment) {
        super(environment);
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
export class Agent extends Unit {
    private readonly _transform: Transform;

    public get transform(): Transform {
        return this._transform;
    }

    public constructor(environment: Environment) {
        super(environment);
        this._transform = new Transform(Vector2.ZERO, Vector2.ZERO, 0);
    }
}

export class TruckDestination extends Facility {

    public constructor(environment: Environment) {
        super(environment);
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