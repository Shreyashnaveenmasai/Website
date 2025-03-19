import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const theme = createTheme({
    typography: {
        fontFamily: [
            "Inter",
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(","),
        h1: {
            fontWeight: 600,
        },
        h2: {
            fontWeight: 600,
        },
        h3: {
            fontWeight: 600,
        },
        h4: {
            fontWeight: 500,
        },
        h5: {
            fontWeight: 500,
        },
        h6: {
            fontWeight: 500,
        },
        subtitle1: {
            fontWeight: 400,
        },
        body1: {
            fontWeight: 400,
            lineHeight: 1.5,
        },
        button: {
            fontWeight: 500,
            textTransform: "none", // This prevents uppercase text in buttons
        },
    },
    palette: {
        mode: "light",
        primary: {
            main: "#2196f3", // You can adjust this color
            light: "#64b5f6",
            dark: "#1976d2",
        },
        secondary: {
            main: "#f50057",
            light: "#ff4081",
            dark: "#c51162",
        },
        text: {
            primary: "rgba(0, 0, 0, 0.87)",
            secondary: "rgba(0, 0, 0, 0.6)",
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8, // Slightly rounded corners
                    fontSize: "0.95rem",
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                rounded: {
                    borderRadius: 12, // Softer corners for cards and dialogs
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.12)", // Softer shadow
                },
            },
        },
    },
});

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </StrictMode>
);
