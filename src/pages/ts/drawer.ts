import { Vector2, Transform } from './types';
import { Unit } from './unit';
import { Renderer } from './renderer';

export class CanvasDelegator {
    private readonly element: HTMLCanvasElement;
    private readonly _canvas: CanvasRenderingContext2D;
    private cameraPosition: Vector2;
    private zoomSize: number;

    public get canvas(): CanvasRenderingContext2D {
        return this._canvas;
    }

    public constructor(element: HTMLCanvasElement) {
        this.element = element;
        this._canvas = element.getContext('2d');

        this.cameraPosition = new Vector2(0, 0);
        this.zoomSize = 40;

        this.setupEvent();
    }

    /**
     * Picture의 종류를 분류해서 적절히 그림
     * @param picture 
     */
    public draw(picture: Picture): void { // ?
        if (picture instanceof Path) {
            this.drawPath(picture);
        } else if (picture instanceof Font) {
            this.drawFont(picture);
        } else if (picture instanceof Quad) {
            this.drawQuad(picture);
        } else if (picture instanceof Circle) {
            this.drawCircle(picture);
        }
    }

    public drawPath(path: Path): void {
        this.canvas.fillStyle = path.color;
        this.canvas.strokeStyle = path.color;

        /*
        let convertedScale = this.convertMeterToPixel(path.transform.scale);
        let convertedPosition = this.getRealPixelPosition(path.transform.position);
        */

        let convertedPointList = path.pointList.map(point => this.getRealPixelPosition(point));
        
        this.canvas.beginPath();
        this.canvas.moveTo(convertedPointList[0].x, convertedPointList[0].y);
        convertedPointList.forEach(point => {
            this.canvas.lineTo(point.x, point.y);
        });
        this.canvas.stroke();
    }

    /**
     * canvas에 Text를 그림
     * @param font 
     */
    private drawFont(font: Font): void {
        this.canvas.fillStyle = font.color;
        this.canvas.font = font + 'px';
        let textMatrics = this.canvas.measureText(font.text);
        
        let convertedScale = new Vector2(textMatrics.width, 0);
        let convertedPosition = Vector2.substract(this.getRealPixelPosition(font.transform.position), Vector2.division(convertedScale, 2));

        this.canvas.fillText(font.text, convertedPosition.x, convertedPosition.y);
    }

    /**
     * canvas에 사각형을 그림
     * @param circle 
     */
    private drawQuad(quad: Quad): void {
        this.canvas.fillStyle = quad.color;

       let convertedScale = this.convertMeterToPixel(quad.transform.scale);
       let convertedPosition = this.getRealPixelPosition(quad.transform.position);

       let theta1 = Math.atan2(convertedScale.x, convertedScale.y);
       let theta2 = Math.PI - theta1;
       let radius = convertedScale.y / 2 / Math.cos(theta1);

       let points = new Array<Vector2>();
       points.push(new Vector2(convertedPosition.x + radius * Math.cos(theta2 + quad.transform.rotation), convertedPosition.y + radius * Math.sin(theta2 + quad.transform.rotation)));
       points.push(new Vector2(convertedPosition.x + radius * Math.cos(-theta2 + quad.transform.rotation), convertedPosition.y + radius * Math.sin(-theta2 + quad.transform.rotation)));
       points.push(new Vector2(convertedPosition.x + radius * Math.cos(-theta1 + quad.transform.rotation), convertedPosition.y + radius * Math.sin(-theta1 + quad.transform.rotation)));
       points.push(new Vector2(convertedPosition.x + radius * Math.cos(theta1 + quad.transform.rotation), convertedPosition.y + radius * Math.sin(theta1 + quad.transform.rotation)));

       this.canvas.beginPath();
       this.canvas.moveTo(points[3].x, points[3].y);
       points.forEach(point => {
           this.canvas.lineTo(point.x, point.y);
       });
       this.canvas.fill();
    }

    /**
     * canvas에 원을 그림
     * @param circle 
     */
    private drawCircle(circle: Circle): void {
        this.canvas.fillStyle = circle.color;
        
        let convertedPosition = this.getRealPixelPosition(circle.transform.position);
        let convertedScale = this.convertMeterToPixel(circle.transform.scale);
        
        this.canvas.beginPath();
        this.canvas.ellipse
        this.canvas.ellipse(convertedPosition.x ,convertedPosition.y, convertedScale.x, convertedScale.y, circle.transform.rotation, 0, 2 * Math.PI);
        this.canvas.fill();
    }

    /**
     * 미터단위의 Vector를 실제 그려질 Pixel단위로 바꿔줌
     * @param vetor 
     */
    private convertMeterToPixel(vetor: Vector2): Vector2 {
        let convertedVector = Vector2.multiply(vetor, this.zoomSize);

        return convertedVector;
    }

    /**
     * 미터단위의 position vector를 실제 그려질 Pixel위치로 바꿔줌
     * @param position 
     */
    private getRealPixelPosition(position: Vector2): Vector2 {
        let ratio = this.element.clientHeight / this.element.clientWidth;
        let cameraWidth = this.element.clientWidth / this.zoomSize;
        let cameraHeight = this.element.clientHeight / this.zoomSize;

        let convertedVector = new Vector2(this.element.clientWidth / 2, this.element.clientHeight / 2);
        let deltaVector = this.convertMeterToPixel(Vector2.substract(position, this.cameraPosition));
        deltaVector.y = - deltaVector.y;
        convertedVector = Vector2.add(convertedVector, deltaVector);

        return convertedVector;
    }
    
    /**
     * canvas의 크기 재설정과 각 unit들을 렌더링
     * @param unitList 
     */
    public update(unitList: Array<Unit>): void {
        this.element.setAttribute('width', this.element.clientWidth.toString());
        this.element.setAttribute('height', this.element.clientHeight.toString());

        unitList.forEach(unit => {
            unit.render(this);
        });

        for (let i = - Renderer.MAX_WIDTH / 2; i < Renderer.MAX_WIDTH / 2; i += 1) {
            let path = new Path(new Transform(Vector2.ZERO, Vector2.ZERO), (i % 10 == 0 ? 'rgba(0, 0, 0, 0.4)' : 'rgba(0, 0, 0, 0.1)'));
            path.pointList.push(new Vector2(i, - Renderer.MAX_HEIGHT / 2));
            path.pointList.push(new Vector2(i, Renderer.MAX_HEIGHT / 2));
            this.drawPath(path);
        }

        for (let i = - Renderer.MAX_HEIGHT / 2; i < Renderer.MAX_HEIGHT / 2; i += 1) {
            let path = new Path(new Transform(Vector2.ZERO, Vector2.ZERO), (i % 10 == 0 ? 'rgba(0, 0, 0, 0.4)' : 'rgba(0, 0, 0, 0.1)'));
            path.pointList.push(new Vector2(- Renderer.MAX_HEIGHT / 2, i));
            path.pointList.push(new Vector2(Renderer.MAX_HEIGHT / 2, i));
            this.drawPath(path);
        }
    }
    
    private setupEvent(): void {
        this.element.addEventListener('wheel', e => {
            this.zoomSize -= e.deltaY / Math.abs(e.deltaY);

            if (this.zoomSize <= 0) {
                this.zoomSize = 1;
            }
        });

        this.element.addEventListener('mousemove', e => {
            if (e.buttons === 1) {
                this.cameraPosition = Vector2.substract(this.cameraPosition, new Vector2(e.movementX / this.zoomSize, - e.movementY / this.zoomSize));
            }
        });
    }
}

export abstract class Picture {
    public color: string;
    public transform: Transform;

    public constructor(transform: Transform, color: string = 'rgba(0, 0, 0, 0.2)') {
        this.transform = transform;
        this.color = color;
    }
}

export abstract class Shape extends Picture {

}

export class Font extends Picture {
    public text: string;
    public size: number = 24;

    public constructor(transform: Transform, color: string = 'rgba(0, 0, 0, 1)') {
        super(transform, color);
    }
}

export class Path extends Shape {
    public readonly pointList: Array<Vector2>;

    public constructor(transform: Transform, color: string = 'rgba(0, 0, 0, 0.2)') {
        super(transform, color);

        this.pointList = new Array<Vector2>();
    }
}

export class Quad extends Shape {

}

export class Circle extends Shape {
    
}
