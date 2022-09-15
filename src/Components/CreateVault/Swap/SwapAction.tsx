import React, { FunctionComponent, useState, useCallback } from "react";
import styles from "../../../css/CreateVault.module.css";
import { useNavigate, NavLink } from "react-router-dom";
import { IToken } from "../../../types";
import Modal from "react-modal";
import Tokens from "../../../data/Tokens.json";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import SwapFromTokenSelection from "./SwapFromTokenSelection";
import SwapToTokenSelection from "./SwapToTokenSelection";
import { style } from "@mui/system";
import SwapModal from "./SwapModal";

const IntitalFromToken: IToken = {
  id: "bitcoin",
  name: "Bitcoin",
  symbol: "BTC",
  logo: "../logos/bitcoin.png",
  APY: "7.8",
  prevAPY: "7.5",
  tvl: "600",
  network: "Solana",
  networkLogo: "../logos/ethereum.png",
  myDeposits: "5",
  myEarnings: "0.2",
  website: "app.uniswap.org",
};

const IntitalToToken: IToken = {
  id: "ethereum",
  name: "Ethereum",
  symbol: "ETH",
  logo: "../logos/ethereum.png",
  APY: "7.3",
  prevAPY: "7.0",
  tvl: "400",
  network: "Ethereum",
  networkLogo: "../logos/ethereum.png",
  myDeposits: "10",
  myEarnings: "2",
  website: "app.uniswap.org",
};

const SwapAction = () => {
  const [fromToken, setFromToken] = useState<IToken | null>(IntitalFromToken);
  const [toToken, setToToken] = useState<IToken | null>(IntitalToToken);
  const [filteredTokens, setFilteredTokens] = useState<IToken[]>(Tokens);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalAction, setModalAction] = useState<"to" | "from">("from");

  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
    setFilteredTokens(Tokens);
  };

  const selectFromTokenAction = (id: string) => {
    const selectedToken = filteredTokens.find((token) => token.id === id);
    selectedToken && setFromToken(selectedToken);
    toggleModal();
  };

  const selectToTokenAction = (id: string) => {
    const selectedToken = filteredTokens.find((token) => token.id === id);
    selectedToken && setToToken(selectedToken);
    toggleModal();
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

  const handleSelect = (tokenId: string) => {
    if (modalAction === "from") {
      selectFromTokenAction(tokenId);
    } else if (modalAction === "to") {
      selectToTokenAction(tokenId);
    }
  };

  return (
    <div>
      <SwapModal
        modalAction={modalAction}
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        filteredTokens={filteredTokens}
        toggleModal={toggleModal}
        handleSearch={handleSearch}
        handleSelect={handleSelect}
      />

      <div className={styles.SwapTokenSelectonContainer}>
        <h3 className={styles.swapHeadingText}>Swap from</h3>
        <SwapFromTokenSelection
          selectedFromToken={fromToken}
          toggleModal={toggleModal}
          setModalAction={setModalAction}
        />

        {/* swap icon */}
        <img
          src="/logos/swap.png"
          alt="swap-icon"
          className={styles.swapIcon}
        />

        <h3 className={styles.swapHeadingText}>Swap to</h3>
        <SwapToTokenSelection
          selectedToToken={toToken}
          toggleModal={toggleModal}
          setModalAction={setModalAction}
        />
      </div>
    </div>
  );
};

export default SwapAction;
