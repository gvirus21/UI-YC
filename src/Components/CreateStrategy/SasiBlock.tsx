import React, { FunctionComponent, useCallback, useState } from "react";
import styles from "../../css/CreateStrategy.module.css";
import { useNavigate, NavLink } from "react-router-dom";
import useStore from "../../store";
 
interface Props{
  sasiData:{
  id:number,
  protocol:string|null,
  action:string|null,
  selection1:string|null,
  selection2:string|null
}
}

const SasiBlock = ({sasiData}:Props) => {
    const navigate = useNavigate();
    const store = useStore();
 
    const onActionButtonClick = useCallback(
        (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          store.updateAction("" + (e.target as HTMLElement).textContent);
          navigate("/createVault");
        },
        [navigate]
      );
      const inputDurationClick = useCallback(() => {
        navigate("/inputDuration");
      }, [navigate]);

  return (
    <div>
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
          <div className={styles.colorsLayerStyles}>{sasiData.action}</div>
        </div>
        <div className={styles.frameDiv72}>
          <img className={styles.bgIcon} alt=""  src={"group-"+sasiData.protocol+".svg"} />
          <div className={styles.colorsLayerStyles}>{sasiData.protocol}</div>
        </div>
        <div className={styles.frameDiv73}>
          {sasiData.action == "Stake" ?
          
          <div className={styles.vaultDiv}>Reward : {sasiData.selection1}</div>
        :sasiData.action == "Harvest"?  <div className={styles.vaultDiv}>To : {sasiData.selection1}</div> :
        <div className={styles.vaultDiv}>Reward : {sasiData.selection1}</div>
        }
          <img
            className={styles.ellipseIcon4964}
            alt=""
            src={"ellipse-8@2x.png"}
          />
        </div>
        <div className={styles.frameDiv74}>
          {sasiData.action == "Harvest"?
          <>
          <div className={styles.vaultDiv}>Stake: {sasiData.selection2}</div>
          <img className={styles.groupIcon} alt="" src="group-1000002105.svg" />
          </>
          :<>
          <div className={styles.vaultDiv}>Stake: {sasiData.selection2}</div>
          <img className={styles.groupIcon} alt="" src="group-1000002105.svg" />
          </>
          }
         
        </div>
      </div>
    </div>
  );
};

export default SasiBlock;
