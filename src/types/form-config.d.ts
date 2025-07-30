export type FormConfig = {
  /**
   * Input-specific config keyed by inputFieldName
   */
  [inputFieldName: string]: FormInputConfig;

  container?:{
    class?: string;
  }

  /**
   * Button classes for integration
   */
  cancelButton?: ButtonConfig;
  saveButton?: ButtonConfig;
  deleteButton?: ButtonConfig;
};