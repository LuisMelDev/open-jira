import { EntriesState, Entry } from "interfaces";

type NameActionType =
    | { type: "[Entry] - AddEntry"; payload: Entry }
    | { type: "[Entry] - UpdateEntry"; payload: Entry };

export const EntriesReducer = (
    state: EntriesState,
    action: NameActionType
): EntriesState => {
    // eslint-disable-next-line sonarjs/no-small-switch
    switch (action.type) {
        case "[Entry] - AddEntry":
            return {
                ...state,
                entries: [...state.entries, action.payload],
            };
        // eslint-disable-next-line sonarjs/no-duplicated-branches
        case "[Entry] - UpdateEntry":
            return {
                ...state,
                entries: [
                    ...state.entries.map(entry => {
                        // eslint-disable-next-line no-underscore-dangle
                        if (entry._id === action.payload._id) {
                            // eslint-disable-next-line no-param-reassign
                            entry.description = action.payload.description;
                            // eslint-disable-next-line no-param-reassign
                            entry.status = action.payload.status;
                        }
                        return entry;
                    }),
                ],
            };
        default:
            return state;
    }
};
