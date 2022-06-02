import { textAlign } from "@mui/system";
import React from "react";
import ClassesOfTeacher from "./classesOfTeacher";
import './tryNav.css';
import Login from './login';
import UpdateChild from './updataChild';

const TryNav = () => {
    return (<>
        <div className="gradient-custom">
            <h1 className="h1">NavBar</h1>
        </div>
        {/* <Login /> */}
        <UpdateChild/>
        <div className="gradient-custom">
            <p className="endPage"> נשמח להיות בקשר</p>
        </div>
    </>);
}
export default TryNav;