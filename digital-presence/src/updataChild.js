import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
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



const UpdateChild = (props) => {
    const [idSearch, setIdSearch] = useState("");
    const [showDetails, setShowDetails] = useState(false);
    const checkIdExists = () => {
        idSearch == "123" ? setShowDetails(true) : setShowDetails(false);
    }
    const udateDetails = () => {
        // עדכון פרטי הילד בשרת
    }
    return (<>
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <div >
                    <TextField label="ID" variant="outlined" onChange={(e) => { setIdSearch(e.target.value) }} />
                </div>
            </Box>
        </Box>
        <Button variant="contained" startIcon={<SearchIcon />} onClick={checkIdExists} sx={{ borderRadius: '16px' }}>
            Search child
        </Button>
        {showDetails && <span>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <div >
                        <TextField label="First name" variant="standard" value="{props.firstName}" />
                    </div>
                </Box>
            </Box>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <div >
                        <TextField label="Family name" variant="standard" value="{props.familyName}" />
                    </div>
                </Box>
            </Box>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <FingerprintIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <div >
                        <TextField label="ID" variant="standard" value="{props.childId}" />
                    </div>
                </Box>
            </Box>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <SupervisorAccountIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <div >
                        <TextField label="Name of guardian" variant="standard" value="{props.apotropuseName}" />
                    </div>
                </Box>
            </Box>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <PhoneIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <div >
                        <TextField label="Phone 1" variant="standard" value="{props.tellephone1}" />
                    </div>
                </Box>
            </Box>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <PhoneIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <div >
                        <TextField label="Phone 2" variant="standard" value="{props.tellephone2}" />
                    </div>
                </Box>
            </Box>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <CalendarTodayIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <div >
                        <TextField label="Date of birth" variant="standard" value="{props.dbo}" />
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
                <Button variant="contained" startIcon={<RefreshIcon />} onClick={udateDetails} sx={{ borderRadius: '16px' }}>
                    Update
                </Button> // יפה לעשות כפתור מעוגל
            </Stack>
        </span>}

    </>);
}
export default UpdateChild;
