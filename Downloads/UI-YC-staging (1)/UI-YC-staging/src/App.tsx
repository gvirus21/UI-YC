import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
  Router,
  BrowserRouter,
} from "react-router-dom";
import { InputDuration } from "./InputDuration";
import { CreateStrategy } from "./CreateStrategy";
import { ConfirmStrategy } from "./ConfirmStrategy";
import { CreateVault } from "./CreateVault";
import { MainDashboard } from "./MainDashboard";
import { Protocols } from "./Protocols";
import { SearchedProtocol } from "./SearchedProtocol";
import { ProtocolList } from "./protocolList";
import { InputAddress } from "./InputAddress";
import { useEffect } from "react";
import Header from "./Components/Layout/Header/Header";

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
    <div>
      <Header />

      <Routes>
        <Route path="/inputDuration" element={<InputDuration />} />

        <Route path="/createStrategy" element={<CreateStrategy />} />

        <Route path="/confirmStrategy" element={<ConfirmStrategy />} />

        <Route path="/createVault" element={<CreateVault />} />

        <Route path="/inputAddress" element={<InputAddress />} />

        <Route path="/protocols" element={<Protocols />} />

        <Route path="/searchedProtocol" element={<SearchedProtocol />} />

        <Route path="/protocolList" element={<ProtocolList />} />

        <Route path="/" element={<MainDashboard />} />
      </Routes>
    </div>
  );
}
export default App;

