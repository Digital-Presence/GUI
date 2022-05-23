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
import Stack from '@mui/material/Stack';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PhoneIcon from '@mui/icons-material/Phone';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import AddNewChild from './addNewChild';

const theme = createTheme({
    direction: 'rtl', // Both here and <body dir="rtl">
});
// Create rtl cache
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

const UpdateChild = () => {
    const [show, setShow] = useState(false);


    return (<>
        <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={theme}>
                <Box sx={{ '& > :not(style)': { m: 1 } }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <div dir="rtl">
                            <TextField label="ת.ז." variant="outlined" />
                        </div>
                    </Box>
                </Box>
                <Button variant="contained" endIcon={<SearchIcon />}>
                    חפש ילד
                </Button>
                {/* {{show && <AddNewChild/>}} */}
                <Stack direction="row" spacing={2}>
                    <Button variant="contained" endIcon={<RefreshIcon />}>
                        עדכן
                    </Button> // יפה לעשות כפתור מעוגל
                </Stack>
            </ThemeProvider>
        </CacheProvider>
    </>);
}
export default UpdateChild;

{/* <Box sx={{ '& > :not(style)': { m: 1 } }}>
<Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
    <div dir="rtl">
        <TextField label="ת.ז." variant="outlined" />
    </div>
</Box>
</Box>
<Button variant="contained" endIcon={<SearchIcon />}>
חפש ילד
</Button>

<Box sx={{ '& > :not(style)': { m: 1 } }}>
<Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
    <div dir="rtl">
        <TextField label="שם פרטי" variant="standard" />
    </div>
    <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
</Box>
</Box>
<Box sx={{ '& > :not(style)': { m: 1 } }}>
<Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
    <div dir="rtl">
        <TextField label="שם משפחה" variant="standard" />
    </div>
    <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
</Box>
</Box>
<Box sx={{ '& > :not(style)': { m: 1 } }}>
<Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
    <div dir="rtl">
        <TextField label="ת.ז." variant="standard" />
    </div>
    <FingerprintIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
</Box>
</Box>

<Box sx={{ '& > :not(style)': { m: 1 } }}>
<Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
    <div dir="rtl">
        <TextField label="שם אפוטרופוס" variant="standard" />
    </div>
    <SupervisorAccountIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
</Box>
</Box>
<Box sx={{ '& > :not(style)': { m: 1 } }}>
<Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
    <div dir="rtl">
        <TextField label="טלפון 1" variant="standard" />
    </div>
    <PhoneIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
</Box>
</Box>
<Box sx={{ '& > :not(style)': { m: 1 } }}>
<Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
    <div dir="rtl">
        <TextField label="טלפון 2" variant="standard" />
    </div>
    <PhoneIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
</Box>
</Box>
<Box sx={{ '& > :not(style)': { m: 1 } }}>
<Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
    <div dir="rtl">
        <TextField label="תאריך לידה" variant="standard" />
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
            <MenuItem value={10}>א\1</MenuItem>
            <MenuItem value={15}>א\2</MenuItem>
        </Select>
    </FormControl>
</Box>
</Box>
<Stack direction="row" spacing={2}>
<Button variant="contained" endIcon={<RefreshIcon />}>
    עדכן
</Button> // יפה לעשות כפתור מעוגל
</Stack> */}