/**
 * @author WMXPY
 * @namespace MarkedMixinDate
 * @description Class
 */

import { MarkedNativeClass } from "@sudoo/marked";
import { MarkedDateMixinClassInstance } from "./instance";

export const markedDateMixinClass = MarkedNativeClass.create(
    (initial: any) => {

        return MarkedDateMixinClassInstance.create(initial);
    },
    {

    },
);
