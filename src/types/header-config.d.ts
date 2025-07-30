import { BreadcrumbConfig } from "./breadcrumb-config";

export type HeaderConfig = {
  /**
   * Show this header
   */
  show?: boolean;

  /**
   * classes for the header
   */
  class?: string;
  container?: string;

  /**
   * the title for this header
   */
  title?: string;
  titleClass?: string;

  /**
   * the description for this header
   */
  description?: string;
  descriptionClass?: string;

  /**
   * The font for this header
   */
  font?: string;

  /**
   * Button classes
   */
  saveButton?: ButtonConfig;

  /**
   * Breadcrumbs for this header
   */
  breadcrumb?: BreadcrumbConfig

};