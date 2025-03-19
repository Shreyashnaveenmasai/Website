import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import FacebookIcon from "@mui/icons-material/Facebook";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import Typography from "@mui/material/Typography";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Box
            component="footer"
            sx={{
                bgcolor: "grey.100",
                color: "text.primary",
                py: 6,
                mt: 10,
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={8}>
                    {/* Company Info */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                            TechSolutions
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Innovative IT solutions for businesses of all sizes.
                        </Typography>
                    </Grid>

                    {/* Quick Links */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                            Quick Links
                        </Typography>
                        <Box
                            component="ul"
                            sx={{
                                listStyle: "none",
                                p: 0,
                                m: 0,
                                "& li": { mb: 1 },
                            }}
                        >
                            {[
                                "Home",
                                "Services",
                                "About",
                                "Blog",
                                "Contact",
                            ].map((item) => (
                                <li key={item}>
                                    <Link
                                        component={RouterLink}
                                        to={`/${item.toLowerCase()}`}
                                        sx={{
                                            color: "text.secondary",
                                            textDecoration: "none",
                                            "&:hover": {
                                                color: "primary.main",
                                            },
                                        }}
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </Box>
                    </Grid>

                    {/* Contact Info */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                            Contact Us
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            paragraph
                        >
                            Email: support@techsolutions.com
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            paragraph
                        >
                            Phone: +1 (123) 456-7890
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            paragraph
                        >
                            Address: 123 Tech Street, New York, NY
                        </Typography>

                        {/* Social Icons */}
                        <Box sx={{ mt: 2, display: "flex", gap: 2 }}>
                            {[
                                { icon: <FacebookIcon />, url: "#" },
                                { icon: <TwitterIcon />, url: "#" },
                                { icon: <LinkedInIcon />, url: "#" },
                            ].map((social, index) => (
                                <Link
                                    key={index}
                                    href={social.url}
                                    color="text.secondary"
                                    sx={{
                                        "&:hover": {
                                            color: "primary.main",
                                        },
                                    }}
                                >
                                    {social.icon}
                                </Link>
                            ))}
                        </Box>
                    </Grid>
                </Grid>

                {/* Bottom Footer */}
                <Box
                    sx={{
                        mt: 6,
                        pt: 2,
                        borderTop: 1,
                        borderColor: "grey.200",
                        textAlign: "center",
                    }}
                >
                    <Typography variant="body2" color="text.secondary">
                        © {currentYear} TechSolutions. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
