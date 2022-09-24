/**
 * @author WMXPY
 * @namespace MarkedMixinDate
 * @description Factory
 */

import { MarkedExportsMixinFactory } from "@sudoo/marked-mixin";
import { MarkedDateMixinMethods } from "./methods";

export const markedDateMixinFactory = MarkedExportsMixinFactory.fromExports(
    MarkedDateMixinMethods,
);
