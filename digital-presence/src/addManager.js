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


const theme = createTheme({
    direction: 'rtl', // Both here and <body dir="rtl">
});
// Create rtl cache
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

const AddManager = () => {
    const [name, setName] = useState("");
    const [identity, setIdentity] = useState("");
    const [password, setPassword] = useState("");
    const checkValues = () => {
        if (name && identity && password) {
            console.log("the values are full!!!");
        }
        else {
            console.log("Error!!!");
        }
    }
    //הפעלת הפונקציה של הוספת מנהל מוסד ולשלוח את הפרמטרים
    return (<>
        <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={theme}>
                <Box sx={{ '& > :not(style)': { m: 1 } }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <div dir="rtl">
                            <TextField label="שם" variant="standard" onChange={(e) => setName(e.target.value)} />
                        </div>
                        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    </Box>
                </Box>
                <Box sx={{ '& > :not(style)': { m: 1 } }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <div dir="rtl">
                            <TextField label="ת.ז." variant="standard" onChange={(e) => setIdentity(e.target.value)} />
                        </div>
                        <FingerprintIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    </Box>
                </Box>
                <Box sx={{ '& > :not(style)': { m: 1 } }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <div dir="rtl">
                            <TextField label="סיסמה" variant="standard" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <VisibilityOffIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    </Box>
                </Box>
                <Stack direction="row" spacing={2}>
                    <Button variant="contained" startIcon={<KeyboardDoubleArrowLeftIcon />} onClick={checkValues}>
                        הרשם
                    </Button>
                </Stack>
            </ThemeProvider>
        </CacheProvider>
    </>);
}
export default AddManager;
