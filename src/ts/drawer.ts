import { Vector2, Transform } from './types';

export abstract class Picture {
    public color: string;
    public transform: Transform;

    public constructor(transform: Transform, color: string = 'rgba(0, 0, 0, 0.2)') {
        this.transform = new Transform(transform.position, transform.scale, transform.rotation);
        this.color = color;
    }
}

export abstract class Shape extends Picture {
    public strokeWidth: number = 0;
}

export class Font extends Picture {
    public text: string;
    public size: number = 1;

    public constructor(transform: Transform, color: string = 'rgba(0, 0, 0, 1)') {
        super(transform, color);
    }
}

export class Path extends Shape {
    public readonly pointList: Array<Vector2>;
    public width: number;

    public constructor(transform: Transform, color: string = 'rgba(0, 0, 0, 1)') {
        super(transform, color);

        this.pointList = new Array<Vector2>();
        this.width = 1;
    }
}

export class Quad extends Shape {

}

export class Circle extends Shape {
    
}
