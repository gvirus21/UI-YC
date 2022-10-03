import React, { FunctionComponent, useCallback, useRef, useState } from "react";
import styles from "../../../css/CreateVault.module.css";
import useSasiBlocks from "../../../sasiBlockStore";

const ProtocolDropdown: FunctionComponent = () => {
  const {block} = useSasiBlocks(); 
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [network, setNetwork] = useState({
    name: "PancakeSwap",
    img: "group-PancakeSwap.svg",
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
    useSasiBlocks.setState({block:{id:block.id,action:block.action,protocol:"" + (e.target as HTMLElement).textContent,selection1:block.selection1,selection2:block.selection2}})
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
                  UniSwap
                </li>
                <li
                  onClick={(e) => {
                    networkChangeHandler(e);
                  }}
                  className={styles.dropdownProtocolStyle}
                >
                  Yearn
                </li>
                <li
                  onClick={(e) => {
                    networkChangeHandler(e);
                  }}
                  className={styles.dropdownProtocolStyle}
                >
                  Balancer
                </li>
                <li
                  onClick={(e) => {
                    networkChangeHandler(e);
                  }}
                  className={styles.dropdownProtocolStyle}
                >
                  PancakeSwap
                </li>
              </ul>
            </nav>
          </>
        )}
      </div>
    </div>
  );
};
export default ProtocolDropdown;
