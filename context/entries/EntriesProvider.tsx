import { FC, ReactNode, useReducer } from "react";

import { EntriesState, EntryStatus } from "interfaces";

import { EntriesContext } from "./EntriesContext";
import { EntriesReducer } from "./entriesReducer";

const ENTRIES_INITIAL_STATE: EntriesState = {
    entries: [
        {
            _id: "123",
            description:
                "pendiente: lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            status: "pending",
            createdAt: Date.now(),
        },
        {
            _id: "1235",
            description:
                "progreso: lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna",
            status: "in-progress",
            createdAt: Date.now() - 1000000,
        },
        {
            _id: "1237",
            description:
                "terminada: lorem  dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            status: "finished",
            createdAt: Date.now() - 2000000,
        },
    ],
};

export const EntriesProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(EntriesReducer, ENTRIES_INITIAL_STATE);

    const addEntry = (description: string) => {
        dispatch({
            type: "[Entry] - AddEntry",
            payload: {
                _id: "43214",
                description,
                status: "pending",
                createdAt: Date.now(),
            },
        });
    };

    const updateEntry = (id: string, status: EntryStatus) => {
        // eslint-disable-next-line no-underscore-dangle, @typescript-eslint/no-non-null-assertion
        const toUpdateEntry = state.entries.find(entry => entry._id === id)!;

        dispatch({
            type: "[Entry] - UpdateEntry",
            payload: {
                ...toUpdateEntry,
                status,
            },
        });
    };

    return (
        <EntriesContext.Provider
            value={{
                ...state,
                addEntry,
                updateEntry,
            }}
        >
            {children}
        </EntriesContext.Provider>
    );
};
