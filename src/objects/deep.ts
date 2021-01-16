/**
 * Deep merge two objects.
 * @param target
 * @param sources
 */
import {isObject} from "./object";

export default class Deep {

    /**
     * Глубокое соединение объектов
     * @param sources
     */
    public static merge(...sources: any[]): any {
        return sources.reduce((prev, obj) => {
            Object.keys(obj).forEach(key => {
                const pVal = prev[key];
                const oVal = obj[key];

                if (Array.isArray(pVal) && Array.isArray(oVal)) {
                    prev[key] = pVal.concat(...oVal);
                }
                else if (isObject(pVal) && isObject(oVal)) {
                    prev[key] = Deep.merge(pVal, oVal);
                }
                else {
                    prev[key] = oVal;
                }
            });

            return prev;
        }, {});
    }

    /**
     * Позволяет получить элемент объекта строковым литералом
     * @param obj
     * @param path
     */
    public static find(obj: any, path: string) {
        let paths = path.split('.'), current = obj, i;

        for (i = 0; i < paths.length; ++i) {
            if (current[paths[i]] == undefined) {
                return undefined;
            } else {
                current = current[paths[i]];
            }
        }
        return current;
    }

}
