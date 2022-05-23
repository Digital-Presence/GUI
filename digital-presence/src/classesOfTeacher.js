import React, { useState } from "react";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Grid } from "@mui/material";

const ClassesOfTeacher = (props) => {
    const [listOfChildren, setListOfChildren] = useState(props.listOfClasses);

    const findAllChildrenOfTeacher = () => {
        setListOfChildren(['א1', 'א2', 'ב1', 'ג1']);
        // אמור לקבל רשימה של הכיתות
        // בכניסה מקיש ת.ז. אם מורה - בודק האם יש לו כמה כיתות ומציג אותם ושולח את רשימת הכיתות 
        // ואם אין כיתות מציג אין תוצאות מציג קומפוננטה שונה 
    }
    const moveToClass = () => {
        // אמור לקבל את המפתח של השדה בלולאה שלחצו עליו ולפי זה נדע את הכיתה
    }

    return (<>
        <Grid container >
            <Grid item xs={2}>
                <Card sx={{ maxWidth: '30vw' }}>
                    <CardActionArea sx={{ minHeight: '30vh' }}>
                        <Typography gutterBottom variant="h3" component="div" sx={{ textAlign: "center" }} onClick={() => moveToClass()}>
                            כתה א1
                        </Typography>
                    </CardActionArea>
                </Card>
            </Grid>
        </Grid>
    </>);
}

export default ClassesOfTeacher;