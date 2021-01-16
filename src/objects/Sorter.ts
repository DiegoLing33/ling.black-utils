/**
 * Функция сравнения
 */
export type SorterFn<T> = (a: T, b: T) => number;
export type SorterData<T> = { func: SorterFn<T>, order: 'ascend' | 'descend' };

/**
 * Создает сортировщик
 * @param func
 * @param ascend
 * @constructor
 */
export function CreateSorter<T>(func: SorterFn<T>, ascend: boolean = true): SorterData<T> {
    return {func, order: ascend ? "ascend" : "descend"};
}

export default class Sorter {

    /**
     * Стандартная функция сравнения
     *
     * @param a
     * @param b
     */
    static compareDefault = <T>(a: any, b: any) => a - b;

    /**
     * Функция сравнения строк
     *
     * @param a
     * @param b
     */
    static compareStrings = (a: string, b: string) => a.toLowerCase().trim()
        .localeCompare(b.toLowerCase().trim());


    /**
     * Функция сравнения
     *
     * @param a
     * @param b
     */
    static compare = (a: any, b: any) => typeof a === "string" ? Sorter.compareStrings(a, b)
        : Sorter.compareDefault(a, b);

    /**
     * Функция сравнения по полю
     *
     * @param field
     */
    static compareByField = <T>(field: keyof T) => (a: T, b: T) =>
        a[field] ? Sorter.compare(a[field], b[field]) : 0;

    /**
     * Выполняет множественную сортировку
     *
     * @param arr
     * @param sorters
     */
    static many<T>(arr: T[], sorters: (SorterFn<T> | SorterData<T>)[]) {
        return arr.sort((a, b) => {
            let res = 0;
            for (const sorter of sorters) res = res ||
                (typeof sorter === "function" ? sorter(a, b) :
                    (sorter.order === "ascend" ? sorter.func(a, b) : sorter.func(b, a)));
            return res;
        });
    }

    /**
     * Стандартная сортировка
     *
     * @param arr
     * @param sorter
     */
    static sort<T>(arr: T[], sorter: (SorterFn<T> | SorterData<T>)) {
        return arr.sort((a, b) =>
            typeof sorter === "function" ? sorter(a, b) :
                (sorter.order === "ascend" ? sorter.func(a, b) : sorter.func(b, a)))
    }
}