export default class Filter {

    /**
     * Фильтрует по нескольким критериям
     * @param arr
     * @param options
     */
    static many = <T>(arr: T[], options: Record<keyof T, any>): T[] => arr.filter((value: T) => {
        for (const key in options) {
            if (options.hasOwnProperty(key)) {
                if (value[key] !== options[key]) return false;
            } else {
                return false;
            }
        }
        return true;
    });

}