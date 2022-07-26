import { FunctionComponent,useCallback } from "react";
import styles from "./css/Dashboard1.module.css";
import { useNavigate } from "react-router-dom";


export const CreateVault: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/");
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
      <img className={styles.icon24cursor} alt="" src="icon24cursor2.svg" />
      <form className={styles.groupForm} action="Action" method="get" id="0" onClick={onButtonClick}>
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
                <div className={styles.stakeDiv}>Stake</div>
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
      <div className={styles.cantFindPoolAggregateIn2}>
        Cant find pool, Aggregate in 2min
      </div>
      <img
        className={styles.yieldchainLogo1}
        alt=""
        src="yieldchain-logo-1@2x.png"
      />
      <div className={styles.groupDiv14}>
        <img className={styles.ellipseIcon2} alt="" src="ellipse@2x.png" />
        <div className={styles.groupDiv15}>
          <div className={styles.metamaskDiv}>Metamask</div>
          <div className={styles.iD65FG646Div}>ID65.....FG646</div>
        </div>
        <img
          className={styles.chevronDownIcon4}
          alt=""
          src="chevrondown4.svg"
        />
      </div>
      <div className={styles.frameDiv4}>
        <div className={styles.frameDiv5}>
          <img
            className={styles.simpleIconslitecoin}
            alt=""
            src="simpleiconslitecoin@2x.png"
          />
          <div className={styles.etherumDiv}>Etherum</div>
        </div>
        <img
          className={styles.chevronDownIcon5}
          alt=""
          src="chevrondown4.svg"
        />
      </div>
      <div className={styles.frameDiv6}>
        <div className={styles.frameDiv3}>
          <div className={styles.createVaultDiv}>Create Vault</div>
        </div>
      </div>
      <div className={styles.frameDiv8}>
        <div className={styles.frameDiv9}>
          <b className={styles.vaultB}>Vault</b>
        </div>
        <div className={styles.frameDiv10}>
          <div className={styles.groupDiv16}>
            <div className={styles.portfolioDiv}>Portfolio</div>
          </div>
        </div>
        <div className={styles.frameDiv10}>
          <div className={styles.etherumDiv}>My Vault</div>
        </div>
        <div className={styles.frameDiv10}>
          <div className={styles.etherumDiv}>Stake YC</div>
        </div>
      </div>
    </div>
  );
};
