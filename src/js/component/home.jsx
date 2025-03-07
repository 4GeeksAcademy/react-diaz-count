import React from "react";
import Cards from "./Cards";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	return <>
		<div className="d-flex justify-content-center align-items-center bg-dark">
			<Cards icon/>
			<Cards num={Math.floor((props.seconds%1000000)/100000)}/>
			<Cards num={Math.floor((props.seconds%100000)/10000)}/>
			<Cards num={Math.floor((props.seconds%10000)/1000)}/>
			<Cards num={Math.floor((props.seconds%1000)/100)}/>
			<Cards num={Math.floor((props.seconds%100)/10)}/>
			<Cards num={props.seconds%10}/>
			
		</div>




	</>
	
};

export default Home;
