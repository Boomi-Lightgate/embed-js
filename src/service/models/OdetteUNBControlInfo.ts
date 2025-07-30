/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type OdetteUNBControlInfo = {
    ackRequest?: boolean;
    appReference?: string;
    commAgreement?: string;
    interchangeAddress?: string;
    interchangeId?: string;
    interchangeIdQual?: OdetteUNBControlInfo.interchangeIdQual;
    interchangeSubAddress?: string;
    priority?: OdetteUNBControlInfo.priority;
    referencePassword?: string;
    referencePasswordQualifier?: OdetteUNBControlInfo.referencePasswordQualifier;
    syntaxId?: OdetteUNBControlInfo.syntaxId;
    syntaxVersion?: OdetteUNBControlInfo.syntaxVersion;
    testIndicator?: OdetteUNBControlInfo.testIndicator;
};
export namespace OdetteUNBControlInfo {
    export enum interchangeIdQual {
        ODETTEIDQUAL_NA = 'ODETTEIDQUAL_NA',
        ODETTEIDQUAL_1 = 'ODETTEIDQUAL_1',
        ODETTEIDQUAL_4 = 'ODETTEIDQUAL_4',
        ODETTEIDQUAL_5 = 'ODETTEIDQUAL_5',
        ODETTEIDQUAL_8 = 'ODETTEIDQUAL_8',
        ODETTEIDQUAL_9 = 'ODETTEIDQUAL_9',
        ODETTEIDQUAL_12 = 'ODETTEIDQUAL_12',
        ODETTEIDQUAL_14 = 'ODETTEIDQUAL_14',
        ODETTEIDQUAL_18 = 'ODETTEIDQUAL_18',
        ODETTEIDQUAL_22 = 'ODETTEIDQUAL_22',
        ODETTEIDQUAL_30 = 'ODETTEIDQUAL_30',
        ODETTEIDQUAL_31 = 'ODETTEIDQUAL_31',
        ODETTEIDQUAL_33 = 'ODETTEIDQUAL_33',
        ODETTEIDQUAL_34 = 'ODETTEIDQUAL_34',
        ODETTEIDQUAL_51 = 'ODETTEIDQUAL_51',
        ODETTEIDQUAL_52 = 'ODETTEIDQUAL_52',
        ODETTEIDQUAL_53 = 'ODETTEIDQUAL_53',
        ODETTEIDQUAL_54 = 'ODETTEIDQUAL_54',
        ODETTEIDQUAL_55 = 'ODETTEIDQUAL_55',
        ODETTEIDQUAL_57 = 'ODETTEIDQUAL_57',
        ODETTEIDQUAL_58 = 'ODETTEIDQUAL_58',
        ODETTEIDQUAL_59 = 'ODETTEIDQUAL_59',
        ODETTEIDQUAL_61 = 'ODETTEIDQUAL_61',
        ODETTEIDQUAL_63 = 'ODETTEIDQUAL_63',
        ODETTEIDQUAL_65 = 'ODETTEIDQUAL_65',
        ODETTEIDQUAL_80 = 'ODETTEIDQUAL_80',
        ODETTEIDQUAL_82 = 'ODETTEIDQUAL_82',
        ODETTEIDQUAL_84 = 'ODETTEIDQUAL_84',
        ODETTEIDQUAL_85 = 'ODETTEIDQUAL_85',
        ODETTEIDQUAL_86 = 'ODETTEIDQUAL_86',
        ODETTEIDQUAL_87 = 'ODETTEIDQUAL_87',
        ODETTEIDQUAL_89 = 'ODETTEIDQUAL_89',
        ODETTEIDQUAL_90 = 'ODETTEIDQUAL_90',
        ODETTEIDQUAL_91 = 'ODETTEIDQUAL_91',
        ODETTEIDQUAL_92 = 'ODETTEIDQUAL_92',
        ODETTEIDQUAL_103 = 'ODETTEIDQUAL_103',
        ODETTEIDQUAL_128 = 'ODETTEIDQUAL_128',
        ODETTEIDQUAL_129 = 'ODETTEIDQUAL_129',
        ODETTEIDQUAL_144 = 'ODETTEIDQUAL_144',
        ODETTEIDQUAL_145 = 'ODETTEIDQUAL_145',
        ODETTEIDQUAL_146 = 'ODETTEIDQUAL_146',
        ODETTEIDQUAL_147 = 'ODETTEIDQUAL_147',
        ODETTEIDQUAL_148 = 'ODETTEIDQUAL_148',
        ODETTEIDQUAL_Z01 = 'ODETTEIDQUAL_Z01',
        ODETTEIDQUAL_ZZZ = 'ODETTEIDQUAL_ZZZ',
        ODETTEIDQUAL_ZZ = 'ODETTEIDQUAL_ZZ',
    }
    export enum priority {
        NA = 'NA',
        A = 'A',
    }
    export enum referencePasswordQualifier {
        NA = 'NA',
        AA = 'AA',
        BB = 'BB',
    }
    export enum syntaxId {
        UNOA = 'UNOA',
        UNOB = 'UNOB',
        UNOC = 'UNOC',
        UNOD = 'UNOD',
        UNOE = 'UNOE',
        UNOF = 'UNOF',
    }
    export enum syntaxVersion {
        ODETTESYNTAXVERSION_1 = 'ODETTESYNTAXVERSION_1',
        ODETTESYNTAXVERSION_2 = 'ODETTESYNTAXVERSION_2',
        ODETTESYNTAXVERSION_3 = 'ODETTESYNTAXVERSION_3',
    }
    export enum testIndicator {
        ODETTETEST_NA = 'ODETTETEST_NA',
        ODETTETEST_1 = 'ODETTETEST_1',
    }
}

