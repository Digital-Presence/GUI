import React, { Children, useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import Stack from '@mui/material/Stack';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PhoneIcon from '@mui/icons-material/Phone';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { borderRadius } from '@mui/system';





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

        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />

                <div >
                    <TextField label="First name" variant="standard" required onChange={(e) => setName(e.target.value)} />
                </div>
            </Box>
        </Box>
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <div >
                    <TextField label="Family Name" variant="standard" required onChange={(e) => setFamily(e.target.value)} />
                </div>
            </Box>
        </Box>
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <FingerprintIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <div >
                    <TextField label="ID" variant="standard" required onChange={(e) => setIdentity(e.target.value)} />
                </div>
            </Box>
        </Box>
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <SupervisorAccountIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <div >
                    <TextField label="Name of guardian" variant="standard" required onChange={(e) => setGuardian(e.target.value)} />
                </div>
            </Box>
        </Box>
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <PhoneIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <div >
                    <TextField label="Phone 1" variant="standard" required onChange={(e) => setPhone1(e.target.value)} />
                </div>
            </Box>
        </Box>
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <PhoneIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <div >
                    <TextField label="Phone 2" variant="standard" onChange={(e) => setPhone2(e.target.value)} />
                </div>
            </Box>
        </Box>
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <CalendarTodayIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <div >
                    <TextField label="Date of birth" variant="standard" required onChange={(e) => setDate(e.target.value)} />
                </div>
            </Box>
        </Box>
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 250 }}>
                    <InputLabel id="demo-simple-select-standard-label">Class name (לולאה של קוד כיתה)</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard">
                        <MenuItem value={10}>A1</MenuItem>
                        <MenuItem value={15}>A2</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </Box>
        <Stack direction="row" spacing={2}>
            <Button variant="contained" endIcon={<KeyboardDoubleArrowRightIcon />} onClick={checkValues} sx={{ borderRadius: '16px' }}>
                Add
            </Button> // יפה לעשות כפתור מעוגל
        </Stack>

    </>);
}
export default AddNewChild;
