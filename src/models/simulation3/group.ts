import { Facility } from "../../ts/unit";
import { SimulationModel3 } from "./model";
import { BulkProductLoadingPlace } from "./prop";
import { Vector2 } from "../../ts/types";

export abstract class FacilityGroup<T extends Facility> {
    protected model: SimulationModel3;
    protected readonly facilityList: Array<T>;

    public constructor(model: SimulationModel3) {
        this.model = model;
        this.facilityList = new Array<T>();
    }
    
    /**
     * 기본 세팅
     */
    protected abstract setup(): void;

    /**
     * 입구 시설 반환
     */
    public abstract getInPortFacility(): Facility;
}

export class BulkProductLoadingPlaceGroup extends FacilityGroup<BulkProductLoadingPlace> {
    public constructor(model: SimulationModel3) {
        super(model);

        this.setup();
    }

    /**
     * @override
     */
    protected setup(): void {
        this.facilityList[0] = new BulkProductLoadingPlace(this.model.environment);
        this.facilityList[0].name = '벌크 제품 적재실';
        this.facilityList[0].transform.position = new Vector2(150, 200);
        this.facilityList[0].maxCapacity = 6;

        this.facilityList[1] = new BulkProductLoadingPlace(this.model.environment);
        this.facilityList[1].name = '벌크 제품 적재실';
        this.facilityList[1].transform.position = new Vector2(50, 200);
        this.facilityList[1].maxCapacity = 12;

        this.facilityList[2] = new BulkProductLoadingPlace(this.model.environment);
        this.facilityList[2].name = '벌크 제품 적재실';
        this.facilityList[2].transform.position = new Vector2(-50, 200);
        this.facilityList[2].maxCapacity = 8;

        this.facilityList[3] = new BulkProductLoadingPlace(this.model.environment);
        this.facilityList[3].name = '벌크 제품 적재실';
        this.facilityList[3].transform.position = new Vector2(-150, 200);
        this.facilityList[3].maxCapacity = 4;

        this.facilityList.forEach(f => {
            f.register();
        });
    }
    
    /**
     * @override
     */
    public getInPortFacility(): Facility {
        return null;
    }
}