import * as React from "react";

import AppRoutes from "./routes";
import Box from "@mui/material/Box";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                // pt: "64px",
                pl: "0px",
                pr: "0px",
            }}
        >
            <Navbar />
            <Box sx={{ flex: 1, width: "100%" }}>
                <AppRoutes />
            </Box>
            <Footer />
        </Box>
    );
}

export default App;
