import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Stack from '@mui/material/Stack';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';



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
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <div >
                    <TextField label="Name" variant="standard" onChange={(e) => setName(e.target.value)} />
                </div>
            </Box>
        </Box>
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <FingerprintIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <div>
                    <TextField label="ID" variant="standard" onChange={(e) => setIdentity(e.target.value)} />
                </div>
            </Box>
        </Box>
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <VisibilityOffIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <div >
                    <TextField label="Password" variant="standard" onChange={(e) => setPassword(e.target.value)} />
                </div>
            </Box>
        </Box>
        <Stack direction="row" spacing={2}>
            <Button variant="contained" endIcon={<KeyboardDoubleArrowRightIcon />} onClick={checkValues} sx={{ borderRadius: '16px' }}>
                Sighn in
            </Button>
        </Stack>
    </>);
}
export default AddManager;
