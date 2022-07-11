import { UIState } from "interfaces";

type UIActionType = {
    type: "UI - SIDEBAR_TOGGLE";
};

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
    // eslint-disable-next-line sonarjs/no-small-switch
    switch (action.type) {
        case "UI - SIDEBAR_TOGGLE":
            return {
                ...state,
                sideMenuOpen: !state.sideMenuOpen,
            };
        default:
            return state;
    }
};
