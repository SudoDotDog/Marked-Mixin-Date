/**
 * @author WMXPY
 * @namespace MarkedMixinDate
 * @description Instance
 */

import { MarkedNativeClassInstance } from "@sudoo/marked";

export class MarkedDateMixinClassInstance extends MarkedNativeClassInstance {

    public getMember(name: string): any {

        throw new Error("Method not implemented.");
    }

    public toNative(): string {

        return "[Marked Date Mixin Instance]";
    }
}
