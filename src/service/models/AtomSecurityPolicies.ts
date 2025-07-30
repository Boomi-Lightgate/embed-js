/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AtomSecurityPoliciesType } from './AtomSecurityPoliciesType';
export type AtomSecurityPolicies = {
    /**
     * The ID of the Runtime cloud or Runtime cluster.
     */
    atomId: string;
    browser?: AtomSecurityPoliciesType;
    common: AtomSecurityPoliciesType;
    runner?: AtomSecurityPoliciesType;
    worker?: AtomSecurityPoliciesType;
};

