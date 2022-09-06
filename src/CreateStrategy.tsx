import React, { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./css/CreateStrategy.module.css";

export const CreateStrategy: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/createVault");
  }, [navigate]);
  const onActionButtonClick = useCallback(() => {
    navigate("/createVault");
  }, [navigate]);
  const inputDurationClick = useCallback(() => {
    navigate("/inputDuration");
  }, [navigate]);

  return (
    <div className={styles.dashboardDiv}>
      <div className={styles.frameDiv}>
        <div className={styles.vaultDiv}>Vault</div>
        <img
          className={styles.arrowChevronDuoRight}
          alt=""
          src="arrow--chevron-duo-right1.svg"
        />
        <b className={styles.createVaultB}>Create Vault</b>
      </div>
      <img className={styles.icon24cursor} alt="" src="icon24cursor1.svg" />
      <div className={styles.rectangleDiv} />
      
      <div className={styles.frameDiv70}>
        <img
          className={styles.trashCanOutlineIcon}
          alt=""
          src="trashcanoutline.svg"
          onClick={inputDurationClick}
        />
        <img
          className={styles.squareEditOutlineIcon}
          alt=""
          src="squareeditoutline.svg"
          onClick={onActionButtonClick}
        />
        <div className={styles.frameDiv71}>
          <div className={styles.colorsLayerStyles}>Stake</div>
        </div>
        <div className={styles.frameDiv72}>
          <img className={styles.bgIcon} alt="" src="ellipse-8@2x.png" />
          <div className={styles.colorsLayerStyles}>Pancakeswap</div>
        </div>
        <div className={styles.frameDiv73}>
          <div className={styles.vaultDiv}>Reward : CAKE</div>
          <img
            className={styles.ellipseIcon4964}
            alt=""
            src="ellipse-8@2x.png"
          />
        </div>
        <div className={styles.frameDiv74}>
          <div className={styles.vaultDiv}>Stake: CAKE</div>
          <img className={styles.groupIcon} alt="" src="group-1000002105.svg" />
        </div>
      </div>
      
      <div className={styles.frameDiv75}>
        <div className={styles.groupDiv}>
          <div className={styles.selectActionDiv}>Select Action</div>
        </div>
        <div className={styles.frameDiv76} onClick={onActionButtonClick}>
          <div className={styles.groupDiv1}>
        {/* <button className={styles.groupDiv1} onClick={onActionButtonClick}> */}
            <div onClick={onGroupButtonClick} className={styles.titleDiv}>Stake token </div>
        {/* <button className={styles.groupButton} onClick={onGroupButtonClick}> */}
            {/* onClick={onActionButtonClick} */}
        {/* </button> */}
          </div>
          <img className={styles.arrowLeftIcon} alt="" src="arrowleft.svg" />
        </div>
        <div className={styles.frameDiv77} onClick={onActionButtonClick}>
          <div className={styles.groupDiv2}>
            <b className={styles.titleB}>Add Liquidity</b>
          </div>
          <img className={styles.arrowLeftIcon} alt="" src="arrowleft1.svg" />
        </div>
        <div className={styles.frameDiv78}  onClick={onActionButtonClick}>
          <div className={styles.groupDiv3}>
            <b className={styles.titleB}>Swap token</b>
          </div>
          <img className={styles.arrowLeftIcon} alt="" src="arrowleft2.svg" />
        </div>
        <div className={styles.frameDiv79} onClick={onActionButtonClick}>
          <div className={styles.groupDiv4}>
            <b className={styles.titleB}>LP ZAP</b>
          </div>
          <img className={styles.arrowLeftIcon} alt="" src="arrowleft3.svg" />
        </div>
        <div className={styles.frameDiv80} onClick={onActionButtonClick}>
          <div className={styles.groupDiv5} >
            <b className={styles.titleB}>Harvest token</b>
          </div>
          <img className={styles.arrowLeftIcon} alt="" src="chevronright.svg" />
        </div>
        <div className={styles.frameDiv81} onClick={onActionButtonClick}>
          <div className={styles.groupDiv6}>
            <b className={styles.titleB}>Remove Liquidity</b>
          </div>
          <img className={styles.arrowLeftIcon} alt="" src="arrowleft4.svg" />
        </div>
        <div className={styles.frameDiv82} onClick={onActionButtonClick}>
          <div className={styles.groupDiv7}>
            <b className={styles.titleB}>Bridge token</b>
          </div>
          <img className={styles.arrowLeftIcon} alt="" src="arrowleft5.svg" />
        </div>
        <img className={styles.closeIcon} alt="" src="close.svg" />
      </div>
      
      <button className={styles.groupButton} onClick={onGroupButtonClick}>
        <div className={styles.frameDiv83}>
          <div className={styles.frameDiv84}>
            <div className={styles.finishStrategyDiv}>Finish Strategy</div>
          </div>
        </div>
      </button>
      <img
        className={styles.yieldchainLogo1}
        alt=""
        src="yieldchain-logo-1@2x.png"
      />
      <div className={styles.groupDiv8}>
        <img
          className={styles.squareEditOutlineIcon1}
          alt=""
          src="squareeditoutline.svg"
          onClick={inputDurationClick}
        />
        <div className={styles.titleB}>
          <span>Strategy deploys: </span>
          <span className={styles.every2Days}>Every 2 days</span>
        </div>
      </div>
      <div className={styles.groupDiv9}>
        <div className={styles.titleB}>
          <span>Actionable Token: </span>
          <span className={styles.every2Days}>CAKE</span>
        </div>
        <img className={styles.groupIcon1} alt="" src="group-1000002107.svg" />
      </div>
 
 
 
    </div>
  );
};
