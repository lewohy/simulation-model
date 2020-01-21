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