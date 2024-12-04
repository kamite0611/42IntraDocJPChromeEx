export const overrideConsoleLog = (function (oldCons) {
  return {
    log: function (message: any, ...option: any[]) {
      oldCons.log(`[AUTO_FORM] ${message}`, ...option);
    },
    info: function (message: any, ...option: any[]) {
      oldCons.info(`[AUTO_FORM] ${message}`, ...option);
    },
    warn: function (message: any, ...option: any[]) {
      oldCons.warn(`[AUTO_FORM] ${message}`, ...option);
    },
    error: function (message: any, ...option: any[]) {
      oldCons.error(`[AUTO_FORM] ${message}`, ...option);
    },
  };
})(window.console);
