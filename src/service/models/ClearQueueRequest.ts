/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ClearQueueRequest = {
    /**
     * The unique ID assigned by the system to the container. <br />The Runtime ID for Runtimes, Runtime clusters, and Runtime clouds is found in the user interface by navigating to **Manage** \> **Runtime Management** and viewing the **Runtime Information** panel for the selected container.
     */
    AtomId: string;
    /**
     * When set to *true*, it deletes messages from the regular queue only.When set to *false* \(default\), it deletes messages from the regular queue.
     */
    DLQ?: boolean;
    /**
     * The name of the queue or topic. You can locate the queue or topic name by navigating to **Manage** \> **Runtime Management** \> **Queue Management panel** or by employing the ListQueues API action to retrieve the names of all queues on a given Runtime.
     */
    QueueName: string;
    /**
     * The subscriber name as it exists on the Runtime. You can find the subscriber name using the ListQueues API action or by looking up the Component ID of the process tied to the subscriber.
     *
     * >**Note:** The subscriber name does not necessarily equate to the Subscriber Name as is shown in Queue Management. If there is a process in Queue Management with the same name, use the Component ID of that process.
     */
    SubscriberName?: string;
};

