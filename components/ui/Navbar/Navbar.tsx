import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { MenuRounded } from "@mui/icons-material";

export const Navbar = () => {
    return (
        <AppBar position="sticky" elevation={0}>
            <Toolbar>
                <IconButton size="large" edge="start">
                    <MenuRounded />
                </IconButton>
                <Typography variant="h6">Open Jira</Typography>
            </Toolbar>
        </AppBar>
    );
};
