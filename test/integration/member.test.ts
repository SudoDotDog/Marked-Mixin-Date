/**
 * @author WMXPY
 * @namespace MarkedMixinDate
 * @description Member
 * @override Integration Test
 */

import { MarkedResult, Sandbox } from "@sudoo/marked";
import { expect } from "chai";
import * as Chance from "chance";
import { assertSucceedMarkedResult } from "../util/assert-result";
import { createInjectTestSandbox } from "../util/sandbox";

describe('Given (Member) Case for Integration Test', (): void => {

    const chance: Chance.Chance = new Chance('integration-member');

    it('should be able to call date get member method', async (): Promise<void> => {

        const sandbox: Sandbox = createInjectTestSandbox();

        const date: Date = new Date("2000-12-12T05:05:05.000Z");

        const result: MarkedResult = await sandbox.evaluate([
            `const date = new Date("${date.toISOString()}");`,
            `export default date.getFullYear();`,
        ].join('\n'));

        assertSucceedMarkedResult(result);

        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        expect(result.exports.default).to.be.deep.equal(2000);
    });

    it('should be able to call date set member method', async (): Promise<void> => {

        const sandbox: Sandbox = createInjectTestSandbox();

        const date: Date = new Date("2000-12-12T05:05:05.000Z");

        const result: MarkedResult = await sandbox.evaluate([
            `const date = new Date("${date.toISOString()}");`,
            `date.setFullYear(2001);`,
            `export default date.getFullYear();`,
        ].join('\n'));

        assertSucceedMarkedResult(result);

        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        expect(result.exports.default).to.be.deep.equal(2001);
    });

    it('should be able to call date set member method with additional argument', async (): Promise<void> => {

        const sandbox: Sandbox = createInjectTestSandbox();
        sandbox.setAdditionalArgument(chance.string());

        const date: Date = new Date("2000-12-12T05:05:05.000Z");

        const result: MarkedResult = await sandbox.evaluate([
            `const date = new Date("${date.toISOString()}");`,
            `date.setFullYear(2001);`,
            `export default date.getFullYear();`,
        ].join('\n'));

        assertSucceedMarkedResult(result);

        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        expect(result.exports.default).to.be.deep.equal(2001);
    });
});
