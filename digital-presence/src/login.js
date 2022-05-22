import react from "react"
import {
    Card, Avatar, CssBaseline, Button, TextField, Link, Box, Typography, Container, OutlinedInput, InputLabel, InputAdornment, FormHelperText, FormControl, IconButton
} from '@mui/material';

const Login=()=>{

    return(
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
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="שם משתמש"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                />
                                <FormControl fullWidth required variant="outlined">
                                    <InputLabel htmlFor="password">סיסמא</InputLabel>
                                    <OutlinedInput dir="rtl"
                                        id="password"
                                        endAdornment={
                                            <InputAdornment position="end">
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
                                        type="submit"
                                        fullWidth
                                        variant="contained">
                                        כניסה
                        </Button>
                                </div>                              
                                    <Link variant="body2">
                                        שכחתי סיסמא
                                    </Link>
                                    <Link>             </Link>
                                    <Link variant="body2">
                                        יצירת חשבון חדש
                                    </Link>
                            </Box>
                        </Box>
                        <p className="copy">
                            </p>
                    </Container>
            </Card>
        </div>
    )
}
export default Login;