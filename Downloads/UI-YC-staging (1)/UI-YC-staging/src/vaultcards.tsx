import styles from "./css/vaultcards.module.css";

export const VerfiedVaultCard = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText(" app.uniswap.org");
    alert("Copied")

  }
  return (
    <div className={styles.vaultCard}>
      <div className={styles.apyvalues}>
        <div className={styles.apyvalue}>APY: 234%</div>
        <div className={styles.apyvalueUnd}>APY: 45%</div>
      </div>
      <div className={styles.cardContent}>
        <div className={styles.pairname}>USDT/BTC</div>
        <div className={styles.network}>Solana Network</div>

        <div className={styles.imgBorder}>
          <img src="vaultcardimg1.png" className={styles.img} />
          <img src="vaultcardimg2.png" className={styles.img2} />
        </div>

        <ul className={styles.cardlists}>
          <li className={styles.cardlist}>
            <span className={styles.key}>Total Value Locked</span>
            <span className={styles.value}>$100M</span>
          </li>
          <li className={styles.cardlist}>
            <span className={styles.key}>Reward Token</span>
            <span className={styles.value}>
              Cake
              <img src="cakevaultcard.png" />
            </span>
          </li>
          <li className={styles.cardlist}>
            <span className={styles.key}>Website</span>
            <span
              className={styles.value}
              onClick={handleCopy}
            >
              app.uniswap.org <img src="copy.png" className={styles.copyImg} />
            </span>
          </li>
          <li className={styles.cardlist}>
            <span className={styles.key}>Strategy</span>
            <span className={styles.value}>Auto-Compounding</span>
          </li>
        </ul>
        <button className={styles.cardBtn}>Enter Vault</button>
      </div>
    </div>
  );
};


export const TrendingVaultCard = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText(" app.uniswap.org");
    alert("Copied");
  };
  return (
    <div className={styles.trendingvault}>
      <div className={styles.trendingvaultapys}>
        <div className={styles.trendingvaultapy1}>APY: 234%</div>
        <div className={styles.trendingvaultapy2}>APY: 45%</div>
      </div>

      <div className={styles.trendingVaultCard}>
        <div className={styles.imgs}>
          <div className={styles.imgBorder}>
            <img src="vaultcardimg1.png" className={styles.img} />
            <img src="vaultcardimg2.png" className={styles.trendingimg2} />
          </div>
        </div>
        <div className={styles.trendingCardContent}>
          <div className={styles.trendingPairname}>UNI</div>
          <div className={styles.trendingNetwork}>Ethereum Network</div>

          <ul className={styles.cardlists}>
            <li className={styles.cardlist}>
              <span className={styles.key}>Total Value Locked</span>
              <span className={styles.value}>$100M</span>
            </li>
            <li className={styles.cardlist}>
              <span className={styles.key}>Reward Token</span>
              <span className={styles.value}>
                Cake
                <img src="cakevaultcard.png" />
              </span>
            </li>
            <li className={styles.cardlist}>
              <span className={styles.key}>Website</span>
              <span className={styles.value} onClick={handleCopy}>
                app.uniswap.org{" "}
                <img src="copy.png" className={styles.copyImg} />
              </span>
            </li>
            <li className={styles.cardlist}>
              <span className={styles.key}>Strategy</span>
              <span className={styles.value}>Auto-Compounding</span>
            </li>
          </ul>
          <button className={styles.cardBtn}>Enter Vault</button>
        </div>
      </div>
    </div>
  );
};