import * as React from "react";

import Box from "@mui/material/Box";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes";

function App() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                pt: "64px",
                pl: "0px",
                pr: "0px",
            }}
        >
            <Navbar />
            <Box sx={{ mt: 1, flex: 1, width: "100%" }}>
                <AppRoutes />
            </Box>
            <Footer />
        </Box>
    );
}

export default App;