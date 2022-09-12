import React from 'react'
import Modal from 'react-modal'
import styles from "../../../css/CreateVault.module.css";
import {AiOutlineClose} from 'react-icons/ai'
import {BiSearch} from 'react-icons/bi'
import { IToken } from '../../../types';

const SwapModal = ({...modalProps}) => {

  const  { 
    modalAction, 
    modalIsOpen, 
    setModalIsOpen, 
    filteredTokens, 
    toggleModal, 
    handleSearch, 
    handleSelect } = modalProps

  return (
    <Modal
    isOpen={modalIsOpen}
    onRequestClose={() => setModalIsOpen(false)}
    style={{
      overlay: {
        backgroundColor: "rgba(0,0,0,0.5)",
        zIndex: 999
      },
      content: {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        background: "#2D2D31",
        border: "transparent",
        height: "600px",
        width: "400px",
        borderRadius: "15px",
        scrollbarColor: "transparent",
      },
    }}
  >
    {/* Searchbar */}
    <div className={styles.modalTopSection}>
      <div className={styles.modalHeadingSection}>
        {modalAction === 'from' && <h2>Swap from</h2>}
        {modalAction === 'to' && <h2>Swap to</h2>}
        <AiOutlineClose
          color="white"
          scale={2}
          onClick={() => toggleModal()}
        />
      </div>
      <div className={styles.modalSearchBar}>
        {/* search icon */}
        <BiSearch color="white" scale={2} />
        <input
          type="text"
          placeholder="search.."
          className={styles.modalSearchInput}
          onChange={(e) => handleSearch(e)}
        />
      </div>
    </div>

    {/* List of Tokens */}
    <div className={styles.modalTokenContainer}>
      {filteredTokens.map((token: IToken) => {
        return (
          <div
            key={token.id}
            className={styles.modalTokenComponent}
            onClick={(e) => handleSelect(token.id)}
          >
            <div className={styles.modalComponentData}>
              <img
                src={token.logo}
                placeholder="token-logo"
                className={styles.modalTokenLogo}
              />
              <div className={styles.tokenNameContainer}>
                <p className={styles.modalTokenSymbol}>{token.symbol}</p>
                <p className={styles.modalTokenName}>{token.name}</p>
              </div>
            </div>

            <div>
              <img src="/logos/send.png" className={styles.modalSendLogo} />
            </div>
          </div>
        );
      })}
    </div>
  </Modal>
  )
}

export default SwapModal