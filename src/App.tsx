import { ThemeProvider } from "../components/theme-provider";
import NavBar from "../components/NavBar";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import Contact from "./pages/Contact";
import OurProducts from "./pages/OurProducts";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div className="min-w-50">
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <NavBar />

        <section id="home">
          <Home />
        </section>

        <section id="products">
          <OurProducts />
        </section>

        <section id="about">
          <AboutUs />
        </section>

        <section id="contact">
          <Contact />
        </section>

        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
