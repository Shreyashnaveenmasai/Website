import React, { useEffect, useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import FacebookIcon from "@mui/icons-material/Facebook";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import SearchIcon from "@mui/icons-material/Search";
import Toolbar from "@mui/material/Toolbar";
import TwitterIcon from "@mui/icons-material/Twitter";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [isFixed, setIsFixed] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const footer = document.querySelector("footer");
            if (footer) {
                const footerTop = footer.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                setIsFixed(footerTop > windowHeight);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const menuItems = [
        { label: "Home", path: "/" },
        { label: "Services", path: "/services" },
        { label: "About", path: "/about" },
        { label: "Blog", path: "/blog" },
        { label: "Contact", path: "/contact" },
    ];

    const drawer = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={handleDrawerToggle}
        >
            <List>
                {menuItems.map((item) => (
                    <ListItem key={item.label} disablePadding>
                        <ListItemButton component={RouterLink} to={item.path}>
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <AppBar
            position={isFixed ? "fixed" : "absolute"}
            elevation={0}
            sx={{
                backgroundColor: "background.paper",
                borderBottom: 1,
                borderColor: "grey.200",
                transition: "all 0.3s ease-in-out",
                top: isFixed ? 0 : "auto",
                bottom: isFixed ? "auto" : 0,
            }}
        >
            <Container maxWidth="lg">
                <Toolbar disableGutters sx={{ gap: 2 }}>
                    {/* Logo */}
                    <Typography
                        variant="h6"
                        component={RouterLink}
                        to="/"
                        sx={{
                            flexGrow: { xs: 1, md: 0 },
                            color: "text.primary",
                            fontWeight: 700,
                            textDecoration: "none",
                            mr: 4,
                            fontSize: { xs: "1rem", sm: "1.25rem" },
                        }}
                    >
                        MADS
                    </Typography>

                    {/* Desktop Navigation */}
                    {!isMobile && (
                        <Box sx={{ display: "flex", gap: 3 }}>
                            {menuItems.map((item) => (
                                <Button
                                    key={item.label}
                                    component={RouterLink}
                                    to={item.path}
                                    sx={{
                                        color: "text.primary",
                                        "&:hover": {
                                            color: "primary.main",
                                            backgroundColor: "transparent",
                                        },
                                    }}
                                >
                                    {item.label}
                                </Button>
                            ))}
                        </Box>
                    )}

                    {/* Search Bar */}
                    {!isMobile && (
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                bgcolor: "grey.100",
                                borderRadius: 2,
                                px: 2,
                                ml: 2,
                            }}
                        >
                            <InputBase
                                placeholder="Search..."
                                sx={{ color: "text.primary" }}
                            />
                            <IconButton
                                size="small"
                                sx={{ color: "text.secondary" }}
                            >
                                <SearchIcon />
                            </IconButton>
                        </Box>
                    )}

                    {/* Social Media Icons */}
                    {!isMobile && (
                        <Box sx={{ display: "flex", gap: 2, ml: 2 }}>
                            {[
                                { icon: <FacebookIcon />, url: "#" },
                                { icon: <TwitterIcon />, url: "#" },
                                { icon: <LinkedInIcon />, url: "#" },
                            ].map((social, index) => (
                                <IconButton
                                    key={index}
                                    href={social.url}
                                    size="small"
                                    sx={{
                                        color: "text.secondary",
                                        "&:hover": { color: "primary.main" },
                                    }}
                                >
                                    {social.icon}
                                </IconButton>
                            ))}
                        </Box>
                    )}

                    {/* Get Started Button */}
                    {!isMobile && (
                        <Button
                            variant="contained"
                            color="primary"
                            component={ScrollLink}
                            to="get-started"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            sx={{
                                ml: "auto",
                                px: 4,
                                py: 1,
                                borderRadius: 2,
                                textTransform: "none",
                                fontSize: "0.95rem",
                                fontWeight: 500,
                                boxShadow: 2,
                                "&:hover": {
                                    boxShadow: 4,
                                    transform: "translateY(-1px)",
                                    transition: "all 0.2s ease-in-out",
                                },
                            }}
                        >
                            Get Started
                        </Button>
                    )}

                    {/* Mobile Menu Button */}
                    {isMobile && (
                        <IconButton
                            edge="end"
                            aria-label="menu"
                            onClick={handleDrawerToggle}
                            sx={{ color: "text.primary" }}
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
                        {drawer}
                    </Drawer>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
