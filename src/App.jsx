import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import CustomCursor from "./components/CustomCursor";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import PageTransition from "./components/PageTransition";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import "./styles/global.css";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  return (
    <>
      {loading ? (
        <LoadingScreen onFinish={() => setLoading(false)} />
      ) : (
        <>
          <CustomCursor />
          <Navbar />
          <ScrollToTop />
          <main>
            <AnimatePresence mode="wait">
              <PageTransition key={location.pathname}>
                <Routes location={location}>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/projects" element={<ProjectsPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                </Routes>
              </PageTransition>
            </AnimatePresence>
          </main>
          <Footer />
          <WhatsAppButton />
        </>
      )}
    </>
  );
}

export default App;
