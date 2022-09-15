import React, { FunctionComponent, useCallback } from "react";
import { SearchBoxComponent } from "./SearchBoxComponent";
import { TextArea } from "./TextArea";
import styles from "./css/MainDashboard.module.css";
import { useNavigate } from "react-router-dom";
import VaultSection from "./vaultSection";


export const MainDashboard: FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.mainDashboardDiv}>
      <form
        className={styles.frameForm}
        action="https://yieldchain.io/"
        method="post"
        autoComplete="on"
      >
        <img className={styles.ellipseIcon1} alt="" src="ellipse-15.svg" />
        <img className={styles.icon24cursor} alt="" src="icon24cursor3.svg" />
        <div className={styles.groupDiv2}>
          <div className={styles.groupDiv3}>
            <div className={styles.strategyVaultsDiv}>Strategy Vaults</div>
            <div className={styles.searchForAVaultIDTokenO}>
              Search for a Vault ID, token or protocol, invest in the vault and
              receive massive APY’s with the click of a button
            </div>
          </div>
          <div className={styles.groupDiv4}>
            <div className={styles.groupDiv5}>
              <SearchBoxComponent />
              <div className={styles.iconSearch}>
                <img className={styles.icon1} alt="" src="icon1.svg" />
              </div>
            </div>
          </div>
        </div>
        {/* <img className={styles.ellipseIcon2} alt="" /> */}
        <div className={styles.frameDiv2}>
          <div className={styles.frameDiv3}>
            <div className={styles.groupIcon}>
              <img
                className={styles.ellipseIcon3}
                alt=""
                src="ellipse-27.svg"
              />
              <img
                className={styles.yieldchainLogo11}
                alt=""
                src="yieldchain-logo-13@2x.png"
              />
            </div>
            <b className={styles.allNetworksB}>All Networks</b>
          </div>
          <div className={styles.frameDiv3}>
            <img className={styles.groupIcon} alt="" src="group-Binance.svg" />
            <div className={styles.binanceSCDiv}>Binance SC</div>
          </div>
          <div className={styles.frameDiv3}>
            <img
              className={styles.groupIcon}
              alt=""
              src="group-Avalanche.svg"
            />
            <div className={styles.binanceSCDiv}>Avalanche</div>
          </div>
          <div className={styles.frameDiv3}>
            <img className={styles.groupIcon} alt="" src="group-Ethereum.svg" />
            <div className={styles.binanceSCDiv}>Ethereum</div>
          </div>
          <div className={styles.frameDiv3}>
            <img className={styles.groupIcon} alt="" src="group-Polygon.svg" />
            <div className={styles.binanceSCDiv}>Polygon</div>
          </div>
          <div className={styles.frameDiv8}>
            <div className={styles.binanceSCDiv}>More</div>
            <img className={styles.plusIcon} alt="" src="chevrondown.svg" />
          </div>
        </div>
        <div className={styles.groupDiv8}>
          <div className={styles.frameDiv9}>
            <div className={styles.frameDiv10}>
              <div className={styles.filterDiv}>Filter</div>
            </div>
            <div className={styles.switchAOnaEnabled}>
              <img
                className={styles.ellipseIcon4}
                alt=""
                src="ellipse-13.svg"
              />
              <b className={styles.b}>2</b>
            </div>
          </div>
          <div className={styles.frameDiv12}>
            <b className={styles.dashboard}>My Vaults only</b>
            <div className={styles.switchAOnaEnabled}>
              <div className={styles.colorLTrack} />
              <img
                className={styles.colorLThumb}
                alt=""
                src="-color-l-thumb.svg"
              />
            </div>
          </div>
        </div>
      </form>

    </div>
  );
};
