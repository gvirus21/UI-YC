import styles from "../../../css/CreateVault.module.css";

const SwapFromTokenSelection = ({ ...props }) => {
  const { toggleModal, selectedFromToken, setModalAction } = props;
  return (
    <div>
      <div className={styles.swapTokenSelection} onClick={() => 
      {
        setModalAction("from")
        toggleModal()
      }}>
        <div className={styles.swapTokenDataContainer}>
          
        <img className={styles.swapTokenSelectionLogo} src={selectedFromToken.logo} alt="logo" />
        <h3 className={styles.swapTokenSelectionText}>{selectedFromToken.name}</h3>
        </div>
        <img className={styles.downArrowIcon} src='/logos/downArrow.png' />

      </div>
    </div>
  );
};

export default SwapFromTokenSelection;
