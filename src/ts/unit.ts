import { Vector2, Transform } from './types';
import { Component } from './component';
import { Renderer } from './renderer';

export class Environment {
    public static readonly EPSILON_DELAY = 5;

    private _tick: number;
    private _elapsedTime: number;
    public timeScale: number;
    private _deltaTime: number;
    public readonly unitList: Array<Unit>;

    public get elapsedTime(): number {
        return this._elapsedTime;
    }

    public get deltaTime(): number {
        return this._deltaTime;
    }

    public constructor() {
        this._tick = 0;
        this._elapsedTime = 0;
        this.timeScale = 1;
        this.unitList = new Array<Unit>();

        setInterval(() => {
            this._tick += Environment.EPSILON_DELAY;
            this._deltaTime = this.timeScale / 60;
            this._elapsedTime += this.deltaTime;
            
            if (this._tick > 17 / this.timeScale) {
                this._tick = 0;
                
                this.unitList.forEach(unit => {
                    if (unit instanceof Agent) {
                        unit.applyComponents();
                    }

                    unit.onUpdate();
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
    protected _name: string;
    public readonly transform: Transform;
    protected readonly _environment: Environment;

    public get name(): string {
        return this._name;
    }

    public get environment(): Environment {
        return this._environment;
    }

    public constructor(environment: Environment) {
        this._name = 'Unit';
        this.transform = new Transform(Vector2.ZERO, new Vector2(1, 1), 0);
        this._environment = environment;
    }

    public register(): void {
        this.environment.appendUnit(this);
    }

    /**
     * 해당 유닛을 렌더링하는 메소드
     */
    public abstract render(renderer: Renderer): void;

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
    public readonly portList: Array<Facility>;

    public constructor(environment: Environment) {
        super(environment);

        this._name = 'Facility';
        this.agentList = new Array<Agent>();
        this.portList = new Array<Facility>();
        this.transform.scale = new Vector2(20, 20);
    }

    /**
     * Agent 추가
     * @param agent 
     */
    public appendAgent(agent: Agent): void {
        if (agent.currentFacility) {
            agent.currentFacility.removeAgent(agent);
        }

        this.agentList.push(agent);
        agent.currentFacility = this;
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
                this.onAgentOut(agent);
                agent.currentFacility = null;
                break;
            }
        }
    }

    /**
     * 옆면 위치 구하기용
     * @param directrion 0: right, pi: left
     */
    public getSidePosition(angle: number): Vector2 {
        let vector = Vector2.add(this.transform.position, new Vector2(this.transform.scale.x / 2 * Math.cos(angle), this.transform.scale.y / 2 * Math.sin(angle)));

        return vector;
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
    public currentFacility: Facility;
    private readonly componentList: Array<Component>;
    
    public constructor(environment: Environment) {
        super(environment);

        this._name = 'Agent';
        this.currentFacility = null;
        this.componentList = new Array<Component>();
    }

    public addComponent(component: Component): void {
        this.componentList.push(component);
    }

    public removeComponent(component: Component): void {
        for (let i = 0; i < this.componentList.length; i++) {
            if (this.componentList[i] === component) {
                this.componentList.splice(i, 1);
            }
        }
    }

    public applyComponents(): void {
        this.componentList.forEach(component => {
            component.do(this);
        });
    }
}