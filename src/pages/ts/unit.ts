import { Vector2, Transform } from './types';
import { CanvasDelegator, Circle, Shape, Quad } from './drawer';
import { Component } from './component';

export class Environment {
    public static readonly EPSILON_DELAY = 5;

    private _tick: number;
    private _elapsedTime: number;
    private _timeScale: number;
    private _deltaTime: number;
    public readonly unitList: Array<Unit>;

    public get elapsedTime(): number {
        return this._elapsedTime;
    }

    public get timeScale(): number {
        return this._timeScale;
    }

    public get deltaTime(): number {
        return this._deltaTime;
    }

    public set timeScale(val: number) {
        this._timeScale = val;
    }

    public constructor() {
        this._tick = 0;
        this._elapsedTime = 0;
        this._timeScale = 1;
        this.unitList = new Array<Unit>();

        setInterval(() => {
            this._tick += Environment.EPSILON_DELAY;
            this._deltaTime = Environment.EPSILON_DELAY * this.timeScale;
            this._elapsedTime += this.deltaTime;
            
            if (this._tick > 17 / this.timeScale) {
                this._tick = 0;
                
                this.unitList.forEach(unit => {
                    unit.onUpdate();

                    if (unit instanceof Agent) {
                        unit.applyComponents();
                    }
                });
            }
        }, Environment.EPSILON_DELAY);
    }

    /**
     * 해당 환경에 유닛 추가
     * @param unit 
     */
    public appendUnit(unit: Unit) {
        unit.onStart();
        this.unitList.push(unit);
    }
}

export abstract class Unit {
    private readonly _transform: Transform;
    protected readonly _environment: Environment;

    public get transform(): Transform {
        return this._transform;
    }

    public get environment(): Environment {
        return this._environment;
    }

    public constructor(environment: Environment) {
        this._transform = new Transform(Vector2.ZERO, new Vector2(10, 10), 0);
        this._environment = environment;
    }

    public register(): void {
        this.environment.appendUnit(this);
    }

    /**
     * 해당 유닛을 렌더링하는 메소드
     */
    public abstract render(canvasDelegator: CanvasDelegator): void;

    /**
     * 유닛이 만들어질 때 호출
     */
    public abstract onStart(): void;

    /**
     * 유닛 생성후 170 / timeScale ms 마다 호출
     */
    public abstract onUpdate(): void;
}

/**
 * 모드 시설들의 부모 클래스
 */
export abstract class Facility extends Unit {
    public readonly agentList: Array<Agent>;
    public inPort: Facility;
    public outPort: Facility;

    public constructor(environment: Environment) {
        super(environment);
        this.agentList = new Array<Agent>();
    }

    /**
     * Agent 추가
     * @param agent 
     */
    public appendAgent(agent: Agent): void {
        if (agent.currentFacility) {
            agent.currentFacility.removeAgent(agent);
            agent.currentFacility.onAgentOut(agent);
        }

        this.agentList.push(agent);
        
        this.onAgentIn(agent);

        agent.currentFacility = this;
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
        this.onAgentOut(agent);
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
export abstract class Agent extends Unit {
    private _currentFacility: Facility;
    private readonly componentList: Array<Component>;

    public get currentFacility(): Facility {
        return this._currentFacility;
    }

    public set currentFacility(val: Facility) {
        this._currentFacility = val;
    }

    public constructor(environment: Environment) {
        super(environment);

        this._currentFacility = null;
        this.componentList = new Array<Component>();
    }

    public addComponent(component: Component): void {
        this.componentList.push(component);
    }

    public applyComponents(): void {
        this.componentList.forEach(component => {
            component.do(this);
        });
    }
}