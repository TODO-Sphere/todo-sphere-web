export const API_MODE = "api";
export const LOCAL_MODE = "local";
export const ATLAS_MODE = "atlas";

export enum DataMode {
  LOCAL,
  API,
  ATLAS,
}

export function stringToDataMode(dtatModeStr: string): DataMode {
  if (dtatModeStr === API_MODE) return DataMode.API;
  if (dtatModeStr === ATLAS_MODE) return DataMode.ATLAS;

  return DataMode.LOCAL;
}
