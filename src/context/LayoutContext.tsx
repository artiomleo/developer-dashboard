import React, { Dispatch } from "react";
import { ReducerTypes } from "./types";
import { LayoutDispatchContext, LayoutStateContext } from "./LayoutProvider";

function useLayoutState() {
  const context = React.useContext(LayoutStateContext);
  if (context === undefined) {
    throw new Error("useLayoutState must be used within a LayoutProvider");
  }
  return context;
}

function useLayoutDispatch() {
  const context = React.useContext(LayoutDispatchContext);
  if (context === undefined) {
    throw new Error("useLayoutDispatch must be used within a LayoutProvider");
  }
  return context;
}

export { useLayoutState, useLayoutDispatch, toggleSidebar };

function toggleSidebar(dispatch: Dispatch<{ type: ReducerTypes }>) {
  dispatch({
    type: ReducerTypes.ToogleSidebar,
  });
}
