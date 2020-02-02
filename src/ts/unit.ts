import { Vector2, Transform } from './types';
import { Component } from './component';
import { Renderer } from './renderer';
import { Path } from './drawer';

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
            
            if (this._tick > 17) {
                this._tick = 0;
                this._deltaTime = this.timeScale / 60;
                this._elapsedTime += this.deltaTime;
                
                this.unitList.forEach(unit => {
                    if (unit instanceof Agent) {
                        unit.applyComponents();
                    }

                    unit.onUpdate();
                    unit.runCoroutine();
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
    public name: string;
    public readonly transform: Transform;
    protected readonly _environment: Environment;

    private coroutineList: Array<Generator>;

    public get environment(): Environment {
        return this._environment;
    }

    public constructor(environment: Environment) {
        this.name = 'Unit';
        this.transform = new Transform(Vector2.ZERO, new Vector2(1, 1), 0);
        this._environment = environment;

        this.coroutineList = new Array<Generator>();
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

    /**
     * 코루틴 실행
     */
    public runCoroutine(): void {
        for (let i = 0; i < this.coroutineList.length; i++) {
            let current = this.coroutineList[i].next();

            if (current.done) {
                this.coroutineList.splice(i, 1);
                i--;
            }
        }
    }

    /**
     * 실행할 코루틴 추가
     * @param generator 
     */
    protected startCoroutine(generator: Generator): void {
        this.coroutineList.push(generator);
    }
}

/**
 * 모드 시설들의 부모 클래스
 */
export abstract class Facility extends Unit {
    public readonly agentList: Array<Agent>;
    public readonly portList: Array<Facility>;

    private _maxCapacity: number;

    public get agentCount(): number {
        return this.agentList.length;
    }

    public get maxCapacity(): number {
        return this._maxCapacity;
    }

    public constructor(environment: Environment) {
        super(environment);

        this.name = 'Facility';
        this.agentList = new Array<Agent>();
        this.portList = new Array<Facility>();
        this._maxCapacity = 10;

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
        agent.onEnter(this);
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
                agent.onLeave(this);
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
     * Agent가 Facility에 들어올 때 호출
     * @param agent 들어온 Agent
     */
    public abstract onAgentIn(agent: Agent): void;

    /**
     * Agent가 Facility에서 나갈 때 호출
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

        this.name = 'Agent';
        this.currentFacility = null;
        this.componentList = new Array<Component>();
    }

    /**
     * Facility에 들어갈 때 호출
     * @param agent 들어온 Agent
     */
    public abstract onEnter(facility: Facility): void;

    /**
     * Facility에서 나갈 때 호출
     * @param agent 나간 Agent
     */
    public abstract onLeave(facility: Facility): void;

    /**
     * 컴포넌트 추가
     * @param component 
     */
    public addComponent(component: Component): void {
        this.componentList.push(component);
    }

    /**
     * 컴포넌트 삭제
     * @param component 
     */
    public removeComponent(component: Component): void {
        for (let i = 0; i < this.componentList.length; i++) {
            if (this.componentList[i] === component) {
                this.componentList.splice(i, 1);
            }
        }
    }

    /**
     * 추가된 모든 컴포넌트 적용
     */
    public applyComponents(): void {
        this.componentList.forEach(component => {
            component.do(this);
        });
    }
}

/**
 * 길
 */
export class Road extends Facility {
    public static readonly LANE_WIDTH = 2;

    private readonly pointList: Array<Vector2>;
    private _laneCount: number;
    public speedLimit: number;

    public get laneCount(): number {
        return this._laneCount;
    }

    public constructor(environment: Environment) {
        super(environment);

        this.name = 'Road';
        this.pointList = new Array<Vector2>();
        this._laneCount = 1;
        this.speedLimit = 2.7;

        this.transform.scale = new Vector2(Road.LANE_WIDTH, Road.LANE_WIDTH);
    }

    /**
     * @override
     */
    public onAgentIn(agent: Agent): void {
        agent.transform.position = this.pointList[0];
    }
    
    /**
     * @override
     */
    public onAgentOut(agent: Agent): void {
        
    }

    /**
     * @override
     */
    public render(renderer: Renderer): void {
        let path = new Path(this.transform, 'rgba(128, 255, 255, 0.4)');
        path.width = Road.LANE_WIDTH;
        this.pointList.forEach(point => {
            path.pointList.push(point);
        });

        renderer.draw(path);
    }

    /**
     * @override
     */
    public onStart(): void {
        
    }

    /**
     * @override
     */
    public onUpdate(): void {
        
    }

    /**
     * point 추가
     * @param point 
     */
    public addPoint(position: Vector2): void {
        this.pointList.push(position);

        let minX: number = position.x;
        let minY: number = position.y;
        let maxX: number = position.x;
        let maxY: number = position.y;

        this.pointList.forEach(point => {
            if (point.x < minX) {
                minX = point.x;
            }

            if (point.x > maxX) {
                maxX = point.x;
            }

            if (point.y < minY) {
                minY = point.y;
            }

            if (point.y > maxY) {
                maxY = point.y;
            }
        });

        let lbPosition = new Vector2(minX, minY);
        let rtPosition = new Vector2(maxX, maxY);

        let tmp = Vector2.substract(rtPosition, lbPosition);
        this.transform.position = Vector2.add(lbPosition, Vector2.division(tmp, 2));
        
        if (tmp.x > Road.LANE_WIDTH) {
            this.transform.scale.y = tmp.x;
        }
        
        if (tmp.y > Road.LANE_WIDTH) {
            this.transform.scale.x = tmp.y;
        }
    }

    /**
     * point 반환
     * @param index 
     */
    public getPoint(index: number): Vector2 {
        return this.pointList[index];
    }

    /**
     * point 갯수 반환
     * @param index 
     */
    public getPointLength(): number {
        return this.pointList.length;
    }

    /**
     * 해당 길의 각도 반환
     * @param index 
     */
    public getRoadAngle(index: number): number {
        if (this.pointList.length <= index + 1) {
            return 0;
        }

        return Math.atan2(this.pointList[index + 1].y - this.pointList[index].y, this.pointList[index + 1].x - this.pointList[index].x);
    }
}