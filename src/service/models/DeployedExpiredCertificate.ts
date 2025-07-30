/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type DeployedExpiredCertificate = {
    /**
     * The ID of the account in which you deployed the certificate.
     */
    accountId?: string;
    /**
     * The ID of the certificate.
     */
    certificateId?: string;
    /**
     * The name of the certificate.
     */
    certificateName?: string;
    /**
     * The type of the certificate — X.509.
     */
    certificateType?: string;
    /**
     * The ID of the container \(Runtime, Runtime cluster, or Runtime cloud\) to which you deployed the certificate.
     */
    containerId?: string;
    /**
     * The name of the container \(Runtime, Runtime cluster, or Runtime cloud\) to which you deployed the certificate.
     */
    containerName?: string;
    /**
     * If applicable, the ID of the environment in which you deployed the certificate.
     */
    environmentId?: string;
    /**
     * If applicable, the environment in which you deployed the certificate.
     */
    environmentName?: string;
    /**
     * The expiration date and time of the certificate.
     */
    expirationDate?: string;
    /**
     * The location to which you deployed the certificate — either Process, Environment, Runtime, Shared Web Server, Shared Web Server Authorization, or Shared Web Server User Authorization. Environment is valid only for an environment account; Runtime is valid only for a non-environment account.
     */
    location?: string;
    /**
     * sets the boundary for a timespan filter beginning or ending with the current date. The value is the number of days relative to the current date.
     *
     * For example, use a value of 1 to retrieve certificates that expire today or tomorrow. Use a value of 365 to retrieve certificates that expire within the next 365 days. Use a value of –1 to retrieve certificates that expired yesterday or expire today.
     */
    expirationBoundary?: number;
};

