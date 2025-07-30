import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  ReactNode,
} from "react";
import { Boomi } from '../service/Boomi';
import logger from "../logger.service";
import { PluginboomiConfig } from "../types/plugin-ui-config";
import { AiConfig } from "../types/ai-config";

interface PluginContextType {
  apiBaseUrl: string;
  apiAccountId: string;
  apiUsername: string;
  apiToken: string;
  apiAuthUser: string;
  ai?: AiConfig;
  accountGroup: string;
  boomi: Boomi | null;
  isReady: boolean;
  updateBoomiConfig: (override: boolean) => Boomi;
  boomiConfig?: PluginboomiConfig;
  pageIsLoading: boolean;
  setPageIsLoading: (loading: boolean) => void;
  httpPost: (options: {
    body: string;
    object: string;
    id?: string;
    overrideAccount?: string;
    contentType?: string;
  }) => Promise<string>;
}

interface PluginContextProviderProps {
  children: ReactNode;
  baseUrl: string;
  accountId: string;
  userName: string;
  authUser: string;
  token: string;
  accountGroup: string;
  configFile?: string;
  ai?: AiConfig;
}

const PluginContext = createContext<PluginContextType | undefined>(undefined);

export const usePlugin = (): PluginContextType => {
  const context = useContext(PluginContext);
  if (!context) {
    throw new Error("usePlugin must be used within a PluginContextProvider");
  }
  return context;
};

const PluginContextProvider: React.FC<PluginContextProviderProps> = ({
  children,
  baseUrl,
  accountId,
  userName,
  authUser,
  token,
  accountGroup,
  configFile,
  ai
}) => {
  const [boomi, setBoomi] = useState<Boomi | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [boomiConfig, setBoomiConfig] = useState<PluginboomiConfig | undefined>(undefined);
  const [aiConfig, setAiConfig] = useState<AiConfig | undefined>(ai);
  const overrideRef = useRef(true);
  const [pageIsLoading, setPageIsLoading] = useState(false);

  const createBoomiInstance = (override: boolean): Boomi => {
    logger.debug("createBoomiInstance:", override);
    return new Boomi({
      BASE: `${baseUrl}/${accountId}`,
      USERNAME: userName,
      PASSWORD: token,
      OVERRIDE_ACCOUNT: override,
      OVERRIDE_ACCOUNT_ID: authUser,
      WITH_CREDENTIALS: true,
      CREDENTIALS: "include",
    });
  };

  const updateBoomiConfig = (override: boolean): Boomi => {
    setIsReady(false);
    overrideRef.current = override;
    const instance = createBoomiInstance(override);
    logger.debug(`Boomi client updated with OVERRIDE_ACCOUNT=${override}`, instance);
    setBoomi(instance);
    setIsReady(true);
    return instance;
  };

  const httpPost = async ({
    body,
    object,
    id,
    overrideAccount,
    contentType = "application/json",
  }: {
    body: string;
    object: string;
    id?: string;
    overrideAccount?: string;
    contentType?: string;
  }): Promise<string> => {
    let path = `${baseUrl}/${accountId}/${object}`;
    if (id) path += `/${id}`;
    const query = overrideAccount ? `?overrideAccount=${encodeURIComponent(overrideAccount)}` : "";
    const url = `${path}${query}`;

    const headers: HeadersInit = {
      "Content-Type": contentType,
      "Authorization": `Basic ${btoa(`${userName}:${token}`)}`,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers,
        body,
      });

      const responseText = await response.text();

      if (!response.ok) {
        logger.error("SOAP POST failed", response.status, responseText);
        throw new Error(`SOAP POST failed: ${response.status}`);
      }

      return responseText;
    } catch (err) {
      logger.error("Error in post", err);
      throw err;
    }
  };

  useEffect(() => {
    logger.debug("Initializing Boomi client using overrideRef.current =", overrideRef.current);
    const instance = createBoomiInstance(overrideRef.current);
    setBoomi(instance);
    setIsReady(true);

    const loadBoomiConfig = async () => {
      try {
        logger.debug("UI config path passed in: ", configFile);
        const config = configFile
          ? await import(/* @vite-ignore */ configFile)
          : await import(/* @vite-ignore */ "../../boomi.config.js");
        logger.debug("UI config loaded");
        setBoomiConfig(config.boomiConfig);
      } catch (err) {
        logger.warn("Boomi configuration not found, proceeding without it.");
        logger.error(err);
      }
    };

    loadBoomiConfig();
  }, [baseUrl, accountId, userName, token, authUser, accountGroup, configFile, ai]);

  return (
    <PluginContext.Provider
      value={{
        apiBaseUrl: baseUrl,
        apiAccountId: accountId,
        apiUsername: userName,
        apiToken: token,
        apiAuthUser: authUser,
        ai,
        accountGroup,
        boomi,
        isReady,
        updateBoomiConfig,
        boomiConfig,
        pageIsLoading,
        setPageIsLoading,
        httpPost,
      }}
    >
      {children}
    </PluginContext.Provider>
  );
};

export default PluginContextProvider;
