import { FC, ReactNode } from "react";
import Head from "next/head";

import { Box } from "@mui/material";

interface Props {
    title?: string;
    children: ReactNode;
}

export const Layout: FC<Props> = ({ title = "Open Jira", children }) => {
    return (
        <Box bgcolor='primary' sx={{ flexFlow: 1 }}>
            <Head>
                <title>{title}</title>
            </Head>
            <Box
                component='main'
                sx={{
                    padding: "10px 20px",
                }}
            >
                {children}
            </Box>
        </Box>
    );
};