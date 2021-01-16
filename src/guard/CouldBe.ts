import {Voidable} from "../types/types";
import {isArray, isVoid} from "../objects/object";

export default class CouldBe {

    /**
     * Обязательно возвращает массив
     *
     * Бывают случаи, когда некоторые библиотеки возвращают массив или сущность,
     * намного удобней написать логику сразу для целого массива.
     *
     * @param object
     * @param defaultValue
     */
    static array<arrayOfType>(object: Voidable<arrayOfType | arrayOfType[]>, defaultValue: arrayOfType[] = []): arrayOfType[] {
        if (isVoid(object)) return defaultValue;
        if (isArray(object)) return object;
        return [object];
    }

}