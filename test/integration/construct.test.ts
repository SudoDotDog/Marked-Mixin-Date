/**
 * @author WMXPY
 * @namespace MarkedMixinDate
 * @description Construct
 * @override Integration Test
 */

import { MarkedResult, Sandbox } from "@sudoo/marked";
import { expect } from "chai";
import * as Chance from "chance";
import { assertSucceedMarkedResult } from "../util/assert-result";
import { createInjectTestSandbox } from "../util/sandbox";

describe('Given (Construct) Case for Integration Test', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('integration-construct');

    it('should be able to construct date class with inject', async (): Promise<void> => {

        const sandbox: Sandbox = createInjectTestSandbox();

        const result: MarkedResult = await sandbox.evaluate([
            `const date = new Date();`,
            `export default date;`,
        ].join('\n'));

        assertSucceedMarkedResult(result);

        expect(result.exports.default).to.be.equal("[Marked Date Mixin Instance]");
    });
});
