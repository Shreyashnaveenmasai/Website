import { Route, Routes } from "react-router-dom";

import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import React from "react";
import Services from "../pages/Services";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/serviceDetails/:serviceId" element={<Contact />} />
        </Routes>
    );
};

export default AppRoutes;
