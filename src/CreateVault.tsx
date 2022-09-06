import { FunctionComponent, useState, useCallback } from "react";
import styles from "./css/CreateVault.module.css";
import { useNavigate } from "react-router-dom";
import { IToken } from "./types";
import Modal from "react-modal";
import Tokens from "./data/Tokens.json";
import { BiSearch } from "react-icons/bi";
import { GrClose } from "react-icons/gr";

const vaultAction = {
  STAKE: "Stake",
  SWAP: "Swap",
};

export const CreateVault: FunctionComponent = () => {
  const [action, setAction] = useState(vaultAction.STAKE);
  const [fromToken, setFromToken] = useState<IToken | null>(null);
  const [toToken, setToToken] = useState<IToken | null>(null);
  const [filteredTokens, setFilteredTokens] = useState<IToken[]>(Tokens);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(true);

  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const openConfig = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const selectFromTokenAction = (id: string) => {
    const selectedToken = filteredTokens.find((token) => token.id === id);
    selectedToken && setFromToken(selectedToken);
  };

  const selectToTokenAction = (id: string) => {
    const selectedToken = filteredTokens.find((token) => token.id === id);
    selectedToken && setToToken(selectedToken);
  };

  const handleSearch = (e) => {
    // setFilteredTokens()
  }

  return (
    <div className={styles.dashboardDiv}>
      {/* // Top nav root */}
      <div className={styles.frameDiv}>
        <div className={styles.vaultDiv}>Vault</div>
        <img
          className={styles.arrowChevronDuoRight}
          alt=""
          src="arrow--chevron-duo-right1.svg"
        />
        <b className={styles.createVaultB}>Create Vault</b>
      </div>

      {/* <img className={styles.icon24cursor} alt="" src="icon24cursor2.svg" /> */}

      {/* Main Form */}
      <form
        className={styles.groupForm}
        action="Action"
        method="get"
        id="0"
        onClick={onButtonClick}
      >
        <div className={styles.rectangleDiv} />
        <div className={styles.frameDiv1}>
          <div className={styles.groupDiv}>
            <div className={styles.groupDiv1}>
              <div className={styles.groupDiv2}>
                <div className={styles.rectangleDiv1} />
                <img
                  className={styles.chevronDownIcon}
                  alt=""
                  src="chevrondown.svg"
                />
                <div className={styles.stakeDiv}>{action}</div>
              </div>
            </div>
            <div className={styles.actionDiv}>Action</div>
          </div>
          <div className={styles.groupDiv3}>
            <div className={styles.groupDiv1}>
              <div className={styles.groupDiv2}>
                <div className={styles.rectangleDiv1} />
                <img
                  className={styles.chevronDownIcon1}
                  alt=""
                  src="chevrondown.svg"
                />
                <div className={styles.groupDiv6}>
                  <img
                    className={styles.ellipseIcon}
                    alt=""
                    src="ellipse-8@2x.png"
                  />
                  <div className={styles.pancakeswapDiv}>Pancakeswap</div>
                </div>
              </div>
            </div>
            <div className={styles.actionDiv}>Protocol</div>
          </div>
          <div className={styles.groupDiv7}>
            <div className={styles.groupDiv1}>
              <div className={styles.groupDiv2}>
                <div className={styles.rectangleDiv1} />
                <img
                  className={styles.chevronDownIcon2}
                  alt=""
                  src="chevrondown.svg"
                />
                <div className={styles.groupDiv10}>
                  <img
                    className={styles.ellipseIcon}
                    alt=""
                    src="ellipse-8@2x.png"
                  />
                  <div className={styles.pancakeswapDiv}>Cake (50% APR)</div>
                </div>
              </div>
            </div>
            <div className={styles.actionDiv}>Deposit Pool</div>
          </div>
          <div className={styles.groupDiv11}>
            <div className={styles.groupDiv1}>
              <div className={styles.groupDiv2}>
                <div className={styles.rectangleDiv4} />
                <img
                  className={styles.chevronDownIcon3}
                  alt=""
                  src="chevrondown.svg"
                />
                <div className={styles.enterAmountDiv}>Enter amount</div>
              </div>
            </div>
            <div className={styles.actionDiv}>Amount</div>
          </div>
          <div className={styles.frameDiv2}>
            <div className={styles.frameDiv3}>
              <div className={styles.createStrategyDiv}>Create Strategy</div>
            </div>
          </div>
        </div>
      </form>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        // tokens={}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.5)",
          },
          content: {
            background: "#2D2D31",
            border: "transparent",
            height: "600px",
            width: "300px",
          },
        }}
      >
        {/* Searchbar */}
        <div>
          <div className={styles.modalHeading}>
            <h2>Swap From</h2>
            <GrClose color='white' />
          </div>
          <div className={styles.modalSearchBar}>
          {/* search icon */}
            <BiSearch color="white" scale={2} />
            <input type="text" placeholder="search.." className={styles.modalSearchInput} onChange={(e) => {}}  />
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
                {console.log("token: ", token.logo)}
                <img src={token.logo} placeholder="token-logo" className={styles.modalTokenLogo} />
                <p className={styles.modalTokenSymbol}>{token.symbol}</p>
              </div>
            );
          })}
        </div>
      </Modal>

      <button className="" onClick={() => openConfig()}>
        Open Popup
      </button>
    </div>
  );
};
