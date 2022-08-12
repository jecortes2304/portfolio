import React from "react";
import Header from "../components/header";
import Summarize from "../components/summarize";
import About from "../components/about";
import Portfolio from "../components/portfolio";
import Contact from "../components/contact";
import Footer from "../components/footer";

function Home() {
    return (
        <div>
            <Header/>
            <Summarize/>
            <About/>
            <Portfolio/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default Home;