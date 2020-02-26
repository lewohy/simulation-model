import { Vector2, Transform } from './types';
import { Component, Vehicle } from './component';
import { Renderer } from './renderer';
import { Path, Quad, Circle } from './drawer';

export class Environment {
    public static readonly MAX_TICK = 17;
    public static readonly FIXED_DELTA_TIME = 0.01;
    public static readonly EPSILON_DELAY = 5;

    private _tick: number;
    private _elapsedTime: number;
    private _timeScale: number;
    private _deltaTime: number;
    private _frame: number;
    private _oldTime: number;
    private _currentTime: number;
    public readonly unitList: Array<Unit>;

    public get tick(): number {
        return this._tick;
    }

    public get elapsedTime(): number {
        return this._elapsedTime;
    }

    public get deltaTime(): number {
        return this._deltaTime;
    }

    public get timeScale(): number {
        return this._timeScale;
    }

    public set timeScale(value: number) {
        this._timeScale = value;
    }

    public get frame(): number {
        return this._frame;
    }

    public constructor() {
        this._tick = 0;
        this._elapsedTime = 0;
        this._deltaTime = 0;
        this._timeScale = 1;
        this._frame = 1;
        this._oldTime = Date.now();
        this._currentTime = Date.now();
        this.unitList = new Array<Unit>();

        setInterval(() => {
            this._tick += Environment.EPSILON_DELAY;
            
            if (this._tick >= Environment.MAX_TICK) {
                this._currentTime = Date.now();
                this._frame = Math.round(1 / ((this._currentTime - this._oldTime) * 0.001));

                this._tick = 0;
                let jumpedTime = this.timeScale / 60;

                for (let i = 0; i < jumpedTime; i += Environment.FIXED_DELTA_TIME) {
                    this._deltaTime = Environment.FIXED_DELTA_TIME;
                    this._elapsedTime += this._deltaTime;
                    
                    this.unitList.forEach(unit => {
                        if (unit instanceof Agent) {
                            unit.applyComponents();
                        } else if (unit instanceof Facility) {
                            unit.handleOutAgentQueue();
                        }

                        unit.onUpdate();
                        unit.runCoroutine();
                    });
                }

                this._oldTime = this._currentTime;
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
    public startCoroutine(generator: Generator): void {
        this.coroutineList.push(generator);
    }
}

/**
 * 모드 시설들의 부모 클래스
 */
export abstract class Facility extends Unit {
    public readonly agentList: Array<Agent>;
    public readonly portList: Array<Facility>;
    private readonly outAgentQueue: Array<Array<Agent>>;

    public maxCapacity: number;

    public get agentCount(): number {
        return this.agentList.length;
    }

    public constructor(environment: Environment) {
        super(environment);

        this.name = 'Facility';
        this.agentList = new Array<Agent>();
        this.portList = new Array<Facility>();
        this.outAgentQueue = new Array<Array<Agent>>();

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
        let vector = Vector2.add(this.transform.position, new Vector2(this.transform.scale.y / 2 * Math.cos(angle), this.transform.scale.x / 2 * Math.sin(angle)));

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

    /**
     * 해당 시설 안에 들어갈 수 있는지 여부 반환
     */
    public canEnter(): boolean {
        return this.agentCount < this.maxCapacity;
    }

    /**
     * 나갈 대기열에 있는 Agent 처리
     */
    public handleOutAgentQueue(): void {
        for (let i = 0; i < this.outAgentQueue.length; i++) {
            if (this.portList[i] && this.outAgentQueue[i] && this.outAgentQueue[i].length > 0) {

                let agent = this.outAgentQueue[i][0];
                let vehicle = agent.getComponent(Vehicle);

                if (vehicle && this.portList[i] instanceof Road) {
                    let road = <Road> this.portList[i];

                    let frontAgentDistance = road.getStopDistanceForStartPoint(i, vehicle.currentLaneIndex, vehicle.safetyDistance);

                    // || road.agentCount === 0 조건 추가하기
                    if (frontAgentDistance > 0) {
                        this.outAgentQueue[i].splice(0, 1)[0];
                        this.portList[i].appendAgent(agent);
                    }
                } else {
                    this.outAgentQueue[i].splice(0, 1)[0];
                    this.portList[i].appendAgent(agent);
                }
            }
        }
    }

    /**
     * 나갈 Agent대기열에 추가
     * @param portIndex 출구 번호
     * @param agent 
     */
    protected addOutAgentQueue(portIndex: number, agent: Agent): void {
        if (!this.outAgentQueue[portIndex]) {
            this.outAgentQueue[portIndex] = new Array<Agent>();
        }

        this.outAgentQueue[portIndex].push(agent);
    }
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
    public static readonly DEFAULT_SPEED = 5.6; // 20 km/h
    public static readonly LANE_WIDTH = 2;

    private readonly pointList: Array<Vector2>;
    private lanePointList: Array<Array<Vector2>>;
    private leftLaneBoundaryPointList: Array<Array<Vector2>>;
    private righttLaneBoundaryPointList: Array<Array<Vector2>>;
    private _laneCount: number;
    private _speedLimit: number;
    private vehicleList: Array<Array<Vehicle>>;

    public readonly entranceList: Array<Road>;
    public readonly outPortList: Array<Array<Facility>>;

    public get laneCount(): number {
        return this._laneCount;
    }

    public set laneCount(value: number) {
        this._laneCount = value;
        this.refreshLanePointList();
    }

    public get speedLimit(): number {
        return this._speedLimit;
    }

    public set speedLimit(value: number) {
        this._speedLimit = value;
    }

    public constructor(environment: Environment) {
        super(environment);

        this.name = 'Road';
        this.maxCapacity = 100;
        this.pointList = new Array<Vector2>();
        this._laneCount = 1;
        this.speedLimit = Road.DEFAULT_SPEED;
        this.entranceList = new Array<Road>();
        this.outPortList = new Array<Array<Facility>>();

        this.transform.scale = new Vector2(Road.LANE_WIDTH, Road.LANE_WIDTH);

        this.refreshVehicleList();
    }

    /**
     * @override
     */
    public onAgentIn(agent: Agent): void {
        if (agent.getComponent(Vehicle)) {
            this.refreshVehicleList();
        }
    }
    
    /**
     * @override
     */
    public onAgentOut(agent: Agent): void {
        if (agent.getComponent(Vehicle)) {
            this.refreshVehicleList();
        }
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
                
                for (let j = 0; j < this.pointList.length; j++) {
                    path.pointList.push(this.getPoint(i, j));
                    leftLine.pointList.push(this.getLeftLaneBoundaryPoint(i, j));
                    rightLine.pointList.push(this.getRightLaneBoundaryPoint(i, j));
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
        
        this.refreshLanePointList();
    }

    /**
     * point 반환
     * @param index 
     */
    public getPoint(lane: number, index: number): Vector2 {
        try {
            return this.lanePointList[lane][index];
        } catch (e) {
            return this.transform.position;
        }
    }

    /**
     * 왼쪽 차선 경계 반환
     */
    public getLeftLaneBoundaryPoint(lane: number, index: number): Vector2 {
        try {
            return this.leftLaneBoundaryPointList[lane][index];
        } catch (e) {
            return this.transform.position;
        }
    }

    /**
     * 오른쪽 차선 경계 반환
     */
    public getRightLaneBoundaryPoint(lane: number, index: number): Vector2 {
        try {
            return this.righttLaneBoundaryPointList[lane][index];
        } catch (e) {
            return this.transform.position;
        }
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
     * @override
     */
    public getStopDistanceForVehicle(entranceNumber: number, vehicle: Vehicle): number {
        let list = this.vehicleList[vehicle.currentLaneIndex];
        let standardDistance = vehicle.getMovedDistance(this);
        let result = -1;

        for (let i = 0; i < list.length; i++) {
            let distance = list[i].getMovedDistance(this);
            if ((result === -1 || distance <= result) && distance > standardDistance) {
                result = distance;
            }
        }

        if (result === -1) {
            let nextFacility = (this instanceof Intersection) ? this.portList[entranceNumber] : this.portList[0];

            if (nextFacility instanceof Road) {
                return this.getLength(vehicle.currentLaneIndex) - standardDistance + (<Road> nextFacility).getStopDistanceForStartPoint(entranceNumber, vehicle.currentLaneIndex, vehicle.safetyDistance);
            } else {
                return this.getLength(vehicle.currentLaneIndex) - standardDistance;
            }
        } else {
            return result - standardDistance - vehicle.safetyDistance;
        }
    }
    
    /**
     * @override
     */
    public getStopDistanceForStartPoint(entranceNumber: number, lane: number, safetyDistance: number): number {
        let list = this.vehicleList[lane];
        
        if (list.length === 0) {
            if (this.portList[entranceNumber] instanceof Road) {
                return this.getLength(lane) + (<Road> this.portList[entranceNumber]).getStopDistanceForStartPoint(entranceNumber, lane, safetyDistance);
            } else {
                return this.getLength(lane);
            }
        } else {
            let result = this.getLength(lane);

            for (let i = 0; i < list.length; i++) {
                let distance = list[i].getMovedDistance(this);

                if (distance < result) {
                    result = distance;
                }
            }

            return result - safetyDistance;
        }
    }

    /**
     * 입구 번호 반환
     * @param entrance 
     */
    public getEntranceNumber(entrance: Road): number {
        for (let i = 0; i < this.entranceList.length; i++) {
            if (this.entranceList[i] === entrance) {
                return i;
            }
        }

        return -1;
    }

    /**
     * port에 연결될 facility 추가
     * @param port 
     * @param facility 
     */
    public addOutPort(port: number, facility: Facility): void {
        if (!this.outPortList[port]) {
            this.outPortList[port] = new Array<Facility>();
        }

        this.outPortList[port].push(facility);

        if (this.outPortList[port].length === 1) {
            this.portList[port] = facility;
        }

        if (facility instanceof Road) {
            facility.entranceList.push(this);
        }
    }

    /**
     * 모든 Lane에 대한 Point 새로고침
     * 실시간 계산을 하지 않기 위해 캐싱하는 용도
     */
    private refreshLanePointList(): void {
        this.lanePointList = new Array<Array<Vector2>>();
        this.leftLaneBoundaryPointList = new Array<Array<Vector2>>();
        this.righttLaneBoundaryPointList = new Array<Array<Vector2>>();

        for (let lane = 0; lane < this.laneCount; lane++) {
            let centerLanePointList = new Array<Vector2>();
            let leftLanePointList = new Array<Vector2>();
            let rightLanePointList = new Array<Vector2>();

            for (let index = 0; index < this.pointList.length; index++) {
                let currentPoint = this.pointList[index];
                let angle: number;
                let radius: number;
                let lbRadius: number;
                let rbRadius: number;
        
                if (index === 0 || index == this.getPointLength() - 1) {
                    if(index == this.getPointLength() - 1) {
                        angle = Math.PI / 2 + this.getWayAngle(index - 1);
                    } else {
                        angle = Math.PI / 2 + this.getWayAngle(index);
                    }
                    radius = ((this.laneCount - 1) / 2 - lane) * Road.LANE_WIDTH;
                    lbRadius = ((this.laneCount - 1) / 2 - (lane - 0.5)) * Road.LANE_WIDTH;
                    rbRadius = ((this.laneCount - 1) / 2 - (lane + 0.5)) * Road.LANE_WIDTH;
                } else {
                    angle = (Math.PI + this.getWayAngle(index) + this.getWayAngle(index - 1)) / 2;
                    radius = ((this.laneCount - 1) / 2 - lane) * Road.LANE_WIDTH / Math.sin(angle - this.getWayAngle(index));
                    lbRadius = ((this.laneCount - 1) / 2 - (lane - 0.5)) * Road.LANE_WIDTH / Math.sin(angle - this.getWayAngle(index));
                    rbRadius = ((this.laneCount - 1) / 2 - (lane + 0.5)) * Road.LANE_WIDTH / Math.sin(angle - this.getWayAngle(index));
                }

                centerLanePointList.push(Vector2.add(currentPoint, new Vector2(radius * Math.cos(angle), radius * Math.sin(angle))));
                leftLanePointList.push(Vector2.add(currentPoint, new Vector2(lbRadius * Math.cos(angle), lbRadius * Math.sin(angle))));
                rightLanePointList.push(Vector2.add(currentPoint, new Vector2(rbRadius * Math.cos(angle), rbRadius * Math.sin(angle))));
            }

            this.lanePointList.push(centerLanePointList);
            this.leftLaneBoundaryPointList.push(leftLanePointList);
            this.righttLaneBoundaryPointList.push(rightLanePointList);
        }
    }

    /**
     * 모든 Vehicle를 가진 리스트 재분류
     * 실시간 계산을 하지 않기 위해 캐싱하는 용도
     */
    protected refreshVehicleList(): void {
        this.vehicleList = new Array<Array<Vehicle>>();

        for (let i = 0; i < this.laneCount; i++) {
            this.vehicleList[i] = new Array<Vehicle>();
        }

        for (let i = 0; i < this.agentCount; i++) {
            let vehicle = this.agentList[i].getComponent(Vehicle);

            if (vehicle) {
                this.vehicleList[vehicle.currentLaneIndex].push(vehicle);
            }
        }
    }
}


/**
 * 교차로
 */
export class Intersection extends Road {
    public controlTower: ControlTower;

    public constructor(environment: Environment) {
        super(environment);

        this.name = 'Intersection';
        this.maxCapacity = 1;

        this.transform.scale = new Vector2(10, 10);
    }

    /**
     * @override
     */
    public onAgentIn(agent: Agent): void {
        this.refreshVehicleList();
    }

    /**
     * @override
     */
    public onAgentOut(agent: Agent): void {
        this.refreshVehicleList();
    }

    /**
     * @override
     */
    public render(renderer: Renderer): void {
        let circle = new Circle(this.transform.clone(), 'rgba(0, 0, 0, 0.1)');
        renderer.draw(circle);
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
        for (let i = 0; i < this.outPortList.length; i++) {
            this.portList[i] = this.outPortList[i][this.controlTower.getResponse(this, i)];
        }
    }
}

/**
 * 교차로용 관제탑
 */
export abstract class ControlTower extends Facility {
    public readonly intersectionList: Array<Intersection>;
    public readonly referenceFacilityList: Array<Facility>;

    public constructor(environment: Environment) {
        super(environment);

        this.name = 'ControlTower';
        this.maxCapacity = 1;
        this.transform.scale = new Vector2(10, 10);

        this.intersectionList = new Array<Intersection>();
        this.referenceFacilityList = new Array<Facility>();
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
     * 해당 교차로에 대한 결과 반환
     * @param intersection 
     */
    public abstract getResponse(intersection: Intersection, port: number): number;
    
    /**
     * 교차로 번호 반환
     * @param intersection 
     */
    protected getIntersectionNumber(intersection: Intersection): number {
        for (let i = 0; i < this.intersectionList.length; i++) {
            if (this.intersectionList[i] === intersection) {
                return i;
            }
        }

        return -1;
    }
}