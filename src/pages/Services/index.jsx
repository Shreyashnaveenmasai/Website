import {
    Box,
    Card,
    CardContent,
    Container,
    Grid,
    Typography
} from "@mui/material";

import AssignmentIcon from "@mui/icons-material/Assignment";
import BarChartIcon from "@mui/icons-material/BarChart";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import WorkIcon from "@mui/icons-material/Work";
import { motion } from "framer-motion";
import React from "react";

const services = [
    {
        title: "Software Development Consulting",
        description:
            "Custom software solutions for startups & enterprises with expertise in modern frameworks, DevOps, and cybersecurity best practices.",
        image: "/assets/SoftwareDevelopment.jpg",
        icon: <BarChartIcon sx={{ color: "white" }} />,
    },
    {
        title: "Cloud-Based Project Consulting",
        description:
            "Azure & AWS cloud solutions for startups, mid-sized companies, and enterprises needing hybrid & multi-cloud strategies.",
        image: "/assets/CloudTech.jpg",
        icon: <CloudQueueIcon sx={{ color: "white" }} />,
    },
    {
        title: "ERP Implementation Consulting",
        description:
            "End-to-end ERP support for PeopleSoft, Workday, SAP, and Microsoft Dynamics, ensuring smooth business process automation.",
        image: "/assets/ERP.jpg",
        icon: <WorkIcon sx={{ color: "white" }} />,
    },
    {
        title: "Project Management Services",
        description:
            "PMP & Agile-certified experts managing IT projects using Scrum, Waterfall, and hybrid methodologies for optimal success.",
        image: "/assets/Projectmanagement.jpg",
        icon: <AssignmentIcon sx={{ color: "white" }} />,
    },
];

const Services = () => {
    return (
        <Container sx={{ py: { xs: 8, md: 12 } }}>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <Typography
                    variant="h3" // Adjusted for consistency with the home page
                    fontWeight="bold"
                    textAlign="center"
                    mb={4}
                    sx={{
                        fontSize: { xs: "1.8rem", md: "2.2rem" }, // Responsive font size
                        color: "primary.main", // Matches primary theme color
                    }}
                >
                    Comprehensive IT Solutions – Scalable for Small and Large
                    Organizations
                </Typography>
            </motion.div>

            <Grid container spacing={4}>
                {services.map((service, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                            }}
                            style={{ height: "100%" }}
                        >
                            <Card
                                sx={{
                                    boxShadow: 3,
                                    borderRadius: 2,
                                    position: "relative",
                                    overflow: "hidden",
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                {/* Using motion.img for hover effect */}
                                <motion.img
                                    src={service.image}
                                    alt={service.title}
                                    height="180"
                                    style={{
                                        width: "100%",
                                        display: "block",
                                    }}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                />

                                {/* Animated Icon */}
                                <Box
                                    sx={{
                                        position: "absolute",
                                        top: 20,
                                        left: 20,
                                        backgroundColor: "secondary.main",
                                        width: 40,
                                        height: 40,
                                        borderRadius: "50%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        boxShadow: 3,
                                    }}
                                >
                                    {service.icon}
                                </Box>
                                {/* Service Content */}
                                <CardContent
                                    sx={{
                                        flexGrow: 1,
                                        display: "flex",
                                        flexDirection: "column",
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        fontWeight="bold"
                                        sx={{
                                            fontSize: {
                                                xs: "1.2rem",
                                                md: "1.4rem",
                                            },
                                            color: "text.primary",
                                        }}
                                    >
                                        {service.title}
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        color="text.secondary"
                                        sx={{ flexGrow: 1, fontSize: "1rem" }}
                                    >
                                        {service.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Services;
