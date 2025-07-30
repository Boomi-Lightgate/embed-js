import ReactDOM from "react-dom/client";
import PluginContextProvider from "./context/pluginContext";
import IntegrationPacks from "./components/integration/IntegrationPackSelect";
import Integrations from "./components/integration/Integrations";
import ConfigureIntegration from "./components/integration/ConfigureIntegration";
import SimpleIntegration from "./components/integration/SimpleIntegration";
import type { PluginConfig } from './types/plugin.config';
import Root from "./components/Root";
import ErrorBoundary from "./components/ErrorBoundary";
import rootRef from "./rootRef";
import tailwindCss from './main.css?inline';
import logger from "./logger.service";

const componentMap = {
  IntegrationPacks,
  Integrations,
  ConfigureIntegration,
  SimpleIntegration,
};

type ComponentName = keyof typeof componentMap;

let reactRoot: ReactDOM.Root | null = null;
let pluginConfig: PluginConfig | null = null;

declare global {
  interface Window {
    __BoomiPluginInitialized?: boolean;
    rootRef?: typeof rootRef;
  }
}

function resetPlugin() {
  const container = document.getElementById("boomi");
  const shadowRoot = container?.shadowRoot;

  if (shadowRoot) {
    const mount = shadowRoot.getElementById("boomi-root");
    if (mount) {
      shadowRoot.removeChild(mount);
    }
  }

  reactRoot = null;
  rootRef.current = null;
  window.__BoomiPluginInitialized = false;
  window.rootRef = undefined;
}

function initializeReactRoot(): boolean {
  const container = document.getElementById("boomi");
  if (!container) {
    logger.error(`Code [2000] - Initialization Error; Container with ID 'boomi' not found.`);
    return false;
  }

  if (!pluginConfig) {
    logger.error(`Code [2001] - Plugin configuration not set before RenderComponent call.`);
    return false;
  }

  const shadowRoot = container.shadowRoot ?? container.attachShadow({ mode: "open" });
  const mountPoint = document.createElement("div");
  mountPoint.id = "boomi-root";
  mountPoint.setAttribute("part", "boomi-theme");

  if (pluginConfig.theme?.allowThemes) {
    logger.debug("Plugin configured to allow theme support");

    const storedTheme = localStorage.getItem("boomi-plugin-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const theme =
      pluginConfig.theme.defaultTheme ||
      (storedTheme === "dark" ? "dark"
        : storedTheme === "light" ? "light"
        : storedTheme === "boomi" ? "boomi"
        : prefersDark ? "dark"
        : "light");

    logger.debug("Resolved theme:", theme);
    localStorage.setItem("boomi-plugin-theme", theme);
    mountPoint.setAttribute("data-theme", theme);
  } else {
    logger.debug("Plugin configured to NOT support themes");

    const theme = pluginConfig.theme?.defaultTheme || "light";
    logger.debug("Fallback to default theme:", theme);
    localStorage.setItem("boomi-plugin-theme", theme);
  }

  shadowRoot.appendChild(mountPoint);

  reactRoot = ReactDOM.createRoot(mountPoint);
  reactRoot.render(
    <PluginContextProvider {...pluginConfig}>
      <Root ref={rootRef} />
    </PluginContextProvider>
  );

  window.__BoomiPluginInitialized = true;
  window.rootRef = rootRef;
  injectStyles(shadowRoot);
  logger.debug("Boomi plugin successfully initialized in Shadow DOM.");

  return true;
}

function injectStyles(shadowRoot: ShadowRoot) {
  logger.debug("Injecting TailwindCSS and custom styles into Shadow DOM.");
  const styleTag = shadowRoot.querySelector("style");
  if (!styleTag) {
    const newStyleTag = document.createElement("style");
    newStyleTag.textContent = tailwindCss;
    shadowRoot.appendChild(newStyleTag);
    logger.debug("TailwindCSS and custom styles added to shadow DOM.");
  }
}

export function BoomiPlugin(config: PluginConfig) {
  pluginConfig = config;
  logger.debug("BoomiPlugin config stored:", config);
}

export function RenderComponent({
  component,
  props,
}: {
  component: ComponentName;
  props: Record<string, any>;
}) {
  logger.debug("RenderComponent called with:", { component, props });

  const tryRender = (retries: number) => {
    try {
      const container = document.getElementById("boomi");
      if (!container || !pluginConfig) return;

      const shadowRoot = container.shadowRoot;

      const needsReinit =
        !window.__BoomiPluginInitialized ||
        !reactRoot ||
        !shadowRoot?.getElementById("boomi-root");

      if (needsReinit) {
        logger.debug("Reinitializing plugin due to missing root or Shadow DOM.");
        resetPlugin();
        const initialized = initializeReactRoot();
        if (!initialized) return;
      }

      if (shadowRoot) injectStyles(shadowRoot);

      if (rootRef.current?.updateComponent) {
        const ComponentToRender = componentMap[component];
        if (!ComponentToRender) {
          logger.error(`Code [2002] - Component '${component}' not found.`);
          return;
        }

        const WrappedComponent = () => {
          const defaultProps: Record<string, any> = {};
          return (
            <ErrorBoundary>
              <ComponentToRender {...(defaultProps as any)} {...props} />
            </ErrorBoundary>
          );
        };

        logger.debug(`Rendering component '${component}'`);
        rootRef.current.updateComponent(WrappedComponent, props);
      } else {
        if (retries > 0) {
          logger.debug(`Code [2003] - Retrying render (${retries})...`);
          setTimeout(() => tryRender(retries - 1), 100);
        } else {
          logger.error("Code [2004] - Failed to render component after retries.");
        }
      }
    } catch (err) {
      logger.error("Render error:", err);
    }
  };

  tryRender(10);
}

export default BoomiPlugin;

