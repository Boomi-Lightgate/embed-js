import { WizardStepsConfig } from "./wizard-steps-config";

export type WizardConfig = {
  /**
   * classes for the container
   */
  container?: string;

  /**
   * wizard steps
  */
  steps?: WizardStepsConfig;

  /**
   * The font for this wizard
   */
  font?: string;

  /**
   * Button classes
   */
  continueButton?: ButtonConfig;
  cancelButton?: ButtonConfig;
};