import { FC, ReactNode, useReducer } from "react";

import { UIState } from "interfaces";
import { UIContext } from "./UIContext";
import { uiReducer } from "./uiReducer";

const UI_INITIAL_STATE: UIState = {
    sideMenuOpen: false,
    isDragging: false,
};

export const UIProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

    const onToggleSideMenu = () => {
        dispatch({ type: "UI - SIDEBAR_TOGGLE" });
    };

    const onDragStart = () => {
        dispatch({ type: "UI - DRAG_START" });
    };

    const onDragEnd = () => {
        dispatch({ type: "UI - DRAG_END" });
    };

    return (
        <UIContext.Provider
            value={{
                ...state,
                onToggleSideMenu,
                onDragStart,
                onDragEnd,
            }}
        >
            {children}
        </UIContext.Provider>
    );
};
