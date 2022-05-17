import React from "react";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Grid } from "@mui/material";

const classesOfTeacher = () => {
    return (<>
        <Grid container >
            <Grid item xs={2}>
                <Card sx={{ maxWidth: 250 }}>
                    <CardActionArea sx={{ minHeight: 250 }}>
                        <Typography gutterBottom variant="h3" component="div" sx={{ textAlign: "center" }}>
                            כתה א1
                        </Typography>
                    </CardActionArea>
                </Card>
            </Grid>
        </Grid>
    </>);
}

export default classesOfTeacher;