export type NotificationConfig = {
  /**
   * Error
   */
  error?:{
    class?: string;
    iconClass?: string;
  }

  /**
   * Warning
   */
  warning?:{
    class?: string;
    iconClass?: string;
  }

  /**
   * Success
   */
  success?:{
    class?: string;
    iconClass?: string;
  }

  /**
   * Info
   */
  info?:{
    class?: string;
    iconClass?: string;
  }

  /**
   * Question
   */
  question?:{
    class?: string;
    iconClass?: string;
  }

  /**
   * Button configs
   */
  confirm?: ButtonConfig;
  cancel?: ButtonConfig;

  /**
   * Options
   */
  showConfirm?: boolean;
  position?: string | 'left' | 'center' | 'right'
  timer?: number;
  showTimerProgressBar?: boolean;
  
};