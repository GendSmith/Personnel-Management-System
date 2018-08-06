import React from "react";
import StaffItemPanel from './StaffItemPanel.js';
import STAFF from './STAFF.js';
//import StaffHeader from "./StaffHeader.js";
import StaffFooter from "./StaffFooter.js";
//import StaffDetail from './StaffDetail.js'

class App extends React.Component {

    constructor(){
	    super();
		this.state = {
           staff:new STAFF,
           staffDetail:null
		};
	}

    // addStaffItem(item) {
    //     this.setState({
    //         staff:this.state.staff.addStaffItem(item)
    //     });
    // }

    // removeStaffItem(key) {
    //     this.setState({
    //         staff:this.state.staff.removeStaffItem(key)
    //     });
    // }

    // detailStaffItem(key){
    //     this.setState({
    //         staffDetail:this.state.staff.staff.filter(item => {
    //             return item.key==key
    //         })
    //     });
    // }

    // closeDetail(){
    //     this.setState({
    //         staffDetail:null
    //     });
    // }

    // editDetail(item) {
    //     this.setState({
    //         staff:this.state.staff.editStaffItem(item)
    //     });
    // }

    // sortStaff(sortType) {
    //     this.setState({
    //         staff:this.state.sortStaff(sortType)
    //     });
    // }

    // filtStaff(filtType) {
    //     this.setState({
    //         staff:this.state.staff.filtStaff(filtType)
    //     });
    // }

    // searchStaff(word) {
    //     this.setState({
    //         staff:this.state.staff.searchStaff(word)
    //     })
    // }

    render () {
        return (
            <div> 
                <h1>
                    hello world!
                </h1>
                {/* <StaffHeader
                    sortStaff = {this.sortStaff.bind(this)}
                    filtStaff = {this.filtStaff.bind(this)}
                    searchStaff = {this.searchStaff.bind(this)}
                /> */}
                <StaffItemPanel
                    items = {this.state.staff.allStaff}
                />


                {/* <StaffItemPanel
                    items = {this.state.staff.allStaff}
                    removeStaffItem = {this.removeStaffItem.bind(this)}
                    detailStaffItem = {this.detailStaffItem.bind(this)}
                />                 */}
                {/* <StaffFooter addStaffItem = {this.addStaffItem.bind(this)}/> */}
               <StaffFooter />
                {/* <staffDetail 
                    staffDetail = {this.state.staffDetail}
                    closeDetail = {this.closeDetail.bind(this)}
                    editDetail = {this.editDetail.bind(this)}
                /> */}

            </div>
        )

    }
}

React.render (<App />,document.getElementById("app"));