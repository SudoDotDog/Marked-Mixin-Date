/**
 * @author WMXPY
 * @namespace MarkedMixinDate
 * @description Static Member
 */

export const getMarkedMixinDateStaticMember = (name: string): any => {

    switch (name) {

        case 'now': return () => Date.now();
        case 'parse': return (value: string) => Date.parse(value);
    }

    return undefined;
};
