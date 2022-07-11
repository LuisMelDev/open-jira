import { useContext } from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { MenuRounded } from "@mui/icons-material";
import { UIContext } from "context";

export const Navbar = () => {
    const { onToggleSideMenu } = useContext(UIContext);
    return (
        <AppBar position="sticky" elevation={0}>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    onClick={onToggleSideMenu}
                >
                    <MenuRounded />
                </IconButton>
                <Typography variant="h6">Open Jira</Typography>
            </Toolbar>
        </AppBar>
    );
};
