import styles from "../../../css/CreateVault.module.css";

const SwapToTokenSelection = ({...props}) => {

  const {toggleModal, selectedToToken, setModalAction } = props
  return (
    <div>
      <div className={styles.swapTokenSelection} onClick={() => {
        setModalAction('to')
        toggleModal()
        }}>
        <div className={styles.swapTokenDataContainer}>
          
        <img className={styles.swapTokenSelectionLogo} src={selectedToToken.logo} alt="logo" />
        <h3 className={styles.swapTokenSelectionText}>{selectedToToken.name}</h3>
        </div>
        <img className={styles.downArrowIcon} src='/logos/downArrow.png' />

      </div>
    </div>
  )
}

export default SwapToTokenSelection