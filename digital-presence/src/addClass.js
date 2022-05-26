import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import Box from '@mui/material/Box';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Stack from '@mui/material/Stack';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import Checkbox from '@mui/material/Checkbox';
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import ListOfTeachers from './listOfTeachers';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Router from './routes';
const theme = createTheme({
    direction: 'rtl', // Both here and <body dir="rtl">
});
// Create rtl cache
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});


const AddClass = () => {
    const nav = useNavigate();
 
    const [name, setName] = useState("");
    const [institution, setInstitution] = useState("");

    const c=()=>{
        console.log("yse");
        nav("/Login");
        }
    //הפעלת הפונקציה המוסיפה כיתה חדשה ושולחת את הפרמטרים
    return (<div direction="rtl">
        <Link to='/Login' >Login</Link>
        <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={theme}>
                <Box sx={{ '& > :not(style)': { m: 1 } }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <div dir="rtl">
                            <TextField label="שם קבוצה" variant="standard" onChange={(e) => setName(e.target.value)} />
                        </div>
                        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    </Box>
                </Box>
                <Box sx={{ '& > :not(style)': { m: 1 } }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-standard-label" onChange={(e) => setInstitution(e.target.value)} >סוג מוסד</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard">
                                <MenuItem value={10}>מעון / גן</MenuItem>
                                <MenuItem value={15}>ביה"ס</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Box>
                <div>מורות הקבוצה</div>
                <ListOfTeachers />
                <Stack direction="row" spacing={2} >
                    <Button variant="contained" startIcon={<KeyboardDoubleArrowLeftIcon />} onClick={c}>
                        הרשם
                    </Button>
                </Stack>
            </ThemeProvider>
        </CacheProvider>
    </div>);
}

export default AddClass;