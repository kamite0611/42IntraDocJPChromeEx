export const overrideConsoleLog = (function (oldCons) {
  return {
    log: function (message: any, ...option: any[]) {
      oldCons.log(`[42IntraDocJP] ${message}`, ...option);
    },
    info: function (message: any, ...option: any[]) {
      oldCons.info(`[42IntraDocJP] ${message}`, ...option);
    },
    warn: function (message: any, ...option: any[]) {
      oldCons.warn(`[42IntraDocJP] ${message}`, ...option);
    },
    error: function (message: any, ...option: any[]) {
      oldCons.error(`[42IntraDocJP] ${message}`, ...option);
    },
  };
})(window.console);
