import React, { useEffect, useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
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
import { useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import useMediaQuery from "@mui/material/useMediaQuery";
import Logo from "/assets/Svg.svg";

const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [position, setPosition] = useState("absolute");
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(location.pathname);
    const isHome = activeTab === "/";
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const footer = document.querySelector("#footer");

            let newPosition = "absolute"; // Default when scroll is < 100vh
            setScrolled(scrollY > 50); // Add scrolled state for smoother transitions

            if (scrollY > window.innerHeight) {
                newPosition = "fixed"; // Fix navbar when scrolling beyond 100vh
            }

            if (footer) {
                const footerTop = footer.getBoundingClientRect().top;
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
            sx={{ 
                width: 250,
                bgcolor: "#02225B",
                height: "100%",
                color: "#ffffff",
                transition: "all 0.3s ease-in-out",
            }}
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
                            sx={{
                                transition: "all 0.3s ease-in-out",
                                "&.Mui-selected": {
                                    bgcolor: "rgba(0, 217, 255, 0.1)",
                                    "&:hover": {
                                        bgcolor: "rgba(0, 217, 255, 0.2)",
                                    },
                                    "& .MuiListItemText-primary": {
                                        color: "#00d9ff",
                                        fontWeight: "bold",
                                    },
                                },
                                "&:hover": {
                                    bgcolor: "rgba(0, 217, 255, 0.05)",
                                    transform: "translateX(5px)",
                                },
                            }}
                        >
                            <ListItemText 
                                primary={item.label}
                                sx={{
                                    color: "#ffffff",
                                    transition: "all 0.3s ease-in-out",
                                    "&:hover": {
                                        color: "#00d9ff",
                                    },
                                }}
                            />
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
                backgroundColor: position === "fixed" || !isHome
                    ? "rgba(2, 34, 91, 0.95)"
                    : "transparent",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow: position === "fixed" || !isHome 
                    ? "0px 2px 10px rgba(0, 0, 0, 0.1)"
                    : "none",
                backdropFilter: position === "fixed" || !isHome
                    ? "blur(10px)"
                    : "none",
                "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: position === "fixed" || !isHome
                        ? "linear-gradient(45deg, rgba(0, 158, 197, 0.1) 0%, rgba(46, 126, 237, 0.1) 100%)"
                        : "none",
                    zIndex: -1,
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                },
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
                        transition: "all 0.3s ease-in-out",
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
                            transition: "transform 0.3s ease-in-out",
                            "&:hover": {
                                transform: "scale(1.05)",
                            },
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
                                        fontSize: "1.1rem",
                                        color: activeTab === item.path
                                            ? "#00d9ff"
                                            : position === "fixed" || !isHome
                                                ? "#ffffff"
                                                : "#ffffff",
                                        fontWeight: activeTab === item.path ? "bold" : "normal",
                                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                        "&:hover": {
                                            color: "#00d9ff",
                                            backgroundColor: "transparent",
                                            transform: "translateY(-2px)",
                                        },
                                        position: "relative",
                                        "&::after": {
                                            content: '""',
                                            position: "absolute",
                                            bottom: -2,
                                            left: 0,
                                            width: activeTab === item.path ? "100%" : "0%",
                                            height: "2px",
                                            backgroundColor: "#00d9ff",
                                            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                        },
                                        "&:hover::after": {
                                            width: "100%",
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
                            sx={{ 
                                color: position === "fixed" || !isHome
                                    ? "#ffffff"
                                    : "#ffffff",
                                transition: "all 0.3s ease-in-out",
                                "&:hover": {
                                    color: "#00d9ff",
                                    transform: "rotate(90deg)",
                                },
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}

                    {/* Mobile Drawer */}
                    <Drawer
                        anchor="right"
                        open={drawerOpen}
                        onClose={handleDrawerToggle}
                        PaperProps={{
                            sx: {
                                bgcolor: "#02225B",
                                color: "#ffffff",
                                transition: "all 0.3s ease-in-out",
                            }
                        }}
                    >
                        {getDrawer()}
                    </Drawer>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
