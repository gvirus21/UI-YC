import { FunctionComponent, useState } from "react";
import styles from "./css/SearchBoxComponent.module.css";

export const SearchBoxComponent: FunctionComponent = () => {
  const [searchVar,setSearchVar] = useState("");
 return (
  <input 
 type="text" 
 className={styles.rectangleDiv} 
 placeholder="Search for protocols" 
 value={searchVar} 
 onChange={(event)=> {setSearchVar(event.target.value)}}
 /> 
 );
};
