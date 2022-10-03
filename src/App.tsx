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
<<<<<<< HEAD
import { ConfirmStrategy } from "./ConfirmStrategy";
=======
>>>>>>> a81c4ceecd0aaf830498622e8c61ab81cee3b5e2
import { CreateVault } from "./CreateVault";
import { MainDashboard } from "./MainDashboard";
import { Protocols } from "./Protocols";
import { SearchedProtocol } from "./SearchedProtocol";
import { ProtocolList } from "./protocolList";
import { InputAddress } from "./InputAddress";
import { useEffect } from "react";
import Header from "./Components/Layout/Header/Header";
<<<<<<< HEAD
import VaultSection from "./vaultSection";
import DashBoardPage from "./dashboardpage";
=======
>>>>>>> a81c4ceecd0aaf830498622e8c61ab81cee3b5e2

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
<<<<<<< HEAD
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

        <Route path="/vault" element={<VaultSection />} />

        <Route path="/" element={<DashBoardPage />} />
      </Routes>
    </div>
  );
}
export default App;

=======
     <div>
     <Header/>
      
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
  </div>
   );
}
export default App;
>>>>>>> a81c4ceecd0aaf830498622e8c61ab81cee3b5e2
