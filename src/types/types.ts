/**
 * The void type
 */
export type VoidType = undefined | null;

/**
 * Object could be void
 */
export type Voidable<T> = T | VoidType;

/**
 * Voidable value
 *
 * @param value
 * @constructor
 */
export function Voidable<T>(value?: Voidable<T>): Voidable<T>{
    return value;
}
