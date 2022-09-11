import React, { FunctionComponent, useState, useCallback } from "react";
import styles from "../../../css/CreateVault.module.css";
import { useNavigate, NavLink } from "react-router-dom";
import { IToken } from "../../../types";
import Modal from "react-modal";
import Tokens from "../../../data/Tokens.json";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const SwapAction = () => {
  const [action, setAction] = useState("Swap");
  const [fromToken, setFromToken] = useState<IToken | null>(null);
  const [toToken, setToToken] = useState<IToken | null>(null);
  const [filteredTokens, setFilteredTokens] = useState<IToken[]>(Tokens);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(true);

  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const toggleConfig = () => {
    setModalIsOpen(!modalIsOpen);
    setFilteredTokens(Tokens);
  };

  const selectFromTokenAction = (id: string) => {
    const selectedToken = filteredTokens.find((token) => token.id === id);
    selectedToken && setFromToken(selectedToken);
  };

  const selectToTokenAction = (id: string) => {
    const selectedToken = filteredTokens.find((token) => token.id === id);
    selectedToken && setToToken(selectedToken);
  };

  const handleSearch = (e: any) => {
    const searchTerm = e.target.value;
    console.log("searchTerm: ", searchTerm);

    const filteredList = Tokens.filter(
      (token) =>
        token.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        token.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        token.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredTokens(filteredList);
  };

  return (
    <div>
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
            <h2>Swap From</h2>
            <AiOutlineClose
              color="white"
              scale={2}
              onClick={() => toggleConfig()}
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
                onClick={() => selectFromTokenAction(token.id)}
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

      <button className="" onClick={() => toggleConfig()}>
        Open Popup
      </button>

      <div>
        hello
      </div>
    </div>
  );
};

export default SwapAction;
