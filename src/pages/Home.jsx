import React from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Recommendations from "../components/Recommendations";
import LeaveInfo from "../components/LeaveInfo";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Projects />
            <Recommendations />
            <LeaveInfo />
            <Footer />
        </>
    )
}

export default Home
