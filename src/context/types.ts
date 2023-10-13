import { TOGGLE_SIDEBAR } from "@/common/constants";
import { ReactNode } from "react";

export enum ReducerTypes {
  ToogleSidebar = TOGGLE_SIDEBAR,
}
  
export interface LayoutProviderProps {
  children?: ReactNode;
}