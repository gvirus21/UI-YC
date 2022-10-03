import { FunctionComponent, useState } from "react";
import styles from "../../../css/MainDashboard.module.css";
import styles1 from "../../../css/ProtocolList.module.css";
import { useNavigate, NavLink } from "react-router-dom";
import NetworkDropdown from "./NetworkDropdown";
import AccountDropdown from "./AccountDropdown";

const Header: FunctionComponent = () => {
  const navigate = useNavigate();

  const [network, setNetwork] = useState("Ethereum");


  function onCreateVaultSelect() {
    navigate("/protocolList");
  }

  return (
    <div>
      <div>
        <button className={styles.yieldchainLogo1} />
      </div>
      <div className={styles.frameDiv128}>
        <div className={styles.frameDiv129}>
          <NavLink
            style={{ textDecoration: "none" }}
            to="/"
            className={({ isActive }) =>
              isActive ? styles.vaultB : styles.vault
            }
          >
            Vault
          </NavLink>
        </div>
        <div className={styles.frameDiv130}>
          <div className={styles.groupDiv69}>
            <NavLink
              style={{ textDecoration: "none" }}
              to="/protocolList"
              className={({ isActive }) =>
                isActive ? styles.vaultB : styles.portfolioDiv
              }
            >
              Portfolio
            </NavLink>
          </div>
        </div>
        <div className={styles.frameDiv130}>
          <NavLink
            style={{ textDecoration: "none" }}
            to="/CreateStrategy"
            className={({ isActive }) =>
              isActive ? styles.vaultB : styles.etherumDiv
            }
          >
            My Vault
          </NavLink>
        </div>
        <div className={styles.frameDiv130}>
          <NavLink
            style={{ textDecoration: "none" }}
            to="/Protocols"
            className={({ isActive }) =>
              isActive ? styles.vaultB : styles.etherumDiv
            }
          >
            Stake YC
          </NavLink>
        </div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.frameDiv1}>
          {/* <img
            className={styles.simpleIconslitecoin}
            alt=""
            src="simpleiconslitecoin@2x.png"
          /> */}

          {/* <select name="networks" id="networks" className={styles.dropdown}>
            <option value="Ethereum">Ethereum</option>
            <option value="Binance">Binance</option>
            <option value="Avalanche">Avalanche</option>
            <option value="Polygon">Polygon</option>
          </select> */}
          <NetworkDropdown/>
        </div>
      </div>
      {/* <div className={styles.groupDiv}>
        <img className={styles.ellipseIcon} alt="" src="ellipse@2x.png" />
        <div className={styles.groupDiv1}>
          <div className={styles.metamaskDiv}>Metamask</div>
          <div className={styles.iD65FG646Div}>ID65.....FG646</div>
        </div>
        <img className={styles.chevronDownIcon} alt="" src="chevrondown4.svg" />
      </div> */}
      <AccountDropdown/>
      <div className={styles1.frameDiv52}>
        <div className={styles1.frameDiv53}>
          <div onClick={onCreateVaultSelect} className={styles1.addNewProtocol}>
            Create Vault
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
