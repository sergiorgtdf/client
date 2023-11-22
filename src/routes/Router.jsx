import { Route, Routes } from "react-router-dom";

import HomePg from "../pages/HomePg";
import AboutPg from "../pages/AboutPg";
import TaskPg from "../pages/TaskPg";
import ContactPg from "../pages/ContactPg";
import ProfilePg from "../pages/ProfilePg";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePg />} />
            <Route path="/about" element={<AboutPg />} />
            <Route path="/task" element={<TaskPg />} />
            <Route path="/contact" element={<ContactPg />} />
            <Route path="/profile" element={<ProfilePg />} />
        </Routes>
    );
};

export default Router;
