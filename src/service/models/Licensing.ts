/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { License } from './License';
/**
 * Indicates the number of connections used and purchased in each of the connector type and production/test classifications. The classifications include standard, smallBusiness, enterprise, and tradingPartner.
 */
export type Licensing = {
    enterprise?: License;
    enterpriseTest?: License;
    smallBusiness?: License;
    smallBusinessTest?: License;
    standard?: License;
    standardTest?: License;
    tradingPartner?: License;
    tradingPartnerTest?: License;
};

