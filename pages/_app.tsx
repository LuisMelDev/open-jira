import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme } from "themes";
import { UIProvider, EntriesProvider } from "context";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <UIProvider>
            <EntriesProvider>
                <ThemeProvider theme={darkTheme}>
                    <CssBaseline />
                    <Component {...pageProps} />
                </ThemeProvider>
            </EntriesProvider>
        </UIProvider>
    );
}

export default MyApp;
