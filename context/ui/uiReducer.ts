import { UIState } from "interfaces";

type UIActionType =
    | {
          type: "UI - SIDEBAR_TOGGLE";
      }
    | {
          type: "UI - DRAG_START";
      }
    | { type: "UI - DRAG_END" };

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
    // eslint-disable-next-line sonarjs/no-small-switch
    switch (action.type) {
        case "UI - SIDEBAR_TOGGLE":
            return {
                ...state,
                sideMenuOpen: !state.sideMenuOpen,
            };
        case "UI - DRAG_START":
            return {
                ...state,
                isDragging: true,
            };
        case "UI - DRAG_END":
            return {
                ...state,
                isDragging: false,
            };
        default:
            return state;
    }
};
