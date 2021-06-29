import {isSubArray} from "../../utils/contains-utils";

export class DataCache<T> {
    private _data: T[];

    constructor(data: T[]) {
        this._data = data;
    }

    add(data: T) {
        this._data.push(data);
    }

    remove(index: number) {
        delete this._data[index];
    }

    getAll() : T[] {
        return this._data;
    }

    get(index: number) : T {
        return this._data[index];
    }

    find(params: Partial<T>) : T {
        return this._data.find(value => {
            return isSubArray(value, params);
        });
    }

    filter(params: Partial<T>) : T[] {
        return this._data.filter(value => {
            return isSubArray(value, params);
        });
    }
}
