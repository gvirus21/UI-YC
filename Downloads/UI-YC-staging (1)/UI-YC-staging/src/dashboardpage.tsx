import styles from "./css/dashboardpage.module.css";
import HeroSection from "./herosection";
import VaultSection from "./vaultSection";
import VaultsTable from "./vaultstable";

const DashBoardPage = () => {
  return (
    <div className={styles.dashboardpage}>
      <HeroSection />
      <VaultSection />
      <VaultsTable/>
    </div>
  );
};

export default DashBoardPage;
