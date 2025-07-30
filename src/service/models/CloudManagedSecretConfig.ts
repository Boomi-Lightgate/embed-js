/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CloudManagedSecretConfig = {
    secretReference?: string;
    secretsManagerType?: CloudManagedSecretConfig.secretsManagerType;
    usesRemoteSecretsManager?: boolean;
};
export namespace CloudManagedSecretConfig {
    export enum secretsManagerType {
        AWS = 'AWS',
        AZURE = 'AZURE',
    }
}

