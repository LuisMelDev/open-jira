import { createContext } from "react";

import { Entry, EntryStatus } from "interfaces";

interface ContextProps {
    entries: Entry[];
    addEntry: (description: string) => void;
    updateEntry: (id: string, status: EntryStatus) => void;
}

export const EntriesContext = createContext({} as ContextProps);
