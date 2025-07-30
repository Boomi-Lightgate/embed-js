import { FormMultiSelectConfig } from "./form-multi-select-config";

export type FormInputConfig = {
  /**
   * the style of each input
   */
  label?: string;
  labelClass?: string;
  class?: string;
  disabledClass?: string;
  requiredClass?: string;

  /**
   * multiselects
  */
 multiSelect?: FormMultiSelectConfig;

  /**
   * validation
  */
  validation?: string;


};