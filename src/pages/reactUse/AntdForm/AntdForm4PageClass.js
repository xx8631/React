import React, { Component } from 'react'
import { Form, Button, Input } from "antd";

const FormItem = Form.Item;

const nameRules = { required: true, message: "请输入姓名！" }
const passwordRules = { required: true, message: "请输入密码！" }

export default class AntdForm4PageClass extends Component {
  //formRef自定义
  
  constructor(props){
    super(props);
    this.state={};
    this.formRef=React.createRef();
  }
  componentDidMount(){
    this.formRef.current.setFieldsValue({username:"default"})
  }
  onFinish=val=>{
    console.log("onFinish",val)
  }
  onFinishFailed=val=>{
    console.log("onFinishFailed",val)
  }
  render() {

    return (
      <div>
        <Form ref={this.formRef} onFinish={this.onFinish} onFinishFailed={this.onFinishFailed}>
          <FormItem label="用户名" name="username" rules={[nameRules]}>
            <Input placeholder="请输入用户名" />
          </FormItem>
          <FormItem label="密码" name="password" rules={[passwordRules]}>
            <Input placeholder="请输入密码" />
          </FormItem>
          <FormItem>
            <Button type="primary" size="large" htmlType="submit">登录</Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}
