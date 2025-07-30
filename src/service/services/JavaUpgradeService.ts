/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { JavaUpgrade } from '../models/JavaUpgrade';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class JavaUpgradeService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates a JavaUpgrade object
     * Download and run the Java upgrader script for a specified Runtime, Runtime cluster, Runtime cloud, Authentication Broker, or API Gateway.  Upgrades your selected container to Boomis latest supported version of Java.
     *
     * - After providing the endpoint and a request body that includes the containerID, the CREATE operation immediately upgrades the given container to Boomi's latest supported version of Java. After performing a CREATE operation, you can determine a successful upgrade when the **Update to use Java 11.<minor_version>** link no longer appears on the following pages:
     * -  For Runtimes, Runtime clusters, and Runtime clouds — the **Runtime Information** panel (**Manage** > **Runtime Management** of the user interface).
     * -  For Brokers (applicable for versions newer than 1.8.0_281-b09)— the **Broker Information** panel (**Configure Server** > **Authentication** of the user interface).
     * -  For API Gateways — the **Gateway Information** panel (**Configure Server** > **Gateways** of the user interface).
     * - You must have the **Runtime Management** privilege to perform the CREATE operation. If you have the **Runtime Management Read Access** privilege, you cannot use this operation to upgrade your container.
     * - The container must be online to use the Upgrade Java operation.
     * - The container must be eligible for upgrade.
     *
     * >**Important:** Only the node that runs upgrades (typically the head node) restarts automatically to run the updated Java version. Therefore, you must restart all other cluster nodes to install the upgrade.
     * @param requestBody
     * @returns JavaUpgrade Successful request and response.
     * @throws ApiError
     */
    public createJavaUpgrade(
        requestBody?: JavaUpgrade,
    ): CancelablePromise<JavaUpgrade> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/JavaUpgrade',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
