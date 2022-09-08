
import React, { FunctionComponent, useCallback, useState } from "react";
import styles from "../../../css/CreateVault.module.css";
import { useNavigate, NavLink } from "react-router-dom";
import ProtocolDropdown from "./ProtocolDropDown";
import DepositPoolDropDown from "./DepositPoolDropDown";


const StakeAction = () => {

return(
<div>
<div className={styles.groupDiv3}>
  <div className={styles.groupDiv1}>
    <ProtocolDropdown/>
  </div>
  <div className={styles.actionDiv}>Protocol 1</div>
</div>
<div className={styles.groupDiv7}>
  <div className={styles.groupDiv1}>
    <DepositPoolDropDown/>
  </div>
  <div className={styles.actionDiv}>Deposit Pool</div>
</div>

</div>
)
}

export default StakeAction;
