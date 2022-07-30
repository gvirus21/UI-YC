import { FunctionComponent,useCallback } from "react";
import { SearchBoxComponent } from "./SearchBoxComponent";
import { TextArea } from "./TextArea";
import styles from "./css/MainDashboard.css";
import { useNavigate } from "react-router-dom";


export const MainDashboard: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/protocolList");
  }, [navigate]);
  return (
    <div className={styles.mainDashboardDiv}>
      <button className={styles.yieldchainLogo1} />
      <div className={styles.groupDiv}>
        <img className={styles.ellipseIcon} alt="" src="ellipse@2x.png" />
        <div className={styles.groupDiv1}>
          <div className={styles.metamaskDiv}>Metamask</div>
          <div className={styles.iD65FG646Div}>ID65.....FG646</div>
        </div>
        <img className={styles.chevronDownIcon} alt="" src="chevrondown4.svg" />
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.frameDiv1}>
          <img
            className={styles.simpleIconslitecoin}
            alt=""
            src="simpleiconslitecoin@2x.png"
          />
          <div className={styles.etherumDiv}>Etherum</div>
        </div>
        <img
          className={styles.chevronDownIcon1}
          alt=""
          src="chevrondown4.svg"
        />
      </div>
      <form
        className={styles.frameForm}
        action="https://yieldchain.io/"
        method="post"
        autoComplete="on"
      >
        <img className={styles.ellipseIcon1} alt="" src="ellipse-15.svg" />
        <img className={styles.icon24cursor} alt="" src="icon24cursor3.svg" />
        <div className={styles.groupDiv2}>
          <div className={styles.groupDiv3}>
            <div className={styles.strategyVaultsDiv}>Strategy Vaults</div>
            <div className={styles.searchForAVaultIDTokenO}>
              Search for a Vault ID, token or protocol, invest in the vault and
              receive massive APY’s with the click of a button
            </div>
          </div>
          <div className={styles.groupDiv4}>
            <div className={styles.groupDiv5}>
              <SearchBoxComponent />
              <div className={styles.iconSearch}>
                <img className={styles.icon1} alt="" src="icon1.svg" />
              </div>
            </div>
          </div>
        </div>
        {/* <img className={styles.ellipseIcon2} alt="" /> */}
        <div className={styles.frameDiv2}>
          <div className={styles.frameDiv3}>
            <div className={styles.groupIcon}>
              <img
                className={styles.ellipseIcon3}
                alt=""
                src="ellipse-27.svg"
              />
              <img
                className={styles.yieldchainLogo11}
                alt=""
                src="yieldchain-logo-13@2x.png"
              />
            </div>
            <b className={styles.allNetworksB}>All Networks</b>
          </div>
          <div className={styles.frameDiv3}>
            <img className={styles.groupIcon} alt="" src="group-4912.svg" />
            <div className={styles.binanceSCDiv}>Binance SC</div>
          </div>
          <div className={styles.frameDiv3}>
            <img className={styles.groupIcon} alt="" src="group-4913.svg" />
            <div className={styles.binanceSCDiv}>Avalanche</div>
          </div>
          <div className={styles.frameDiv3}>
            <img className={styles.groupIcon} alt="" src="group-55650.svg" />
            <div className={styles.binanceSCDiv}>Ethereum</div>
          </div>
          <div className={styles.frameDiv3}>
            <img className={styles.groupIcon} alt="" src="group-556501.svg" />
            <div className={styles.binanceSCDiv}>Polygon</div>
          </div>
          <div className={styles.frameDiv8}>
            <div className={styles.binanceSCDiv}>More</div>
            <img className={styles.plusIcon} alt="" src="chevrondown.svg" />
          </div>
        </div>
        <div className={styles.groupDiv8}>
          <div className={styles.frameDiv9}>
            <div className={styles.frameDiv10}>
              <div className={styles.filterDiv}>Filter</div>
            </div>
            <div className={styles.switchAOnaEnabled}>
              <img
                className={styles.ellipseIcon4}
                alt=""
                src="ellipse-13.svg"
              />
              <b className={styles.b}>2</b>
            </div>
          </div>
          <div className={styles.frameDiv12}>
            <b className={styles.dashboard}>My Vaults only</b>
            <div className={styles.switchAOnaEnabled}>
              <div className={styles.colorLTrack} />
              <img
                className={styles.colorLThumb}
                alt=""
                src="-color-l-thumb.svg"
              />
            </div>
          </div>
        </div>
      </form>
      <div className={styles.frameDiv13}>
        <div className={styles.frameDiv10}>
          <div className={styles.createVaultDiv}>
          <button
         className={styles.createVaultDiv}
        onClick={onButtonClick}
        data-animate-on-scroll
      >Create Vault
      </button>
      </div>
        </div>
      </div>
      <div className={styles.frameDiv15}>
        <div className={styles.rectangleDiv} />
        <div className={styles.frameDiv16}>
          <div className={styles.frameDiv1}>
            <img className={styles.plusIcon} alt="" src="plus.svg" />
            <div className={styles.createVaultDiv}>Create Vault</div>
          </div>
        </div>
        <div className={styles.frameDiv18}>
          <div className={styles.totalVaultsDiv}>Total Vaults</div>
          <div className={styles.div}>234</div>
        </div>
        <div className={styles.frameDiv19}>
          <div className={styles.totalVaultsDiv}>My Vaults</div>
          <div className={styles.div}>14</div>
        </div>
        <div className={styles.frameDiv20}>
          <div className={styles.frameDiv21}>
            <div className={styles.totalVaultsDiv}>Stacked YC</div>
            <div className={styles.stakeFor300APR}>Stake for 300% APR</div>
          </div>
          <div className={styles.frameDiv22}>
            <div className={styles.div2}>50,000,000</div>
          </div>
        </div>
        <div className={styles.frameDiv23}>
          <div className={styles.totalVaultsDiv}>My Total Deposits</div>
          <div className={styles.div}>$ 50,000</div>
        </div>
        <div className={styles.frameDiv24}>
          <div className={styles.totalVaultsDiv}>Claimable Rewards</div>
          <div className={styles.div}>$ 50,000</div>
        </div>
      </div>
      <div className={styles.verifiedVaultsDiv}>Verified Vaults</div>
      <div className={styles.trendingVaultsDiv}>Trending Vaults</div>
      <img className={styles.groupIcon4} alt="" src="group-43927.svg" />
      <img className={styles.groupIcon5} alt="" src="group-1000002028.svg" />
      <form className={styles.frameForm1}>
        <div className={styles.rectangleDiv1} />
        <div className={styles.frameDiv25}>
          <div className={styles.totalValueLocked}>Total Value Locked</div>
          <div className={styles.mDiv}>$100M</div>
        </div>
        <div className={styles.frameDiv26}>
          <div className={styles.totalValueLocked}>Reward Token</div>
          <div className={styles.cakeDiv}>Cake</div>
          <img className={styles.ellipseIcon5} alt="" src="ellipse-8@2x.png" />
        </div>
        <img className={styles.frameIcon} alt="" src="frame-1000002068.svg" />
        <div className={styles.buttonDiv}>
          <div className={styles.groupDiv9}>
            <div className={styles.enterVaultDiv}>Enter Vault</div>
          </div>
        </div>
        <img
          className={styles.rectangleIcon}
          alt=""
          src="rectangle-15088.svg"
        />
        <div className={styles.frameDiv27}>
          <div className={styles.aPY234Div}>APY: 234% </div>
          <div className={styles.aPR45}>APR : 45%</div>
        </div>
        <div className={styles.frameDiv28}>
          <div className={styles.verifiedDiv}>Verified</div>
          <img
            className={styles.checkDecagramIcon}
            alt=""
            src="checkdecagram.svg"
          />
        </div>
        <div className={styles.uSDTBTCDiv}>
          <span className={styles.uSDTBTCSpan}>USDT/BTC</span>
          <b className={styles.b1}> </b>
        </div>
        <div className={styles.solanaNetworkDiv}>Solana Network</div>
        <div className={styles.frameDiv29}>
          <div className={styles.totalValueLocked}>Website</div>
          <div className={styles.appuniswaporgDiv}>app.uniswap.org</div>
          <img
            className={styles.contentCopyIcon}
            alt=""
            src="contentcopy.svg"
          />
        </div>
        <div className={styles.frameDiv30}>
          <div className={styles.totalValueLocked}>Strategy</div>
          <div className={styles.autoCompoundingDiv}>Auto-Compounding</div>
        </div>
      </form>
      <div className={styles.groupDiv10}>
        <div className={styles.frameDiv31}>
          <div className={styles.rectangleDiv2} />
          <div className={styles.frameDiv32}>
            <div className={styles.metamaskDiv}>Strategy</div>
            <div className={styles.autoCompoundingDiv1}>Auto-Compounding</div>
          </div>
          <div className={styles.frameDiv33}>
            <div className={styles.metamaskDiv}>Total Value Locked</div>
            <div className={styles.mDiv1}>$100M</div>
          </div>
          <div className={styles.frameDiv34}>
            <div className={styles.metamaskDiv}>Reward Token</div>
            <div className={styles.cakeDiv1}>Cake</div>
            <img
              className={styles.ellipseIcon5}
              alt=""
              src="ellipse-8@2x.png"
            />
          </div>
          <div className={styles.frameDiv35}>
            <div className={styles.metamaskDiv}>Website</div>
            <div className={styles.appuniswaporgDiv1}>app.uniswap.org</div>
            <img
              className={styles.contentCopyIcon}
              alt=""
              src="contentcopy.svg"
            />
          </div>
          <div className={styles.buttonDiv1}>
            <div className={styles.groupDiv9}>
              <div className={styles.enterDiv}>Enter Vault</div>
            </div>
          </div>
          <div className={styles.groupDiv12}>
            <div className={styles.frameDiv36}>
              <div className={styles.verifiedDiv1}>Verified</div>
              <img
                className={styles.checkDecagramIcon}
                alt=""
                src="checkdecagram.svg"
              />
            </div>
            <div className={styles.groupDiv13}>
              <div className={styles.groupDiv14}>
                <div className={styles.uNIDiv}>UNI</div>
                <div className={styles.ethereumNetworkDiv}>
                  Ethereum Network
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className={styles.frameIcon1} alt="" src="frame-10000020681.svg" />
        <div className={styles.aPY234Div1}>APY: 234% </div>
        <div className={styles.aPR234Div}>APR: 234% </div>
      </div>
      <div className={styles.groupDiv15}>
        <div className={styles.frameDiv31}>
          <div className={styles.rectangleDiv2} />
          <div className={styles.frameDiv32}>
            <div className={styles.metamaskDiv}>Strategy</div>
            <div className={styles.autoCompoundingDiv1}>Auto-Compounding</div>
          </div>
          <div className={styles.frameDiv33}>
            <div className={styles.metamaskDiv}>Total Value Locked</div>
            <div className={styles.mDiv1}>$100M</div>
          </div>
          <div className={styles.frameDiv34}>
            <div className={styles.metamaskDiv}>Reward Token</div>
            <div className={styles.cakeDiv1}>Cake</div>
            <img
              className={styles.ellipseIcon5}
              alt=""
              src="ellipse-8@2x.png"
            />
          </div>
          <div className={styles.buttonDiv1}>
            <div className={styles.groupDiv9}>
              <div className={styles.enterDiv}>Enter Vault</div>
            </div>
          </div>
          <div className={styles.groupDiv17}>
            <div className={styles.groupDiv18}>
              <div className={styles.groupDiv18}>
                <div className={styles.bTCDiv}>
                  <span className={styles.bTCSpan}>BTC</span>
                  <b> </b>
                </div>
                <div className={styles.ethereumNetworkDiv}>Solana Network</div>
              </div>
            </div>
          </div>
          <div className={styles.frameDiv35}>
            <div className={styles.metamaskDiv}>Website</div>
            <div className={styles.appuniswaporgDiv1}>app.uniswap.org</div>
            <img
              className={styles.contentCopyIcon}
              alt=""
              src="contentcopy.svg"
            />
          </div>
        </div>
        <img className={styles.frameIcon1} alt="" src="frame-10000020682.svg" />
        <div className={styles.aPY234Div1}>APY: 234% </div>
        <div className={styles.aPR234Div}>APR: 234% </div>
      </div>
      <div className={styles.groupDiv20}>
        <div className={styles.frameDiv31}>
          <div className={styles.rectangleDiv2} />
          <div className={styles.frameDiv32}>
            <div className={styles.metamaskDiv}>Strategy</div>
            <div className={styles.autoCompoundingDiv1}>Auto-Compounding</div>
          </div>
          <div className={styles.frameDiv33}>
            <div className={styles.metamaskDiv}>Total Value Locked</div>
            <div className={styles.mDiv1}>$100M</div>
          </div>
          <div className={styles.frameDiv34}>
            <div className={styles.metamaskDiv}>Reward Token</div>
            <div className={styles.cakeDiv1}>Cake</div>
            <img
              className={styles.ellipseIcon5}
              alt=""
              src="ellipse-8@2x.png"
            />
          </div>
          <div className={styles.buttonDiv1}>
            <div className={styles.groupDiv9}>
              <div className={styles.enterDiv}>Enter Vault</div>
            </div>
          </div>
          <div className={styles.groupDiv17}>
            <div className={styles.groupDiv18}>
              <div className={styles.groupDiv18}>
                <div className={styles.uNIDiv}>ADA</div>
                <div className={styles.ethereumNetworkDiv}>Solana Network</div>
              </div>
            </div>
          </div>
          <div className={styles.frameDiv35}>
            <div className={styles.metamaskDiv}>Website</div>
            <div className={styles.appuniswaporgDiv1}>app.uniswap.org</div>
            <img
              className={styles.contentCopyIcon}
              alt=""
              src="contentcopy3.svg"
            />
          </div>
        </div>
        <img className={styles.frameIcon1} alt="" src="frame-10000020683.svg" />
        <div className={styles.aPY234Div1}>APY: 234% </div>
        <div className={styles.aPR234Div}>APR: 234% </div>
      </div>
      <div className={styles.groupDiv25}>
        <div className={styles.frameDiv31}>
          <div className={styles.rectangleDiv2} />
          <div className={styles.frameDiv32}>
            <div className={styles.metamaskDiv}>Strategy</div>
            <div className={styles.customDiv}>Custom</div>
          </div>
          <div className={styles.frameDiv33}>
            <div className={styles.metamaskDiv}>Total Value Locked</div>
            <div className={styles.mDiv1}>$100M</div>
          </div>
          <div className={styles.frameDiv34}>
            <div className={styles.metamaskDiv}>Reward Token</div>
            <div className={styles.cakeDiv1}>Cake</div>
            <img
              className={styles.ellipseIcon5}
              alt=""
              src="ellipse-8@2x.png"
            />
          </div>
          <div className={styles.buttonDiv1}>
            <div className={styles.groupDiv9}>
              <div className={styles.enterDiv}>Enter Vault</div>
            </div>
          </div>
          <div className={styles.groupDiv12}>
            <div className={styles.frameDiv36}>
              <div className={styles.verifiedDiv1}>Verified</div>
              <img
                className={styles.checkDecagramIcon}
                alt=""
                src="checkdecagram2.svg"
              />
            </div>
            <div className={styles.groupDiv13}>
              <div className={styles.groupDiv14}>
                <div className={styles.uNIDiv}>ETH</div>
                <div className={styles.ethereumNetworkDiv}>
                  Ethereum Network
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameDiv35}>
            <div className={styles.metamaskDiv}>Website</div>
            <div className={styles.appuniswaporgDiv1}>app.uniswap.org</div>
            <img
              className={styles.contentCopyIcon}
              alt=""
              src="contentcopy3.svg"
            />
          </div>
        </div>
        <img className={styles.frameIcon1} alt="" src="frame-10000020684.svg" />
        <div className={styles.aPY234Div1}>APY: 234% </div>
        <div className={styles.aPR234Div}>APR: 234% </div>
      </div>
      <div className={styles.frameDiv53}>
        <div className={styles.rectangleDiv1} />
        <div className={styles.frameDiv30}>
          <div className={styles.metamaskDiv}>Strategy</div>
          <div className={styles.autoCompoundingDiv1}>Auto-Compounding</div>
        </div>
        <div className={styles.frameDiv25}>
          <div className={styles.metamaskDiv}>Total Value Locked</div>
          <div className={styles.mDiv1}>$100M</div>
        </div>
        <div className={styles.frameDiv26}>
          <div className={styles.metamaskDiv}>Reward Token</div>
          <div className={styles.cakeDiv1}>Cake</div>
          <img className={styles.ellipseIcon5} alt="" src="ellipse-8@2x.png" />
        </div>
        <img className={styles.frameIcon} alt="" src="frame-10000020685.svg" />
        <div className={styles.buttonDiv5}>
          <div className={styles.groupDiv9}>
            <div className={styles.enterDiv}>Enter Vault</div>
          </div>
        </div>
        <img
          className={styles.rectangleIcon}
          alt=""
          src="rectangle-150881.svg"
        />
        <div className={styles.frameDiv57}>
          <div className={styles.div2}>APY: 234% </div>
          <div className={styles.aPR451}>APR : 45%</div>
        </div>
        <div className={styles.frameDiv58}>
          <div className={styles.verifiedDiv1}>Verified</div>
          <img
            className={styles.checkDecagramIcon}
            alt=""
            src="checkdecagram.svg"
          />
        </div>
        <div className={styles.dOTDiv}>
          <span className={styles.bTCSpan}>DOT</span>
          <b> </b>
        </div>
        <div className={styles.binanceSmartChain}>Binance Smart Chain</div>
        <div className={styles.frameDiv29}>
          <div className={styles.metamaskDiv}>Website</div>
          <div className={styles.appuniswaporgDiv1}>app.uniswap.org</div>
          <img
            className={styles.contentCopyIcon}
            alt=""
            src="contentcopy.svg"
          />
        </div>
      </div>
      <div className={styles.frameDiv60}>
        <div className={styles.rectangleDiv1} />
        <div className={styles.frameDiv30}>
          <div className={styles.metamaskDiv}>Strategy</div>
          <div className={styles.customDiv}>Custom</div>
        </div>
        <div className={styles.frameDiv25}>
          <div className={styles.metamaskDiv}>Total Value Locked</div>
          <div className={styles.mDiv1}>$100M</div>
        </div>
        <div className={styles.frameDiv26}>
          <div className={styles.metamaskDiv}>Reward Token</div>
          <div className={styles.cakeDiv1}>Cake</div>
          <img className={styles.ellipseIcon5} alt="" src="ellipse-8@2x.png" />
        </div>
        <img className={styles.frameIcon} alt="" src="frame-10000020686.svg" />
        <div className={styles.buttonDiv5}>
          <div className={styles.groupDiv9}>
            <div className={styles.enterDiv}>Enter Vault</div>
          </div>
        </div>
        <img
          className={styles.rectangleIcon}
          alt=""
          src="rectangle-150882.svg"
        />
        <div className={styles.frameDiv57}>
          <div className={styles.div2}>APY: 234% </div>
          <div className={styles.aPR451}>APR : 45%</div>
        </div>
        <div className={styles.frameDiv58}>
          <div className={styles.verifiedDiv1}>Verified</div>
          <img
            className={styles.checkDecagramIcon}
            alt=""
            src="checkdecagram2.svg"
          />
        </div>
        <div className={styles.sHIBADiv}>
          <span className={styles.bTCSpan}>SHIBA</span>
          <b> </b>
        </div>
        <div className={styles.ethereumNetworkDiv2}>Ethereum Network</div>
        <div className={styles.frameDiv29}>
          <div className={styles.metamaskDiv}>Website</div>
          <div className={styles.appuniswaporgDiv1}>app.uniswap.org</div>
          <img
            className={styles.contentCopyIcon}
            alt=""
            src="contentcopy3.svg"
          />
        </div>
      </div>
      <div className={styles.frameDiv67}>
        <div className={styles.rectangleDiv1} />
        <div className={styles.frameDiv30}>
          <div className={styles.metamaskDiv}>Strategy</div>
          <div className={styles.autoCompoundingDiv1}>Auto-Compounding</div>
        </div>
        <div className={styles.frameDiv25}>
          <div className={styles.metamaskDiv}>Total Value Locked</div>
          <div className={styles.mDiv1}>$100M</div>
        </div>
        <div className={styles.frameDiv26}>
          <div className={styles.metamaskDiv}>Reward Token</div>
          <div className={styles.cakeDiv1}>Cake</div>
          <img className={styles.ellipseIcon5} alt="" src="ellipse-8@2x.png" />
        </div>
        <img className={styles.frameIcon} alt="" src="frame-10000020687.svg" />
        <div className={styles.buttonDiv5}>
          <div className={styles.groupDiv9}>
            <div className={styles.enterDiv}>Enter Vault</div>
          </div>
        </div>
        <img
          className={styles.rectangleIcon}
          alt=""
          src="rectangle-150883.svg"
        />
        <div className={styles.frameDiv57}>
          <div className={styles.div2}>APY: 234% </div>
          <div className={styles.aPR451}>APR : 45%</div>
        </div>
        <div className={styles.frameDiv58}>
          <div className={styles.verifiedDiv1}>Verified</div>
          <img
            className={styles.checkDecagramIcon}
            alt=""
            src="checkdecagram2.svg"
          />
        </div>
        <div className={styles.uSDTDiv}>USDT</div>
        <div className={styles.solanaNetworkDiv3}>Solana Network</div>
        <div className={styles.frameDiv29}>
          <div className={styles.metamaskDiv}>Website</div>
          <div className={styles.appuniswaporgDiv1}>app.uniswap.org</div>
          <img
            className={styles.contentCopyIcon}
            alt=""
            src="contentcopy3.svg"
          />
        </div>
      </div>
      <div className={styles.groupDiv33}>
        <b className={styles.mB}>$600M</b>
        <b className={styles.mB1}>$600M</b>
        <b className={styles.mB2}>$600M</b>
        <b className={styles.mB3}>$600M</b>
        <b className={styles.mB4}>$600M</b>
        <b className={styles.mB5}>$600M</b>
        <b className={styles.mB6}>$600M</b>
        <b className={styles.mB7}>$600M</b>
        <div className={styles.tVLDiv}>TVL</div>
      </div>
      <div className={styles.groupDiv34}>
        <div className={styles.actionDiv}>Action</div>
        <div className={styles.buttonDiv8}>
          <div className={styles.groupDiv35}>
            <div className={styles.enterDiv}>Enter</div>
          </div>
        </div>
        <div className={styles.buttonDiv9}>
          <div className={styles.groupDiv35}>
            <div className={styles.enterDiv}>Enter</div>
          </div>
        </div>
        <div className={styles.buttonDiv10}>
          <div className={styles.groupDiv35}>
            <div className={styles.enterDiv}>Enter</div>
          </div>
        </div>
        <div className={styles.buttonDiv11}>
          <div className={styles.groupDiv35}>
            <div className={styles.enterDiv}>Enter</div>
          </div>
        </div>
        <div className={styles.buttonDiv12}>
          <div className={styles.groupDiv35}>
            <div className={styles.enterDiv}>Enter</div>
          </div>
        </div>
        <div className={styles.buttonDiv13}>
          <div className={styles.groupDiv35}>
            <div className={styles.enterDiv}>Enter</div>
          </div>
        </div>
        <div className={styles.buttonDiv14}>
          <div className={styles.groupDiv35}>
            <div className={styles.enterDiv}>Enter</div>
          </div>
        </div>
        <div className={styles.buttonDiv15}>
          <div className={styles.groupDiv35}>
            <div className={styles.enterDiv}>Enter</div>
          </div>
        </div>
      </div>
      <div className={styles.groupDiv43}>
        <div className={styles.groupDiv44}>
          <div className={styles.frameDiv74}>
            <b className={styles.totalVaultsDiv}>0 ETH</b>
          </div>
        </div>
        <div className={styles.groupDiv45}>
          <div className={styles.frameDiv74}>
            <b className={styles.totalVaultsDiv}>0 BNB/BTC</b>
          </div>
        </div>
        <div className={styles.groupDiv46}>
          <div className={styles.frameDiv74}>
            <b className={styles.totalVaultsDiv}>0 SHIB</b>
          </div>
        </div>
        <div className={styles.groupDiv47}>
          <div className={styles.frameDiv74}>
            <b className={styles.totalVaultsDiv}>0 ADA</b>
          </div>
        </div>
        <div className={styles.groupDiv48}>
          <div className={styles.frameDiv74}>
            <b className={styles.totalVaultsDiv}>0 USDT</b>
          </div>
        </div>
        <div className={styles.groupDiv49}>
          <div className={styles.frameDiv74}>
            <b className={styles.totalVaultsDiv}>0 USDT</b>
          </div>
        </div>
        <div className={styles.groupDiv50}>
          <div className={styles.frameDiv74}>
            <b className={styles.totalVaultsDiv}>100,000,000 DOGE</b>
          </div>
        </div>
        <div className={styles.groupDiv51}>
          <div className={styles.frameDiv74}>
            <b className={styles.totalVaultsDiv}>0 ETH</b>
          </div>
        </div>
        <div className={styles.frameDiv82}>
          <div className={styles.myDepositsDiv}>My Deposits</div>
        </div>
      </div>
      <div className={styles.groupDiv52}>
        <div className={styles.groupDiv53}>
          <div className={styles.frameDiv74}>
            <div className={styles.totalVaultsDiv}>
              <b>7.8% </b>
              <span className={styles.span}>7.8%</span>
            </div>
          </div>
        </div>
        <div className={styles.groupDiv54}>
          <div className={styles.frameDiv74}>
            <div className={styles.totalVaultsDiv}>
              <b>5.78% </b>
              <span className={styles.span}>5.78%</span>
            </div>
          </div>
        </div>
        <div className={styles.groupDiv55}>
          <div className={styles.frameDiv74}>
            <div className={styles.totalVaultsDiv}>
              <b>25.78% </b>
              <span className={styles.span}>25.78%</span>
            </div>
          </div>
        </div>
        <div className={styles.groupDiv56}>
          <div className={styles.frameDiv74}>
            <div className={styles.totalVaultsDiv}>
              <b>25.78% </b>
              <span className={styles.span}>25.78%</span>
            </div>
          </div>
        </div>
        <div className={styles.groupDiv57}>
          <div className={styles.frameDiv74}>
            <div className={styles.totalVaultsDiv}>
              <b>5.91% </b>
              <span className={styles.span}>5.91%</span>
            </div>
          </div>
        </div>
        <div className={styles.groupDiv58}>
          <div className={styles.frameDiv74}>
            <div className={styles.totalVaultsDiv}>
              <b>7.8% </b>
              <span className={styles.span}>7.8%</span>
            </div>
          </div>
        </div>
        <div className={styles.groupDiv59}>
          <div className={styles.frameDiv74}>
            <div className={styles.totalVaultsDiv}>
              <b>7.8% </b>
              <span className={styles.span}>7.8%</span>
            </div>
          </div>
        </div>
        <div className={styles.groupDiv60}>
          <div className={styles.frameDiv74}>
            <div className={styles.totalVaultsDiv}>
              <b>4.53% </b>
              <span className={styles.span}>4.53%</span>
            </div>
          </div>
        </div>
        <div className={styles.frameDiv82}>
          <div className={styles.myDepositsDiv}>APY</div>
        </div>
      </div>
      <div className={styles.groupDiv61}>
        <div className={styles.groupDiv62}>
          <div className={styles.frameDiv92}>
            <b className={styles.totalVaultsDiv}>CAKE</b>
          </div>
          <div className={styles.frameDiv93}>
            <b className={styles.totalVaultsDiv}>100,000,000 CAKE</b>
          </div>
          <div className={styles.frameDiv94}>
            <b className={styles.totalVaultsDiv}>CAKE</b>
          </div>
          <div className={styles.frameDiv95}>
            <b className={styles.totalVaultsDiv}>100,000,000 CAKE</b>
          </div>
          <div className={styles.frameDiv96}>
            <b className={styles.totalVaultsDiv}>CAKE</b>
          </div>
          <div className={styles.frameDiv97}>
            <b className={styles.totalVaultsDiv}>CAKE</b>
          </div>
          <div className={styles.frameDiv98}>
            <b className={styles.totalVaultsDiv}>CAKE</b>
          </div>
          <div className={styles.frameDiv99}>
            <b className={styles.totalVaultsDiv}>CAKE</b>
          </div>
        </div>
        <div className={styles.frameDiv82}>
          <div className={styles.myDepositsDiv}>My Earnings</div>
        </div>
      </div>
      <div className={styles.groupDiv63}>
        <div className={styles.groupDiv64}>
          <div className={styles.frameDiv101}>
            <img className={styles.groupIcon6} alt="" src="group-6.svg" />
            <b className={styles.totalVaultsDiv}>Solana</b>
          </div>
          <div className={styles.frameDiv102}>
            <img className={styles.groupIcon6} alt="" src="group-1.svg" />
            <b className={styles.totalVaultsDiv}>Ethereum</b>
          </div>
          <div className={styles.frameDiv103}>
            <img className={styles.groupIcon6} alt="" src="group-4.svg" />
            <b className={styles.totalVaultsDiv}>Binance SC</b>
          </div>
          <div className={styles.frameDiv104}>
            <img className={styles.groupIcon6} alt="" src="group-7.svg" />
            <b className={styles.totalVaultsDiv}>Solana</b>
          </div>
          <div className={styles.frameDiv105}>
            <img className={styles.groupIcon6} alt="" src="group-61.svg" />
            <b className={styles.totalVaultsDiv}>Ethereum</b>
          </div>
          <div className={styles.frameDiv106}>
            <img className={styles.groupIcon6} alt="" src="group-71.svg" />
            <b className={styles.totalVaultsDiv}>Ethereum</b>
          </div>
          <div className={styles.frameDiv107}>
            <img className={styles.groupIcon6} alt="" src="group-11.svg" />
            <b className={styles.totalVaultsDiv}>Ethereum</b>
          </div>
          <div className={styles.frameDiv108}>
            <img className={styles.groupIcon6} alt="" src="group-72.svg" />
            <b className={styles.totalVaultsDiv}>Solana</b>
          </div>
        </div>
        <div className={styles.frameDiv82}>
          <div className={styles.myDepositsDiv}>Network</div>
        </div>
      </div>
      <div className={styles.groupDiv65}>
        <div className={styles.groupDiv66}>
          <div className={styles.frameDiv101}>
            <div className={styles.appuniswaporgDiv8}>app.uniswap.org</div>
            <img
              className={styles.chevronDownIcon1}
              alt=""
              src="contentcopy3.svg"
            />
          </div>
          <div className={styles.frameDiv111}>
            <div className={styles.appuniswaporgDiv8}>app.uniswap.org</div>
            <img
              className={styles.chevronDownIcon1}
              alt=""
              src="contentcopy3.svg"
            />
          </div>
          <div className={styles.frameDiv112}>
            <div className={styles.appuniswaporgDiv8}>app.uniswap.org</div>
            <img
              className={styles.chevronDownIcon1}
              alt=""
              src="contentcopy3.svg"
            />
          </div>
          <div className={styles.frameDiv113}>
            <div className={styles.appuniswaporgDiv8}>app.uniswap.org</div>
            <img
              className={styles.chevronDownIcon1}
              alt=""
              src="contentcopy3.svg"
            />
          </div>
          <div className={styles.frameDiv114}>
            <div className={styles.appuniswaporgDiv8}>app.uniswap.org</div>
            <img
              className={styles.chevronDownIcon1}
              alt=""
              src="contentcopy3.svg"
            />
          </div>
          <div className={styles.frameDiv115}>
            <div className={styles.appuniswaporgDiv8}>app.uniswap.org</div>
            <img
              className={styles.chevronDownIcon1}
              alt=""
              src="contentcopy13.svg"
            />
          </div>
          <div className={styles.frameDiv116}>
            <div className={styles.appuniswaporgDiv8}>app.uniswap.org</div>
            <img
              className={styles.chevronDownIcon1}
              alt=""
              src="contentcopy13.svg"
            />
          </div>
          <div className={styles.frameDiv117}>
            <div className={styles.appuniswaporgDiv8}>app.uniswap.org</div>
            <img
              className={styles.chevronDownIcon1}
              alt=""
              src="contentcopy13.svg"
            />
          </div>
        </div>
        <div className={styles.frameDiv118}>
          <div className={styles.myDepositsDiv}>Website</div>
        </div>
      </div>
      <div className={styles.groupDiv67}>
        <div className={styles.groupDiv68}>
          <div className={styles.frameDiv101}>
            <img className={styles.groupIcon6} alt="" src="group-62.svg" />
            <b className={styles.totalVaultsDiv}>ETH</b>
          </div>
          <div className={styles.frameDiv102}>
            <img className={styles.groupIcon6} alt="" src="group-12.svg" />
            <b className={styles.totalVaultsDiv}>BNB</b>
          </div>
          <div className={styles.frameDiv103}>
            <img className={styles.groupIcon6} alt="" src="group-41.svg" />
            <b className={styles.totalVaultsDiv}>DOT</b>
          </div>
          <div className={styles.frameDiv104}>
            <img className={styles.groupIcon6} alt="" src="group-73.svg" />
            <b className={styles.totalVaultsDiv}>DOGE</b>
          </div>
          <div className={styles.frameDiv105}>
            <img className={styles.groupIcon6} alt="" src="group-63.svg" />
            <b className={styles.totalVaultsDiv}>SHIB</b>
          </div>
          <div className={styles.frameDiv106}>
            <img className={styles.groupIcon6} alt="" src="group-74.svg" />
            <b className={styles.totalVaultsDiv}>ROSE</b>
          </div>
          <div className={styles.frameDiv107}>
            <img className={styles.groupIcon6} alt="" src="group-13.svg" />
            <b className={styles.totalVaultsDiv}>USDT</b>
          </div>
          <div className={styles.frameDiv108}>
            <img className={styles.groupIcon6} alt="" src="group-75.svg" />
            <b className={styles.totalVaultsDiv}>ETH</b>
          </div>
        </div>
        <div className={styles.frameDiv82}>
          <div className={styles.myDepositsDiv}>Deposit Tokens</div>
        </div>
      </div>
      <div className={styles.frameDiv128}>
        <div className={styles.frameDiv129}>
          <b className={styles.vaultB}>Vault</b>
        </div>
        <div className={styles.frameDiv130}>
          <div className={styles.groupDiv69}>
            <div className={styles.portfolioDiv}>Portfolio</div>
          </div>
        </div>
        <div className={styles.frameDiv130}>
          <div className={styles.etherumDiv}>My Vault</div>
        </div>
        <div className={styles.frameDiv130}>
          <div className={styles.etherumDiv}>Stake YC</div>
        </div>
      </div>
      <div className={styles.allVaultsDiv}>All Vaults</div>
      <div className={styles.frameDiv133}>
        <div className={styles.network1Div}>Network 1</div>
        <div className={styles.network1Div}>Network 2</div>
        <div className={styles.network1Div}>Network 3</div>
        <div className={styles.network1Div}>Network 4</div>
        <div className={styles.network1Div}>Network 5</div>
        <div className={styles.network1Div}>Network 6</div>
      </div>
    </div>
  );
};
