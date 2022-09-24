/**
 * @author WMXPY
 * @namespace MarkedMixinDate
 * @description Instance
 */

import { MarkedNativeClassInstance } from "@sudoo/marked";

export class MarkedDateMixinClassInstance extends MarkedNativeClassInstance {

    public static create(initial: any): MarkedDateMixinClassInstance {

        return new MarkedDateMixinClassInstance(initial);
    }

    private readonly _nativeDate: Date;

    private constructor(initial: any) {

        super();

        if (typeof initial === 'string' || typeof initial === 'number') {
            this._nativeDate = new Date(initial);
        } else {
            this._nativeDate = new Date();
        }
    }

    public getMember(name: string): any {

        throw new Error("Method not implemented.");
    }

    public toNative(): Date {

        return this._nativeDate;
    }
}
