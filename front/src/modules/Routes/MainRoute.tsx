import React from "react";
import { Route, Routes } from "react-router";
import AuthPage from "../authPage/AuthPage";


const MainRoute = () => {
    return (
        <Routes>
            <Route path="/signIn" element={<AuthPage />}></Route>
        </Routes>
    )
}

export default MainRoute