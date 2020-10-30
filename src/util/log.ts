export const LOG_LEVEL = {
  ERROR:  4,
  WARN:   3,
  INFO:   2,
  DEBUG:  1,
  ALL:    0,
};

export class Log {

  //public static maxLevel = process.env.REACT_APP_MAX_LOG_LEVEL;
  public static maxLevel = 0;

  public static debug(tag: string, ...args: any[]) {
      Log.log(LOG_LEVEL.DEBUG, 'DEBUG', tag, ...args);
  }

  public static info(tag: string, ...args: any[]) {
      Log.log(LOG_LEVEL.INFO, 'INFO', tag, ...args);
  }

  public static warn(tag: string, ...args: any[]) {
      Log.log(LOG_LEVEL.WARN, 'WARN', tag, ...args);
  }

  public static error(tag: string, ...args: any[]) {
      Log.log(LOG_LEVEL.ERROR, 'ERROR', tag, ...args);
  }

  private static log(level: number, type: string, tag: string, ...args: any[]) {
      if(this.maxLevel <= level) {
          let lf = console.log;
          if (level === LOG_LEVEL.DEBUG) {
              lf = console.debug;
          } else if (level === LOG_LEVEL.ERROR) {
              lf = console.error;
          } else if (level === LOG_LEVEL.INFO) {
              lf = console.info;
          } else if (level === LOG_LEVEL.WARN) {
              lf = console.warn;
          }
          lf(`${new Date().toISOString()} [${type}] ${tag}:`, ...args);
      }
  }
}
