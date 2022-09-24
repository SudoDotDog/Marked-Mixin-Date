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
import { createInjectTestSandbox, createProvideTestSandbox } from "../util/sandbox";

describe('Given (Construct) Case for Integration Test', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('integration-construct');

    it('should be able to construct date class with inject', async (): Promise<void> => {

        const sandbox: Sandbox = createInjectTestSandbox();

        const date: Date = new Date();

        const result: MarkedResult = await sandbox.evaluate([
            `const date = new Date("${date.toISOString()}");`,
            `export default date;`,
        ].join('\n'));

        assertSucceedMarkedResult(result);

        expect(result.exports.default).to.be.deep.equal(date);
    });

    it('should be able to construct date class with inject with initial value', async (): Promise<void> => {

        const sandbox: Sandbox = createInjectTestSandbox();

        const date: Date = new Date();

        const result: MarkedResult = await sandbox.evaluate([
            `const date = new Date("${date.toISOString()}");`,
            `export default date;`,
        ].join('\n'));

        assertSucceedMarkedResult(result);

        expect(result.exports.default).to.be.deep.equal(date);
    });

    it('should be able to construct date class with inject with initial date value', async (): Promise<void> => {

        const sandbox: Sandbox = createInjectTestSandbox();

        const date: Date = new Date();

        const result: MarkedResult = await sandbox.evaluate([
            `const date = new Date("${date.toISOString()}");`,
            `const date2 = new Date(date);`,
            `export default date2;`,
        ].join('\n'));

        assertSucceedMarkedResult(result);

        expect(result.exports.default).to.be.deep.equal(date);
    });

    it('should be able to construct date class with provide', async (): Promise<void> => {

        const sandbox: Sandbox = createProvideTestSandbox();

        const date: Date = new Date();

        const result: MarkedResult = await sandbox.evaluate([
            `import Date from 'Date';`,
            `const date = new Date("${date.toISOString()}");`,
            `export default date;`,
        ].join('\n'));

        assertSucceedMarkedResult(result);

        expect(result.exports.default).to.be.deep.equal(date);
    });
});
