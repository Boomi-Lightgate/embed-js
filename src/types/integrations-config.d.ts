export type IntegrationsConfig = {
  /**
   * Search bar
   */
  search?: SearchConfig;

  /**
   * Cards
   */
  integration?: CardConfig;

  /**
   * Table
   */
  table?: TableConfig;

  /**
   * Button classes for integration
   */
  addButton?: ButtonConfig;
  viewTypeButton?: ButtonConfig;
  editButton?: ButtonConfig;
  scheduleButton?: ButtonConfig;
  
};