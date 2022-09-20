import styles from "./css/vaultsection.module.css";
import { TrendingVaultCard, VerfiedVaultCard } from "./vaultcards";

const VaultSection = () => {
  return (
    <div className={styles.vaultsection}>
      <div className={styles.statsDiv}>
        <div className={styles.flexDiv2}>
          <div>
            <div className={styles.statTitle}>My Total Deposits</div>
            <div className={styles.statValue}>$ 50,000</div>
          </div>
          <div>
            <div className={styles.statTitle}>Claimable Rewards</div>
            <div className={styles.statValue}>$ 50,000</div>
          </div>
          <div>
            <div className={styles.statTitle}>
              Staked YC <a>Stake for 300% APR</a>
            </div>
            <div className={styles.statValue}>50,000,000</div>
          </div>
        </div>
        <div className={styles.flexDiv3}>
          <div>
            <div className={styles.statTitle}>Total Vaults</div>
            <div className={styles.statValue}>234</div>
          </div>
          <div>
            <div className={styles.statTitle}>My Vaults</div>
            <div className={styles.statValue}>14</div>
          </div>
          <button className={styles.createBtn}>
            <img src="Vector (10).png" /> Create Vault
          </button>
        </div>
      </div>
      <div className={styles.flexDiv}>
        <div className={styles.title}>Verified Vaults</div>
        <div className={styles.arrows}>
          <img className={styles.arrowLeft} alt="" src="Vector (13).png" />
          <img className={styles.arrowRight} alt="" src="Vector (12).png" />
        </div>
      </div>
      <div className={styles.cards}>
        <VerfiedVaultCard />
        <VerfiedVaultCard />
        <VerfiedVaultCard />
        <VerfiedVaultCard />
      </div>
      <div className={styles.trendingVault}>
        <div className={styles.flexDiv}>
          <div className={styles.title}>Trending Vaults</div>
          <div className={styles.arrows}>
            <img className={styles.arrowLeft} alt="" src="arrowLeft.png" />
            <img className={styles.arrowRight} alt="" src="arrowRight.png" />
          </div>
        </div>
        <div className={styles.cards}>
          <TrendingVaultCard />
          <TrendingVaultCard />
          <TrendingVaultCard />
          <TrendingVaultCard />
        </div>
      </div>
    </div>
  );
};

export default VaultSection;
