import { Card, CardHeader, Grid } from "@mui/material";
import { EntryList, Layout, NewEntry } from "components";
import type { NextPage } from "next";

const style = { height: "calc(100vh -  100px)" };

const Home: NextPage = () => {
    return (
        <Layout title="Home - Open Jira">
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <Card sx={style}>
                        <CardHeader
                            sx={{ fontWeight: "bold" }}
                            title="Pendientes"
                        />
                        <NewEntry />
                        <EntryList status="pending" />
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card sx={style}>
                        <CardHeader
                            sx={{ fontWeight: "bold" }}
                            title="En Progreso"
                        />
                        <EntryList status="in-progress" />
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card sx={style}>
                        <CardHeader
                            sx={{ fontWeight: "bold" }}
                            title="Completadas"
                        />
                        <EntryList status="finished" />
                    </Card>
                </Grid>
            </Grid>
        </Layout>
    );
};

export default Home;
