import { Model } from "./model";
import { PropertyEditor } from "./widget";

let model = new Model(<HTMLCanvasElement> document.getElementById('simulation-view'));
let propertyEditor = new PropertyEditor(model, <HTMLDivElement> document.getElementById('property-editor'));

/*
class A {
    private _a: number = 1;

    public get a(): number {
        return this._a;
    }
}

let a = new A();
let i = 4;

for (let x in a) {
    console.log(x, typeof(a[x]), a[x]);
    try {
        a[x] = i++;
    } catch (e) {
        console.log((<Error> e).name);
    }
}

for (let x in a) {
    console.log(x, typeof(a[x]), a[x]);
}*/