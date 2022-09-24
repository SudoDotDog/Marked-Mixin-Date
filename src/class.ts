/**
 * @author WMXPY
 * @namespace MarkedMixinDate
 * @description Class
 */

import { ISandbox, MarkedNativeClass } from "@sudoo/marked";
import { wrapMarkedMixinFunction } from "@sudoo/marked-mixin";
import { MarkedDateMixinClassInstance } from "./instance";
import { getMarkedMixinDateStaticMember } from "./static-member";

export const markedDateMixinClass = MarkedNativeClass.create(
    (initial: any) => {

        return MarkedDateMixinClassInstance.create(initial);
    },
    (name: string, sandbox: ISandbox) => {

        const member = getMarkedMixinDateStaticMember(name);

        if (typeof member === 'function') {
            return wrapMarkedMixinFunction(sandbox, member);
        }
        return member;
    },
);
