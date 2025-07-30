export type ButtonConfig = {
  /**
   * Show this button
   */
  show?: boolean;

  /**
   * Label on this button
   */
  label?: string;

  /**
   * classes for the button
   */
  backgroundClass?: string;
  class?: string;

  /**
   * if the button is a toggle the on version of the class
   */
  onClass?: string;

  /**
   * show an icon for the button
   */
  showIcon?: boolean;

  /**
   * icon class if the button is shown
   */
  iconClass?: string;

  /**
   * if the button is a toggle AND has an icon what is the class for the icon in that state
   */
  iconOnClass?: string;
};