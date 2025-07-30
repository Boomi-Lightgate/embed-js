export type ComponentConfig = {
  /**
   * Header of this page
   */
  header?: HeaderConfig;

  /**
   * Body Class for this page
   */
  body?: {
    class?: string;
    defaultView: string | 'grid' | 'table'
  }

  /**
   * Footer Class for this page
   */
  footer?: {
    class?: string;
  }
};