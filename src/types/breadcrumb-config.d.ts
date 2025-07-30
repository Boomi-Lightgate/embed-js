/** 
 * The BreadcrumbConfig type defines the UI Configuration for 
 * breadcrumbs navigation in the plugin. 
*/
export type BreadcrumbConfig = {
  /**
   * The container element for the breadcrumb.
   */
  container?: string;

  /**
   * Class represents the overall styling of the breadcrumb.
   */
  class?: string;

  /**
   * activeClass represents the styling of the active breadcrumb item.
   */
  activeClass?: string;

  /**
   * The link element for the breadcrumb.
   */
  linkClass?: string;
};