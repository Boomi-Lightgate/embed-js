/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { JavaRollback } from '../models/JavaRollback';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class JavaRollbackService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Executes an action on a JavaRollback object
     * Returns a Runtime, Runtime cluster, Runtime cloud, Authentication Broker, or Gateway to use the previous version of Java with an EXECUTE operation.
     *
     * - After performing the EXECUTE operation, you can determine the success of returning to an earlier version when the **Update to use <new Java version>.<minor_version>** link displays on the following pages, indicating that a more recent version is available for upgrade:
     *
     * - For Runtimes, Runtime clusters, and Runtime clouds — the **Runtime Information** panel (**Manage** > **Runtime Management** of the user interface).
     *
     * - For Brokers — the **Broker Information** panel (**Configure Server** > **Authentication** of the user interface).
     *
     * - For API Gateways — the **Gateway Information** panel (**Configure Server** > **Gateways** of the user interface).
     *
     * To verify a successful rollback on a Runtime using the user interface, you can also navigate to **Runtime Management** > **Startup Properties** and reference the Java version number listed in the **Java Home** field.
     *
     * - The container must be online to use the Rollback Java operation.
     *
     * >**Important:** Only the node that runs upgrades (typically the head node) restarts automatically to run the updated Java version for Runtimes, Runtime clusters, and Runtime clouds. You must restart all other cluster nodes to successfully return to a previous version of Java.
     * > To successfully return to a previous version of Java for API Management Gateways and Authentication Brokers, you must restart all Gateways and Brokers.
     * @param id The unique ID assigned by the system to the container.
     *
     * 1. Use the Runtime ID for Runtimes, Runtime clusters, and Runtime clouds found in the user interface by navigating to **Manage** > **Runtime Management** and viewing the Runtime Information panel for a selected container.
     *
     * 2. Use the Gateway ID found in the user interface by navigating to **Configure Server** > **Gateways** > `<gatewayName>` > Gateway Information panel.
     *
     * 3. Use the Broker ID found in the user interface by navigating to **Configure Server** > **Authentication** > `<brokerName>` > Broker Information panel.
     * @param requestBody
     * @returns JavaRollback Successful request and response.
     * @throws ApiError
     */
    public executeJavaRollback(
        id: string,
        requestBody?: JavaRollback,
    ): CancelablePromise<JavaRollback> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/JavaRollback/execute/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
