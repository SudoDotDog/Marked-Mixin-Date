/**
 * @author WMXPY
 * @namespace MarkedMixinDate
 * @description Static
 * @override Integration Test
 */

import { MarkedResult, Sandbox } from "@sudoo/marked";
import { expect } from "chai";
import * as Chance from "chance";
import { assertSucceedMarkedResult } from "../util/assert-result";
import { createInjectTestSandbox } from "../util/sandbox";

describe('Given (Static) Case for Integration Test', (): void => {

    const chance: Chance.Chance = new Chance('integration-static');

    it('should be able to call date get static member method', async (): Promise<void> => {

        const sandbox: Sandbox = createInjectTestSandbox();

        const date: Date = chance.date();

        const result: MarkedResult = await sandbox.evaluate([
            `export default Date.parse("${date.toISOString()}");`,
        ].join('\n'));

        assertSucceedMarkedResult(result);

        expect(result.exports.default).to.be.deep.equal(date.getTime());
    });
});
