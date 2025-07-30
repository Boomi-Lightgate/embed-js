/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AllDocuments } from './AllDocuments';
import type { SelectedDocuments } from './SelectedDocuments';
export type RerunDocument = {
    AllDocuments: AllDocuments;
    SelectedDocuments: SelectedDocuments;
    /**
     * The ID of the original process run. You can obtain the `originalExecutionId` from the user interface from the Process Reporting page, selecting the Actions menu for a specific process run, and selecting View Extended Information from the list of options.
     */
    originalExecutionId: string;
    /**
     * (Response-only field) The ID of the process run. The initial CREATE response returns this field and uses it in the subsequent call to find the corresponding run record.
     */
    recordUrl?: string;
    /**
     * (Response-only field) The full endpoint URL used to make a second call to the Execution Record object. This URL is provided for your convenience in recordUrl field of the initial CREATE response.
     */
    requestId?: string;
};

