/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type NodeDetails = {
    /**
     * Lists any issues reported for nodes.
     */
    clusterProblem: string;
    /**
     * Displays the external host name or IP of the machine where the node currently lives.
     */
    hostName: string;
    /**
     * Displays the unique identifier associated with a particular node in the Runtime cluster or Runtime cloud. A star icon indicates the cluster's head node.
     */
    nodeId: string;
    /**
     * Lists the nodes in the Runtime cluster or Runtime cloud and displays some basic information about each node. By default, the nodes are sorted by `status`. You can sort the list by `status`, `nodeId`, or `hostName`.
     */
    status: string;
};

