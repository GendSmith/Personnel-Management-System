import React from "react";
export default class StaffFooter extends React.Component {

    handleAddClick(e){
        e.preventDefault();
        //console.log("StaffFooter.js click the button")
        let item = {};
        let addForm = React.findDOMNode(this.refs.addForm);
        let sex = addForm.querySelector('#staffAddSex');
        let id = addForm.querySelector('#staffAddId');

        item.name = addForm.querySelector('#staffAddName').value.trim();//删除字符串开头和末尾的空格
        item.age = addForm.querySelector('#staffAddAge').value.trim();
        item.description = addForm.querySelector('#staffAddDescription').value.trim();
        item.sex = sex.options[sex.selectedIndex].value;
        item.id = id.options[id.selectedIndex].value;

        if(item.name == ''|| item.age == '' || item.description == '') {
            let tips = React.findDOMNode(this.refs.tipsUnDone);
            tips.style.display = 'block';
            setTimeout(()=>{
                tips.style.display = 'none';
            },1000);
            return;
        }

        let numReg = /^\d+$/;
        if(!numReg.test(item.age) || parseInt(item.age) >150){
            let tips = React.findDOMNode(this.tips.tipsUnAge);
            tips.style.display = 'block';
            setTimeout(() => {
                tips.style.display = 'none';
            }, 1000);
            return;
        }

        this.props.addStaffItem(item);
        addForm.reset();

        let tips = React.findDOMNode(this.refs.tips);
        tips.style.display = 'block';
        setTimeout(()=>{
            tips.style.display = 'none'
        },1000);
    }

    render() {
        return (
            <div>
                <h4 style={{ 'text-align': 'center' }}>
                    人员新增
                </h4>
                <hr />
                <form ref="addForm" className="addForm">
                    <div>
                        <label for="staffAddName" style={{ 'display': 'block' }}>姓名</label>
                        <input ref="addName" id="staffAddName" type="text" placeholder="请输入你的名字"> </input>
                    </div>
                    <div>
                        <label for="staffAddAge" style={{ 'display': 'block' }}>年龄</label>
                        <input ref="addAge" id="staffAddAge" type="text" placeholder="请输入你的年龄"> </input>
                    </div>
                    <div>
                        <label for = 'staffAddSex' style = {{'display':'block'}}>性别 </label>
                        <select ref='addSex' id = 'staffAddSex'>
                            <option value = '男'>男 </option>
                            <option value = '女'>女 </option>
                        </select>
                    </div> 
                    <div>
                        <label for="staffAddId" style={{ 'display': 'block' }}>身份</label>
                        <select ref="addId" id="staffAddId">
                            <option value="主任">主任 </option>
                            <option value="老师">老师 </option>
                            <option value="学生">学生 </option>
                            <option value="实习">实习 </option>
                        </select>
                    </div>
                    <div>
                        <label for="staffAddDescription" style={{ 'display': 'block' }}>个人描述 </label>
                        <textarea ref="addDescription" id="staffAddDescription" type='text'> </textarea>
                    </div>
                    <p ref="tips" className="tips">提交成功 </p>
                    <p ref="tipsUnDone" className="tips" style = {{'display':'none'}}>请录入完整的人员信息 </p>
                    <p ref="tipsUnAge" className="tips" style = {{'display':'none'}}>请录入正确的年龄（0-150）</p>
                    <div>
                        <button onClick = {this.handleAddClick.bind(this)} type = 'button'> 提交 </button>
                    </div>
                </form>

            </div>
        )
    }
}