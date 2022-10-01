import React, { FunctionComponent, useCallback, useEffect, useState } from "react";
import styles from "./css/CreateVault.module.css";
import { useNavigate } from "react-router-dom";
import ActionInput from "./Components/CreateVault/ActionInput";
import useStore from "./store";
import StakeAction from "./Components/CreateVault/Stake/StakeAction";
import useSasiBlocks from "./sasiBlockStore";

export const CreateVault: FunctionComponent = () => {
  const {block,sasiBlocks, addSasiBlock} = useSasiBlocks(); 
  const navigate = useNavigate();
  const store = useStore();
  const [actionSelected, setActionSelected]= useState(store.vaultAction);
  // need to come up with the list object here
   

  useEffect(()=>{
    useSasiBlocks.setState({block:{id:block.id,action:block.action,protocol:"PancakeSwap",selection1:block.selection1,selection2:"Cake"}})
    setActionSelected(store.vaultAction);
    console.log(actionSelected+'we')
  },[])

  const onCancelActionClick = () => {
    navigate("/createStrategy");
  };
  const onDoneClick = () => {
    //add to list the new block and reset the block adn make sure it has the right id based on length of current list 
    //update id
    //useSasiBlocks.setState({block:{id:sasiBlocks.length,action:store.vaultAction,protocol:block.protocol,selection1:block.selection1,selection2:block.selection2}})
    addSasiBlock(block);
    console.log(block);
    console.log(sasiBlocks);

    navigate("/createStrategy");
  };

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
