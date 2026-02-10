/**
 * Home Page (Main Portfolio)
 * Contains the full single-page scrollable portfolio
 */

import React from 'react';
import GridBackground from '../components/layout/GridBackground';
import Nav from '../components/layout/Nav';
import Hero from '../components/sections/Hero';
import Projects from '../components/sections/Projects';

import SEO from '../components/common/SEO';

import TechStack from '../components/sections/TechStack';
import FigmaDesigns from '../components/sections/FigmaDesigns';
import Experience from '../components/sections/Experience';
import About from '../components/sections/About';
import Footer from '../components/layout/Footer';
import VisitorCounter from '../components/ui/VisitorCounter';

import SectionSeparator from '../components/ui/SectionSeparator';
import SmoothScroll from '../components/utils/SmoothScroll';

const Home = () => {
    return (
        <GridBackground>
            <SEO
                title="Aditya Ojha | Full Stack Developer"
                description="Professional portfolio of Aditya Ojha. Building scalable web applications with React, Node.js, and modern web technologies."
            />
            <SmoothScroll />
            <Nav />
            <Hero />
            <SectionSeparator />
            <Projects />
            <SectionSeparator />
            <Experience />
            <SectionSeparator />
            <TechStack />
            <SectionSeparator />
            <FigmaDesigns />
            <SectionSeparator />
            <About />
            <SectionSeparator />
            <VisitorCounter />
            <Footer />
        </GridBackground>
    );
};

export default Home;
