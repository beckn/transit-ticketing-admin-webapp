/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
const DEFAULT_NAMESPACE = "TransitTicket";

const info = (message: any, namespace?: string): void => {
  if (typeof message === "string") {
    // console.log(`[${getDate()}] [${namespace || DEFAULT_NAMESPACE}] [INFO] ${message}`);
    return;
  } else {
    // console.log(`[${getDate()}] [${namespace || DEFAULT_NAMESPACE}] [INFO]`, message);
    return;
  }
};

const warn = (message: any, namespace?: string): void => {
  if (typeof message === "string") {
    // console.log(`[${getDate()}] [${namespace || DEFAULT_NAMESPACE}] [WARN] ${message}`);
    return;
  } else {
    // console.log(`[${getDate()}] [${namespace || DEFAULT_NAMESPACE}] [WARN]`, message);
    return;
  }
};

const error = (message: any, namespace?: string): void => {
  if (typeof message === "string") {
    // console.log(`[${getDate()}] [${namespace || DEFAULT_NAMESPACE}] [ERROR] ${message}`);
    return;
  } else {
    // console.log(`[${getDate()}] [${namespace || DEFAULT_NAMESPACE}] [ERROR]`, message);
    return;
  }
};

const getDate = (): string => {
  return new Date().toISOString();
};

const logging = { info, warn, error, getDate };

export default logging;