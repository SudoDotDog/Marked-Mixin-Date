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

        this._nativeDate = new Date(initial);
    }

    public getMember(name: string): any {

        throw new Error("Method not implemented.");
    }

    public toNative(): string {

        return "[Marked Date Mixin Instance]";
    }
}
