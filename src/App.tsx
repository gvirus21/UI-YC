import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import { StrategyCreated } from "./StrategyCreated";
import { Dashboard } from "./Dashboard";
import { Dashboard1 } from "./Dashboard1";
import { Dashboard2 } from "./Dashboard2";
import { Dashboard3 } from "./Dashboard3";
import { Dashboard4 } from "./Dashboard4";
import { Dashboard5 } from "./Dashboard5";
import { Dashboard6 } from "./Dashboard6";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/main-dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/strategy-created" element={<StrategyCreated />} />

      <Route path="/createStrategy" element={<Dashboard />} />

      <Route path="/createVault" element={<Dashboard1 />} />

      <Route path="/main-dashboard" element={<Dashboard2 />} />

      <Route path="/protocols" element={<Dashboard3 />} />

      <Route path="/dashboard4" element={<Dashboard4 />} />

      <Route path="/protocol-list" element={<Dashboard5 />} />

      <Route path="/" element={<Dashboard6 />} />
    </Routes>
  );
}
export default App;
