import React from "react";
import ReactDOM from "react-dom";
import {Block37,Block38,Block39,Block40,Block46,Block48} from "./blocks;"
class Main extends React.Component{
	
	render(){
		return (
			<Block37/>
			<Block38/>
			<Block39/>
			<Block40/>
			<Block46/>
			<Block48/>
		)
	}
}
ReactDOM.render(<Main />, document.getElementById('root'))