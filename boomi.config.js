// boomi.config.js
export const boomiConfig = {
  theme: {
    allowThemes: true,
    defaultTheme: 'clean',
  },

  cssVarsByTheme: {
    /* ---------- Clean Professional Theme ---------- */
    clean: {
      /* Font */
      '--boomi-font': '"Inter", ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, sans-serif',
      '--default-font-family': 'var(--boomi-font)',

      /* Root / Page */
      '--boomi-root-bg-color': '#f7f9fb',
      '--boomi-root-fg-color': '#1c274c',
      '--boomi-page-bg-color': '#f7f9fb',
      '--boomi-page-fg-color': '#1c274c',

      /* Header */
      '--boomi-header-bg-color': '#ffffff',
      '--boomi-header-fg-color': '#1c274c',
      '--boomi-header-fg-hover': '#1669e6',
      '--boomi-header-border-color': '#d7dee7',
      '--boomi-header-shadow': '0 1px 2px rgba(0,0,0,0.05)',

      /* Buttons */
      '--boomi-btn-primary-bg': '#1f78ff',
      '--boomi-btn-primary-fg': '#ffffff',
      '--boomi-btn-primary-border': '#1f78ff',
      '--boomi-btn-primary-shadow': '0 1px 2px rgba(0,0,0,0.05)',
      '--boomi-btn-primary-bg-hover': '#1669e6',
      '--boomi-btn-primary-bg-active': '#0d4ed8',

      '--boomi-btn-secondary-bg': '#ffffff',
      '--boomi-btn-secondary-fg': '#1f78ff',
      '--boomi-btn-secondary-border': '#d7dee7',
      '--boomi-btn-secondary-shadow': '0 1px 2px rgba(0,0,0,0.05)',
      '--boomi-btn-secondary-bg-hover': '#f1f5f9',
      '--boomi-btn-secondary-bg-active': '#e2e8f0',

      /* Inputs */
      '--boomi-input-bg': '#ffffff',
      '--boomi-input-fg': '#2a2f3a',
      '--boomi-input-placeholder': '#8a97a6',
      '--boomi-input-border': '#d7dee7',
      '--boomi-input-shadow': '0 1px 0 rgba(16,24,40,0.02)',
      '--boomi-input-border-focus': '#1f78ff',
      '--boomi-input-shadow-focus': '0 0 0 3px rgba(31,120,255,0.12)',
      '--boomi-input-outline-focus': '#1f78ff',

      /* Cards */
      '--boomi-card-bg': '#ffffff',
      '--boomi-card-fg': '#1c274c',
      '--boomi-card-border': '#d7dee7',
      '--boomi-card-shadow': '0 1px 3px rgba(0,0,0,0.05)',
      '--boomi-card-hover-shadow': '0 4px 6px rgba(0,0,0,0.08)',

      /* Tables */
      '--boomi-table-header-bg': '#f1f5f9',
      '--boomi-table-header-fg': '#1c274c',
      '--boomi-table-header-border': '#d7dee7',
      '--boomi-table-row-odd-bg': '#ffffff',
      '--boomi-table-row-even-bg': '#f9fafb',
      '--boomi-table-row-hover-shadow': '0 1px 2px rgba(0,0,0,0.06)',

      /* Menus */
      '--boomi-menu-bg': '#ffffff',
      '--boomi-menu-fg': '#1c274c',
      '--boomi-menu-border': '#d7dee7',
      '--boomi-menu-shadow': '0 4px 6px rgba(0,0,0,0.1)',
      '--boomi-menu-item-bg': 'transparent',
      '--boomi-menu-item-bg-hover': 'rgba(31,120,255,0.08)',
      '--boomi-menu-item-fg': '#475569',
      '--boomi-menu-item-fg-hover': '#1f78ff',
      '--boomi-menu-divider': '#e5e7eb',

      /* SideNav */
      '--boomi-sidenav-bg': '#ffffff',
      '--boomi-sidenav-border': '#d7dee7',
      '--boomi-sidenav-link-fg': '#475569',
      '--boomi-sidenav-link-hover-bg': 'rgba(31,120,255,0.08)',
      '--boomi-sidenav-link-hover-fg': '#1f78ff',
      '--boomi-sidenav-link-active-bg': '#1f78ff',
      '--boomi-sidenav-link-active-fg': '#ffffff',

      /* Notifications */
      '--boomi-notice-success-bg': '#ecfdf5',
      '--boomi-notice-success-fg': '#166534',
      '--boomi-notice-success-border': '#86efac',

      '--boomi-notice-error-bg': '#fef2f2',
      '--boomi-notice-error-fg': '#b91c1c',
      '--boomi-notice-error-border': '#fecaca',

      '--boomi-notice-warning-bg': '#fffbeb',
      '--boomi-notice-warning-fg': '#92400e',
      '--boomi-notice-warning-border': '#fcd34d',
      '--boomi-notice-shadow': '0 2px 4px rgba(0,0,0,0.06)',
      '--boomi-notice-radius': '.5rem',
    },
  },
};
