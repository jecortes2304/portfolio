import React from "react";
import Header from "../components/header";
import Sumarize from "../components/sumarize";
import About from "../components/about";
import Portfolio from "../components/portfolio";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Details from "./details";

function Home() {
    return (
        <div>
            <Header/>
            <Sumarize/>
            <About/>
            <Portfolio/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default Home;