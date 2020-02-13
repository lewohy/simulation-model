import { Vector2, Transform } from './types';
import { Environment, Unit, Facility, Agent } from './unit'
import { Picture, Shape, Circle, Font, Quad, Path } from "./drawer";

export class Renderer {
    public static readonly MAX_WIDTH = 1000;
    public static readonly MAX_HEIGHT = 1000;

    public readonly environment: Environment;
    public readonly element: HTMLCanvasElement;
    public readonly interval: NodeJS.Timeout;
    public readonly canvas: CanvasRenderingContext2D;

    public cameraPosition: Vector2;
    public zoomSize: number;

    private _focused: any;
    
    public running: boolean;

    public get focused(): any {
        return this._focused;
    }

    public constructor(environment: Environment, element: HTMLCanvasElement) {
        this.environment = environment;
        this.element = element;
        this.canvas = element.getContext('2d');

        this.cameraPosition = new Vector2(0, 0);
        this.zoomSize = 10;
        this._focused = this.environment;
        
        this.running = true;

        this.setupEvent();

        this.interval = setInterval(() => {
            if (this.running) {
                this.onUpdate();
            }
        }, 10);
    }

    public start(): void {
        this.running = true;
    }

    public pause(): void {
        this.running = false;
    }

    private onUpdate(): void {
        this.element.setAttribute('width', this.element.clientWidth.toString());
        this.element.setAttribute('height', this.element.clientHeight.toString());

        this.environment.unitList.forEach(unit => {
            unit.render(this);
        });

        if (this.focused instanceof Unit) {
            this.drawWireframe(this.focused);
        }

        this.enableGrid();
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

    /**
     * canvas에 Path를 그림
     * @param path 
     */
    private drawPath(path: Path): void {
        this.canvas.fillStyle = path.color;
        this.canvas.strokeStyle = path.color;
        this.canvas.lineWidth = path.width * this.zoomSize;

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
        this.canvas.font = font.size * this.zoomSize + 'px Arial';

        let textMatrics = this.canvas.measureText(font.text);
        
        let convertedScale = new Vector2(textMatrics.width, font.size);
        let tmpPosition = this.getRealPixelPosition(font.transform.position);
        let convertedPosition = new Vector2(tmpPosition.x - convertedScale.x / 2, tmpPosition.y);

        this.canvas.fillText(font.text, convertedPosition.x, convertedPosition.y);
    }

    /**
     * canvas에 사각형을 그림
     * @param circle 
     */
    private drawQuad(quad: Quad): void {
        this.canvas.fillStyle = quad.color;
        this.canvas.strokeStyle = quad.color;

        let convertedScale = this.convertMeterToPixel(quad.transform.scale);
        let convertedPosition = this.getRealPixelPosition(quad.transform.position);

        let theta1 = Math.atan2(convertedScale.x, convertedScale.y);
        let theta2 = Math.PI - theta1;
        let radius = convertedScale.y / 2 / Math.cos(theta1);

        let points = new Array<Vector2>();
        points.push(new Vector2(convertedPosition.x + radius * Math.cos(theta2 + quad.transform.rotation), convertedPosition.y - radius * Math.sin(theta2 + quad.transform.rotation)));
        points.push(new Vector2(convertedPosition.x + radius * Math.cos(-theta2 + quad.transform.rotation), convertedPosition.y - radius * Math.sin(-theta2 + quad.transform.rotation)));
        points.push(new Vector2(convertedPosition.x + radius * Math.cos(-theta1 + quad.transform.rotation), convertedPosition.y - radius * Math.sin(-theta1 + quad.transform.rotation)));
        points.push(new Vector2(convertedPosition.x + radius * Math.cos(theta1 + quad.transform.rotation), convertedPosition.y - radius * Math.sin(theta1 + quad.transform.rotation)));

        this.canvas.beginPath();
        this.canvas.moveTo(points[3].x, points[3].y);
        points.forEach(point => {
            this.canvas.lineTo(point.x, point.y);
        });

        if (quad.strokeWidth > 0) {
            this.canvas.lineWidth = quad.strokeWidth;
            this.canvas.stroke();
        } else {
            this.canvas.fill();
        }
    }

    /**
     * canvas에 원을 그림
     * @param circle 
     */
    private drawCircle(circle: Circle): void {
        this.canvas.fillStyle = circle.color;
        this.canvas.strokeStyle = circle.color;
        
        let convertedPosition = this.getRealPixelPosition(circle.transform.position);
        let convertedScale = this.convertMeterToPixel(circle.transform.scale);
        
        this.canvas.beginPath();
        this.canvas.ellipse
        this.canvas.ellipse(convertedPosition.x ,convertedPosition.y, convertedScale.x / 2, convertedScale.y / 2, circle.transform.rotation, 0, 2 * Math.PI);

        if (circle.strokeWidth > 0) {
            this.canvas.lineWidth = circle.strokeWidth;
            this.canvas.stroke();
        } else {
            this.canvas.fill();
        }
    }

    /**
     * 해당 유닛의 와이어프레임을 그림
     */
    private drawWireframe(unit: Unit): void {
        let quad = new Quad(unit.transform, 'rgba(0, 0, 0, 0.5)');
        quad.strokeWidth = 1;
        this.draw(quad);
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
     * 격자 활성화
     */
    private enableGrid(): void {
        /*
        let minX = this.cameraPosition.x - this.element.clientWidth * 0.5 / this.zoomSize;
        let maxX = this.cameraPosition.x + this.element.clientWidth * 0.5 / this.zoomSize;
        let minY = this.cameraPosition.y - this.element.clientHeight * 0.5 / this.zoomSize;
        let maxY = this.cameraPosition.y + this.element.clientHeight * 0.5 / this.zoomSize;


        let smallGridSize = Math.pow(10, Math.floor(-Math.sqrt(0.2 * (this.zoomSize - 1)) + 2));
        let largeGridSize = smallGridSize * 10;

        minX = Math.floor(minX - minX % 10);
        
        // ???
        for (let i = 0; i * smallGridSize <= maxX - minX; i++) {
            let x = minX + i * smallGridSize;

            if (i % 10 === 0) {
                let path = new Path(new Transform(new Vector2(x, minY), Vector2.ZERO, 0));
                path.width = 1 / this.zoomSize;
                path.pointList.push(new Vector2(x, minY));
                path.pointList.push(new Vector2(x, maxY));

                this.draw(path);
            }
        }*/
    }
    
    /**
     * element에 대한 이벤트 설정
     */
    private setupEvent(): void {
        this.element.addEventListener('wheel', e => {
            this.zoomSize -= e.deltaY / Math.abs(e.deltaY);

            if (this.zoomSize <= 0) {
                this.zoomSize = 1;
            }

            let tmp = 4 / this.zoomSize - 1;
            //console.log('-----------------');
            //console.log(this.zoomSize);
        });

        this.element.addEventListener('mousemove', e => {
            if (e.buttons === 2) {
                this.cameraPosition = Vector2.substract(this.cameraPosition, new Vector2(e.movementX / this.zoomSize, - e.movementY / this.zoomSize));
            }
        });

        this.element.addEventListener('mousedown', e => {
            if (e.button === 0) {
                for (let i = 0; i < this.environment.unitList.length; i++) {
                    let unit = this.environment.unitList[i];
                    let convertedPosition = this.getRealPixelPosition(unit.transform.position);
                    let convertedScale = this.convertMeterToPixel(unit.transform.scale);

                    if (e.offsetX > convertedPosition.x - convertedScale.y / 2 && e.offsetX < convertedPosition.x + convertedScale.y / 2 && e.offsetY > convertedPosition.y - convertedScale.x / 2 && e.offsetY < convertedPosition.y + convertedScale.x / 2) {
                        this._focused = unit;
                        return;
                    }
                }

                this._focused = this.environment;
            }
        });
    }
}
