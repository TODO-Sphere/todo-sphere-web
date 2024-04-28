export const API_MODE = "api";
export const LOCAL_MODE = "local";
export const MONGO_APP_MODE = "mongo";

export enum DataMode {
  LOCAL,
  API,
  MONGO_APP,
}

export function stringToDataMode(dtatModeStr: string): DataMode {
  if (dtatModeStr === API_MODE) return DataMode.API;
  if (dtatModeStr === MONGO_APP_MODE) return DataMode.MONGO_APP;

  return DataMode.LOCAL;
}
