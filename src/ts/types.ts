import { Environment } from "./unit";

/**
 * 2차원 벡터
 */
export class Vector2 {
    public static readonly ZERO: Vector2 = new Vector2(0, 0);

    public static add(a: Vector2, b: Vector2): Vector2 {
        return new Vector2(a.x + b.x, a.y + b.y);
    }

    public static substract(a: Vector2, b: Vector2): Vector2 {
        return new Vector2(a.x - b.x, a.y - b.y);
    }

    public static multiply(a: Vector2, b: number): Vector2 {
        return new Vector2(a.x * b, a.y * b);
    }

    public static division(a: Vector2, b: number): Vector2 {
        return new Vector2(a.x / b, a.y / b);
    }

    public static lerp(a: Vector2, b: Vector2, c: number): Vector2 {
        let vector = Vector2.add(a, Vector2.multiply(Vector2.substract(b, a), c));

        return vector;
    }

    public static inverseLerp(a: Vector2, b: Vector2, c: Vector2): number {
        let v1 = Vector2.substract(c, a);
        let v2 = Vector2.substract(b, a);

        if (v1.sqrMagnitude === v2.sqrMagnitude) {
            return 1;
        }

        return Math.sqrt(v1.sqrMagnitude / v2.sqrMagnitude);
    }
    
    public x: number;
    public y: number;

    public get sqrMagnitude(): number {
        return this.x * this.x + this.y * this.y;
    }

    public get magnitude(): number {
        return Math.sqrt(this.sqrMagnitude);
    }

    public constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    /**
     * 깊은 복사
     */
    public clone(): Vector2 {
        return new Vector2(this.x, this.y);
    }
}

/**
 * Unit의 위치, 크기, 각도정보를 갖고있음
 */
export class Transform {
    public position: Vector2;
    public scale: Vector2;
    public rotation: number;

    public constructor(position: Vector2, scale: Vector2, rotation: number = 0) {
        this.position = position;
        this.scale = scale;
        this.rotation = rotation;
    }

    
    /**
     * 앞 벡터
     */
    public forward(): Vector2 {
        let vector = new Vector2(Math.cos(this.rotation), Math.sin(this.rotation));

        return vector;
    }
    
    /**
     * 왼쪽 벡터
     */
    public left(): Vector2 {
        let vector = new Vector2(Math.cos(this.rotation + Math.PI / 2), Math.sin(this.rotation + Math.PI / 2));

        return vector;
    }
    
    /**
     * 오른쪽 벡터
     */
    public right(): Vector2 {
        let vector = new Vector2(Math.cos(this.rotation - Math.PI / 2), Math.sin(this.rotation - Math.PI / 2));

        return vector;
    }

    /**
     * 깊은 복사
     */
    public clone(): Transform {
        return new Transform(new Vector2(this.position.x, this.position.y), new Vector2(this.scale.x, this.scale.y), this.rotation);
    }
}

/**
 * 트럭 도착 시간에 관한 데이터
 */
export class TruckArrivalData {
    public static readonly TRUCK_KIND_SEA_BULK = 1;
    public static readonly TRUCK_KIND_TANK_BULK = 2;
    public static readonly TRUCK_KIND_DOKE_LOOSE_BAG = 3;
    public static readonly TRUCK_KIND_DOKE_PALLET = 4;

    public readonly time: number;
    public readonly kind: number;
    public isArrived: boolean;
    
    public constructor(time: number, kind: number) {
        this.time = time;
        this.kind = kind;
        this.isArrived = false;
    }
}

/**
 * 코루틴에서 사용하기 위한 클래스
 */
export class Wait {
    /**
     * Generator에서 yield* 하면 해당 초 만큼 sleep
     * @param environment 
     * @param seconds 
     */
    public static *forSeconds(environment: Environment, seconds: number): any {
        let startTime = environment.elapsedTime;

        while (environment.elapsedTime - startTime < seconds) {
            yield 0;
        }
    }
}