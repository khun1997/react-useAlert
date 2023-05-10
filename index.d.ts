import { Dispatch, SetStateAction } from "react";

export type TypeUseAlertConfig<FieldValues> = {
  defaultState?: FieldValues;
};

export interface TypeUseAlert<FieldValues> {
  alerts: FieldValues;

  updateAlert: <T extends keyof FieldValues>(
    name: T,
    value: FieldValues[T]
  ) => void;

  setAlerts: Dispatch<SetStateAction<FieldValues>>;
}

export const useAlert: <T>(options?: TypeUseAlertConfig<T>) => TypeUseAlert<T>;

export default useAlert;
