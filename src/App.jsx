import * as React from "react";

import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import AppRoutes from "./routes";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
                pt: "64px",
            }}
        >
            <Navbar />
            <Container sx={{ mt: 4, flex: 1 }}>
                <AppRoutes />
            </Container>
            <Footer />
        </Box>
    );
}

export default App;
