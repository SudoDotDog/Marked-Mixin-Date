/**
 * @author WMXPY
 * @namespace Util
 * @description Sandbox
 * @override Test
 */

import { Sandbox } from "@sudoo/marked";
import { markedDateMixinFactory } from "../../src";

export const createInjectTestSandbox = (): Sandbox => {

    const sandbox: Sandbox = Sandbox.fromAllEvaluators();
    sandbox.use(markedDateMixinFactory.createInjectMixin("Date"));

    return sandbox;
};

export const createProvideTestSandbox = (): Sandbox => {

    const sandbox: Sandbox = Sandbox.fromAllEvaluators();
    sandbox.use(markedDateMixinFactory.createProvideMixin("Date"));

    return sandbox;
};
