import React from "react"

export default function Box(props) {

    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent"
    }

    return (
        <div 
            style={styles} 
            className="box" 
            //using a function to run props.toggle so we can pass in whatever we want
            onClick={() => props.toggle(props.id)}
        >
        </div>
    )
}

//we have given each box control over it's state value 
