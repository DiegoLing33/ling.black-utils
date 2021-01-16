import {VoidType} from "../types/types";

/**
 * Возвращает true, если это объект
 * @param item
 * @returns {boolean}
 */
export function isObject(item: any): item is Object {
    return (item && typeof item === 'object' && !Array.isArray(item));
}

/**
 * Возвращает true, если это объект
 * @param item
 * @returns {boolean}
 */
export function isArray<T = any>(item: any): item is Array<T> {
    return (item && Array.isArray(item));
}

/**
 * Возвращает true, если массив не пустой
 * @param item
 */
export function isNotEmptyArray<T = any>(item: any): item is Array<T> {
    return isArray<T>(item) && item.length > 0;
}

/**
 * Возвращает true, если item - undefined или null
 * @param item
 */
export function isVoid(item: any): item is VoidType {
    return item === undefined || item === null;
}
