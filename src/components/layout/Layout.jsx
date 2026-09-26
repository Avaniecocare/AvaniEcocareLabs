import { Suspense, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import FloatingWhatsApp from "./FloatingWhatsApp";
import ErrorBoundary from "../ErrorBoundary";
import PageLoader from "../ui/PageLoader";

/** Scroll to the top on navigation, or to the #hash target when one is given. */
function useScrollRestore() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      // Wait a frame so lazily loaded pages have rendered their anchors.
      const id = decodeURIComponent(hash.slice(1));
      const raf = requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView();
      });
      return () => cancelAnimationFrame(raf);
    }
    window.scrollTo(0, 0);
    return undefined;
  }, [pathname, hash]);
}

export default function Layout() {
  const { pathname } = useLocation();
  useScrollRestore();

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        <ErrorBoundary key={pathname}>
          <Suspense fallback={<PageLoader />}>
            <Outlet />
          </Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
