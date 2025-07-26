
import  { useState } from "react";
export default function Counter(){
    const[value,setValue]=useState("");
    const[count,setCount]=useState(0);
    function onTextChange(event){
        let v=event.target.value;
        setValue(v)
        console.log('${V}$ is equal to ${v*31}baht');
       /* console.error("error");
        setValue(event.target.value)
        console.log("$ is equal to,")*/
    }
    return(<>
    <input onChange={(event)=>onTextChange(event)}></input><br/>
    <p>{value}$ is equal to {value*31}baht</p>
    <p>You typed{value.length}chars</p>

     <button onClick={()=>setCount(count-1)}style={{"margin-right":"5px"}}>ลบ</button>  
    <button onClick={()=>setCount(count+1)}>บวก</button>
    <button onClick={()=>setCount(0)}>rest</button>
    <p>You Click {count} time</p>

    </>);
}