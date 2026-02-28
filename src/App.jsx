import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import Education from "./pages/Education";
import Contact from "./pages/Contact";

import ParticlesBg from "./components/ParticlesBg";
import CustomCursor from "./components/CustomCursor";
import ThemeToggle from "./components/ThemeToggle";
import SmoothScroll from "./components/SmoothScroll";
import Skills from "./pages/Skills";

function App() {
  return (
    <div className="relative min-h-screen">

      <SmoothScroll />
      <ParticlesBg />
      <CustomCursor />

      {/* <div className="fixed top-2.5 right-3 z-50">
        <ThemeToggle />
      </div> */}

      <Navbar />

      <main className="relative z-10 space-y-32 px-6 md:px-16 pt-10">

        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="works">
          <Works />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="education">
          <Education />
        </section>

        <section id="contact">
          <Contact />
        </section>

      </main>

      <Footer />

    </div>
  );
}

export default App;