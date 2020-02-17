import { Environment, Facility, Agent, Road } from "../../ts/unit";
import { Renderer } from "../../ts/renderer";
import { Shape, Circle, Font, Quad, Path } from "../../ts/drawer";
import { Vector2, TruckArrivalData, Wait } from "../../ts/types";
import { Dynamics, Vehicle } from '../../ts/component';
import { Model } from '../../ts/model';
import { TruckGenerator, TruckDestination, WaitingPlace, InGateway, SeabulkTruckLinerPreparationPlace, WeightMesaurementPlace, DockProductLoadingPlace, OutGateway, ExternalDestination, BulkProductLoadingPlace, BulkIntersectionControlTower, TankBulkTruck, Truck, BulkIntersection } from './prop';

export class SimulationModel3 extends Model {
    private truckGenerator: TruckGenerator;
    private truckDestination: TruckDestination;
    private watingPlace: WaitingPlace;
    private inGateway: InGateway;
    private linerPreparationPlace: SeabulkTruckLinerPreparationPlace;
    private weightMesaurementPlace1: WeightMesaurementPlace;
    private bulkIntersectionControlTower: BulkIntersectionControlTower;
    private bulkProductLoadingPlaceList: Array<BulkProductLoadingPlace>;
    private forBulkIntersectionList: Array<BulkIntersection>;
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

        //////////////////////////////////////////////////////////////////////////////////////////////////////

        this.bulkIntersectionControlTower = new BulkIntersectionControlTower(this.environment);
        this.bulkIntersectionControlTower.name = '벌크 교차로 관제탑';
        this.bulkIntersectionControlTower.transform.position = new Vector2(225, 225);

        //////////////////////////////////////////////////////////////////////////////////////////////////////

        this.bulkProductLoadingPlaceList = new Array<BulkProductLoadingPlace>();
        
        this.bulkProductLoadingPlaceList[0] = new BulkProductLoadingPlace(this.environment);
        this.bulkProductLoadingPlaceList[0].name = '벌크 제품 적재실';
        this.bulkProductLoadingPlaceList[0].maxCapacity = 6;
        this.bulkProductLoadingPlaceList[0].transform.position = new Vector2(135, 200);

        this.bulkProductLoadingPlaceList[1] = new BulkProductLoadingPlace(this.environment);
        this.bulkProductLoadingPlaceList[1].name = '벌크 제품 적재실';
        this.bulkProductLoadingPlaceList[1].maxCapacity = 12;
        this.bulkProductLoadingPlaceList[1].transform.position = new Vector2(45, 200);

        this.bulkProductLoadingPlaceList[2] = new BulkProductLoadingPlace(this.environment);
        this.bulkProductLoadingPlaceList[2].name = '벌크 제품 적재실';
        this.bulkProductLoadingPlaceList[2].maxCapacity = 8;
        this.bulkProductLoadingPlaceList[2].transform.position = new Vector2(-45, 200);

        this.bulkProductLoadingPlaceList[3] = new BulkProductLoadingPlace(this.environment);
        this.bulkProductLoadingPlaceList[3].name = '벌크 제품 적재실';
        this.bulkProductLoadingPlaceList[3].maxCapacity = 4;
        this.bulkProductLoadingPlaceList[3].transform.position = new Vector2(-135, 200);

        //////////////////////////////////////////////////////////////////////////////////////////////////////

        this.forBulkIntersectionList = new Array<BulkIntersection>();

        this.forBulkIntersectionList[0] = new BulkIntersection(this.environment);
        this.forBulkIntersectionList[0].transform.position = Vector2.add(this.bulkProductLoadingPlaceList[0].getSidePosition(0), new Vector2(35, 20));

        this.forBulkIntersectionList[1] = new BulkIntersection(this.environment);
        this.forBulkIntersectionList[1].transform.position = Vector2.add(this.bulkProductLoadingPlaceList[1].getSidePosition(0), new Vector2(35, 20));

        this.forBulkIntersectionList[2] = new BulkIntersection(this.environment);
        this.forBulkIntersectionList[2].transform.position = Vector2.add(this.bulkProductLoadingPlaceList[2].getSidePosition(0), new Vector2(35, 20));

        this.forBulkIntersectionList[3] = new BulkIntersection(this.environment);
        this.forBulkIntersectionList[3].transform.position = Vector2.add(this.bulkProductLoadingPlaceList[3].getSidePosition(0), new Vector2(35, 20));

        //////////////////////////////////////////////////////////////////////////////////////////////////////

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
        }

        //////////////////////////////////////////////////////////////////////////////////////////////////////

        let td2wp = new Road(this.environment);
        {
            let startPoint = this.truckDestination.getSidePosition(Math.PI / 2);
            let endPoint = this.watingPlace.getSidePosition(0);

            td2wp.addPoint(startPoint);

            td2wp.addPoint(new Vector2(startPoint.x, endPoint.y - 10));
            td2wp.addPoint(new Vector2(startPoint.x - 10, endPoint.y));

            td2wp.addPoint(endPoint);
        }

        //////////////////////////////////////////////////////////////////////////////////////////////////////

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
        }

        //////////////////////////////////////////////////////////////////////////////////////////////////////

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
        }

        //////////////////////////////////////////////////////////////////////////////////////////////////////

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
        }

        //////////////////////////////////////////////////////////////////////////////////////////////////////

        let ig2dpp = new Road(this.environment);
        {
            let startPoint = Vector2.substract(this.inGateway.getSidePosition(Math.PI / 2), new Vector2(Road.LANE_WIDTH * 1.5, 0));
            let endPoint = this.dockProductLoadingPlace.getSidePosition(0);

            ig2dpp.addPoint(startPoint);

            ig2dpp.addPoint(new Vector2(startPoint.x, endPoint.y - 10));
            ig2dpp.addPoint(new Vector2(startPoint.x - 10, endPoint.y));
            
            ig2dpp.addPoint(endPoint);
        }

        //////////////////////////////////////////////////////////////////////////////////////////////////////

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
        }

        //////////////////////////////////////////////////////////////////////////////////////////////////////

        let lpp2wmp1 = new Road(this.environment);
        {
            let startPoint = this.linerPreparationPlace.getSidePosition(Math.PI / 2);
            let endPoint = Vector2.add(this.weightMesaurementPlace1.getSidePosition(Math.PI * 3 / 2), new Vector2(Road.LANE_WIDTH * 0.75, 0));

            lpp2wmp1.addPoint(startPoint);

            lpp2wmp1.addPoint(new Vector2(startPoint.x, startPoint.y + (endPoint.y - startPoint.y) / 2 - 5));
            lpp2wmp1.addPoint(new Vector2(startPoint.x - 5, startPoint.y + (endPoint.y - startPoint.y) / 2));

            lpp2wmp1.addPoint(new Vector2(endPoint.x + 5, startPoint.y + (endPoint.y - startPoint.y) / 2));
            lpp2wmp1.addPoint(new Vector2(endPoint.x, startPoint.y + (endPoint.y - startPoint.y) / 2 + 5));
            
            lpp2wmp1.addPoint(endPoint);
        }

        //////////////////////////////////////////////////////////////////////////////////////////////////////

        let wmp12bpp0p = new Road(this.environment);
        {
            let startPoint = this.weightMesaurementPlace1.getSidePosition(Math.PI / 2);
            let endPoint = Vector2.add(this.bulkProductLoadingPlaceList[0].getSidePosition(0), new Vector2(35, 20));

            wmp12bpp0p.addPoint(startPoint);

            wmp12bpp0p.addPoint(new Vector2(startPoint.x, endPoint.y - 10));
            wmp12bpp0p.addPoint(new Vector2(startPoint.x - 10, endPoint.y));

            wmp12bpp0p.addPoint(endPoint);
        }

        let bpp0p2bpp0 = new Road(this.environment);
        {
            let startPoint = Vector2.add(this.bulkProductLoadingPlaceList[0].getSidePosition(0), new Vector2(35, 20));
            let endPoint = this.bulkProductLoadingPlaceList[0].getSidePosition(0);

            bpp0p2bpp0.addPoint(startPoint);

            bpp0p2bpp0.addPoint(new Vector2(endPoint.x + 15, endPoint.y));

            bpp0p2bpp0.addPoint(endPoint);
        }

        let bpp02wmp2p = new Road(this.environment);
        {
            let startPoint = this.bulkProductLoadingPlaceList[0].getSidePosition(Math.PI);
            let endPoint = Vector2.add(this.bulkProductLoadingPlaceList[0].getSidePosition(Math.PI), new Vector2(-35, 20));

            bpp02wmp2p.addPoint(startPoint);

            bpp02wmp2p.addPoint(new Vector2(startPoint.x - 15, startPoint.y));

            bpp02wmp2p.addPoint(endPoint);
        }

        let bpp02wmp2 = new Road(this.environment);
        {
            let startPoint = Vector2.add(this.bulkProductLoadingPlaceList[1].getSidePosition(0), new Vector2(35, 20));
            let endPoint = Vector2.substract(this.weightMesaurementPlace2.getSidePosition(Math.PI / 2), new Vector2(Road.LANE_WIDTH * 2.25, 0));

            bpp02wmp2.addPoint(startPoint);

            bpp02wmp2.addPoint(new Vector2(startPoint.x - Road.LANE_WIDTH * 4.5, startPoint.y + Road.LANE_WIDTH * 4.5));
            bpp02wmp2.addPoint(new Vector2(endPoint.x + 10, startPoint.y + Road.LANE_WIDTH * 4.5));
            bpp02wmp2.addPoint(new Vector2(endPoint.x, startPoint.y + Road.LANE_WIDTH * 4.5 - 10));

            bpp02wmp2.addPoint(endPoint);
        }

        //////////////////////////////////////////////////////////////////////////////////////////////////////

        let bpp0p2bpp1p = new Road(this.environment);
        {
            let startPoint = Vector2.add(this.bulkProductLoadingPlaceList[0].getSidePosition(0), new Vector2(35, 20));
            let endPoint = Vector2.add(this.bulkProductLoadingPlaceList[1].getSidePosition(0), new Vector2(35, 20));

            bpp0p2bpp1p.addPoint(startPoint);

            bpp0p2bpp1p.addPoint(endPoint);
        }

        let bpp1p2bpp1 = new Road(this.environment);
        {
            let startPoint = Vector2.add(this.bulkProductLoadingPlaceList[1].getSidePosition(0), new Vector2(35, 20));
            let endPoint = this.bulkProductLoadingPlaceList[1].getSidePosition(0);

            bpp1p2bpp1.addPoint(startPoint);

            bpp1p2bpp1.addPoint(new Vector2(endPoint.x + 15, endPoint.y));

            bpp1p2bpp1.addPoint(endPoint);
        }

        let bpp12wmp2p = new Road(this.environment);
        {
            let startPoint = this.bulkProductLoadingPlaceList[1].getSidePosition(Math.PI);
            let endPoint = Vector2.add(this.bulkProductLoadingPlaceList[1].getSidePosition(Math.PI), new Vector2(-35, 20));

            bpp12wmp2p.addPoint(startPoint);

            bpp12wmp2p.addPoint(new Vector2(startPoint.x - 15, startPoint.y));

            bpp12wmp2p.addPoint(endPoint);
        }

        let bpp12wmp2 = new Road(this.environment);
        {
            let startPoint = Vector2.add(this.bulkProductLoadingPlaceList[2].getSidePosition(0), new Vector2(35, 20));
            let endPoint = Vector2.substract(this.weightMesaurementPlace2.getSidePosition(Math.PI / 2), new Vector2(Road.LANE_WIDTH * 0.75, 0));

            bpp12wmp2.addPoint(startPoint);

            bpp12wmp2.addPoint(new Vector2(startPoint.x - Road.LANE_WIDTH * 3, startPoint.y + Road.LANE_WIDTH * 3));
            bpp12wmp2.addPoint(new Vector2(endPoint.x + 10, startPoint.y + Road.LANE_WIDTH * 3));
            bpp12wmp2.addPoint(new Vector2(endPoint.x, startPoint.y + Road.LANE_WIDTH * 3 - 10));

            bpp12wmp2.addPoint(endPoint);
        }

        //////////////////////////////////////////////////////////////////////////////////////////////////////

        let bpp1p2bpp2p = new Road(this.environment);
        {
            let startPoint = Vector2.add(this.bulkProductLoadingPlaceList[1].getSidePosition(0), new Vector2(35, 20));
            let endPoint = Vector2.add(this.bulkProductLoadingPlaceList[2].getSidePosition(0), new Vector2(35, 20));

            bpp1p2bpp2p.addPoint(startPoint);

            bpp1p2bpp2p.addPoint(endPoint);
        }

        let bpp2p2bpp2 = new Road(this.environment);
        {
            let startPoint = Vector2.add(this.bulkProductLoadingPlaceList[2].getSidePosition(0), new Vector2(35, 20));
            let endPoint = this.bulkProductLoadingPlaceList[2].getSidePosition(0);

            bpp2p2bpp2.addPoint(startPoint);

            bpp2p2bpp2.addPoint(new Vector2(endPoint.x + 15, endPoint.y));

            bpp2p2bpp2.addPoint(endPoint);
        }

        let bpp22wmp2p = new Road(this.environment);
        {
            let startPoint = this.bulkProductLoadingPlaceList[2].getSidePosition(Math.PI);
            let endPoint = Vector2.add(this.bulkProductLoadingPlaceList[2].getSidePosition(Math.PI), new Vector2(-35, 20));

            bpp22wmp2p.addPoint(startPoint);

            bpp22wmp2p.addPoint(new Vector2(startPoint.x - 15, startPoint.y));

            bpp22wmp2p.addPoint(endPoint);
        }

        let bpp22wmp2 = new Road(this.environment);
        {
            let startPoint = Vector2.add(this.bulkProductLoadingPlaceList[3].getSidePosition(0), new Vector2(35, 20));
            let endPoint = Vector2.add(this.weightMesaurementPlace2.getSidePosition(Math.PI / 2), new Vector2(Road.LANE_WIDTH * 0.75, 0));

            bpp22wmp2.addPoint(startPoint);

            bpp22wmp2.addPoint(new Vector2(startPoint.x - Road.LANE_WIDTH * 1.5, startPoint.y + Road.LANE_WIDTH * 1.5));
            bpp22wmp2.addPoint(new Vector2(endPoint.x + 10, startPoint.y + Road.LANE_WIDTH * 1.5));
            bpp22wmp2.addPoint(new Vector2(endPoint.x, startPoint.y + Road.LANE_WIDTH * 1.5 - 10));

            bpp22wmp2.addPoint(endPoint);
        }

        //////////////////////////////////////////////////////////////////////////////////////////////////////

        let bpp2p2bpp3p = new Road(this.environment);
        {
            let startPoint = Vector2.add(this.bulkProductLoadingPlaceList[2].getSidePosition(0), new Vector2(35, 20));
            let endPoint = Vector2.add(this.bulkProductLoadingPlaceList[3].getSidePosition(0), new Vector2(35, 20));

            bpp2p2bpp3p.addPoint(startPoint);

            bpp2p2bpp3p.addPoint(endPoint);
        }

        let bpp3p2bpp3 = new Road(this.environment);
        {
            let startPoint = Vector2.add(this.bulkProductLoadingPlaceList[3].getSidePosition(0), new Vector2(35, 20));
            let endPoint = this.bulkProductLoadingPlaceList[3].getSidePosition(0);

            bpp3p2bpp3.addPoint(startPoint);

            bpp3p2bpp3.addPoint(new Vector2(endPoint.x + 15, endPoint.y));

            bpp3p2bpp3.addPoint(endPoint);
        }

        let bpp32wmp2 = new Road(this.environment);
        {
            let startPoint = this.bulkProductLoadingPlaceList[3].getSidePosition(Math.PI);
            let endPoint = Vector2.add(this.weightMesaurementPlace2.getSidePosition(Math.PI / 2), new Vector2(Road.LANE_WIDTH * 2.25, 0));

            bpp32wmp2.addPoint(startPoint);

            bpp32wmp2.addPoint(new Vector2(startPoint.x - 15, startPoint.y));
            bpp32wmp2.addPoint(new Vector2(startPoint.x - 35, startPoint.y + 20));
            bpp32wmp2.addPoint(new Vector2(endPoint.x + 10, startPoint.y + 20));
            bpp32wmp2.addPoint(new Vector2(endPoint.x, startPoint.y + 20 - 10));

            bpp32wmp2.addPoint(endPoint);
        }

        //////////////////////////////////////////////////////////////////////////////////////////////////////

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
        }

        let og2ed = new Road(this.environment);
        {
            let startPoint = this.outGateway.getSidePosition(Math.PI * 3 / 2);
            let endPoint = this.externalDestination.getSidePosition(0);

            og2ed.addPoint(startPoint);

            og2ed.addPoint(new Vector2(startPoint.x, endPoint.y + 10));
            og2ed.addPoint(new Vector2(startPoint.x - 10, endPoint.y));

            og2ed.addPoint(endPoint);
        }

        //////////////////////////////////////////////////////////////////////////////////////////////////////

        this.truckGenerator.portList.push(tg2td);
        this.truckDestination.portList.push(td2wp);
        this.watingPlace.portList.push(wp2ig);
        this.inGateway.portList.push(ig2dpp);
        this.inGateway.portList.push(ig2wmp1);
        this.inGateway.portList.push(ig2lpp);
        this.linerPreparationPlace.portList.push(lpp2wmp1);
        this.weightMesaurementPlace1.portList.push(wmp12bpp0p);

        this.bulkProductLoadingPlaceList[0].portList.push(bpp02wmp2p);
        this.bulkProductLoadingPlaceList[1].portList.push(bpp12wmp2p);
        this.bulkProductLoadingPlaceList[2].portList.push(bpp22wmp2p);
        this.bulkProductLoadingPlaceList[3].portList.push(bpp32wmp2);

        this.forBulkIntersectionList[0].addOutPort(0, bpp0p2bpp0);
        this.forBulkIntersectionList[0].addOutPort(1, bpp0p2bpp1p);

        this.forBulkIntersectionList[1].addOutPort(0, bpp1p2bpp1);
        this.forBulkIntersectionList[1].addOutPort(0, bpp1p2bpp2p);
        this.forBulkIntersectionList[1].addOutPort(1, bpp02wmp2);

        this.forBulkIntersectionList[2].addOutPort(0, bpp2p2bpp2);
        this.forBulkIntersectionList[2].addOutPort(0, bpp2p2bpp3p);
        this.forBulkIntersectionList[2].addOutPort(1, bpp12wmp2);

        this.forBulkIntersectionList[3].addOutPort(0, bpp3p2bpp3);
        this.forBulkIntersectionList[3].addOutPort(0, bpp32wmp2);
        this.forBulkIntersectionList[3].addOutPort(1, bpp22wmp2);
        
        this.dockProductLoadingPlace.portList.push(dpp2og);
        this.weightMesaurementPlace2.portList.push(wmp22og);
        this.outGateway.portList.push(og2ed);

        //////////////////////////////////////////////////////////////////////////////////////////////////////

        this.forBulkIntersectionList.forEach(i => {
            this.bulkIntersectionControlTower.intersectionList.push(i);
        });

        //////////////////////////////////////////////////////////////////////////////////////////////////////

        this.forBulkIntersectionList[0].controlTower = this.bulkIntersectionControlTower;
        this.forBulkIntersectionList[1].controlTower = this.bulkIntersectionControlTower;
        this.forBulkIntersectionList[2].controlTower = this.bulkIntersectionControlTower;
        this.forBulkIntersectionList[3].controlTower = this.bulkIntersectionControlTower;

        //////////////////////////////////////////////////////////////////////////////////////////////////////

        this.bulkIntersectionControlTower.referenceFacilityList

        //////////////////////////////////////////////////////////////////////////////////////////////////////

        this.truckGenerator.register();
        this.truckDestination.register();
        this.watingPlace.register();
        this.inGateway.register();
        this.linerPreparationPlace.register();
        this.weightMesaurementPlace1.register();
        this.bulkIntersectionControlTower.register();
        this.bulkProductLoadingPlaceList.forEach(e => {
            e.register();
        });
        this.forBulkIntersectionList.forEach(e => {
            e.register();
        });
        this.dockProductLoadingPlace.register();
        this.weightMesaurementPlace2.register();
        this.outGateway.register();
        this.externalDestination.register();

        //////////////////////////////////////////////////////////////////////////////////////////////////////
        
        tg2td.addOutPort(0, this.truckDestination);
        td2wp.addOutPort(0, this.watingPlace);
        wp2ig.addOutPort(0, this.inGateway);
        ig2wmp1.addOutPort(0, this.weightMesaurementPlace1);
        ig2lpp.addOutPort(0, this.linerPreparationPlace);
        ig2dpp.addOutPort(0, this.dockProductLoadingPlace);
        dpp2og.addOutPort(0, this.outGateway);
        lpp2wmp1.addOutPort(0, this.weightMesaurementPlace1);

        wmp12bpp0p.addOutPort(0, this.forBulkIntersectionList[0]);
        bpp0p2bpp0.addOutPort(0, this.bulkProductLoadingPlaceList[0]);
        bpp02wmp2.addOutPort(0, this.weightMesaurementPlace2);
        
        bpp0p2bpp1p.addOutPort(0, this.forBulkIntersectionList[1]);
        bpp02wmp2p.addOutPort(0, this.forBulkIntersectionList[1]);
        bpp1p2bpp1.addOutPort(0, this.bulkProductLoadingPlaceList[1]);
        bpp12wmp2.addOutPort(0, this.weightMesaurementPlace2);
        
        bpp1p2bpp2p.addOutPort(0, this.forBulkIntersectionList[2]);
        bpp12wmp2p.addOutPort(0, this.forBulkIntersectionList[2]);
        bpp2p2bpp2.addOutPort(0, this.bulkProductLoadingPlaceList[2]);
        bpp22wmp2.addOutPort(0, this.weightMesaurementPlace2);
        
        bpp2p2bpp3p.addOutPort(0, this.forBulkIntersectionList[3]);
        bpp22wmp2p.addOutPort(0, this.forBulkIntersectionList[3]);
        bpp3p2bpp3.addOutPort(0, this.bulkProductLoadingPlaceList[3]);
        bpp32wmp2.addOutPort(0, this.weightMesaurementPlace2);

        wmp22og.addOutPort(0, this.outGateway);
        og2ed.addOutPort(0, this.externalDestination);

        //////////////////////////////////////////////////////////////////////////////////////////////////////

        tg2td.register();
        td2wp.register();
        wp2ig.register();
        ig2wmp1.register();
        ig2lpp.register();
        ig2dpp.register();
        dpp2og.register();
        lpp2wmp1.register();

        wmp12bpp0p.register();
        bpp0p2bpp0.register();
        bpp02wmp2p.register();
        bpp02wmp2.register();

        bpp0p2bpp1p.register();
        bpp1p2bpp1.register();
        bpp12wmp2p.register();
        bpp12wmp2.register();

        bpp1p2bpp2p.register();
        bpp2p2bpp2.register();
        bpp22wmp2p.register();
        bpp22wmp2.register();

        bpp2p2bpp3p.register();
        bpp3p2bpp3.register();
        bpp32wmp2.register();

        wmp22og.register();
        og2ed.register();

    }
}