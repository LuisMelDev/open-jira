import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#4a148c",
        },
        secondary: {
            main: "#19854b",
        },
        error: {
            main: red.A400,
        },
    },
    components: {
        MuiAppBar: {
            defaultProps: {},
            styleOverrides: {
                root: {
                    background: "#4a148c",
                },
            },
        },
    },
});
