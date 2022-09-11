import React, { FunctionComponent, useCallback, useEffect, useState } from "react";
import styles from "./css/CreateVault.module.css";
import { useNavigate } from "react-router-dom";
import ActionInput from "./Components/CreateVault/ActionInput";
import useStore from "./store";
import StakeAction from "./Components/CreateVault/Stake/StakeAction";
import SwapAction from "./Components/CreateVault/Swap/SwapAction";

export const CreateVault: FunctionComponent = () => {
  const navigate = useNavigate();
  const store = useStore();
  const [actionSelected, setActionSelected]= useState(store.vaultAction);

  useEffect(()=>{
    setActionSelected(store.vaultAction);
    console.log(actionSelected+'we')
  },[])

  const onCancelActionClick = useCallback(() => {
    navigate("/createStrategy");
  }, [navigate]);
  const onDoneClick = useCallback(() => {
    navigate("/createStrategy");
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
      <div className={styles.groupForm}>
        <div className={styles.rectangleDiv} />
        
        <div className={styles.frameDiv1}>
          <ActionInput action={actionSelected} />
          {actionSelected == "Stake token " &&
          <div>
            <StakeAction/>
          </div>
          }
          {actionSelected == "Swap token" &&
          <div>
            <SwapAction/>
          </div>
          }

          {/* Buttons */}
          <div onClick={onCancelActionClick} className={styles.cancelActionBtn}>
            <div className={styles.frameDiv3}>
              <div
                className={styles.cancelActionBtnDiv}
              >
                Cancel Action
              </div>
            </div>
          </div>
          <div onClick={onDoneClick} className={styles.frameDiv2}>
            <div className={styles.frameDiv3}>
              <div  className={styles.createStrategyDiv}>Done</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.cantFindPoolAggregateIn2}>
        Cant find pool, Aggregate in 2min
      </div>
    </div>
  );
};
