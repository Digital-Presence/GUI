import React from "react";
import { Routes, Route } from "react-router-dom";
import ClassesOfTeacher from "./classesOfTeacher";
import Login from "./login";

const Router = () => {
    return (<>
        <Routes>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/ClassesOfTeacher" element={<ClassesOfTeacher />}></Route>
            <Route path="/" exact element={<Login />}></Route>
            <Route path="*" element={<Login />} />
        </Routes>
    </>)
}
export default Router;