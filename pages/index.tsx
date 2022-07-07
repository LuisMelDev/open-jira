import { Typography } from "@mui/material";
import { Layout } from "components";
import type { NextPage } from "next";

const Home: NextPage = () => {
    return (
        <Layout>
            <Typography variant="h1" color="primary">
                Hola qloq
            </Typography>
        </Layout>
    );
};

export default Home;
