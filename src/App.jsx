import { lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";

// Home ships in the main bundle; other pages load on demand.
const Services = lazy(() => import("./pages/Services"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const About = lazy(() => import("./pages/About"));
const Faq = lazy(() => import("./pages/Faq"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:slug" element={<ServiceDetail />} />
          <Route path="about" element={<About />} />
          <Route path="faq" element={<Faq />} />
          <Route path="contact" element={<Contact />} />
          {/* Old URL from the previous site */}
          <Route path="service" element={<Navigate to="/services" replace />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
