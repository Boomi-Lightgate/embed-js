import { Schedule } from  '../../service';;

export type ScheduleConfig = {
  /**
   * allow the user to set schedules
   */
  allowSelectSchedules?: boolean;

  /**
   * integration pack id
   */
  integrationPackId?: string;

  /**
   * process name
   */
  processName?: string;

  /**
   * environment id
   */
  environmentId?: string;

  /**
   * If not allowing the user to add schedules we need to map
   * the schedules -> environments -> processes in the config
   * that is passed to the component
   */
  processSchedules?: Schedule[];
};