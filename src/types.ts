import random from 'random';

export class Vector2 {
    public static readonly ZERO: Vector2 = new Vector2(0, 0);
    
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