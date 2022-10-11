import React, { FunctionComponent, useCallback, useRef, useState } from "react";
import styles from "../../../css/CreateVault.module.css";
import useSasiBlocks from "../../../sasiBlockStore";

const DepositPoolDropDown: FunctionComponent = () => {
  const {block} = useSasiBlocks(); 
 
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [network, setNetwork] = useState({
    name: "Cake",
    img: "group-Cake.svg",
  });
  const dropdownHandler = () => {
    setIsActive(!isActive);
    console.log(isActive);
  };
  const networkChangeHandler = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    let pool = "" + (e.target as HTMLElement).textContent;
    let updatedPool = pool.replace("/", "and");
    console.log(updatedPool);
    useSasiBlocks.setState({block:{id:block.id,action:block.action,protocol:block.protocol,selection1:block.selection1,selection2:pool}})
    setNetwork({
      ...network,
      name: pool,
      img: "group-" + updatedPool + ".svg",
    });
    setIsActive(!isActive);
  };
  return (
    <div>
      <div className={styles.menuContainer}>
        <button className={styles.dropdownProtocol} onClick={dropdownHandler}>
          <div>
            <img
              src={network.img}
              className={styles.simpleIconslitecoin}
              alt="Network"
              style={{ marginLeft: "10px", marginBottom: "-5px" }}
            />
            <span style={{ marginLeft: "10px" }}>{network.name}</span>
          </div>
          <img style={{ marginRight: "10px" }} alt="" src="chevrondown4.svg" />
        </button>
        {isActive && (
          <>
            <nav
              ref={dropdownRef}
              className={`menu ${isActive ? "active" : "inactive"}`}
            >
              <ul className={styles.dropdownProtocolStyle}>
                <li
                  onClick={(e) => {
                    networkChangeHandler(e);
                  }}
                  className={styles.dropdownProtocolStyle}
                >
                  BNB/ETH
                </li>
                <li
                  onClick={(e) => {
                    networkChangeHandler(e);
                  }}
                  className={styles.dropdownProtocolStyle}
                >
                  BNB/BTC
                </li>
                <li
                  onClick={(e) => {
                    networkChangeHandler(e);
                  }}
                  className={styles.dropdownProtocolStyle}
                >
                  USDT/DOT
                </li>
                <li
                  onClick={(e) => {
                    networkChangeHandler(e);
                  }}
                  className={styles.dropdownProtocolStyle}
                >
                  Cake
                </li>
              </ul>
            </nav>
          </>
        )}
      </div>
    </div>
  );
};
export default DepositPoolDropDown;
