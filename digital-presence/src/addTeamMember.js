import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Stack from '@mui/material/Stack';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyIcon from '@mui/icons-material/Key';
import { useState } from 'react';



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
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <div>
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
                <div>
                    <TextField label="Password" variant="standard" onChange={(e) => setPassword(e.target.value)} />
                </div>
            </Box>
        </Box>
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <KeyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <div>
                    <TextField label="Institution name" variant="standard" onChange={(e) => setCode(e.target.value)} />
                </div>
            </Box>
        </Box>
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <KeyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <FormControl variant="standard" sx={{ m: 1, minWidth: 150 }}>
                    <InputLabel id="demo-simple-select-standard-label">Institution code</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        label="קוד מוסד">
                        <MenuItem value={10}>123</MenuItem>
                        <MenuItem value={20}>124</MenuItem>
                        <MenuItem value={30}>125</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </Box>
        <Stack direction="row" spacing={2}>
            <Button variant="contained" endIcon={<KeyboardDoubleArrowRightIcon />} onClick={checkValues} sx={{ borderRadius: '16px' }}>
                Add
            </Button>
        </Stack>
    </>);
}
export default AddTeamMember;