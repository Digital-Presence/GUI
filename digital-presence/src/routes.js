import React from 'react';
import { Routes, Route } from 'react-router';
import Login from './login';
import ClassesOfTeacher from './classesOfTeacher';

const Router = () => {
    <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/ClassesOfTeacher" element={<ClassesOfTeacher/>}></Route>
        {/* <Route path="*" element={<Login/>}></Route> */}

    </Routes>
}
export default Router;