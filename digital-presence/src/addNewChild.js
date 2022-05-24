import React, { Children, useState } from 'react';
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
import Stack from '@mui/material/Stack';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PhoneIcon from '@mui/icons-material/Phone';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";


const theme = createTheme({
    direction: 'rtl', // Both here and <body dir="rtl">
});
// Create rtl cache
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});


const AddNewChild = () => {
    const [name, setName] = useState("");
    const [family, setFamily] = useState("");
    const [identity, setIdentity] = useState("");
    const [guardian, setGuardian] = useState("");
    const [phone1, setPhone1] = useState("");
    const [phone2, setPhone2] = useState("");
    const [date, setDate] = useState(new Date());
    const checkValues = () => {
        if (family && name && identity && guardian && phone1 && date) {
            console.log("the values are full!!!")
        }
        else {
            console.log("Error!!!")
        }
    }
    //הפעלת הפונקציה של הוספת ילד ולשלוח את הפרמטרים
    return (<>
        <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={theme}>
                <Box sx={{ '& > :not(style)': { m: 1 } }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <div dir="rtl">
                            <TextField label="שם פרטי" variant="standard" required onChange={(e) => setName(e.target.value)} />
                        </div>
                        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    </Box>
                </Box>
                <Box sx={{ '& > :not(style)': { m: 1 } }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <div dir="rtl">
                            <TextField label="שם משפחה" variant="standard" required onChange={(e) => setFamily(e.target.value)} />
                        </div>
                        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    </Box>
                </Box>
                <Box sx={{ '& > :not(style)': { m: 1 } }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <div dir="rtl">
                            <TextField label="ת.ז." variant="standard" required onChange={(e) => setIdentity(e.target.value)} />
                        </div>
                        <FingerprintIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    </Box>
                </Box>
                <Box sx={{ '& > :not(style)': { m: 1 } }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <div dir="rtl">
                            <TextField label="שם אפוטרופוס" variant="standard" required onChange={(e) => setGuardian(e.target.value)} />
                        </div>
                        <SupervisorAccountIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    </Box>
                </Box>
                <Box sx={{ '& > :not(style)': { m: 1 } }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <div dir="rtl">
                            <TextField label="טלפון 1" variant="standard" required onChange={(e) => setPhone1(e.target.value)} />
                        </div>
                        <PhoneIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    </Box>
                </Box>
                <Box sx={{ '& > :not(style)': { m: 1 } }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <div dir="rtl">
                            <TextField label="טלפון 2" variant="standard" onChange={(e) => setPhone2(e.target.value)} />
                        </div>
                        <PhoneIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    </Box>
                </Box>
                <Box sx={{ '& > :not(style)': { m: 1 } }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <div dir="rtl">
                            <TextField label="תאריך לידה" variant="standard" required onChange={(e) => setDate(e.target.value)} />
                        </div>
                        <CalendarTodayIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    </Box>
                </Box>
                <Box sx={{ '& > :not(style)': { m: 1 } }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 250 }}>
                            <InputLabel id="demo-simple-select-standard-label">שם כיתה (לולאה של קוד כיתה)</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard">
                                <MenuItem value={10}>א1</MenuItem>
                                <MenuItem value={15}>א2</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Box>
                <Stack direction="row" spacing={2}>
                    <Button variant="contained" startIcon={<KeyboardDoubleArrowLeftIcon />} onClick={checkValues}>
                        הוסף
                    </Button> // יפה לעשות כפתור מעוגל
                </Stack>
            </ThemeProvider>
        </CacheProvider>
    </>);
}
export default AddNewChild;
