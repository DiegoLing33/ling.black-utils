import {isArray, isVoid} from "../objects/object";
import {Voidable} from "../types/types";

export default class Guard {

    /**
     * Void guard
     *
     * @param obj
     * @param defaultResult
     */
    public static void<T>(obj: Voidable<T>, defaultResult: T): T {
        if (isVoid((obj))) return defaultResult;
        return obj;
    }

    /**
     * Array guard
     *
     * @param obj
     * @param defaultResult
     */
    public static array<T>(obj: Voidable<T[]>, defaultResult: T[] = []): T[] {
        if (isVoid(obj) || !isArray(obj)) return defaultResult;
        return obj;
    }

}
