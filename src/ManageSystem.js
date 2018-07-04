import React from "react";

class App extends React.Component {

    constructor(){
	    super();
		this.state = {
		   
		};
	}

    render () {
        return (
            <div> 
                <h1>
                hello world!
                </h1>
            </div>
        )

    }
}

React.render (<App />,document.getElementById("app"));