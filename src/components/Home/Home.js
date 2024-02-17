import Profile from "../Profile/Profile";
import React from "react";
import Navbar from "../Navbar/Navbar";
import AboutMe from "../AboutMe/AboutMe";
import Skills from "../Skills/Skills";
import ContactMe from "../ContactMe/ContactMe";
import Footer from "../Footer/Footer";

export default function Home() {
  return (
    <React.Fragment>
      <header>
        <Navbar />
      </header>
      <main>
        <Profile />
        <AboutMe />
        <Skills />
        <ContactMe />
      </main>
        <Footer />
    </React.Fragment>
  );
}
