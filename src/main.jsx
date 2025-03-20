import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const theme = createTheme({
    palette: {
        primary: {
            main: "#009EC5", // Main theme color
            light: "#2e7eed", // Lighter shade for hover effects
            dark: "#02225B", // Darker shade for text
        },
        secondary: {
            main: "#2e7eed", // Secondary color
        },
        background: {
            default: "#F4F6F8", // Light background color
            paper: "#FFFFFF", // Background for paper components
        },
        text: {
            primary: "rgba(0, 0, 0, 0.87)", // Primary text color
            secondary: "rgba(0, 0, 0, 0.6)", // Secondary text color
        },
    },
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
            color: "#02225B",
        },
        h2: {
            fontWeight: 600,
            color: "#02225B",
        },
        h3: {
            fontWeight: 600,
            color: "#02225B",
        },
        h4: {
            fontWeight: 500,
            color: "#02225B",
        },
        h5: {
            fontWeight: 500,
            color: "#02225B",
        },
        h6: {
            fontWeight: 500,
            color: "#02225B",
        },
        subtitle1: {
            fontWeight: 400,
            color: "#02225B",
        },
        body1: {
            fontWeight: 400,
            lineHeight: 1.5,
            color: "#02225B",
        },
        button: {
            fontWeight: 500,
            textTransform: "none",
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    fontSize: "0.95rem",
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                rounded: {
                    borderRadius: 12,
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.12)",
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
