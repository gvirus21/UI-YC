import React, { FunctionComponent, useCallback, useEffect,useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./css/InputAddress.module.css";
import { getAbi } from "./fetchABI";


export const InputAddress: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/inputDuration");
  }, [navigate]);

  const onFrameButton1Click = useCallback(() => {
    navigate("/main-dashboard");
  }, [navigate]);

  const [searchVar,setSearchVar] = useState("");

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  useEffect(() => {  
    console.log(searchVar);
    getAbi(searchVar);
},[searchVar]);


  return (
    <div className={styles.dashboardDiv}>
      <img className={styles.ellipseIcon} alt="" src="ellipse-151.svg" />
      <img className={styles.ellipseIcon1} alt="" src="ellipse-16.svg" />
      <img className={styles.icon24cursor} alt="" src="icon24cursor7.svg" />
      <button
        className={styles.button}
        onClick={()=>{
          console.log(searchVar)
          onButtonClick()
        }}
        data-animate-on-scroll
      >
        <Button
          className={styles.groupButton}
          sx={{ width: 61 }}
          color="success"
        >
          Proceed
        </Button>
      </button>
      <img
        className={styles.yieldchainLogo2}
        alt=""
        src="yieldchain-logo-2@2x.png"
      />
      <div className={styles.letsGetStarted}>Lets get started 👋🏽</div>
      <div className={styles.toSuccessfullyAggregateAPr}>
        To successfully aggregate a protocol, you need to provide us with the
        protocols contract address select the activity e.g pool and we handle the
        rest
      </div>
      <input
        className={styles.groupInput}
        type="text"
        placeholder="Paste contract address"
        value={searchVar}  
        onChange={(event)=> {setSearchVar(event.target.value)}}
        // (<ScriptTag isHydrating={true} type="text/javascript" src="some_script.js" />);
        // fetchABI.js
        />
        {/* return */}
      <a className={styles.groupA} href="https://yieldchain.io/">
        <div className={styles.backDiv}>Back</div>
        <img className={styles.arrowRightIcon} alt="" src="arrowright.svg" />
      </a>
      <a href="https://yieldchain.io/" target = "_blank">
      <button
        className={styles.yieldchainLogo1}
        // onClick={onYieldchainLogo1Click}
      />
      </a>
      <div className={styles.groupDiv}>
        <img className={styles.ellipseIcon2} alt="" src="ellipse@2x.png" />
        <div className={styles.groupDiv1}>
          <div className={styles.metamaskDiv}>Metamask</div>
          <div className={styles.iD65FG646Div}>ID65.....FG646</div>
        </div>
        <img className={styles.chevronDownIcon} alt="" src="chevrondown4.svg" />
      </div>
      <button className={styles.frameButton}>
        <div className={styles.frameDiv}>
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
      </button>
      <button className={styles.frameButton1} onClick={onFrameButton1Click}>
        <div className={styles.frameDiv1}>
          <div className={styles.createVaultDiv}>Create Vault</div>
        </div>
      </button>
      <div className={styles.frameDiv2}>
        <div className={styles.frameDiv3}>
          <b className={styles.vaultB}>Vault</b>
        </div>
        <div className={styles.frameDiv4}>
          <div className={styles.groupDiv2}>
            <div className={styles.portfolioDiv}>Portfolio</div>
          </div>
        </div>
        <div className={styles.frameDiv4}>
          <div className={styles.myVaultDiv}>My Vault</div>
        </div>
        <div className={styles.frameDiv4}>
          <div className={styles.myVaultDiv}>Stake YC</div>
        </div>
      </div>
    </div>
  );

};
