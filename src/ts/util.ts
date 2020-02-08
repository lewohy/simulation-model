export default class Util {
    public static getPropertyDescriptor(obj: any, prop: string): PropertyDescriptor {
        let desc: PropertyDescriptor;

        do {
            desc = Object.getOwnPropertyDescriptor(obj, prop);
        } while (!desc && (obj = Object.getPrototypeOf(obj)));

        return desc;
    }
}