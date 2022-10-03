import React, { FunctionComponent, useCallback, useRef, useState } from "react";
import styles from "../../../css/MainDashboard.module.css";

const AccountDropdown: FunctionComponent = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div className={styles.groupDiv} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      {isAuthenticated && (
        <div onClick={() => setIsAuthenticated(!isAuthenticated)}>
          <img className={styles.ellipseIcon} alt="" src="ellipse@2x.png" />
          <div className={styles.groupDiv1}>
            <div className={styles.metamaskDiv}>
            {!isHovering ? <div>
                ID65FG646G...
                </div>
            : "Disconnect"}</div>
          </div>
        </div>
      )}
      {!isAuthenticated && (
        <div className={styles.connectButtonGroup}>
          <button
            onClick={() => setIsAuthenticated(!isAuthenticated)}
            className={styles.connectButton}
            role="button"
          >
            Connect
          </button>
        </div>
      )}
    </div>
  );
};

export default AccountDropdown;
