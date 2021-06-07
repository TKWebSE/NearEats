import React, { useRef,useState,useEffect } from "react";

export const Hoge= () =>{
  const [count,setCount] = useState(0);

  const handleHoge= () =>  {
      setCount(count+1)
  }

  return(
    <div>
        <div>{count}回押された</div>
        <button onClick={() => handleHoge()}>HOGEButton</button>
    </div>
  )
}