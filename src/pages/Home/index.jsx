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

import Button from "@mui/material/Button";
import HeroSection from "/assets/HeroSectionImage.jpeg";
import Image from "/assets/HeroSection.png";
import Rating from "@mui/material/Rating";
import React from "react";
import { Link as ScrollLink } from "react-scroll";
import StarIcon from "@mui/icons-material/Star";

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <Box
                id="heroSection"
                sx={{
                    position: "relative",
                    color: "black",
                    py: { xs: 8, md: 12 },
                    minHeight: "100vh",
                    textAlign: "center",
                    overflow: "hidden",
                    backgroundImage: `url(${HeroSection})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backdropFilter: "blur(8px)", // Blur effect
                    "::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background:
                            "linear-gradient(45deg, rgba(0, 158, 197, 0.3) 0%, rgba(46, 126, 237, 0.3) 50%, rgba(2, 34, 91, 0.3) 100%)",
                        opacity: 0.8,
                        zIndex: 0,
                    },
                    "::after": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay for opacity effect
                        zIndex: 0,
                    },
                }}
            >
                <Container
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        alignItems: "center",
                        justifyContent: "space-between",
                        position: "relative",
                        zIndex: 1,
                    }}
                    maxWidth="lg"
                >
                    <Box
                        sx={{
                            textAlign: "left",
                            width: { xs: "100%", md: "55%" },
                        }}
                    >
                        <Typography
                            variant="h2"
                            fontWeight={700}
                            gutterBottom
                            sx={{
                                color: "#ffffff",
                                textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                            }}
                        >
                            MADS Consulting Services LLC
                        </Typography>
                        <Typography
                            variant="h4"
                            sx={{
                                mt: 2,
                                color: "#ffffff",
                                textShadow: "1px 1px 3px rgba(0,0,0,0.5)",
                            }}
                        >
                            Adapting Technology to Fit Your Business
                        </Typography>
                        <Typography
                            variant="h5"
                            sx={{
                                mt: 2,
                                mb: 4,
                                color: "#ffffff",
                                textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                            }}
                        >
                            Innovative IT Solutions for Business Growth
                        </Typography>
                        <Button
                            variant="contained"
                            size="large"
                            component={ScrollLink}
                            to="contact"
                            smooth={true}
                            sx={{
                                bgcolor: "#00d9ff",
                                color: "#02225B",
                                px: 4,
                                py: 1.5,
                                fontSize: "1.1rem",
                                fontWeight: 600,
                                "&:hover": {
                                    bgcolor: "#009EC5",
                                    color: "white",
                                },
                            }}
                        >
                            Get Started
                        </Button>
                    </Box>
                    <Box
                        alignItems="right"
                        sx={{
                            marginRight: "-40px",
                            width: { xs: "100%", md: "45%" },
                            overflow: "hidden",
                            mt: { xs: 4, md: 0 },
                        }}
                    >
                        <img
                            src={Image}
                            alt="Hero Section Image"
                            style={{ width: "100%", height: "auto" }}
                        />
                    </Box>
                </Container>
            </Box>

            {/* <Box
                sx={{
                    position: "relative",
                    color: "black",
                    py: { xs: 8, md: 12 },
                    textAlign: "center",
                    overflow: "hidden",
                    backgroundImage: `url(${HeroSection})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    "::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background:
                            "linear-gradient(45deg, rgba(0, 158, 197, 0.4) 0%, rgba(46, 126, 237, 0.4) 50%, rgba(2, 34, 91, 0.5) 100%)",
                        opacity: 0.9,
                        zIndex: 0,
                    },
                    "::after": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backdropFilter: "blur(8px)", // Blur effect
                        zIndex: 0,
                    },
                }}
            >
                <Container
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        alignItems: "center",
                        justifyContent: "space-between",
                        position: "relative",
                        zIndex: 1,
                    }}
                    maxWidth="lg"
                >
                    <Box
                        sx={{
                            textAlign: "left",
                            width: { xs: "100%", md: "55%" },
                        }}
                    >
                        <Typography
                            variant="h2"
                            fontWeight={700}
                            gutterBottom
                            sx={{
                                color: "#ffffff",
                                textShadow: "3px 3px 6px rgba(0,0,0,0.7)",
                            }}
                        >
                            MADS Consulting Services LLC
                        </Typography>
                        <Typography
                            variant="h4"
                            sx={{
                                mt: 2,
                                color: "#ffffff",
                                textShadow: "2px 2px 5px rgba(0,0,0,0.6)",
                            }}
                        >
                            Adapting Technology to Fit Your Business
                        </Typography>
                        <Typography
                            variant="h5"
                            sx={{
                                mt: 2,
                                mb: 4,
                                color: "#ffffff",
                                textShadow: "2px 2px 4px rgba(0,0,0,0.6)",
                            }}
                        >
                            Innovative IT Solutions for Business Growth
                        </Typography>
                        <Button
                            variant="contained"
                            size="large"
                            component={ScrollLink}
                            to="contact"
                            smooth={true}
                            sx={{
                                bgcolor: "#00d9ff",
                                color: "#02225B",
                                px: 4,
                                py: 1.5,
                                fontSize: "1.1rem",
                                fontWeight: 600,
                                "&:hover": {
                                    bgcolor: "#009EC5",
                                    color: "white",
                                },
                            }}
                        >
                            Get Started
                        </Button>
                    </Box>
                </Container>
            </Box> */}

            {/* Core Services Section */}
            <Container sx={{ py: 8 }} id="services">
                <Container>
                    <Typography
                        variant="h3"
                        component="h2"
                        textAlign="center"
                        fontWeight={700}
                        gutterBottom
                        sx={{
                            fontSize: { xs: "2.5rem", md: "3.5rem" },
                            background:
                                "linear-gradient(45deg, #009EC5 0%, #2e7eed 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            mb: 6,
                        }}
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
                                            variant="h4"
                                            component="h3"
                                            fontWeight={700}
                                            gutterBottom
                                            sx={{
                                                background:
                                                    "linear-gradient(45deg, #009EC5 0%, #2e7eed 100%)",
                                                WebkitBackgroundClip: "text",
                                                WebkitTextFillColor:
                                                    "transparent",
                                                mb: 2,
                                                fontSize: {
                                                    xs: "1.8rem",
                                                    md: "2.2rem",
                                                },
                                                letterSpacing: "-0.5px",
                                            }}
                                        >
                                            {service.title}
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                color: "#02225B",
                                                opacity: 0.8,
                                                mb: 3,
                                                lineHeight: 1.8,
                                            }}
                                            paragraph
                                        >
                                            {service.description}
                                        </Typography>
                                        <List>
                                            {service.items.map((item, idx) => (
                                                <ListItem
                                                    key={idx}
                                                    sx={{
                                                        pl: 0,
                                                        pb: 0,
                                                        "&::before": {
                                                            content: '""',
                                                            width: "6px",
                                                            height: "6px",
                                                            borderRadius: "50%",
                                                            backgroundColor:
                                                                "#2e7eed",
                                                            display:
                                                                "inline-block",
                                                            marginRight: "12px",
                                                        },
                                                    }}
                                                >
                                                    <ListItemText
                                                        primary={item}
                                                        sx={{
                                                            "& .MuiTypography-root":
                                                                {
                                                                    color: "#02225B",
                                                                    opacity: 0.75,
                                                                    fontWeight: 500,
                                                                },
                                                        }}
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

            {/* Why Choose mads */}
            <Box
                sx={{
                    py: 8,
                    bgcolor: "rgba(0, 158, 197, 0.03)", // Very light theme color background
                }}
            >
                <Container maxWidth="lg">
                    <Typography
                        variant="h3"
                        component="h2"
                        textAlign="center"
                        fontWeight={700}
                        gutterBottom
                        sx={{
                            fontSize: { xs: "2.5rem", md: "3.5rem" },
                            background:
                                "linear-gradient(45deg, #009EC5 0%, #2e7eed 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            mb: 6,
                        }}
                    >
                        Why Choose MADS Consulting?
                    </Typography>
                    <Grid container spacing={4} sx={{ mt: 4 }}>
                        <Grid item xs={12} md={6}>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <img
                                    src="/assets/app-screen-1.png" // Add your image path
                                    alt="Why Choose Us"
                                    style={{
                                        maxWidth: "100%",
                                        height: "auto",
                                    }}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Grid container spacing={4}>
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
                                    <Grid item xs={12} key={index}>
                                        <Card
                                            elevation={0}
                                            sx={{
                                                height: "100%",
                                                p: 3,
                                                background:
                                                    "rgba(255, 255, 255, 0.7)",
                                                border: "1px solid rgba(46, 126, 237, 0.1)",
                                                transition:
                                                    "all 0.3s ease-in-out",
                                                "&:hover": {
                                                    transform:
                                                        "translateY(-4px)",
                                                    background:
                                                        "rgba(255, 255, 255, 0.9)",
                                                    borderColor:
                                                        "rgba(46, 126, 237, 0.2)",
                                                },
                                            }}
                                        >
                                            <CardContent>
                                                <Typography
                                                    variant="h5"
                                                    component="h3"
                                                    fontWeight={600}
                                                    gutterBottom
                                                    sx={{
                                                        background:
                                                            "linear-gradient(45deg, #009EC5 0%, #2e7eed 100%)",
                                                        WebkitBackgroundClip:
                                                            "text",
                                                        WebkitTextFillColor:
                                                            "transparent",
                                                        mb: 2,
                                                    }}
                                                >
                                                    {item.title}
                                                </Typography>
                                                <Typography
                                                    variant="body1"
                                                    sx={{
                                                        color: "#02225B",
                                                        opacity: 0.75,
                                                        lineHeight: 1.8,
                                                    }}
                                                >
                                                    {item.description}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Testimonials Section */}
            <Box sx={{ bgcolor: "rgba(0, 158, 197, 0.03)", py: 8 }}>
                <Container maxWidth="lg">
                    <Typography
                        variant="h3"
                        component="h2"
                        textAlign="center"
                        fontWeight={700}
                        gutterBottom
                        sx={{
                            fontSize: { xs: "2.5rem", md: "3.5rem" },
                            background:
                                "linear-gradient(45deg, #009EC5 0%, #2e7eed 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            mb: 6,
                        }}
                    >
                        What Our Clients Say
                    </Typography>
                    <Grid container spacing={4} sx={{ mt: 4 }}>
                        {testimonials.map((testimonial, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <Card
                                    elevation={0}
                                    sx={{
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        p: 3,
                                        background: "rgba(255, 255, 255, 0.7)",
                                        border: "1px solid rgba(46, 126, 237, 0.1)",
                                        transition: "all 0.3s ease-in-out",
                                        "&:hover": {
                                            transform: "translateY(-4px)",
                                            background:
                                                "rgba(255, 255, 255, 0.9)",
                                            borderColor:
                                                "rgba(46, 126, 237, 0.2)",
                                            boxShadow:
                                                "0 4px 20px rgba(46, 126, 237, 0.1)",
                                        },
                                    }}
                                >
                                    <CardContent>
                                        <Rating
                                            value={5}
                                            readOnly
                                            icon={
                                                <StarIcon fontSize="inherit" />
                                            }
                                            sx={{
                                                mb: 2,
                                                color: "#2e7eed",
                                            }}
                                        />
                                        <Typography
                                            variant="body1"
                                            paragraph
                                            sx={{
                                                color: "#02225B",
                                                opacity: 0.75,
                                                lineHeight: 1.8,
                                                fontStyle: "italic",
                                                mb: 3,
                                            }}
                                        >
                                            "{testimonial.quote}"
                                        </Typography>
                                        <Typography
                                            variant="subtitle1"
                                            sx={{
                                                fontWeight: 600,
                                                background:
                                                    "linear-gradient(45deg, #009EC5 0%, #2e7eed 100%)",
                                                WebkitBackgroundClip: "text",
                                                WebkitTextFillColor:
                                                    "transparent",
                                            }}
                                        >
                                            {testimonial.author}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: "#02225B",
                                                opacity: 0.6,
                                                fontWeight: 500,
                                            }}
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
            <Box
                sx={{
                    py: 8,
                    bgcolor: "rgba(0, 158, 197, 0.03)",
                }}
                id="contact"
            >
                <Container maxWidth="lg">
                    <Typography
                        variant="h3"
                        component="h2"
                        textAlign="center"
                        fontWeight={700}
                        gutterBottom
                        sx={{
                            fontSize: { xs: "2.5rem", md: "3.5rem" },
                            background:
                                "linear-gradient(45deg, #009EC5 0%, #2e7eed 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            mb: 6,
                        }}
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
                                <Card
                                    elevation={0}
                                    sx={{
                                        height: "100%",
                                        p: 3,
                                        background: "rgba(255, 255, 255, 0.7)",
                                        border: "1px solid rgba(46, 126, 237, 0.1)",
                                        transition: "all 0.3s ease-in-out",
                                        "&:hover": {
                                            transform: "translateY(-4px)",
                                            background:
                                                "rgba(255, 255, 255, 0.9)",
                                            borderColor:
                                                "rgba(46, 126, 237, 0.2)",
                                            boxShadow:
                                                "0 4px 20px rgba(46, 126, 237, 0.1)",
                                        },
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        gutterBottom
                                        sx={{
                                            background:
                                                "linear-gradient(45deg, #009EC5 0%, #2e7eed 100%)",
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                            fontWeight: 600,
                                            mb: 2,
                                        }}
                                    >
                                        Step {index + 1}
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            color: "#02225B",
                                            opacity: 0.75,
                                            lineHeight: 1.8,
                                        }}
                                    >
                                        {step}
                                    </Typography>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                    <Box sx={{ textAlign: "center", mt: 6 }}>
                        <Button
                            variant="contained"
                            size="large"
                            onClick={() => (window.location.href = "/contact")}
                            sx={{
                                px: 6,
                                py: 2,
                                fontSize: "1.1rem",
                                bgcolor: "#00d9ff",
                                color: "#02225B",
                                fontWeight: 600,
                                transition: "all 0.3s ease-in-out",
                                "&:hover": {
                                    bgcolor: "#009EC5",
                                    color: "white",
                                    transform: "translateY(-2px)",
                                    boxShadow:
                                        "0 4px 20px rgba(46, 126, 237, 0.2)",
                                },
                            }}
                        >
                            Let's Build Something Great Together
                        </Button>
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default Home;
