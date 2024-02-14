import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faClock } from "@fortawesome/free-solid-svg-icons";
const mySuperStyles={
    width:"4rem",
    height:"6rem"
}

function Cards(props) {
    return <>
        <div className="card my-3 mx-1" style={mySuperStyles}>
            <div className="card-body d-flex justify-content-center">
                <h1> {props.icon ?<FontAwesomeIcon icon={faClock} />:props.num}</h1>
            </div>
        </div>

    
    </>
    
}
export default Cards