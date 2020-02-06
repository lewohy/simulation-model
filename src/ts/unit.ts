import { Vector2, Transform } from './types';
import { Component, Vehicle } from './component';
import { Renderer } from './renderer';
import { Path, Quad } from './drawer';

export class Environment {
    public static readonly MAX_TICK = 17;
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
            
            if (this._tick >= Environment.MAX_TICK) {
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

    /**
     * 유닛 등록
     */
    public register(): void {
        this.environment.appendUnit(this);
    }

    /**
     * 유닛 해제
     */
    public unregister(): void {
        for (let i = 0; i < this.environment.unitList.length; i++) {
            if (this.environment.unitList[i] === this) {
                if (this instanceof Agent) {
                    let agent = <Agent> this;
                    if (agent.currentFacility) {
                        agent.currentFacility.removeAgent(this);
                    }
                }

                this.environment.unitList.splice(i, 1);

                break;
            }
        }
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

    public maxCapacity: number;

    public get agentCount(): number {
        return this.agentList.length;
    }

    public constructor(environment: Environment) {
        super(environment);

        this.name = 'Facility';
        this.agentList = new Array<Agent>();
        this.portList = new Array<Facility>();
        this.maxCapacity = 10;

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
     * 컴포넌트 반환
     * @param type
     */
    public getComponent<T extends Component>(type: new () => T): T {
        for (let i = 0; i < this.componentList.length; i++) {
            if (this.componentList[i] instanceof type) {
                return <T> this.componentList[i];
            }
        }

        return null;
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

        if (this.pointList.length > 0) {
            for (let i = 0; i < this.laneCount; i++) {

                let path = new Path(this.transform.clone(), 'rgba(128, 255, 255, 0.4)');
                path.width = Road.LANE_WIDTH;
                let leftLine = new Path(this.transform.clone(), 'rgba(0, 128, 0, 1)');
                leftLine.width = 0.1;
                let rightLine = new Path(this.transform.clone(), 'rgba(0, 128, 0, 1)');
                rightLine.width = 0.1;
                
                for (let j = 0; j < this.getPointLength(); j++) {
                    path.pointList.push(this.getPoint(i, j));
                    leftLine.pointList.push(this.getPoint(i - 0.5, j));
                    rightLine.pointList.push(this.getPoint(i + 0.5 , j));
                }

                renderer.draw(path);
                renderer.draw(leftLine);
                renderer.draw(rightLine);
            }
        }
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
        
        if (tmp.x > Road.LANE_WIDTH * this.laneCount) {
            this.transform.scale.y = tmp.x;
        }
        
        if (tmp.y > Road.LANE_WIDTH * this.laneCount) {
            this.transform.scale.x = tmp.y;
        }
    }

    /**
     * point 반환
     * @param index 
     */
    public getPoint(lane: number, index: number): Vector2 {
        let currentPoint = this.pointList[index];
        let angle: number;
        let radius: number;

        if (index === 0 || index >= this.getPointLength() - 1) {
            angle = Math.PI / 2 + this.getWayAngle(index);
            radius = ((this.laneCount - 1) / 2 - lane) * Road.LANE_WIDTH;
        } else {
            angle = (Math.PI + this.getWayAngle(index) + this.getWayAngle(index - 1)) / 2;
            radius = ((this.laneCount - 1) / 2 - lane) * Road.LANE_WIDTH / Math.sin(angle - this.getWayAngle(index));
        }

        //console.log(index);
        return Vector2.add(currentPoint, new Vector2(radius * Math.cos(angle), radius * Math.sin(angle)));
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
    public getWayAngle(index: number): number {
        if (index < 0 || index >= this.pointList.length - 1) {
            return 0;
        }

        return Math.atan2(this.pointList[index + 1].y - this.pointList[index].y, this.pointList[index + 1].x - this.pointList[index].x);
    }

    /**
     * 해당 길의 길이 반환
     * @param index 
     */
    public getWayLength(lane: number, index: number): number {
        if (index < 0 || index >= this.pointList.length - 1) {
            return 0;
        } else {
            return Vector2.substract(this.getPoint(lane, index + 1), this.getPoint(lane, index)).magnitude;
        }
    }

    /**
     * 도로의 총 길이 반환
     */
    public getLength(lane: number): number {
        let length = 0;

        for (let i = 0; i < this.pointList.length - 1; i++) {
            length += this.getWayLength(lane, i);
        }

        return length;
    }

    /**
     * 이동한 거리 반환
     * @param agent 
     */
    public getMovedDistance(agent: Agent): number {
        let vehicle = agent.getComponent(Vehicle);

        if (vehicle) {
            let distance = 0;

            for (let i = 0; i < vehicle.currentWayIndex; i++) {
                distance += this.getWayLength(vehicle.currentLaneIndex, i);
            }

            //console.log(this.pointList.length, vehicle.currentWayIndex);
            distance += this.getWayLength(vehicle.currentLaneIndex, vehicle.currentWayIndex) * vehicle.currentWayProgress;

            return distance;
        }

        return 0;
    }

    /**
     * 해당 agent 바로앞의 agent와의 거리 반환
     * @param vehicle 
     */
    public getFrontAgentDistance(agent: Agent): number {
        let standardVehicle = agent.getComponent(Vehicle);
        let standardDistance = this.getMovedDistance(agent);

        let distanceList = this.agentList.filter(a => {
            let vehicle = a.getComponent(Vehicle);

            if (vehicle && vehicle.currentLaneIndex === standardVehicle.currentLaneIndex) {
                return true;
            }

            return false;
        }).map(a => {
            return this.getMovedDistance(a);
        }).sort((a, b) => {
            return a - b;
        });

        for (let i = 0; i < distanceList.length; i++) {
            if (distanceList[i] > standardDistance) {
                return distanceList[i] - standardDistance;
            }
        }

        return -1;
    }
}