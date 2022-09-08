import React, { FunctionComponent,useCallback } from "react";
import styles from "./css/ProtocolList.module.css";
import { useNavigate } from "react-router-dom";


export const ProtocolList: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/inputAddress");
  }, [navigate]);
  return (
    <div className={styles.dashboardDiv}>
      <img className={styles.icon24cursor} alt="" src="icon24cursor6.svg" />
      <div className={styles.frameDiv}>
        <div className={styles.frameDiv1}>
          <div className={styles.sortByTVL}>Sort by: TVL</div>
        </div>
        <img
          className={styles.chevronDownIcon}
          alt=""
          src="chevrondown18.svg"
        />
      </div>
      <div className={styles.protocolsDiv}>Protocols</div>
      <div className={styles.groupDiv}>
        <img className={styles.rectangleIcon} alt="" src="rectangle-4582.svg" />
        <div className={styles.groupDiv1}>
          <img className={styles.icon1} alt="" src="icon13.svg" />
          <div className={styles.textAreaDiv}>Search for protocol or asset</div>
        </div>
      </div>
      <div className={styles.frameDiv2}>
        <div className={styles.rectangleDiv} />
        <div className={styles.frameDiv3}>
          <div className={styles.aggregaredTVLDiv}>Aggregared TVL</div>
          <div className={styles.mDiv}>$100M</div>
        </div>
        <div className={styles.frameDiv4}>
          <div className={styles.aggregaredTVLDiv}>Website</div>
          <div className={styles.appuniswaporgDiv}>app.uniswap.org</div>
          <img
            className={styles.contentCopyIcon}
            alt=""
            src="contentcopy25.svg"
          />
        </div>
        <div className={styles.frameDiv5}>
          <div className={styles.aggregaredTVLDiv}>No of Deployed Vaults</div>
          <div className={styles.div}>5</div>
        </div>
        <img className={styles.frameIcon} alt="" src="frame-10000020689.svg" />
        <div className={styles.buttonDiv}>
          <div className={styles.groupDiv2}>
            <div className={styles.enterProtocolDiv}>Enter Protocol</div>
          </div>
        </div>
        <img
          className={styles.rectangleIcon1}
          alt=""
          src="rectangle-150885.svg"
        />
        <div className={styles.frameDiv6}>
          <div className={styles.aPY234Div}>~APY: 234% </div>
        </div>
        <div className={styles.frameDiv7}>
          <div className={styles.verifiedDiv}>Verified</div>
          <img
            className={styles.checkDecagramIcon}
            alt=""
            src="checkdecagram2.svg"
          />
        </div>
        <b className={styles.aaveB}>Aave</b>
        <div className={styles.ethereumNetworkDiv}>Ethereum Network</div>
      </div>
      <div className={styles.frameDiv8}>
        <div className={styles.rectangleDiv1} />
        <div className={styles.frameDiv3}>
          <div className={styles.aggregaredTVLDiv}>Aggregared TVL</div>
          <div className={styles.mDiv}>$100M</div>
        </div>
        <div className={styles.frameDiv4}>
          <div className={styles.aggregaredTVLDiv}>Website</div>
          <div className={styles.appuniswaporgDiv}>app.uniswap.org</div>
          <img className={styles.contentCopyIcon} alt="" />
        </div>
        <img className={styles.frameIcon} alt="" src="frame-100000206810.svg" />
        <div className={styles.buttonDiv1}>
          <div className={styles.groupDiv2}>
            <div className={styles.enterProtocolDiv}>Enter Protocol</div>
          </div>
        </div>
        <img
          className={styles.rectangleIcon1}
          alt=""
          src="rectangle-150886.svg"
        />
        <div className={styles.frameDiv6}>
          <div className={styles.aPY234Div}>~APY: 234% </div>
        </div>
        <div className={styles.frameDiv7}>
          <div className={styles.verifiedDiv}>Verified</div>
          <img
            className={styles.checkDecagramIcon}
            alt=""
            src="checkdecagram8.svg"
          />
        </div>
        <b className={styles.aaveB}>Aave</b>
        <div className={styles.ethereumNetworkDiv}>Ethereum Network</div>
      </div>
      <div className={styles.frameDiv13}>
        <div className={styles.rectangleDiv2} />
        <div className={styles.frameDiv5}>
          <div className={styles.aggregaredTVLDiv}>Yieldchain Vaults</div>
          <div className={styles.div}>5</div>
        </div>
        <div className={styles.frameDiv15}>
          <div className={styles.aggregaredTVLDiv}>Community Vaults</div>
          <div className={styles.div2}>15</div>
        </div>
        <div className={styles.frameDiv3}>
          <div className={styles.aggregaredTVLDiv}>Aggregared TVL</div>
          <div className={styles.mDiv}>$100M</div>
        </div>
        <div className={styles.frameDiv4}>
          <div className={styles.aggregaredTVLDiv}>Website</div>
          <div className={styles.appuniswaporgDiv}>app.uniswap.org</div>
          <img
            className={styles.contentCopyIcon}
            alt=""
            src="contentcopy21.svg"
          />
        </div>
        <img className={styles.frameIcon} alt="" src="frame-100000206811.svg" />
        <div className={styles.buttonDiv2}>
          <div className={styles.groupDiv2}>
            <div className={styles.enterProtocolDiv}>Enter Protocol</div>
          </div>
        </div>
        <img
          className={styles.rectangleIcon1}
          alt=""
          src="rectangle-150887.svg"
        />
        <div className={styles.frameDiv6}>
          <div className={styles.aPY234Div}>~APY: 234% </div>
        </div>
        <b className={styles.uniswapB}>Uniswap</b>
        <div className={styles.ethereumNetworkDiv}>Ethereum Network</div>
      </div>
      <div className={styles.frameDiv19}>
        <div className={styles.rectangleDiv1} />
        <div className={styles.frameDiv3}>
          <div className={styles.aggregaredTVLDiv}>Aggregared TVL</div>
          <div className={styles.mDiv}>$100M</div>
        </div>
        <div className={styles.frameDiv4}>
          <div className={styles.aggregaredTVLDiv}>Website</div>
          <div className={styles.appuniswaporgDiv}>app.uniswap.org</div>
          <img className={styles.contentCopyIcon} alt="" />
        </div>
        <img className={styles.frameIcon} alt="" src="frame-100000206812.svg" />
        <div className={styles.buttonDiv1}>
          <div className={styles.groupDiv2}>
            <div className={styles.enterProtocolDiv}>Enter Protocol</div>
          </div>
        </div>
        <img
          className={styles.rectangleIcon1}
          alt=""
          src="rectangle-150888.svg"
        />
        <div className={styles.frameDiv6}>
          <div className={styles.aPY234Div}>~APY: 234% </div>
        </div>
        <div className={styles.frameDiv7}>
          <div className={styles.verifiedDiv}>Verified</div>
          <img
            className={styles.checkDecagramIcon}
            alt=""
            src="checkdecagram9.svg"
          />
        </div>
        <b className={styles.aaveB}>Aave</b>
        <div className={styles.ethereumNetworkDiv}>Ethereum Network</div>
      </div>
      <div className={styles.frameDiv24}>
        <div className={styles.rectangleDiv2} />
        <div className={styles.frameDiv5}>
          <div className={styles.aggregaredTVLDiv}>Yieldchain Vaults</div>
          <div className={styles.div}>5</div>
        </div>
        <div className={styles.frameDiv15}>
          <div className={styles.aggregaredTVLDiv}>Community Vaults</div>
          <div className={styles.div2}>15</div>
        </div>
        <div className={styles.frameDiv3}>
          <div className={styles.aggregaredTVLDiv}>Aggregared TVL</div>
          <div className={styles.mDiv}>$100M</div>
        </div>
        <div className={styles.frameDiv4}>
          <div className={styles.aggregaredTVLDiv}>Website</div>
          <div className={styles.appuniswaporgDiv}>app.uniswap.org</div>
          <img
            className={styles.contentCopyIcon}
            alt=""
            src="contentcopy21.svg"
          />
        </div>
        <img className={styles.frameIcon} alt="" src="frame-100000206813.svg" />
        <div className={styles.buttonDiv2}>
          <div className={styles.groupDiv2}>
            <div className={styles.enterProtocolDiv}>Enter Protocol</div>
          </div>
        </div>
        <img
          className={styles.rectangleIcon1}
          alt=""
          src="rectangle-150889.svg"
        />
        <div className={styles.frameDiv6}>
          <div className={styles.aPY234Div}>~APY: 234% </div>
        </div>
        <div className={styles.frameDiv7}>
          <div className={styles.verifiedDiv}>Verified</div>
          <img
            className={styles.checkDecagramIcon}
            alt=""
            src="checkdecagram6.svg"
          />
        </div>
        <b className={styles.inchB}>1Inch</b>
        <div className={styles.ethereumNetworkDiv}>Ethereum Network</div>
      </div>
      <div className={styles.frameDiv31}>
        <div className={styles.rectangleDiv1} />
        <div className={styles.frameDiv3}>
          <div className={styles.aggregaredTVLDiv}>Aggregared TVL</div>
          <div className={styles.mDiv}>$100M</div>
        </div>
        <div className={styles.frameDiv4}>
          <div className={styles.aggregaredTVLDiv}>Website</div>
          <div className={styles.appuniswaporgDiv}>app.uniswap.org</div>
          <img className={styles.contentCopyIcon} alt="" />
        </div>
        <img className={styles.frameIcon} alt="" src="frame-100000206814.svg" />
        <div className={styles.buttonDiv1}>
          <div className={styles.groupDiv2}>
            <div className={styles.enterProtocolDiv}>Enter Protocol</div>
          </div>
        </div>
        <img
          className={styles.rectangleIcon1}
          alt=""
          src="rectangle-1508810.svg"
        />
        <div className={styles.frameDiv6}>
          <div className={styles.aPY234Div}>~APY: 234% </div>
        </div>
        <div className={styles.frameDiv7}>
          <div className={styles.verifiedDiv}>Verified</div>
          <img
            className={styles.checkDecagramIcon}
            alt=""
            src="checkdecagram9.svg"
          />
        </div>
        <b className={styles.aaveB}>Aave</b>
        <div className={styles.ethereumNetworkDiv}>Ethereum Network</div>
      </div>
      <div className={styles.frameDiv36}>
        <div className={styles.rectangleDiv2} />
        <div className={styles.frameDiv5}>
          <div className={styles.aggregaredTVLDiv}>Yieldchain Vaults</div>
          <div className={styles.div}>5</div>
        </div>
        <div className={styles.frameDiv15}>
          <div className={styles.aggregaredTVLDiv}>Community Vaults</div>
          <div className={styles.div2}>15</div>
        </div>
        <div className={styles.frameDiv3}>
          <div className={styles.aggregaredTVLDiv}>Aggregared TVL</div>
          <div className={styles.mDiv}>$100M</div>
        </div>
        <div className={styles.frameDiv4}>
          <div className={styles.aggregaredTVLDiv}>Website</div>
          <div className={styles.appuniswaporgDiv}>app.uniswap.org</div>
          <img
            className={styles.contentCopyIcon}
            alt=""
            src="contentcopy21.svg"
          />
        </div>
        <img className={styles.frameIcon} alt="" src="frame-100000206815.svg" />
        <div className={styles.buttonDiv2}>
          <div className={styles.groupDiv2}>
            <div className={styles.enterProtocolDiv}>Enter Protocol</div>
          </div>
        </div>
        <img
          className={styles.rectangleIcon1}
          alt=""
          src="rectangle-1508811.svg"
        />
        <div className={styles.frameDiv6}>
          <div className={styles.aPY234Div}>~APY: 234% </div>
        </div>
        <b className={styles.alphaFinanceB}>Alpha Finance</b>
        <div className={styles.ethereumNetworkDiv}>Ethereum Network</div>
      </div>
      <div className={styles.frameDiv42}>
        <div className={styles.rectangleDiv1} />
        <div className={styles.frameDiv3}>
          <div className={styles.aggregaredTVLDiv}>Aggregared TVL</div>
          <div className={styles.mDiv}>$100M</div>
        </div>
        <div className={styles.frameDiv4}>
          <div className={styles.aggregaredTVLDiv}>Website</div>
          <div className={styles.appuniswaporgDiv}>app.uniswap.org</div>
          <img className={styles.contentCopyIcon} alt="" />
        </div>
        <img className={styles.frameIcon} alt="" src="frame-100000206816.svg" />
        <div className={styles.buttonDiv1}>
          <div className={styles.groupDiv2}>
            <div className={styles.enterProtocolDiv}>Enter Protocol</div>
          </div>
        </div>
        <img
          className={styles.rectangleIcon1}
          alt=""
          src="rectangle-1508812.svg"
        />
        <div className={styles.frameDiv6}>
          <div className={styles.aPY234Div}>~APY: 234% </div>
        </div>
        <div className={styles.frameDiv7}>
          <div className={styles.verifiedDiv}>Verified</div>
          <img
            className={styles.checkDecagramIcon}
            alt=""
            src="checkdecagram9.svg"
          />
        </div>
        <b className={styles.aaveB}>Aave</b>
        <div className={styles.ethereumNetworkDiv}>Ethereum Network</div>
      </div>
      <div className={styles.groupDiv10}>
        <div className={styles.frameDiv47}>
          <div className={styles.rectangleDiv8} />
          <div className={styles.groupDiv11}>
            <div className={styles.addNewPoolIn2min}>
              Add New Pool in 2min 🎉
            </div>
            <div className={styles.isTheProtocolYouWantToAg}>
              Is the Protocol you want to aggregate not listed? You can
              Aggregate a protocol in 2 minutes (No code reqquired)
            </div>
          </div>
          <div className={styles.frameDiv48}>
            <div className={styles.frameDiv49}>
              <img className={styles.plusIcon} alt="" src="plus1.svg" />
               <button 
              className={styles.addNewProtocol}
        onClick={onButtonClick}
        data-animate-on-scroll>
        Add New Protocol
      </button>
      
            </div>
          </div>
          <img
            className={styles.frameIcon8}
            alt=""
            src="frame-10000020772.svg"
          />
        </div>
      </div>
    
    </div>
  );
};
