import React from "react";
import StaffItemPanel from './StaffItemPanel.js';
import STAFF from './STAFF.js';
class App extends React.Component {

    constructor(){
	    super();
		this.state = {
           staff:new STAFF,
           staffDetail:null
		};
	}

    render () {
        return (
            <div> 
                <h1>
                    hello world!
                </h1>
                
                <StaffItemPanel
                    items = {this.state.staff.allStaff}
                />                
            </div>
        )

    }
}

React.render (<App />,document.getElementById("app"));