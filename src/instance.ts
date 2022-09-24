/**
 * @author WMXPY
 * @namespace MarkedMixinDate
 * @description Instance
 */

import { ISandbox, MarkedNativeClassInstance } from "@sudoo/marked";
import { wrapMarkedMixinFunction } from "@sudoo/marked-mixin";
import { getMarkedMixinDateMember } from "./member";

export class MarkedDateMixinClassInstance extends MarkedNativeClassInstance {

    public static create(initial: any): MarkedDateMixinClassInstance {

        return new MarkedDateMixinClassInstance(initial);
    }

    private readonly _nativeDate: Date;

    private constructor(initial: any) {

        super();

        if (typeof initial === 'string' || typeof initial === 'number') {

            this._nativeDate = new Date(initial);
        } else if (initial instanceof MarkedDateMixinClassInstance) {

            this._nativeDate = new Date(initial.toNative());
        } else {

            this._nativeDate = new Date();
        }
    }

    public getMember(name: string, sandbox: ISandbox): any {

        const member = getMarkedMixinDateMember(this._nativeDate, name);

        if (typeof member === 'function') {
            return wrapMarkedMixinFunction(sandbox, member);
        }
        return member;
    }

    public toNative(): Date {

        return this._nativeDate;
    }
}
