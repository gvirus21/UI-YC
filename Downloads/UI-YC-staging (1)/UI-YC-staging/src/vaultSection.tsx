import styles from "./css/vaultsection.module.css";
import { TrendingVaultCard, VerfiedVaultCard } from "./vaultcards";

const VaultSection = () => {
  return (
    <div className={styles.vaultsection}>
      <div className={styles.flexDiv}>
        <div className={styles.title}>Verified Vaults</div>
        <div className={styles.arrows}>
          <img className={styles.arrowLeft} alt="" src="arrowLeft.png" />
          <img className={styles.arrowRight} alt="" src="arrowRight.png" />
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
