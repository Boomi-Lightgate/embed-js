// logger.ts
interface Logger {
  log: (...args: any[]) => void;
  warn: (...args: any[]) => void;
  error: (...args: any[]) => void;
  debug: (...args: any[]) => void;
}

const isProd = import.meta.env.VITE_APP_ENV === 'production';

const logger: Logger = {
  log: (...args: any[]) => {
    if (!isProd) {
      console.log(...args);
    }
  },
  warn: (...args: any[]) => {
    if (!isProd) {
      console.warn(...args);
    }
  },
  error: (...args: any[]) => {
    console.error(...args); // Always log errors
  },
  debug: (...args: any[]) => {
    if (!isProd) {
      console.debug(...args);
    }
  },
};

export default logger;
