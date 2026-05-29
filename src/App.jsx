import Contact from "./Contact";
import Home from "./Home";
import ServicesPage from "./ServicesPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import Error from "./Error";
import GoToTop from "./components/GoToTop";
import AboutPage from "./AboutPage";
import { WhatsAppButton } from "./components/Whatsapp";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const theme = {
    colors: {
      heading: "#0d2a30",
      text: "#1a3a42",
      white: "#fff",
      black: "#0d2a30",
      helper: "#c9a84c",
      bg: "#f4f8f9",
      footer_bg: "#071820",
      btn: "#1a6b5a",
      btnGold: "#c9a84c",
      border: "rgba(26, 107, 90, 0.4)",
      hr: "#ffffff",
      teal: "#13505b",
      tealDark: "#0d2a30",
      tealLight: "#1a6b5a",
      gold: "#c9a84c",
      goldLight: "#e8c87a",
      gradient:
        "linear-gradient(135deg, #0d2a30 0%, #1a6b5a 50%, #13505b 100%)",
      gradientGold:
        "linear-gradient(135deg, #c9a84c 0%, #e8c87a 100%)",
      shadow:
        "0 4px 20px rgba(13, 42, 48, 0.15)",
      shadowSupport: "0 2px 12px rgba(13, 42, 48, 0.1)",
      shadowCard: "0 8px 32px rgba(13, 42, 48, 0.12)",
      glowTeal: "0 0 20px rgba(26, 107, 90, 0.25)",
      glowGold: "0 0 25px rgba(201, 168, 76, 0.35)",
      glassBg: "rgba(255, 255, 255, 0.75)",
      glassBgDark: "rgba(7, 24, 32, 0.75)",
      glassBorder: "rgba(26, 107, 90, 0.12)",
      glassBorderGold: "rgba(201, 168, 76, 0.22)",
    },
    media: { mobile: "768px", tab: "998px" },
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GoToTop />
      <WhatsAppButton />
      <BrowserRouter basename="/AvaniEcocareLabs">
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/service" element={<ServicesPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
