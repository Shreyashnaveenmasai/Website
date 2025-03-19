import AssignmentIcon from "@mui/icons-material/Assignment";
import BarChartIcon from "@mui/icons-material/BarChart";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import WorkIcon from "@mui/icons-material/Work";
import { Box, Button, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

const services = [
    {
        title: "Software Development Consulting",
        description: "Custom software solutions for startups & enterprises with expertise in modern frameworks, DevOps, and cybersecurity best practices.",
        image: "/path-to-image.png",
        icon: <BarChartIcon sx={{ color: "white" }} />,
    },
    {
        title: "Cloud-Based Project Consulting",
        description: "Azure & AWS cloud solutions for startups, mid-sized companies, and enterprises needing hybrid & multi-cloud strategies.",
        image: "/path-to-image.png",
        icon: <CloudQueueIcon sx={{ color: "white" }} />,
    },
    {
        title: "ERP Implementation Consulting",
        description: "End-to-end ERP support for PeopleSoft, Workday, SAP, and Microsoft Dynamics, ensuring smooth business process automation.",
        image: "/path-to-image.png",
        icon: <WorkIcon sx={{ color: "white" }} />,
    },
    {
        title: "Project Management Services",
        description: "PMP & Agile-certified experts managing IT projects using Scrum, Waterfall, and hybrid methodologies for optimal success.",
        image: "/path-to-image.png",
        icon: <AssignmentIcon sx={{ color: "white" }} />,
    },
];

const Services = () => {
    return (
        <Container sx={{ mt: 4 }}>
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4}>
                    Comprehensive IT Solutions – Scalable for Small and Large Organizations
                </Typography>
            </motion.div>
            
            <Grid container spacing={3}>
                {services.map((service, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        {/* Card Animation Fix */}
                        <motion.div 
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Card sx={{ boxShadow: 3, borderRadius: 2, position: "relative", overflow: "hidden" }}>
                                {/* Using motion.img for proper hover effect */}
                                <motion.img 
                                    src={service.image}
                                    alt={service.title}
                                    height="180"
                                    style={{ width: "100%", display: "block" }}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                />

                                {/* Animated Icon */}
                                <motion.div 
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.2, duration: 0.6 }}
                                >
                                    <Box sx={{
                                        position: "absolute",
                                        top: 20,
                                        left: 20,
                                        backgroundColor: "#76c043",
                                        width: 40,
                                        height: 40,
                                        borderRadius: "50%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        boxShadow: 3,
                                    }}>
                                        {service.icon}
                                    </Box>
                                </motion.div>

                                {/* Service Content */}
                                <CardContent>
                                    <Typography variant="h6" fontWeight="bold">
                                        {service.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {service.description}
                                    </Typography>
                                    <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 200 }}>
                                        <Button variant="text" sx={{ mt: 2, fontWeight: "bold", color: "#76c043" }}>
                                            READ MORE →
                                        </Button>
                                    </motion.div>
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
