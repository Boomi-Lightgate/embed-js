// boomi.config.js
export const boomiConfig = {
  theme: {
    allowThemes: true,
    defaultTheme: 'dark'
  },

  // Per-theme overrides
  cssVarsByTheme: {
    /* ---------- Custom: Cartoon Theme ---------- */
    cartoon: {
      /* Font */
      '--boomi-font': '"Comic Sans MS", "Comic Neue", cursive, ui-sans-serif, system-ui, sans-serif',
      '--default-font-family': 'var(--boomi-font)',

      /* Root / Page */
      '--boomi-root-bg-color': '#A0E8AF', 
      '--boomi-root-fg-color': '#1F2937', 
      '--boomi-page-bg-color': '#A0E8AF',
      '--boomi-page-fg-color': '#1F2937',

      /* Header */
      '--boomi-header-bg-color': '#5CD4F0',
      '--boomi-header-fg-color': '#000000',
      '--boomi-header-fg-hover': '#FF90B3', 
      '--boomi-header-border-color': '#000000',
      '--boomi-header-shadow': '4px 4px 0 #000000',

      /* Buttons (chunky borders + pop shadows) */
      '--boomi-btn-primary-bg': '#FFDE59',      
      '--boomi-btn-primary-fg': '#2B2B2B',
      '--boomi-btn-primary-border': '#000000',
      '--boomi-btn-primary-shadow': '4px 4px 0 #000000',
      '--boomi-btn-primary-bg-hover': '#FFD633',
      '--boomi-btn-primary-bg-active': '#FFCC00',

      '--boomi-btn-secondary-bg': '#FF90B3',       
      '--boomi-btn-secondary-fg': '#2B2B2B',
      '--boomi-btn-secondary-border': '#000000',
      '--boomi-btn-secondary-shadow': '4px 4px 0 #000000',
      '--boomi-btn-secondary-bg-hover': '#FF78A3',
      '--boomi-btn-secondary-bg-active': '#FF6090',

      /* Inputs */
      '--boomi-input-bg': '#FFFFFF',
      '--boomi-input-fg': '#2B2B2B',
      '--boomi-input-placeholder': '#6B7280',
      '--boomi-input-border': '#000000',
      '--boomi-input-shadow': '3px 3px 0 #000000',
      '--boomi-input-border-focus': '#FF90B3',
      '--boomi-input-shadow-focus': '3px 3px 0 #FF90B3',
      '--boomi-input-outline-focus': '#FF90B3',

      /* Tables */
      '--boomi-table-header-bg': '#FFDE59',
      '--boomi-table-header-fg': '#111827',
      '--boomi-table-header-border': '#000000',
      '--boomi-table-row-odd-bg': '#FFFFFF',
      '--boomi-table-row-even-bg': '#FDF2F8',   
      '--boomi-table-row-hover-shadow': '4px 4px 0 rgba(0,0,0,0.35)',

      /* Cards */
      '--boomi-card-border': '#000000',
      '--boomi-card-bg': '#FFFFFF',
      '--boomi-card-shadow': '4px 4px 0 #000000',
      '--boomi-card-hover-shadow': '6px 6px 0 #000000',
      '--boomi-card-hover-scale': 'scale(1.03)',

      /* Menus */
      '--boomi-menu-bg': '#FFFFFF',
      '--boomi-menu-fg': '#000000',
      '--boomi-menu-border': '#000000',
      '--boomi-menu-shadow': '4px 4px 0 #000000',
      '--boomi-menu-item-bg': 'transparent',
      '--boomi-menu-item-bg-hover': '#FFDE59',
      '--boomi-menu-item-fg': '#000000',
      '--boomi-menu-item-fg-hover': '#000000',
      '--boomi-menu-divider': '#000000',
      '--boomi-menu-danger-fg': '#FF3030',
      '--boomi-menu-danger-fg-hover': '#B91C1C',
      '--boomi-menu-danger-bg-hover': '#FFD1D1',

      /* Modal */
      '--boomi-modal-overlay-bg': 'rgba(0, 0, 0, 0.4)',
      '--boomi-modal-bg': '#FFF8E7',
      '--boomi-modal-fg': '#000000',
      '--boomi-modal-border': '3px solid #000000',
      '--boomi-modal-shadow': '6px 6px 0 #000000',
      '--boomi-modal-close-fg': '#000000',
      '--boomi-modal-close-hover-fg': '#FF90B3',

      /* Input */
      '--boomi-input-bg': '#FFFFFF',
      '--boomi-input-fg': '#2B2B2B',
      '--boomi-input-border': '#FBBF24',
      '--boomi-input-bg-disabled': '#FEF9C3',
      '--boomi-input-fg-disabled': '#9CA3AF',
      '--boomi-input-border-disabled': '#FDE68A',
      '--boomi-input-border-invalid': '#F87171',
      '--boomi-input-outline-invalid': '#FCA5A5',

      /* Form text */
      '--boomi-form-label-fg': '#374151',   
      '--boomi-form-helper-fg': '#6B7280',  
      '--boomi-form-error-fg': '#F87171',    
      '--boomi-form-required-fg': '#FCA5A5', 

      /* Select */
      '--boomi-select-bg': '#FFF8E7',
      '--boomi-select-fg': '#000',
      '--boomi-select-border': '#000',
      '--boomi-select-shadow': '3px 3px 0 #000',
      '--boomi-select-border-focus': '#FF90B3',
      '--boomi-select-shadow-focus': '3px 3px 0 #FF90B3',
     '--boomi-select-icon': '#000',
      '--boomi-options-bg': '#FFFFFF',
      '--boomi-options-fg': '#000',
      '--boomi-options-border': '#000',
      '--boomi-options-shadow': '4px 4px 0 #000',
      '--boomi-options-search-bg': '#FFF8E7',
      '--boomi-option-bg-active': '#FFDE59',
      '--boomi-option-fg-selected': '#000',

      /* Ajax Loader */
      '--boomi-loader-dot-bg': '#FF5CA2',  
      '--boomi-loader-dot-size': '0.9rem',      
      '--boomi-loader-dot1-opacity': '1',     
      '--boomi-loader-dot2-opacity': '1',
      '--boomi-loader-dot3-opacity': '1',
      '--boomi-loader-msg-fg': '#111',         

      /* Spinner */
      '--boomi-spinner-overlay-bg': 'rgba(255, 245, 157, 0.6)', 
      '--boomi-spinner-ring-color': '#FF5CA2',             
      '--boomi-spinner-ping-color': '#6EEB83',   
      '--boomi-spinner-message-fg': '#222',
      '--boomi-spinner-size': '4.5rem',
      '--boomi-spinner-border-width': '5px',

      /* Wizard */
      '--boomi-wizard-step-dot-bg': '#FFDE59',
      '--boomi-wizard-step-dot-fg': '#111',
      '--boomi-wizard-step-dot-border': '#000',
      '--boomi-wizard-step-dot-shadow': '3px 3px 0 #000',
      '--boomi-wizard-step-dot-bg-active': '#FF5CA2',
      '--boomi-wizard-step-dot-fg-active': '#fff',
      '--boomi-wizard-step-dot-border-active': '#000',
      '--boomi-wizard-step-dot-shadow-active': '3px 3px 0 #000',
      '--boomi-wizard-step-dot-bg-completed': '#6EEB83',
      '--boomi-wizard-step-dot-fg-completed': '#111',
      '--boomi-wizard-step-dot-border-completed': '#000',
      '--boomi-wizard-step-dot-shadow-completed': '3px 3px 0 #000',
      '--boomi-wizard-connector-bg': '#000',
      '--boomi-wizard-label-fg': '#222',
      '--boomi-wizard-card-bg': '#FFFBEB',
      '--boomi-wizard-card-fg': '#111',
      '--boomi-wizard-card-border': '#000',
      '--boomi-wizard-card-shadow': '4px 4px 0 #000',
      '--boomi-wizard-link-fg': '#FF5CA2',
      '--boomi-wizard-link-fg-hover': '#DB2777',
      '--boomi-wizard-link-strong-fg': '#111',

      /* Notifications */
      '--boomi-notice-warning-bg': '#FFDE59',
      '--boomi-notice-warning-fg': '#111',
      '--boomi-notice-warning-border': '#000',
      '--boomi-notice-success-bg': '#6EEB83',
      '--boomi-notice-success-fg': '#111',
      '--boomi-notice-success-border': '#000',
      '--boomi-notice-error-bg': '#FFB3C7',
      '--boomi-notice-error-fg': '#111',
      '--boomi-notice-error-border': '#000',
      '--boomi-notice-shadow': '4px 4px 0 #000',
      '--boomi-notice-radius': '.75rem',

      /* Update panel */
      '--boomi-update-bg': '#FFF8E7',
      '--boomi-update-fg': '#000',
      '--boomi-update-border': '#000',
      '--boomi-update-shadow': '6px 6px 0 #000',
      '--boomi-update-title-fg': '#000',
      '--boomi-update-desc-fg': '#222',
      '--boomi-update-radius': '.75rem',
      '--boomi-update-content': '#000',

      /* Tabs (chunky, comic-y) */
      '--boomi-tablist-border': '#000000',
      '--boomi-tab-bg': '#FFFFFF',
      '--boomi-tab-fg': '#111111',
      '--boomi-tab-border': '#000000',
      '--boomi-tab-bg-hover': '#FFDE59',            // punchy yellow hover
      '--boomi-tab-bg-active': '#FF5CA2',           // bubblegum active
      '--boomi-tab-fg-active': '#FFFFFF',
      '--boomi-tab-border-active': '#000000',

      /* Maps */
      '--boomi-accent': '#FF5CA2',
      '--boomi-muted': '#6B7280',
      '--boomi-map-line': '#000',
      '--boomi-map-line-width': '2px',
      '--boomi-map-line-filter': 'drop-shadow(2px 2px 0 #000)',
      '--boomi-map-heading-fg': '#000',
      '--boomi-map-card-bg': '#FFF',
      '--boomi-map-card-border': '#000',
      '--boomi-map-card-shadow': '4px 4px 0 #000',
      '--boomi-map-card-shadow-hover': '6px 6px 0 #000',
      '--boomi-map-card-transform-hover': 'translate(-1px,-1px)',
      '--boomi-map-source-bg-mapped': '#E0F2FE', // sky-100
      '--boomi-map-source-border-mapped': '#000',
      '--boomi-map-source-outline': '#000',
      '--boomi-map-target-bg-mapped': '#DCFCE7', // emerald-100
      '--boomi-map-target-border-mapped': '#000',
      '--boomi-map-target-outline': '#000',
      '--boomi-map-func-bg': '#FFFBEB', // light yellow
      '--boomi-map-func-fg': '#111',
      '--boomi-map-func-title-fg': '#FF5CA2',
      '--boomi-map-pin-source-bg': '#3B82F6', // blue-500
      '--boomi-map-pin-target-bg': '#10B981', // emerald-500
      '--boomi-map-pin-input-bg': '#F59E0B',  // amber-500
      '--boomi-map-pin-output-bg': '#8B5CF6', // violet-500
      '--boomi-map-pin-badge-bg': '#EF4444',
      '--boomi-map-pin-badge-fg': '#FFF',
      '--boomi-map-pin-danger-bg': '#EF4444',
      '--boomi-map-pulse-color': 'rgba(255, 92, 162, .25)',
      '--boomi-map-pin-pulse': 'boomi-map-pulse 1.1s ease-in-out infinite',
      '--boomi-map-add-bg': '#FFDE59',
      '--boomi-map-add-fg': '#111',
      '--boomi-map-add-border': '#000',
      '--boomi-map-add-shadow': '3px 3px 0 #000',
      '--boomi-map-add-bg-hover': '#FFD633',

      /* ---------- Schedule (cartoon) ---------- */
      '--boomi-sched-card-bg': '#FFF8E7',
      '--boomi-sched-card-fg': '#111111',
      '--boomi-sched-card-border': '#000000',
      '--boomi-sched-card-shadow': '6px 6px 0 #000000',
      '--boomi-sched-card-shadow-hover': '8px 8px 0 #000000',
      '--boomi-sched-card-radius': '.75rem',

      '--boomi-sched-header-bg': '#FFDE59',
      '--boomi-sched-header-fg': '#111111',
      '--boomi-sched-header-border': '#000000',
      '--boomi-sched-header-shadow': '4px 4px 0 #000000',
      '--boomi-sched-toggle-fg': '#111111',
      '--boomi-sched-toggle-fg-hover': '#FF5CA2',

      '--boomi-sched-row-bg': '#FFFFFF',
      '--boomi-sched-row-border': '#000000',
      '--boomi-sched-row-shadow': '3px 3px 0 #000000',
      '--boomi-sched-row-hover-shadow': '4px 4px 0 #000000',

      '--boomi-sched-label-fg': '#374151',
      '--boomi-sched-helper-fg': '#6B7280',
      '--boomi-sched-error-fg': '#F87171',

      '--boomi-sched-select-bg': '#FFF8E7',
      '--boomi-sched-select-fg': '#111111',
      '--boomi-sched-select-border': '#000000',
      '--boomi-sched-select-shadow': '3px 3px 0 #000000',
      '--boomi-sched-select-border-focus': '#FF90B3',
      '--boomi-sched-select-shadow-focus': '3px 3px 0 #FF90B3',

      '--boomi-sched-input-bg': '#FFFFFF',
      '--boomi-sched-input-fg': '#2B2B2B',
      '--boomi-sched-input-border': '#000000',
      '--boomi-sched-input-shadow': '3px 3px 0 #000000',
      '--boomi-sched-input-border-focus': '#FF90B3',
      '--boomi-sched-input-shadow-focus': '3px 3px 0 #FF90B3',

      '--boomi-sched-checkbox-border': '#000000',
      '--boomi-sched-checkbox-bg': '#FFFFFF',
      '--boomi-sched-checkbox-bg-checked': '#FF5CA2',
      '--boomi-sched-checkbox-symbol': '#FFFFFF',

      '--boomi-sched-action-bg': '#FFDE59',
      '--boomi-sched-action-fg': '#111111',
      '--boomi-sched-action-border': '#000000',
      '--boomi-sched-action-shadow': '3px 3px 0 #000000',
      '--boomi-sched-action-bg-hover': '#FFD633',

      /* ---------- Connector (cartoon) ---------- */
      '--boomi-conn-bg': '#FFF8E7',
      '--boomi-conn-border': '#000000',
      '--boomi-conn-card-shadow': '4px 4px 0 #000000',
      '--boomi-conn-heading-fg': '#111111',

      '--boomi-conn-field-bg': '#FFFFFF',
      '--boomi-conn-field-border': '#000000',
      '--boomi-conn-field-label-fg': '#111111',
      '--boomi-conn-field-error-fg': '#F87171',

      '--boomi-conn-btn-save-bg': '#6EEB83',
      '--boomi-conn-btn-save-fg': '#111111',
      '--boomi-conn-btn-auth-bg': '#FF5CA2',
      '--boomi-conn-btn-auth-fg': '#FFFFFF',
      '--boomi-conn-btn-disabled-bg': '#E5E7EB',
      '--boomi-conn-btn-disabled-fg': '#9CA3AF',

      /* ---------- SweetAlert (cartoon) ---------- */
      '--boomi-swal-bg': '#FFF8E7',
      '--boomi-swal-fg': '#111111',
      '--boomi-swal-border': '2px solid #000000',
      '--boomi-swal-shadow': '6px 6px 0 #000000',
      '--boomi-swal-title-fg': '#000000',
      '--boomi-swal-desc-fg': '#222222',
      '--boomi-swal-icon-success': '#6EEB83',
      '--boomi-swal-icon-warning': '#FFDE59',
      '--boomi-swal-icon-error': '#FF5CA2',
      '--boomi-swal-overlay-bg': 'rgba(0, 0, 0, 0.5)',
    },
  },
};
