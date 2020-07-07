import React, { Component, useEffect } from "react";
// import { createForm } from "rc-form";
import createForm from "../../../components/my-rc-form";
import Input from "../../../components/Input";

const nameRules = { required: true, message: "请输入姓名！" }
const passwordRules = { required: true, message: "请输入密码！" }

//高阶组件，传入一个组件，返回一个组件
@createForm
class MyRCForm extends Component {
     constructor(props) {
          super(props);
     }
     submit = () => {
          const { getFieldsValue } = this.props.form;
          // console.log("submit");
          this.props.form.validateFields((err, val) => {
               if (err) {
                    console.log("err", err);

               } else {
                    console.log("校验成功", val)
               }
          })
     }
     componentDidMount() {
          // this.props.form.setFieldsValue({ username: "default" });
     }
     render() {
          console.log("props：", this.props)
          const { getFieldDecorator } = this.props.form;
          return (
               <div>
                    <h3>MyRCForm</h3>
                    {getFieldDecorator("username", { rules: [nameRules] })(<Input placeholder="Username" />)}
                    {getFieldDecorator("password", { rules: [passwordRules] })(<Input placeholder="Password" />)}
                    <button onClick={this.submit}>submit</button>
               </div>
          )
     }
}

export default MyRCForm;
