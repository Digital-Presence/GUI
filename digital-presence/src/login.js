import react, { useState } from "react";
import axios from './config/axios';
import { Link, useNavigate } from 'react-router-dom'
import {
    Card, CssBaseline, Button, TextField, Box, Typography, Container, OutlinedInput, InputLabel, InputAdornment, FormControl, IconButton
} from '@mui/material';

const Login = () => {
    const [password, setPassword] = useState("");
    const [user, setUser] = useState("");
    const navigate = useNavigate();
    const checkPassword = () => {
        axios.get('ManagerController/SearchManager?password='+  password )
            .then(result => {
                console.log(result.data);
                navigate("/ClassesOfTeachers");
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div className="login">
            <Card >
                <Container
                    component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box sx={{
                        direction: 'ltr',
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                        <Typography
                            component="h1" variant="h5">
                            כניסה          </Typography>
                        <Box className="box2" component="form" noValidate >
                            <TextField dir="rtl"
                                onChange={(e) => setUser(e.target.value)}
                                margin="normal"
                                required
                                fullWidth
                                id="identity"
                                label="שם משתמש"
                                name="identity"
                                autoComplete="identity"
                                autoFocus
                            />
                            <FormControl fullWidth required variant="outlined">
                                <InputLabel htmlFor="password">סיסמא</InputLabel>
                                <OutlinedInput dir="rtl"
                                    onChange={(e) => setPassword(e.target.value)}
                                    id="password"
                                    endAdornment={
                                        <InputAdornment position="end" >
                                            <IconButton
                                                aria-label="toggle password visibility"
                                            >
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="סיסמא"
                                />
                            </FormControl>
                            <div className="button1">
                                <Button
                                    onClick={checkPassword}
                                    type="submit"
                                    fullWidth
                                    variant="contained">
                                    כניסה
                                </Button>
                            </div>
                            {/* <Link variant="body2">
                                יצירת חשבון חדש
                            </Link> */}
                        </Box>
                    </Box>
                    <p className="copy">
                    </p>
                </Container>
            </Card>
            {/* <Link to="/Login">login</Link> */}
        </div>
    )
}
export default Login;