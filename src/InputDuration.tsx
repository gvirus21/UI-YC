import React, { FunctionComponent,useCallback } from "react";
import styles from "./css/StrategyCreated.module.css";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";



export const InputDuration: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/createStrategy");
  }, [navigate]);
  return (
    <div className={styles.StrategyCreatedDiv}>
      <div className={styles.frameDiv}>
        <div className={styles.vaultDiv}>Vault</div>
        <img
          className={styles.arrowChevronDuoRight}
          alt=""
          src="arrow--chevron-duo-right.svg"
        />
        <b className={styles.createVaultB}>Create Vault</b>
      </div>
      <img className={styles.icon24cursor} alt="" src="icon24cursor.svg" />
      <div className={styles.groupDiv}>
        <div className={styles.rectangleDiv} />
        <div className={styles.frameDiv1}>
          <div className={styles.groupDiv1}>
            <div className={styles.groupDiv2}>
              <div className={styles.groupDiv3}>
                <div className={styles.rectangleDiv1} />
                <img
                  className={styles.chevronDownIcon}
                  alt=""
                  src="chevrondown.svg"
                />
                <div className={styles.stakeDiv}>Stake</div>
              </div>
            </div>
            <div className={styles.actionDiv}>Action</div>
          </div>
          <div className={styles.groupDiv4}>
            <div className={styles.groupDiv2}>
              <div className={styles.groupDiv3}>
                <div className={styles.rectangleDiv1} />
                <img
                  className={styles.chevronDownIcon1}
                  alt=""
                  src="chevrondown.svg"
                />
                <div className={styles.groupDiv7}>
                  <img
                    className={styles.ellipseIcon}
                    alt=""
                    src="ellipse-8@2x.png"
                  />
                  <div className={styles.pancakeswapDiv}>Pancakeswap</div>
                </div>
              </div>
            </div>
            <div className={styles.protocolDiv}>Protocol</div>
          </div>
          <div className={styles.groupDiv8}>
            <div className={styles.groupDiv2}>
              <div className={styles.groupDiv3}>
                <div className={styles.rectangleDiv1} />
                <img
                  className={styles.chevronDownIcon2}
                  alt=""
                  src="chevrondown.svg"
                />
                <div className={styles.groupDiv11}>
                  <img
                    className={styles.ellipseIcon}
                    alt=""
                    src="ellipse-8@2x.png"
                  />
                  <div className={styles.pancakeswapDiv}>Cake (50% APR)</div>
                </div>
              </div>
            </div>
            <div className={styles.protocolDiv}>Deposit Pool</div>
          </div>
          <div className={styles.groupDiv12}>
            <div className={styles.groupDiv2}>
              <div className={styles.groupDiv3}>
                <div className={styles.rectangleDiv4} />
                <img
                  className={styles.chevronDownIcon3}
                  alt=""
                  src="chevrondown.svg"
                />
                <div className={styles.stakeDiv}>Enter amount</div>
              </div>
            </div>
            <div className={styles.protocolDiv}>Amount</div>
          </div>
          <div className={styles.frameDiv2}>
            <div className={styles.frameDiv3}>
              <div className={styles.createStrategyDiv}>Create Strategy</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.cantFindPoolAggregateIn2}>
        Cant find pool, Aggregate in 2min
      </div>



      
      <img className={styles.dimmerIcon} alt="" src="dimmer.svg" />
      <div className={styles.fREDialog}>
        <div className={styles.groupDiv18}>
          <div className={styles.masterButtonTextMediu}>
            <div className={styles.createStrategyDiv}>Save Duration </div>
            <button
        className={styles.button}
        onClick={onButtonClick}
        data-animate-on-scroll
      >
      </button>
          </div>
          <div className={styles.masterButtonTextMediu1}>
            <b className={styles.vaultDiv}>Cancel</b>
          </div>
        </div>
        <b className={styles.StrategyCreatedSuccessfully}>
          Strategy Created Successfully 🎉
        </b>
        <div className={styles.yourStrategyHasBeenCreated}>
          Your strategy has been created, please set how frequently you want the
          strategy to keep running e.g every 3 days, 8 hours, or every 2 weeks
          etc.
        </div>
        <img className={styles.frameIcon} alt="" src="frame-1000002079.svg" />
        <div className={styles.groupDiv19}>
          <div className={styles.groupDiv20}>
            <div className={styles.groupDiv3}>
              <div className={styles.rectangleDiv4} />
              <div className={styles.stakeDiv}>Enter number</div>
            </div>
          </div>
          <div className={styles.groupDiv22}>
            <div className={styles.groupDiv3}>
              <div className={styles.rectangleDiv1} />
              <img
                className={styles.chevronDownIcon6}
                alt=""
                src="chevrondown.svg"
              />
              <div className={styles.stakeDiv}>Days</div>
            </div>
          </div>
          <div className={styles.portfolioDiv}>Duration</div>
        </div>
      </div>
    </div>
  );
};
