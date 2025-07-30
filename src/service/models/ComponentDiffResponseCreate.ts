/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ComponentDiffResponseCreate = {
    ComponentDiffResponse?: {
        /**
         * Message providing details about the diffed components
         */
        message?: string;
        GenericDiff?: {
            addition?: {
                /**
                 * Total number of additions
                 */
                total?: number;
                change?: {
                    /**
                     * Type of change (e.g., element)
                     */
                    type?: string;
                    /**
                     * Name of the particle that changed
                     */
                    changedParticleName?: string;
                    elementKey?: {
                        /**
                         * Name of the element
                         */
                        elementName?: string;
                        'key-part'?: {
                            /**
                             * Attribute name
                             */
                            attribute?: string;
                            /**
                             * Attribute value
                             */
                            value?: string;
                        };
                    };
                    /**
                     * New value of the element in the diff
                     */
                    newValue?: string;
                };
            };
            modification?: {
                /**
                 * Total number of modifications
                 */
                total?: number;
                change?: {
                    /**
                     * Type of modification (e.g., attribute)
                     */
                    type?: string;
                    /**
                     * Name of the particle that was modified
                     */
                    changedParticleName?: string;
                    elementKey?: {
                        /**
                         * Name of the element
                         */
                        elementName?: string;
                    };
                    /**
                     * New value of the attribute
                     */
                    newValue?: string;
                    /**
                     * Old value of the attribute
                     */
                    oldValue?: string;
                };
            };
        };
    };
};

