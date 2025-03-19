import {
    Box,
    Card,
    CardContent,
    Container,
    Grid,
    List,
    ListItem,
    ListItemText,
    Typography,
} from "@mui/material";
import { coreServices, testimonials } from "./constants";

import StarIcon from "@mui/icons-material/Star";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import React from "react";
import { Link as ScrollLink } from "react-scroll";
import Image from "/assets/HeroSection.png";

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <Box
                sx={{
                    position: "relative",
                    bgcolor: "primary.main",
                    color: "white",
                    py: 10,
                    textAlign: "center",
                    overflow: "hidden",
                    "::before": {
                        content: '""',
                        position: "absolute",
                        bottom: 0,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                        backgroundImage:
                            "linear-gradient(45deg, #009EC5 0%, #2e7eed 20%, #02225B 50%)",
                        zIndex: -1,
                    },
                }}
            >
                <Container
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        position: "relative",
                        zIndex: 1,
                    }}
                    maxWidth="xl"
                >
                    <Box sx={{ textAlign: "left", width: "55%" }}>
                        <Typography variant="h2" fontWeight={700} gutterBottom>
                            MADS Consulting Services LLC
                        </Typography>
                        <Typography variant="h4" sx={{ mt: 2 }}>
                            Adapting Technology to Fit Your Business
                        </Typography>
                        <Typography variant="h5" sx={{ mt: 2, mb: 4 }}>
                            Innovative IT Solutions for Business Growth
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
                    </Box>
                    <Container sx={{ width: "45%", overflow: "hidden" }}>
                        <img
                            src={Image}
                            alt="Hero Section Image"
                            style={{ width: "100%", height: "auto" }}
                        />
                    </Container>
                </Container>
            </Box>

            {/* Core Services Section */}
            <Container sx={{ py: 8 }} id="services">
                <Container>
                    <Typography
                        variant="h3"
                        component="h2"
                        textAlign="center"
                        fontWeight={700}
                        gutterBottom
                    >
                        Our Core Services
                    </Typography>
                    <Grid container spacing={6} sx={{ mt: 4 }}>
                        {coreServices.map((service, index) => (
                            <Grid
                                container
                                item
                                xs={12}
                                spacing={4}
                                key={index}
                                direction={
                                    index % 2 === 0 ? "row" : "row-reverse"
                                }
                                alignItems="center"
                            >
                                {/* Image Section */}
                                <Grid item xs={12} md={6}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            // width: "100%",
                                        }}
                                    >
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            style={{
                                                maxWidth: "100%",
                                                width: "40%",
                                                height: "auto",
                                            }}
                                        />
                                    </Box>
                                </Grid>

                                {/* Text Section */}
                                <Grid item xs={12} md={6}>
                                    <Box>
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
                                            paragraph
                                        >
                                            {service.description}
                                        </Typography>
                                        <List>
                                            {service.items.map((item, idx) => (
                                                <ListItem
                                                    key={idx}
                                                    sx={{ pl: 0, pb: 1 }}
                                                >
                                                    <ListItemText
                                                        primary={item}
                                                    />
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Box>
                                </Grid>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Container>

            <Container>
                {/* Why Choose MADS Section */}
                <Box sx={{ py: 8, bgcolor: "background.paper" }}>
                    <Container maxWidth="lg">
                        <Typography
                            variant="h3"
                            component="h2"
                            textAlign="center"
                            fontWeight={700}
                            gutterBottom
                        >
                            Why Choose MADS Consulting?
                        </Typography>
                        <Grid container spacing={4} sx={{ mt: 4 }}>
                            {[
                                {
                                    title: "Industry-Leading Expertise",
                                    description:
                                        "A team of experienced professionals with deep technical knowledge.",
                                },
                                {
                                    title: "Hands-On Innovation",
                                    description:
                                        "We develop our own in-house software solutions to stay ahead of trends.",
                                },
                                {
                                    title: "End-to-End IT Support",
                                    description:
                                        "From consultation to deployment, we manage the entire tech lifecycle.",
                                },
                                {
                                    title: "Scalable & Cost-Effective Solutions",
                                    description:
                                        "IT solutions tailored for startups, SMEs, and large enterprises.",
                                },
                            ].map((item, index) => (
                                <Grid item xs={12} md={6} key={index}>
                                    <Card
                                        elevation={1}
                                        sx={{
                                            height: "100%",
                                            p: 3,
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
                                                {item.title}
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                color="text.secondary"
                                            >
                                                {item.description}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Box>

                {/* Industries We Serve Section */}
                <Box sx={{ py: 8, bgcolor: "grey.50" }}>
                    <Container maxWidth="lg">
                        <Typography
                            variant="h3"
                            component="h2"
                            textAlign="center"
                            fontWeight={700}
                            gutterBottom
                        >
                            Industries We Serve
                        </Typography>
                        <Grid container spacing={4} sx={{ mt: 4 }}>
                            {[
                                {
                                    title: "Government & Public Sector",
                                    description:
                                        "Secure IT infrastructure for state and federal agencies.",
                                },
                                {
                                    title: "Healthcare",
                                    description:
                                        "HIPAA-compliant solutions for patient data management.",
                                },
                                {
                                    title: "Manufacturing",
                                    description:
                                        "ERP and IoT-driven automation for smart factories.",
                                },
                                {
                                    title: "Financial Services",
                                    description:
                                        "AI-powered fraud detection and digital banking solutions.",
                                },
                                {
                                    title: "Retail & E-commerce",
                                    description:
                                        "Cloud-based inventory and omnichannel retail solutions.",
                                },
                            ].map((industry, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <Card
                                        elevation={1}
                                        sx={{
                                            height: "100%",
                                            p: 3,
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
                                                {industry.title}
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                color="text.secondary"
                                            >
                                                {industry.description}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Box>

                {/* Testimonials Section */}
                <Box sx={{ bgcolor: "grey.100", py: 8 }}>
                    <Container maxWidth="lg">
                        <Typography
                            variant="h3"
                            component="h2"
                            textAlign="center"
                            fontWeight={700}
                            gutterBottom
                        >
                            What Our Clients Say
                        </Typography>
                        <Grid container spacing={4} sx={{ mt: 4 }}>
                            {testimonials.map((testimonial, index) => (
                                <Grid item xs={12} md={4} key={index}>
                                    <Card
                                        sx={{
                                            height: "100%",
                                            display: "flex",
                                            flexDirection: "column",
                                            p: 3,
                                        }}
                                    >
                                        <CardContent>
                                            <Rating
                                                value={5}
                                                readOnly
                                                icon={
                                                    <StarIcon fontSize="inherit" />
                                                }
                                                sx={{ mb: 2 }}
                                            />
                                            <Typography
                                                variant="body1"
                                                paragraph
                                            >
                                                "{testimonial.quote}"
                                            </Typography>
                                            <Typography
                                                variant="subtitle1"
                                                fontWeight={600}
                                            >
                                                {testimonial.author}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                            >
                                                {testimonial.position}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Box>

                {/* Get Started Section */}
                <Box sx={{ py: 8 }} id="contact">
                    <Container maxWidth="lg">
                        <Typography
                            variant="h3"
                            component="h2"
                            textAlign="center"
                            fontWeight={700}
                            gutterBottom
                        >
                            Get Started with MADS Consulting
                        </Typography>
                        <Grid
                            container
                            spacing={4}
                            sx={{ mt: 4, textAlign: "center" }}
                        >
                            {[
                                "Consultation – Schedule a free discovery call",
                                "Strategy & Planning – Custom technology roadmap",
                                "Implementation – Seamless integration and support",
                                "Ongoing Support & Optimization",
                            ].map((step, index) => (
                                <Grid item xs={12} md={3} key={index}>
                                    <Typography variant="h6" gutterBottom>
                                        Step {index + 1}
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        color="text.secondary"
                                    >
                                        {step}
                                    </Typography>
                                </Grid>
                            ))}
                        </Grid>
                        <Box sx={{ textAlign: "center", mt: 6 }}>
                            <Button
                                variant="contained"
                                size="large"
                                sx={{
                                    px: 6,
                                    py: 2,
                                    fontSize: "1.1rem",
                                }}
                            >
                                Let's Build Something Great Together
                            </Button>
                        </Box>
                    </Container>
                </Box>
            </Container>
        </>
    );
};

export default Home;