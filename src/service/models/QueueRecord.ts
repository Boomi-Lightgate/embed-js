/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TopicSubscriber } from './TopicSubscriber';
export type QueueRecord = {
    deadLettersCount?: number;
    messagesCount?: number;
    queueName?: string;
    queueType?: string;
    topicSubscribers?: Array<TopicSubscriber>;
};

