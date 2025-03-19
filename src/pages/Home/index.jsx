import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import FacebookIcon from "@mui/icons-material/Facebook";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";
import { Link as ScrollLink } from "react-scroll";
import TwitterIcon from "@mui/icons-material/Twitter";
import Typography from "@mui/material/Typography";

const Home = () => {
    return (
        <Box>
            {/* Hero Section */}
            <Box
                sx={{
                    bgcolor: "primary.main",
                    color: "white",
                    py: 10,
                    textAlign: "center",
                }}
            >
                <Container maxWidth="lg">
                    <Typography
                        variant="h2"
                        component="h1"
                        fontWeight={700}
                        gutterBottom
                    >
                        Empowering Businesses with IT Solutions
                    </Typography>
                    <Typography variant="h5" sx={{ mt: 2, mb: 4 }}>
                        Innovative technology to drive your success
                    </Typography>
                    <Button
                        variant="contained"
                        size="large"
                        component={ScrollLink}
                        to="contact"
                        smooth={true}
                        sx={{
                            bgcolor: "white",
                            color: "primary.main",
                            px: 4,
                            py: 1.5,
                            fontSize: "1.1rem",
                            fontWeight: 600,
                            "&:hover": {
                                bgcolor: "grey.100",
                            },
                        }}
                    >
                        Get Started
                    </Button>
                </Container>
            </Box>

            {/* Services Section */}
            <Box sx={{ py: 8 }} id="services">
                <Container maxWidth="lg">
                    <Typography
                        variant="h3"
                        component="h2"
                        textAlign="center"
                        fontWeight={700}
                        gutterBottom
                    >
                        Our Services
                    </Typography>
                    <Grid container spacing={4} sx={{ mt: 4 }}>
                        {[
                            {
                                title: "Web Development",
                                description:
                                    "Custom websites and applications tailored to your business.",
                            },
                            {
                                title: "Cloud Solutions",
                                description:
                                    "Scalable cloud infrastructure to enhance your operations.",
                            },
                            {
                                title: "Cybersecurity",
                                description:
                                    "Protect your business with advanced security measures.",
                            },
                        ].map((service, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <Card
                                    elevation={2}
                                    sx={{
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        p: 2,
                                        "&:hover": {
                                            transform: "translateY(-4px)",
                                            transition:
                                                "transform 0.3s ease-in-out",
                                        },
                                    }}
                                >
                                    <CardContent>
                                        <Typography
                                            variant="h5"
                                            component="h3"
                                            fontWeight={600}
                                            gutterBottom
                                        >
                                            {service.title}
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            color="text.secondary"
                                        >
                                            {service.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* About Section */}
            <Box sx={{ bgcolor: "grey.100", py: 8 }} id="about">
                <Container maxWidth="lg">
                    <Typography
                        variant="h3"
                        component="h2"
                        textAlign="center"
                        fontWeight={700}
                        gutterBottom
                    >
                        About Us
                    </Typography>
                    <Typography
                        variant="body1"
                        color="text.secondary"
                        textAlign="center"
                        sx={{ maxWidth: "800px", mx: "auto", mt: 2 }}
                    >
                        TechSolutions is a leading IT company specializing in
                        software development, cloud solutions, and
                        cybersecurity.
                    </Typography>
                </Container>
            </Box>

            {/* Contact Section */}
            <Box sx={{ py: 8 }} id="contact">
                <Container maxWidth="lg">
                    <Typography
                        variant="h3"
                        component="h2"
                        textAlign="center"
                        fontWeight={700}
                        gutterBottom
                    >
                        Contact Us
                    </Typography>
                    <Box sx={{ textAlign: "center" }}>
                        <Typography variant="body1" color="text.secondary">
                            Email: support@techsolutions.com
                        </Typography>
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            sx={{ mt: 1 }}
                        >
                            Phone: +1 (123) 456-7890
                        </Typography>
                        <Box
                            sx={{
                                mt: 3,
                                display: "flex",
                                justifyContent: "center",
                                gap: 2,
                            }}
                        >
                            {[
                                { icon: <FacebookIcon />, url: "#" },
                                { icon: <TwitterIcon />, url: "#" },
                                { icon: <LinkedInIcon />, url: "#" },
                            ].map((social, index) => (
                                <IconButton
                                    key={index}
                                    href={social.url}
                                    sx={{
                                        color: "text.secondary",
                                        "&:hover": { color: "primary.main" },
                                    }}
                                >
                                    {social.icon}
                                </IconButton>
                            ))}
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default Home;
