import Header from "./components/Header/Header";
import Hero from "./components/Sections/Hero";
import Project from "./components/Sections/Project";
import Technologies from "./components/Sections/Technologies";
import About from "./components/Sections/About";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <Project />
        <Technologies />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
