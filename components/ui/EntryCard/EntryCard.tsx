import { FC, DragEvent, useContext } from "react";
import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    Typography,
} from "@mui/material";
import { Entry } from "interfaces";
import { UIContext } from "context";

interface Props {
    entry: Entry;
}

export const EntryCard: FC<Props> = ({ entry }) => {
    const { onDragEnd: dragEnd, onDragStart: dragStart } =
        useContext(UIContext);

    const onDragStart = (e: DragEvent) => {
        // eslint-disable-next-line no-underscore-dangle
        e.dataTransfer.setData("text", entry._id);
        dragStart();
    };

    const onDragEnd = () => {
        dragEnd();
    };

    return (
        <Card
            sx={{ marginBottom: 1 }}
            draggable
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
        >
            <CardActionArea>
                <CardContent>
                    <Typography
                        sx={{
                            whiteSpace: "pre-line",
                        }}
                    >
                        {entry.description}
                    </Typography>
                </CardContent>
                <CardActions
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        paddingRight: 2,
                    }}
                >
                    <Typography variant="body2">hace 30 minutos</Typography>
                </CardActions>
            </CardActionArea>
        </Card>
    );
};
