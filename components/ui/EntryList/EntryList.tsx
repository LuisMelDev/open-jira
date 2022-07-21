import { FC, useContext, useMemo, DragEvent } from "react";
import { List, Paper } from "@mui/material";

import { EntriesContext, UIContext } from "context";
import { EntryStatus } from "interfaces";
import { EntryCard } from "../EntryCard";

interface Props {
    status: EntryStatus;
}

const styles = {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: "1rem",
    border: "1px dashed ",
};

const allowDrop = (e: DragEvent) => {
    e.preventDefault();
};

export const EntryList: FC<Props> = ({ status }) => {
    const { entries, updateEntry } = useContext(EntriesContext);
    const { isDragging, onDragEnd } = useContext(UIContext);

    const entriesByStatus = useMemo(
        () => entries.filter(entry => entry.status === status),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [entries]
    );

    const onDropEntry = (e: DragEvent) => {
        const id = e.dataTransfer.getData("text");
        updateEntry(id, status);
        onDragEnd();
    };

    return (
        <div
            style={{
                height: "100%",
            }}
            onDrop={onDropEntry}
            onDragOver={allowDrop}
        >
            <Paper
                sx={{
                    height: "100%",
                    overflow: "auto",
                    backgroundColor: "transparent",
                    "&::-webkit-scrollbar": { display: "none" },
                    paddingX: 1,
                    paddingBottom: 7,
                }}
            >
                <List
                    sx={{
                        opacity: isDragging ? 0.5 : 1,
                        transition: "all 0.2s ease-in-out",
                        height: "calc(100% - 15px)",
                        ...(isDragging && styles),
                    }}
                >
                    {entriesByStatus.map(entry => (
                        // eslint-disable-next-line no-underscore-dangle
                        <EntryCard key={entry._id} entry={entry} />
                    ))}
                </List>
            </Paper>
        </div>
    );
};
