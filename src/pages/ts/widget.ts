import { Model } from "./model";

export class PropertyEditor {
    public static readonly REFRESH_DELAY = 5;

    private model: Model;
    private nameView: HTMLDivElement;

    public constructor(model: Model, element: HTMLDivElement) {
        this.model = model;
        this.nameView = element.querySelector('#name-view');

        setInterval(() => {
            let unit = this.model.renderer.canvasDelegator.focusedUnit;
            if (unit) {
                this.nameView.innerText = unit.name;

                for (let key in unit) {
                    if (key != 'name') {
                        let value = unit[key];
                        if (typeof(value) === 'string') {
                            //console.log(key, value);
                        }
                    }
                }
            }
        }, PropertyEditor.REFRESH_DELAY);
    }
}