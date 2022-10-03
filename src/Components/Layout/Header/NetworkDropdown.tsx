import React, { FunctionComponent, useCallback, useRef, useState } from "react";
import styles from "../../../css/MainDashboard.module.css";

const NetworkDropdown: FunctionComponent = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [network, setNetwork] = useState({
    name: "Ethereum",
    img: "group-Ethereum.svg",
  });
  const dropdownHandler = () => {
    setIsActive(!isActive);
    console.log(isActive);
  };
  const networkChangeHandler = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    setNetwork({
      ...network,
      name: "" + (e.target as HTMLElement).textContent,
      img: "group-" + (e.target as HTMLElement).textContent + ".svg",
    });
    setIsActive(!isActive);
  };
  return (
    <div>
    <div className={styles.menuContainer}>
      <button className={styles.menuTrigger} onClick={dropdownHandler}>
        <img
          src={network.img}
          className={styles.simpleIconslitecoin}
          alt="Network"
        />
        <span style={{ paddingLeft: "5px" }}>{network.name}</span>
        <img style={{ marginLeft: "5px" }} alt="" src="chevrondown4.svg" />
      </button>
      {isActive && (
        <>
          <nav
            ref={dropdownRef}
            className={`menu ${isActive ? "active" : "inactive"}`}
          >
            <ul className={styles.dropdown}>
              <li
                onClick={(e) => {
                  networkChangeHandler(e);
                }}
                className={styles.dropdown}
              >
                Avalanche
              </li>
              <li
                onClick={(e) => {
                  networkChangeHandler(e);
                }}
                className={styles.dropdown}
              >
                Binance
              </li>
              <li
                onClick={(e) => {
                  networkChangeHandler(e);
                }}
                className={styles.dropdown}
              >
                Ethereum
              </li>
              <li
                onClick={(e) => {
                  networkChangeHandler(e);
                }}
                className={styles.dropdown}
              >
                Polygon
              </li>
            </ul>
            
          </nav>
        </>
      )}
    </div>
    
    </div>
  );
};
export default NetworkDropdown;
