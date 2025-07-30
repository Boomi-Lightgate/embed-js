/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * \(Required\) An instance of a generalized queue object indicating the queue from which to send or obtain the messages. Contains information describing the desired queue.
 */
export type QueueAttributes = {
    /**
     * (Required) true, or false. Allows the user to choose the regular or dead letter queue for deleting messages. The default is `false`, which deletes messages from the regular queue.
     */
    DLQ: boolean;
    /**
     * (Required) The name of the queue or topic. You can find this in the [List Queues](/api/platformapi#tag/ListQueues) action or in Queue Management.
     */
    QueueName: string;
    /**
     * (Optional. Use only for topic subscribers.) The name of the subscriber as it exists on the Runtime. You can find this by using the [List Queues](/api/platformapi#tag/ListQueues) action or by looking up the Component ID of the process associated with the subscriber.
     *
     * >**Note:** This field is not only the subscriber name shown on the Queue Management screen of the user interface.
     */
    SubscriberName?: string;
};

