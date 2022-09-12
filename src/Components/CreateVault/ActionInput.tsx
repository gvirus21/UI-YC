import styles from "../../css/CreateVault.module.css";

interface Props{
  action:string
}

const ActionInput = ({action}:Props) => {

  return (
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
  );
};

export default ActionInput;
