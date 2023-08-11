import React from "react"
import boxes from "./boxes"
import Box from "./Box"
import "./style.css"

//clicking on a square will run the onCLick event handler that runs the toggle function and passing in id received through props. 
export default function App() {
    const [squares, setSquares] = React.useState(boxes)
    
    //declarative method-----------------------------------------------------
    //when a box gets clicked it runs props.toggle(props.id) which will call setSquares
    function toggle(id){
        //we look at previous squares and map over them
        setSquares(prevSquares => {
            //map returns new array without modifying original array
            return prevSquares.map((square) => {
                //as we loop, we check if the id matches the id passed into toggle function. if they match, the square was clicked and we replace the old object with a new object that pulls in all values of square but overwrites the on value to turn it off
                return square.id ===id ? {...square, on: !square.on} : square
            })
        })
    }


    // //imperative method------------------------------------------------------

    //  //toggle function takes the id and runs set squares to determine what the square should be
    // function toggle(id){
    //     //look at previous array and generate a new array 
    //     setSquares(prevSquares => {
    //         const newSquares = []
    //         //loop over previous array, and when we run into square in loop where the id matches the one passed in, we create a new object to replace the old object 
    //         for(let i=0; i< prevSquares.length; i++){
    //             const currentSquare =prevSquares[i]
    //             if(currentSquare.id === id){
    //                 const updatedSquare = {
    //                     ...currentSquare,
    //                     on: !currentSquare.on
    //                 }
    //                 //if ids match we push the new object to array 
    //                 newSquares.push(updatedSquare)
    //             } else {
    //                 //if ids do not match we push object in current form to array
    //                 newSquares.push(currentSquare)
    //             }
    //         }
    //         //return the new array which reruns and updates the array changing the color of the clicked square
    //         return newSquares
    //     })
    // }

    
    const squareElements = squares.map(square => (
        <Box 
            key={square.id} 
            id={square.id}
            on={square.on} 
            toggle={toggle}
        />
    ))

    return (
        <main>
            {squareElements}
        </main>
    )
}