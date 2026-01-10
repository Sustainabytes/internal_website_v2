import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Teams from "./pages/Teams.jsx";
import Projects from "./pages/Projects.jsx";
import Education from "./pages/Education.jsx";
import Error from "./pages/Error";
import { useEffect} from "react";

function App() {
  // This function is here so that everytime a tab is clicked, it will start at the very top
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <>
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/team" element={<Teams />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
