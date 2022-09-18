import styles from "./css/dashboardpage.module.css";
import HeroSection from "./herosection";
import VaultSection from "./vaultSection";

const DashBoardPage = () => {
  return (
    <div className={styles.dashboardpage}>
      <HeroSection />
      <VaultSection/>
    </div>
  );
};

export default DashBoardPage;
