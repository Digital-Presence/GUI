import { textAlign } from "@mui/system";
import React from "react";
import ClassesOfTeacher from "./classesOfTeacher";
import './tryNav.css';
import Login from './login';
import UpdateChild from './updataChild';
import AddNewChild from "./addNewChild";
import AddManager from './addManager';
// import AddClass from './addClass';
import AddTeamMember from './addTeamMember';
import AddVacation from './addVacation';
import ListOfTeachers from './listOfTeachers';
import NoResult from './noResult';
import PresencePage from './presencePage'; 

const TryNav = () => {
    return (<>
        <div className="gradient-custom">
            <h1 className="h1">NavBar</h1>
        </div>
        <Login />
        <UpdateChild />
        <AddNewChild />
        <AddManager />
        {/* <AddClass/> */}
        <AddTeamMember />
        {/* <AddVacation /> */}
        <ClassesOfTeacher />
        <ListOfTeachers />
        <NoResult />
        <PresencePage />

    </>);
}
export default TryNav;