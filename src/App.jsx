import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Certifications from "./components/Certifications/Certifications";
import Achievements from "./components/Achievements/Achievements";
import Contact from "./components/Contact/Contact";
import ThankYou from "./components/Contact/ThankYou";
import Footer from "./components/Footer/Footer";

function App() {
  if (window.location.pathname === "/thank-you") {
    return <ThankYou />;
  }

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <Achievements />
      <Contact />
      <Footer />
    </>
  );
}

export default App;