/**
 * @author WMXPY
 * @namespace MarkedMixinDate
 * @description Factory
 */

import { MarkedDefaultMixinFactory } from "@sudoo/marked-mixin";
import { markedDateMixinClass } from "./class";

export const markedDateMixinFactory = MarkedDefaultMixinFactory.fromObject(
    markedDateMixinClass,
);
