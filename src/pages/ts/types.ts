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

    public front(): Vector2 {
        let vector = new Vector2(this.x, this.y);

        return vector;
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
}

/**
 * 트럭 도착 시간에 관한 데이터
 */
export class TruckArrivalData {
    public static readonly TRUCK_KIND_SEA_BULK = 1;
    public static readonly TRUCK_KIND_TANK_BULK = 2;
    public static readonly TRUCK_KIND_DOKE = 3;

    public readonly time: number;
    public readonly kind: number;
    public isArrived: boolean;
    
    public constructor(time: number, kind: number) {
        this.time = time;
        this.kind = kind;
        this.isArrived = false;
    }
}