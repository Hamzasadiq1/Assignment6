import Achievements from "./components/Achievements/Achievements";
import Courses from "./components/Courses/Courses";
import ExploreCourses from "./components/ExploreCourses/ExploreCourses";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Team from "./components/Team/Team";
import Testimonials from "./components/Testimonials/Testimonials";
import TopBar from "./components/TopBar/TopBar";
import TrustedBy from "./components/TrustedBy/TrustedBy";
import React from "react";

export default function Home() {
  return (
    <div>
      <TopBar/>
      <Header />
      <Hero/>
      <TrustedBy />
      <ExploreCourses />
      <Achievements />
      <Courses />
      <Team />
      <Testimonials />
      <Footer /> 
      
    </div>
  );
}