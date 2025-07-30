/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UNBControlInfo = {
    ackRequest?: boolean;
    appReference?: string;
    commAgreement?: string;
    interchangeAddress?: string;
    interchangeId?: string;
    interchangeIdQual?: UNBControlInfo.interchangeIdQual;
    interchangeSubAddress?: string;
    priority?: UNBControlInfo.priority;
    referencePassword?: string;
    referencePasswordQualifier?: UNBControlInfo.referencePasswordQualifier;
    syntaxId?: UNBControlInfo.syntaxId;
    syntaxVersion?: UNBControlInfo.syntaxVersion;
    testIndicator?: UNBControlInfo.testIndicator;
};
export namespace UNBControlInfo {
    export enum interchangeIdQual {
        EDIFACTIDQUAL_NA = 'EDIFACTIDQUAL_NA',
        EDIFACTIDQUAL_1 = 'EDIFACTIDQUAL_1',
        EDIFACTIDQUAL_4 = 'EDIFACTIDQUAL_4',
        EDIFACTIDQUAL_5 = 'EDIFACTIDQUAL_5',
        EDIFACTIDQUAL_8 = 'EDIFACTIDQUAL_8',
        EDIFACTIDQUAL_9 = 'EDIFACTIDQUAL_9',
        EDIFACTIDQUAL_12 = 'EDIFACTIDQUAL_12',
        EDIFACTIDQUAL_14 = 'EDIFACTIDQUAL_14',
        EDIFACTIDQUAL_18 = 'EDIFACTIDQUAL_18',
        EDIFACTIDQUAL_22 = 'EDIFACTIDQUAL_22',
        EDIFACTIDQUAL_30 = 'EDIFACTIDQUAL_30',
        EDIFACTIDQUAL_31 = 'EDIFACTIDQUAL_31',
        EDIFACTIDQUAL_33 = 'EDIFACTIDQUAL_33',
        EDIFACTIDQUAL_34 = 'EDIFACTIDQUAL_34',
        EDIFACTIDQUAL_51 = 'EDIFACTIDQUAL_51',
        EDIFACTIDQUAL_52 = 'EDIFACTIDQUAL_52',
        EDIFACTIDQUAL_53 = 'EDIFACTIDQUAL_53',
        EDIFACTIDQUAL_54 = 'EDIFACTIDQUAL_54',
        EDIFACTIDQUAL_55 = 'EDIFACTIDQUAL_55',
        EDIFACTIDQUAL_57 = 'EDIFACTIDQUAL_57',
        EDIFACTIDQUAL_58 = 'EDIFACTIDQUAL_58',
        EDIFACTIDQUAL_59 = 'EDIFACTIDQUAL_59',
        EDIFACTIDQUAL_61 = 'EDIFACTIDQUAL_61',
        EDIFACTIDQUAL_63 = 'EDIFACTIDQUAL_63',
        EDIFACTIDQUAL_65 = 'EDIFACTIDQUAL_65',
        EDIFACTIDQUAL_80 = 'EDIFACTIDQUAL_80',
        EDIFACTIDQUAL_82 = 'EDIFACTIDQUAL_82',
        EDIFACTIDQUAL_84 = 'EDIFACTIDQUAL_84',
        EDIFACTIDQUAL_85 = 'EDIFACTIDQUAL_85',
        EDIFACTIDQUAL_86 = 'EDIFACTIDQUAL_86',
        EDIFACTIDQUAL_87 = 'EDIFACTIDQUAL_87',
        EDIFACTIDQUAL_89 = 'EDIFACTIDQUAL_89',
        EDIFACTIDQUAL_90 = 'EDIFACTIDQUAL_90',
        EDIFACTIDQUAL_91 = 'EDIFACTIDQUAL_91',
        EDIFACTIDQUAL_92 = 'EDIFACTIDQUAL_92',
        EDIFACTIDQUAL_103 = 'EDIFACTIDQUAL_103',
        EDIFACTIDQUAL_128 = 'EDIFACTIDQUAL_128',
        EDIFACTIDQUAL_129 = 'EDIFACTIDQUAL_129',
        EDIFACTIDQUAL_144 = 'EDIFACTIDQUAL_144',
        EDIFACTIDQUAL_145 = 'EDIFACTIDQUAL_145',
        EDIFACTIDQUAL_146 = 'EDIFACTIDQUAL_146',
        EDIFACTIDQUAL_147 = 'EDIFACTIDQUAL_147',
        EDIFACTIDQUAL_148 = 'EDIFACTIDQUAL_148',
        EDIFACTIDQUAL_Z01 = 'EDIFACTIDQUAL_Z01',
        EDIFACTIDQUAL_ZZZ = 'EDIFACTIDQUAL_ZZZ',
        EDIFACTIDQUAL_ZZ = 'EDIFACTIDQUAL_ZZ',
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
        EDIFACTSYNTAXVERSION_1 = 'EDIFACTSYNTAXVERSION_1',
        EDIFACTSYNTAXVERSION_2 = 'EDIFACTSYNTAXVERSION_2',
        EDIFACTSYNTAXVERSION_3 = 'EDIFACTSYNTAXVERSION_3',
    }
    export enum testIndicator {
        EDIFACTTEST_NA = 'EDIFACTTEST_NA',
        EDIFACTTEST_1 = 'EDIFACTTEST_1',
    }
}

