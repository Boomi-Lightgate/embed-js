/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { QueueAttributes } from './QueueAttributes';
export type MoveQueueRequest = {
    /**
     * \(Required\) The Runtime ID that the queue or topic exists under and where you can find it in Runtime Management. You can find the Runtime ID for Runtimes, Runtime clusters, and Runtime clouds in the user interface by navigating to **Manage** \> **Runtime Management** and viewing the **Runtime Information** panel for a selected container.
     */
    AtomId: string;
    /**
     * \(Required\) An instance of a generalized queue object indicating the queue from which to send the messages. Contains information describing the desired queue.
     */
    DestinationQueue: QueueAttributes;
    /**
     * \(Required\) An instance of a generalized queue object indicating the queue from which to obtain the messages. Contains information describing the desired queue.
     */
    SourceQueue: QueueAttributes;
};

