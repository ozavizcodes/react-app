import React,{ useState} from "react";
// import "./App.css";


function ColorSwitcher() {
    const [color, setColor] = useState("red")
    function btnChange() {
        // console.log("button clicked");
        if(color ==="red" ){
          return setColor("blue")
            
        }
        if(color==="blue") {
          return  setColor("green")
        }
        else {
            setColor("red")
        }
    }
    return (
      <div className="App">
        <div style={{backgroundColor: color}}  className="childDiv">


        </div>
        <button onClick={btnChange}>Change Color</button>
      </div>


    )
    
}

export default ColorSwitcher;