import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import { InputDuration } from "./InputDuration";
import { CreateStrategy } from "./CreateStrategy";
import { CreateVault } from "./CreateVault";
import { MainDashboard } from "./MainDashboard";
import { Protocols } from "./Protocols";
import { SearchedProtocol } from "./SearchedProtocol";
import { ProtocolList } from "./protocolList";
import { InputAddress } from "./InputAddress";
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
      <Route path="/inputDuration" element={<InputDuration />} />

      <Route path="/createStrategy" element={<CreateStrategy />} />

      <Route path="/createVault" element={<CreateVault />} />

      <Route path="/inputAddress" element={<InputAddress />} />

      <Route path="/protocols" element={<Protocols />} />

      <Route path="/searchedProtocol" element={<SearchedProtocol />} />

      <Route path="/protocolList" element={<ProtocolList />} />

      <Route path="/" element={<MainDashboard />} />
    </Routes>
  );
}
export default App;
