import React from "react"
import boxes from "./boxes"
import "./style.css"

export default function App(props) {
    //initialize state with the default value of the array pulled in from boxes.js
    const [squares, setSquares] = React.useState(boxes)
   
    //creating a styles object allows it to be easily entered in for style css properties in a div
    const styles = {
         //use a ternary to change background color based on if darkMode is true or false
        backgroundColor: props.darkMode ? "#222222" : "#cccccc"
    }
     //map over that state array and display each one as an empty square
    const squareElements = squares.map(square => (
        //can add a style property to the div and represent it as an object
        <div style={styles} className="box" key={square.id}></div>
    ))
 
    return (
        <main>
            <h1>{squareElements}</h1>
        </main>
    )
}
