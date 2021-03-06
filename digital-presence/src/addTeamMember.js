import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import Box from '@mui/material/Box';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Stack from '@mui/material/Stack';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyIcon from '@mui/icons-material/Key';


const theme = createTheme({
    direction: 'rtl', // Both here and <body dir="rtl">
});
// Create rtl cache
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

const AddTeamMember = () => {
    const [name, setName] = useState("");
    const [identity, setIdentity] = useState("");
    const [password, setPassword] = useState("");
    const [code, setCode] = useState("");
    const checkValues = () => {
        if (name && identity && password && code) {
            console.log("the values are full!!!");
        }
        else {
            console.log("Error!!!");
        }
    }
    //הפעלת הפונקציה של הוספת חבר צוות חדש ולשלוח את הפרמטרים
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
                            <TextField label="ת.ז." variant="standard" onChange={(e) => setIdentity(e, target.value)} />
                        </div>
                        <FingerprintIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    </Box>
                </Box>
                <Box sx={{ '& > :not(style)': { m: 1 } }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <div dir="rtl">
                            <TextField label="סיסמא" variant="standard" onChange={(e) => setPassword(e, target.value)} />
                        </div>
                        <VisibilityOffIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    </Box>
                </Box>
                <Box sx={{ '& > :not(style)': { m: 1 } }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <div dir="rtl">
                            <TextField label="קוד מוסד" variant="standard" onChange={(e) => setCode(e, target.value)} />
                        </div>
                        <KeyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    </Box>
                </Box>
                <Box sx={{ '& > :not(style)': { m: 1 } }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-standard-label">קוד מוסד</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                label="קוד מוסד">
                                <MenuItem value={10}>123</MenuItem>
                                <MenuItem value={20}>124</MenuItem>
                                <MenuItem value={30}>125</MenuItem>
                            </Select>
                            <KeyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        </FormControl>
                    </Box>
                </Box>
                <Stack direction="row" spacing={2}>
                    <Button variant="contained" startIcon={<KeyboardDoubleArrowLeftIcon />} onClick={checkValues}>
                        הוסף
                    </Button>
                </Stack>
            </ThemeProvider>
        </CacheProvider>
    </>);
}
export default AddTeamMember;