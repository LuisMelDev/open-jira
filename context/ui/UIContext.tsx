import { createContext } from "react";

interface ContextProps {
    sideMenuOpen: boolean;
    onToggleSideMenu: () => void;
}

export const UIContext = createContext({} as ContextProps);
