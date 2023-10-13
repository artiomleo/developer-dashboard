import React from "react";
import { LayoutProviderProps, ReducerTypes } from "./types";
import { TOGGLE_SIDEBAR } from "@/common/constants";

export const LayoutStateContext = React.createContext({
  isSidebarOpened: true,
});
export const LayoutDispatchContext = React.createContext({});

function layoutReducer(
  state: { isSidebarOpened: boolean },
  action: { type: ReducerTypes }
) {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return { ...state, isSidebarOpened: !state.isSidebarOpened };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function LayoutProvider({ children }: LayoutProviderProps) {
  const [state, dispatch] = React.useReducer(layoutReducer, {
    isSidebarOpened: true,
  });

  return (
    <LayoutStateContext.Provider value={state}>
      <LayoutDispatchContext.Provider value={dispatch}>
        {children}
      </LayoutDispatchContext.Provider>
    </LayoutStateContext.Provider>
  );
}

export { LayoutProvider };
