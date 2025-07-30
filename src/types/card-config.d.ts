export type CardConfig = {
  /**
   * classes for the button
   */
  class?: string;

  /**
   * card body class
   */
  header?: string;

  /**
   * card body class
   */
  body?: string;

  /**
   * card footer class
   */
  footer?: string;

  /**
   * icon class
   */
  showIcon?: boolean;

  /**
   * icon class
  */
  icon?: string;

  /**
   * title class
  */
  title?: string;
  
  /**
   * description class
  */
  description?: string;

  /**
   * button classess
   */
  allowEdit?: boolean;
  editButton?: ButtonConfig;
  allowSchedule?: boolean;
  scheduleButton?: ButtonConfig;
  allowDelete?: boolean;
  deleteButton?: ButtonConfig;

};