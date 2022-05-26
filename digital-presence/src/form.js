// // import "./AddStudent.css";
// import SendIcon from '@mui/icons-material/Send';
// import useForm from 
// import Child from './classes/Child';
// import { Button, TextField, makeStyles } from "@mui/material";

// const Form = () => {


//     const useStyles = makeStyles(textField => ({
//         root: {
//             marginTop: "12px",
//             marginBottom: "7px"
//         },
//     }));

//     const classes = useStyles();

//     const { register, handleSubmit, formState: { errors } } = useForm < Child > ({});
//     const url = "https://localhost:44354/";
//     // const login = async (data) => {
//     //     console.log(data);
//     //     let adminPromise =await axios.get(url + `api/Administrator${data}`)
//     //     .then((response=>{
//     //          console.log(response);


//     //     }))
//     //     .catch((error=>{console.log(error)}))
//     // }
//     return (
//         <div className="LogIn">
//             {/* onSubmit={handleSubmit(login)} */}
//             <div className="header">Log In</div>
//             <form>
//                 <p>
//                     <TextField id='FirstName' className={classes.root} label="First Name" type="text"
//                         {...register('FirstName', { required: true, minLength: 2 })}
//                     />
//                     {errors.FirstName?.type === "required" && <span className='error' > <br />Required field</span>}
//                     {errors.FirstName?.type === "minLength" && <span className='error'><br />too short</span>}
//                 </p>
//                 <p>
//                     <TextField id='FamilyName' className={classes.root} label="FamilyName" type="text"
//                         {...register('FamilyName', { required: true, minLength: 2 })}
//                     />
//                     {errors.LastName?.type === "required" && <span className='error' > <br />Required field</span>}
//                     {errors.LastName?.type === "minLength" && <span className='error'><br />too short</span>}
//                 </p>
//                 <p>
//                     <TextField id="IdChild" className={classes.root} label="IdChild" type="text"
//                         {...register('IdChild', { required: true, minLength: 8 })}
//                     />
//                     {errors.StudentId?.type === "required" && <span className='error' > <br />Required field</span>}
//                     {errors.StudentId?.type === "minLength" && <span className='error'><br />too short</span>}
//                 </p>
//                 <p>
//                     <TextField id="ApotropusName" className={classes.root} label="ApotropusName" type="text"
//                         {...register('ApotropusName', { required: true, minLength: 8 })}
//                     />
//                     {errors.GradeCode?.type === "required" && <span className='error' > <br />Required field</span>}
//                     {errors.GradeCode?.type === "minLength" && <span className='error'><br />too short</span>}
//                 </p><p>
//                     <TextField id="Tellephone1" className={classes.root} label="Tellephone1" type="text"
//                         {...register('Tellephone1', { required: true, minLength: 8 })}
//                     />
//                     {errors.Email?.type === "required" && <span className='error' > <br />Required field</span>}
//                     {errors.Email?.type === "minLength" && <span className='error'><br />too short</span>}
//                 </p>
//                 {/* <Link to="/chooseProps"> */}
//                 <Button variant="contained" type='submit'
//                     color="primary"//***********איך גורמים שבלחיצה על שליחה, יעורר את הפעולה שנמצאת בפרוגרס */
//                     endIcon={<SendIcon />}>
//                     Log In
//                 </Button>
//                 {/* </Link> */}

//             </form>
//             <div className='Bottom'>
//                 Don't have account?
//                 <a href='/signin'>  Create one now</a>
//             </div>
//         </div>

//     );
// }

// export default Form;
