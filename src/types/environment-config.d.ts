import { Environment } from  '../../service';;

export type EnvironmentConfig = {
  /**
   * allow the user to select an environment
   */
  allowSelectEnvironment?: boolean;

  /**
   * What types of environments can the user select?
   * 'PROD' | 'TEST' | 'ALL'
   */
  includeEnvironments?: EnvironmentType,

  /**
   * If not allowing the user to select an environment we 
   * must pass the environments we want the integration pack installed into
   */
  installEnvironments?: Environment[];

  /**
   * The icons used on the select environments form
  */
 activeIcon?: string;
 warningIcon?: string;

};