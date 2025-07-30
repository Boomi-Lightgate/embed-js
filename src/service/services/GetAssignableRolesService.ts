/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Roles } from '../models/Roles';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class GetAssignableRolesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * You can use the Get Assignable Roles operation to retrieve a list of roles that are assignable under a account.
     * @returns Roles Successful request and response.
     * @throws ApiError
     */
    public getGetAssignableRoles(): CancelablePromise<Roles> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/GetAssignableRoles',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
