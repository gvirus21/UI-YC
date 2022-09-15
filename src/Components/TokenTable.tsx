import React from "react";
import Token from "../data/Tokens.json";
import styles from "../css/MainDashboard.module.css";
import {FiCopy} from 'react-icons/fi';

const TokenTable = () => {
  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableHeadingRow}>
        <h2 className={styles.tableDepositeTitle}>Deposit Tokens</h2>
        <h2 className={styles.tableAPYTitle}>APY</h2>
        <h2 className={styles.tableTVLTitle}>TVL</h2>
        <h2 className={styles.tableNetworkTitle}>Network</h2>
        <h2 className={styles.tableDepositsTitle}>My Deposits</h2>
        <h2 className={styles.tableEarningsTitle}>My Earnings</h2>
        <h2 className={styles.tableWebsiteTitle}>Website</h2>
        <h2 className={styles.tableActioneTitle}>Action</h2>
      </div>

      {Token.map((token) => {
        return (
          <>
          <div className={styles.tableRows}>
            <div className={styles.depositTokensContainer}>
              <img className={styles.tableImage} src={token.logo} alt="" />
              <h2 className={styles.tableText}>{token.symbol}</h2>
            </div>

            <div className={styles.apyContainer}>
              <h2 className={styles.tableText}>{token.APY}%</h2>
              <h1>{token.prevAPY}%</h1>
            </div>

            <div className={styles.tvlContainer}>
              <h2 className={styles.tableText}>${token.tvl}M</h2>
            </div>

            <div className={styles.networkContainer}>
              <img
                className={styles.tableImage}
                src={token.networkLogo}
                alt=""
              />
              <h2 className={styles.tableText}>{token.network}</h2>
            </div>

            <div className={styles.myDepositsContainer}>
              <h2 className={styles.tableText}>
                {token.myDeposits} {token.symbol}
              </h2>
            </div>

            <div className={styles.myEarningsContainer}>
              <h2 className={styles.tableText}>{token.myEarnings} CAKE</h2>
            </div>

            <div className={styles.websiteContainer}>
              <h2 className={styles.tableText}>{token.website}</h2>
              <FiCopy size={25} style={{marginLeft: '20px'}} />
            </div>

            <button className={styles.tableButton}>
              Enter
            </button>
              
          </div>
          </>
        );
      })}
    </div>
  );
};

export default TokenTable;
