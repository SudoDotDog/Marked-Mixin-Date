/**
 * @author WMXPY
 * @namespace MarkedMixinDate
 * @description Member
 */

export const getMarkedMixinDateMember = (date: Date, name: string): any => {

    switch (name) {

        case 'getDate': return () => date.getDate();
        case 'getDay': return () => date.getDay();
        case 'getFullYear': return () => date.getFullYear();
        case 'getHours': return () => date.getHours();
        case 'getMilliseconds': return () => date.getMilliseconds();
        case 'getMinutes': return () => date.getMinutes();
        case 'getMonth': return () => date.getMonth() + 1;
        case 'getSeconds': return () => date.getSeconds();
        case 'getTime': return () => date.getTime();
        case 'getTimezoneOffset': return () => date.getTimezoneOffset();
        case 'getUTCDate': return () => date.getUTCDate();
        case 'getUTCDay': return () => date.getUTCDay();
        case 'getUTCFullYear': return () => date.getUTCFullYear();
        case 'getUTCHours': return () => date.getUTCHours();
        case 'getUTCMilliseconds': return () => date.getUTCMilliseconds();
        case 'getUTCMinutes': return () => date.getUTCMinutes();
        case 'getUTCMonth': return () => date.getUTCMonth() + 1;
        case 'getUTCSeconds': return () => date.getUTCSeconds();
        case 'setDate': return (value: number) => date.setDate(value);
        case 'setFullYear': return (value: number) => date.setFullYear(value);
        case 'setHours': return (value: number) => date.setHours(value);
        case 'setMilliseconds': return (value: number) => date.setMilliseconds(value);
        case 'setMinutes': return (value: number) => date.setMinutes(value);
        case 'setMonth': return (value: number) => date.setMonth(value - 1);
        case 'setSeconds': return (value: number) => date.setSeconds(value);
        case 'setTime': return (value: number) => date.setTime(value);
        case 'setUTCDate': return (value: number) => date.setUTCDate(value);
        case 'setUTCFullYear': return (value: number) => date.setUTCFullYear(value);
        case 'setUTCHours': return (value: number) => date.setUTCHours(value);
        case 'setUTCMilliseconds': return (value: number) => date.setUTCMilliseconds(value);
        case 'setUTCMinutes': return (value: number) => date.setUTCMinutes(value);
        case 'setUTCMonth': return (value: number) => date.setUTCMonth(value - 1);
        case 'setUTCSeconds': return (value: number) => date.setUTCSeconds(value);
        case 'toDateString': return () => date.toDateString();
        case 'toISOString': return () => date.toISOString();
        case 'toJSON': return () => date.toJSON();
        case 'toLocaleDateString': return () => date.toLocaleDateString();
        case 'toLocaleString': return () => date.toLocaleString();
        case 'toLocaleTimeString': return () => date.toLocaleTimeString();
        case 'toString': return () => date.toString();
        case 'toTimeString': return () => date.toTimeString();
        case 'toUTCString': return () => date.toUTCString();
    }

    return undefined;
};
