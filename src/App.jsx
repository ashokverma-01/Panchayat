import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import News from "./components/News";
import Members from "./components/Members";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <About />
      <Gallery />
      <News />
      <Members />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
