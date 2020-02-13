import { Environment, Facility, Agent, Road } from "../../ts/unit";
import { Renderer } from "../../ts/renderer";
import { Shape, Circle, Font, Quad, Path } from "../../ts/drawer";
import { Vector2, TruckArrivalData, Wait } from "../../ts/types";
import { Dynamics, Vehicle } from '../../ts/component';
import { Model } from '../../ts/model';
import { TruckGenerator, TruckDestination, WaitingPlace, InGateway, SeabulkTruckLinerPreparationPlace, WeightMesaurementPlace, DockProductLoadingPlace, OutGateway, ExternalDestination } from './prop';
import { BulkProductLoadingPlaceGroup } from './group';

export class SimulationModel3 extends Model {
    private truckGenerator: TruckGenerator;
    private truckDestination: TruckDestination;
    private watingPlace: WaitingPlace;
    private inGateway: InGateway;
    private linerPreparationPlace: SeabulkTruckLinerPreparationPlace;
    private weightMesaurementPlace1: WeightMesaurementPlace;
    
    private bulkProductLoadingPlaceGroup: BulkProductLoadingPlaceGroup;

    private dockProductLoadingPlace: DockProductLoadingPlace;
    private weightMesaurementPlace2: WeightMesaurementPlace;
    private outGateway: OutGateway;
    private externalDestination: ExternalDestination;

    public constructor(element: HTMLCanvasElement) {
        super(element);

        this.environment.timeScale = 50;

        this.setup();
    }

    /**
     * @override
     */
    protected setup(): void {
        this.truckGenerator = new TruckGenerator(this.environment);
        this.truckGenerator.name = '트럭 생성기';
        this.truckGenerator.transform.position = new Vector2(300, -50);

        this.truckDestination = new TruckDestination(this.environment);
        this.truckDestination.name = '트럭 도착지';
        this.truckDestination.transform.position = new Vector2(200, 0);

        this.watingPlace = new WaitingPlace(this.environment);
        this.watingPlace.name = '대기 장소';
        this.watingPlace.transform.position = new Vector2(150, 25);

        this.inGateway = new InGateway(this.environment);
        this.inGateway.name = '입구 게이트웨이';
        this.inGateway.transform.position = new Vector2(30, 0);

        this.linerPreparationPlace = new SeabulkTruckLinerPreparationPlace(this.environment);
        this.linerPreparationPlace.name = '씨벌크용 라이너 준비실';
        this.linerPreparationPlace.transform.position = new Vector2(225, 100);

        this.weightMesaurementPlace1 = new WeightMesaurementPlace(this.environment);
        this.weightMesaurementPlace1.name = '무게 측정실 1';
        this.weightMesaurementPlace1.transform.position = new Vector2(200, 150);

        this.bulkProductLoadingPlaceGroup = new BulkProductLoadingPlaceGroup(this);

        this.dockProductLoadingPlace = new DockProductLoadingPlace(this.environment);
        this.dockProductLoadingPlace.name = '도크 제품 적재실';
        this.dockProductLoadingPlace.transform.position = new Vector2(-100, 100);

        this.weightMesaurementPlace2 = new WeightMesaurementPlace(this.environment);
        this.weightMesaurementPlace2.name = '무게 측정실 2';
        this.weightMesaurementPlace2.transform.position = new Vector2(-200, 150);

        this.outGateway = new OutGateway(this.environment);
        this.outGateway.name = '출구 게이트웨이';
        this.outGateway.transform.position = new Vector2(10, 0);

        this.externalDestination = new ExternalDestination(this.environment);
        this.externalDestination.name = '외부 목적지';
        this.externalDestination.maxCapacity = 10000;
        this.externalDestination.transform.position = new Vector2(-200, -50);

        let tg2td = new Road(this.environment);
        {
            let startPoint = this.truckGenerator.getSidePosition(Math.PI);
            let endPoint = this.truckDestination.getSidePosition(Math.PI * 3 / 2);

            tg2td.addPoint(startPoint);
            tg2td.addPoint(new Vector2(endPoint.x + 10, startPoint.y));
            tg2td.addPoint(new Vector2(endPoint.x, startPoint.y + 10));
            tg2td.addPoint(endPoint);
            tg2td.portList.push(this.truckDestination);
        }

        let td2wp = new Road(this.environment);
        {
            let startPoint = this.truckDestination.getSidePosition(Math.PI / 2);
            let endPoint = this.watingPlace.getSidePosition(0);

            td2wp.addPoint(startPoint);

            td2wp.addPoint(new Vector2(startPoint.x, endPoint.y - 10));
            td2wp.addPoint(new Vector2(startPoint.x - 10, endPoint.y));

            td2wp.addPoint(endPoint);
            td2wp.portList.push(this.watingPlace);
        }

        let wp2ig = new Road(this.environment);
        {
            let startPoint = this.watingPlace.getSidePosition(Math.PI);
            let endPoint = this.inGateway.getSidePosition(Math.PI * 3 / 2);

            wp2ig.addPoint(startPoint);

            wp2ig.addPoint(new Vector2((startPoint.x + endPoint.x) / 2 + 10, startPoint.y));
            wp2ig.addPoint(new Vector2((startPoint.x + endPoint.x) / 2, startPoint.y - 10));

            wp2ig.addPoint(new Vector2((startPoint.x + endPoint.x) / 2, endPoint.y - 20 + 10));
            wp2ig.addPoint(new Vector2((startPoint.x + endPoint.x) / 2 - 10, endPoint.y - 20));

            wp2ig.addPoint(new Vector2(endPoint.x + 10, endPoint.y - 20));
            wp2ig.addPoint(new Vector2(endPoint.x, endPoint.y - 20 + 10));
            
            wp2ig.addPoint(endPoint);
            wp2ig.portList.push(this.inGateway);
        }

        let ig2wmp1 = new Road(this.environment);
        {
            let startPoint = this.inGateway.getSidePosition(Math.PI / 2);
            let endPoint = Vector2.substract(this.weightMesaurementPlace1.getSidePosition(Math.PI * 3 / 2), new Vector2(Road.LANE_WIDTH * 0.6, 0));

            ig2wmp1.addPoint(startPoint);

            ig2wmp1.addPoint(new Vector2(startPoint.x, startPoint.y + 50 - 10));
            ig2wmp1.addPoint(new Vector2(startPoint.x + 10, startPoint.y + 50));

            ig2wmp1.addPoint(new Vector2(endPoint.x - 10, startPoint.y + 50));
            ig2wmp1.addPoint(new Vector2(endPoint.x, startPoint.y + 50 + 10));

            ig2wmp1.addPoint(endPoint);
            ig2wmp1.portList.push(this.weightMesaurementPlace1);
        }

        let ig2lpp = new Road(this.environment);
        {
            let startPoint = Vector2.add(this.inGateway.getSidePosition(Math.PI / 2), new Vector2(Road.LANE_WIDTH * 1.5, 0));
            let endPoint = this.linerPreparationPlace.getSidePosition(Math.PI * 3 / 2);

            ig2lpp.addPoint(startPoint);

            ig2lpp.addPoint(new Vector2(startPoint.x, startPoint.y + 50 - Road.LANE_WIDTH * 1.5 - 10));
            ig2lpp.addPoint(new Vector2(startPoint.x + 10, startPoint.y + 50 - Road.LANE_WIDTH * 1.5));

            ig2lpp.addPoint(new Vector2(endPoint.x - 10, startPoint.y + 50 - Road.LANE_WIDTH * 1.5));
            ig2lpp.addPoint(new Vector2(endPoint.x, startPoint.y + 50 - Road.LANE_WIDTH * 1.5 + 10));

            ig2lpp.addPoint(endPoint);
            ig2lpp.portList.push(this.linerPreparationPlace);
        }

        let ig2dpp = new Road(this.environment);
        {
            let startPoint = Vector2.substract(this.inGateway.getSidePosition(Math.PI / 2), new Vector2(Road.LANE_WIDTH * 1.5, 0));
            let endPoint = this.dockProductLoadingPlace.getSidePosition(0);

            ig2dpp.addPoint(startPoint);

            ig2dpp.addPoint(new Vector2(startPoint.x, endPoint.y - 10));
            ig2dpp.addPoint(new Vector2(startPoint.x - 10, endPoint.y));
            
            ig2dpp.addPoint(endPoint);
            ig2dpp.portList.push(this.dockProductLoadingPlace);
        }

        let dpp2og = new Road(this.environment);
        {
            let startPoint = this.dockProductLoadingPlace.getSidePosition(Math.PI);
            let endPoint = Vector2.add(this.outGateway.getSidePosition(Math.PI / 2), new Vector2(Road.LANE_WIDTH * 0.75, 0));

            dpp2og.addPoint(startPoint);

            dpp2og.addPoint(new Vector2(startPoint.x - 20 + 10, startPoint.y));
            dpp2og.addPoint(new Vector2(startPoint.x - 20, startPoint.y - 10));

            dpp2og.addPoint(new Vector2(startPoint.x - 20, endPoint.y + 50 + Road.LANE_WIDTH * 1.5 + 10));
            dpp2og.addPoint(new Vector2(startPoint.x - 20 + 10, endPoint.y + 50 + Road.LANE_WIDTH * 1.5));

            dpp2og.addPoint(new Vector2(endPoint.x - 10, endPoint.y + 50 + Road.LANE_WIDTH * 1.5));
            dpp2og.addPoint(new Vector2(endPoint.x, endPoint.y + 50 + Road.LANE_WIDTH * 1.5 - 10));

            dpp2og.addPoint(endPoint);
            dpp2og.portList.push(this.outGateway);
        }

        let lpp2wmp1 = new Road(this.environment);
        {
            let startPoint = this.linerPreparationPlace.getSidePosition(Math.PI / 2);
            let endPoint = Vector2.add(this.weightMesaurementPlace1.getSidePosition(Math.PI * 3 / 2), new Vector2(Road.LANE_WIDTH * 0.75, 0));

            lpp2wmp1.addPoint(startPoint);
            lpp2wmp1.addPoint(new Vector2(startPoint.x, startPoint.y + ((endPoint.y - startPoint.y) / 3)));
            lpp2wmp1.addPoint(new Vector2(endPoint.x, startPoint.y + ((endPoint.y - startPoint.y) * 2 / 3)));
            lpp2wmp1.addPoint(endPoint);
            lpp2wmp1.portList.push(this.weightMesaurementPlace1);
        }

        /*
        let wmp12bpp = new Road(this.environment);
        {
            let startPoint = this.weightMesaurementPlace1.getSidePosition(Math.PI / 2);
            let endPoint = this.bulkProductLoadingPlace.getSidePosition(0);

            wmp12bpp.addPoint(startPoint);

            wmp12bpp.addPoint(new Vector2(startPoint.x, endPoint.y - 10));
            wmp12bpp.addPoint(new Vector2(startPoint.x - 10, endPoint.y));

            wmp12bpp.addPoint(endPoint);
            wmp12bpp.portList.push(this.bulkProductLoadingPlace);
        }

        let bpp2wmp2 = new Road(this.environment);
        {
            let startPoint = this.bulkProductLoadingPlace.getSidePosition(Math.PI);
            let endPoint = this.weightMesaurementPlace2.getSidePosition(Math.PI / 2);

            bpp2wmp2.addPoint(startPoint);

            bpp2wmp2.addPoint(new Vector2(endPoint.x + 10, startPoint.y));
            bpp2wmp2.addPoint(new Vector2(endPoint.x, startPoint.y - 10));

            bpp2wmp2.addPoint(endPoint);
            bpp2wmp2.portList.push(this.weightMesaurementPlace2);
        }
        */

        let wmp22og = new Road(this.environment);
        {
            let startPoint = this.weightMesaurementPlace2.getSidePosition(Math.PI * 3 / 2);
            let endPoint = Vector2.substract(this.outGateway.getSidePosition(Math.PI / 2), new Vector2(Road.LANE_WIDTH * 0.75, 0));

            wmp22og.addPoint(startPoint);

            wmp22og.addPoint(new Vector2(startPoint.x, endPoint.y + 50 + 10));
            wmp22og.addPoint(new Vector2(startPoint.x + 10, endPoint.y + 50));

            wmp22og.addPoint(new Vector2(endPoint.x - 10, endPoint.y + 50));
            wmp22og.addPoint(new Vector2(endPoint.x, endPoint.y + 50 - 10));

            wmp22og.addPoint(endPoint);
            wmp22og.portList.push(this.outGateway);
        }

        let og2ed = new Road(this.environment);
        {
            let startPoint = this.outGateway.getSidePosition(Math.PI * 3 / 2);
            let endPoint = this.externalDestination.getSidePosition(0);

            og2ed.addPoint(startPoint);

            og2ed.addPoint(new Vector2(startPoint.x, endPoint.y + 10));
            og2ed.addPoint(new Vector2(startPoint.x - 10, endPoint.y));

            og2ed.addPoint(endPoint);
            og2ed.portList.push(this.externalDestination);
        }

        this.truckGenerator.portList.push(tg2td);
        this.truckDestination.portList.push(td2wp);
        this.watingPlace.portList.push(wp2ig);
        this.inGateway.portList.push(ig2dpp);
        this.inGateway.portList.push(ig2wmp1);
        this.inGateway.portList.push(ig2lpp);
        this.linerPreparationPlace.portList.push(lpp2wmp1);
        //this.weightMesaurementPlace1.portList.push(wmp12bpp);
        
        this.dockProductLoadingPlace.portList.push(dpp2og);
        this.weightMesaurementPlace2.portList.push(wmp22og);
        this.outGateway.portList.push(og2ed);

        this.truckGenerator.register();
        this.truckDestination.register();
        this.watingPlace.register();
        this.inGateway.register();
        this.linerPreparationPlace.register();
        this.weightMesaurementPlace1.register();
        
        this.dockProductLoadingPlace.register();
        this.weightMesaurementPlace2.register();
        this.outGateway.register();
        this.externalDestination.register();

        tg2td.register();
        td2wp.register();
        wp2ig.register();
        ig2wmp1.register();
        ig2lpp.register();
        ig2dpp.register();
        dpp2og.register();
        lpp2wmp1.register();
        
        wmp22og.register();
        og2ed.register();
    }
}