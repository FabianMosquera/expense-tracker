import React, { useState } from "react";
import {Scroll} from "./StyledHistory";

function History({history, setHistory}: any) {
    //const [history, setHistory] = useState([]);

    return(
        <>
        <h2>History</h2>
        <hr />
        <Scroll>
        {history.map(((item: any, index:any) => {
      if (index == 0) return
      return <li key={index}>{item.item}   {item.value}</li>
      }    
    ))}
        </Scroll>
        </>
    )
}

export default History;