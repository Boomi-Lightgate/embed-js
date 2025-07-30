/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Nodes } from './Nodes';
export type Atom = {
    capabilities?: Array<'GATEWAY' | 'BROKER'>;
    /**
     * \(For Runtimes attached to Runtime clouds\) A unique ID assigned by the system to the Runtime cloud.
     */
    cloudId?: string;
    /**
     * ID of the Runtime cloud cluster to which the Cloud Attachment is assigned. This field is populated only for Cloud Attachments.
     */
    cloudMoleculeId?: string;
    /**
     * The name of the Runtime cloud cluster to which the Cloud Attachment is assigned. This field is populated only for Cloud Attachments.
     */
    cloudMoleculeName?: string;
    /**
     * The name of the associated Runtime cloud. This field is populated only for Cloud Attachments and Cloud runtime clusters.
     */
    cloudName?: string;
    /**
     * The account name of the associated Runtime cloud’s owner.
     */
    cloudOwnerName?: string;
    cluster?: Nodes;
    /**
     * The user ID (email address) of a user who created the Runtime.
     */
    createdBy?: string;
    /**
     * A string that identifies the Runtime, Runtime cluster, or Runtime cloud's latest build.
     */
    currentVersion?: string;
    /**
     * The installation date and time of the Runtime, Runtime cluster, or Runtime cloud. For Runtimes attached to a Runtime cloud, this is the installation date and time of the Runtime cloud.
     */
    dateInstalled?: string;
    /**
     * The length of time, in milliseconds, that the platform waits before it forces the Runtime \(or Runtime cluster or Runtime cloud\) to restart after changes to the Atom’s configuration. Changes do not take effect until a restart occurs. However, regardless of this value, in a Runtime cluster or Runtime cloud that uses forked execution, automatic restart is deferred until currently running processes are complete.
     */
    forceRestartTime?: number;
    /**
     * The name or IP address of the installation machine for the Runtime, Runtime cluster, or Runtime cloud. If the Runtime is attached to a Runtime cloud, the name of the Runtime cloud appears.
     */
    hostName?: string;
    /**
     * A unique ID for the Runtime, Runtime cluster, or Runtime cloud.
     */
    id?: string;
    /**
     * \(For Runtimes attached to Runtime clouds\) A unique ID for the Runtime. The ID consists of the owning account ID followed by a period and a suffix.
     */
    instanceId?: string;
    /**
     * Indicates if a Runtime is a Cloud Attachment. It is set to `True` for the Cloud Attachment; otherwise, it is False for other Runtime. It is only populated for Cloud Attachments and Cloud runtime clusters.
     */
    isCloudAttachment?: boolean;
    /**
     * A user-defined name for the Runtime, Runtime cluster, or Runtime cloud.
     */
    name?: string;
    /**
     * The number of days after a process run when the purging of logs, processed documents, and temporary data occurs. The default is 30 days. The maximum is 9999. A value of 0 disables purging.
     */
    purgeHistoryDays?: number;
    /**
     * If true, purges processed documents and temporary data immediately after a process ends. If you set this to true, also set purgeHistoryDays to a value greater than 0, such as 1. This combination not only purges your data right away, but also runs an extra cleanup process on a daily basis.
     */
    purgeImmediate?: boolean;
    /**
     * The status of the Runtime. Possible values are: UNKNOWN, ONLINE, WARNING, OFFLINE
     */
    status?: Atom.status;
    /**
     * The type of Runtime. Possible values are: Cloud, Molecule, Atom
     */
    type?: Atom.type;
    /**
     * Provides more granular status details for the runtime. <details> <summary>Possible values:</summary>
     *
     * When the runtime status is ONLINE:
     *
     * - ONLINE_RUNNING
     * - ONLINE_STOPPING
     * - ONLINE_STARTING
     * - CLUSTER_ISSUE
     * - RESTARTING
     * - RESTARTING_TOO_LONG
     * - RESTARTING_DEAD
     *
     * When the runtime status is OFFLINE:
     *
     * - OFFLINE
     * - OFFLINE_NOT_STOPPED
     * - OFFLINE_NOT_INITIALIZED
     * - OFFLINE_WITH_ERROR
     * - OFFLINE_WITH_CLUSTER_ISSUE
     * - DELETED
     * - OFFBOARDING
     *
     * When the runtime status is WARNING: CLUSTER_ISSUE
     *
     * When the runtime status is UNKNOWN: UNKNOWN
     *
     * </details>
     */
    statusDetail?: string;
};
export namespace Atom {
    /**
     * The status of the Runtime. Possible values are: UNKNOWN, ONLINE, WARNING, OFFLINE
     */
    export enum status {
        UNKNOWN = 'UNKNOWN',
        ONLINE = 'ONLINE',
        WARNING = 'WARNING',
        OFFLINE = 'OFFLINE',
    }
    /**
     * The type of Runtime. Possible values are: Cloud, Molecule, Atom
     */
    export enum type {
        CLOUD = 'CLOUD',
        MOLECULE = 'MOLECULE',
        ATOM = 'ATOM',
    }
}

