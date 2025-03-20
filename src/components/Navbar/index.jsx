import React, { useEffect, useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Logo from "/assets/Svg.svg";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [position, setPosition] = useState("absolute");
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(location.pathname);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const footer = document.querySelector("#footer");

            let newPosition = "absolute"; // Default when scroll is < 100vh

            if (scrollY > window.innerHeight) {
                newPosition = "fixed"; // Fix navbar when scrolling beyond 100vh
            }

            if (footer) {
                const footerTop = footer.getBoundingClientRect().top;

                console.log("footerTop", footerTop);
                if (footerTop < window.innerHeight) {
                    newPosition = "absolute"; // Back to absolute when footer is in view
                }
            }

            setPosition(newPosition);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const menuItems = [
        { label: "Home", path: "/" },
        { label: "About", path: "/about" },
        { label: "Services", path: "/services" },
        { label: "Contact", path: "/contact" },
    ];

    const getDrawer = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={handleDrawerToggle}
        >
            <List>
                {menuItems.map((item) => (
                    <ListItem key={item.label} disablePadding>
                        <ListItemButton
                            component={RouterLink}
                            to={item.path}
                            selected={activeTab === item.path}
                            onClick={() => setActiveTab(item.path)}
                        >
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <AppBar
            position={position}
            sx={{
                backgroundColor:
                    position === "fixed"
                        ? theme.palette.background.default
                        : "transparent",
                // borderBottom: position === "fixed" ? 1 : "none",
                // borderColor: position === "fixed" ? "grey.200" : "none",
                transition: "all 0.4s ease-in-out",
                boxShadow: position === "fixed" ? "" : "none",
            }}
        >
            <Container maxWidth="lg">
                <Toolbar
                    disableGutters
                    sx={{
                        paddingY: 1,
                        display: "flex",
                        gap: 3,
                        justifyContent: "space-between",
                    }}
                >
                    {/* Logo */}
                    <Box
                        component={RouterLink}
                        to="/"
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            textDecoration: "none",
                            mr: 4,
                        }}
                    >
                        <img
                            src={Logo}
                            alt="Logo"
                            style={{ height: 60, marginLeft: "-10px" }}
                        />
                    </Box>

                    {/* Desktop Navigation */}
                    {!isMobile && (
                        <Box sx={{ display: "flex", gap: 3 }}>
                            {menuItems.map((item) => (
                                <Button
                                    key={item.label}
                                    component={RouterLink}
                                    to={item.path}
                                    sx={{
                                        fontSize: "1.2rem",
                                        color:
                                            activeTab === item.path
                                                ? theme.palette.primary.main
                                                : position === "fixed"
                                                ? theme.palette.text.primary
                                                : theme.palette.text.secondary,
                                        "&:hover": {
                                            color: theme.palette.primary.light,
                                            backgroundColor: "transparent",
                                        },
                                    }}
                                    onClick={() => setActiveTab(item.path)}
                                >
                                    {item.label}
                                </Button>
                            ))}
                        </Box>
                    )}

                    {/* Mobile Menu Button */}
                    {isMobile && (
                        <IconButton
                            edge="end"
                            aria-label="menu"
                            onClick={handleDrawerToggle}
                            sx={{ color: theme.palette.text.primary }}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}

                    {/* Mobile Drawer */}
                    <Drawer
                        anchor="right"
                        open={drawerOpen}
                        onClose={handleDrawerToggle}
                    >
                        {getDrawer()}
                    </Drawer>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
