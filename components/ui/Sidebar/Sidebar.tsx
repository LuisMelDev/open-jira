import { useContext } from "react";
import {
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
} from "@mui/material";
import { Inbox as InboxIcon, Mail as MailIcon } from "@mui/icons-material";
import { UIContext } from "context";

const menuItems = ["Inbox", "Starred", "Send email", "Drafts"];

export const Sidebar = () => {
    const { sideMenuOpen, onToggleSideMenu } = useContext(UIContext);

    return (
        <Drawer anchor="left" open={sideMenuOpen} onClose={onToggleSideMenu}>
            <Box
                sx={{
                    width: 250,
                }}
            >
                <Box
                    sx={{
                        padding: ".35rem .7rem",
                    }}
                >
                    <Typography variant="h4">Menu</Typography>
                </Box>
                <List>
                    {menuItems.map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? (
                                        <InboxIcon />
                                    ) : (
                                        <MailIcon />
                                    )}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
};
