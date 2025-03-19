import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

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
            textTransform: "none",
        },
    },
    palette: {
        mode: "light",
        primary: {
            main: "#009EC5", // Start of the gradient
            light: "#2e7eed", // Midpoint of the gradient
            dark: "#02225B", // End of the gradient
        },
        secondary: {
            main: "#2e7eed", // Midpoint of the gradient
        },
        background: {
            default: "#F4F6F8",
            paper: "#FFFFFF",
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