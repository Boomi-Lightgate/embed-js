/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AccountCloudAttachmentQuota = {
    /**
     * The ID of the account authorizing the call.
     */
    accountId?: string;
    /**
     * The ID of the Runtime cloud that you want to get, add, edit, or delete a Cloud quota.
     */
    cloudId?: string;
    /**
     * A unique ID generated for a newly created or recently updated Cloud quota \(using the Account Cloud Attachment quota object\). You can use this ID to get a Cloud quota for an account's specific Cloud ID.
     */
    id?: string;
    /**
     * The number of Runtime attachments that you want to set on the Cloud quota.
     */
    maxAtomAttachment?: number;
};

