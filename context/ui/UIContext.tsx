import { createContext } from "react";

interface ContextProps {
    sideMenuOpen: boolean;
    isDragging: boolean;
    onToggleSideMenu: () => void;
    onDragStart: () => void;
    onDragEnd: () => void;
}

export const UIContext = createContext({} as ContextProps);
