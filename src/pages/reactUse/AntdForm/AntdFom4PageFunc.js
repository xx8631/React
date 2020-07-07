import React, {useEffect} from 'react'
import {Form,Button,Input} from "antd";

const FormItem=Form.Item;

const nameRules={required:true,message:"请输入姓名！"}
const passwordRules={required:true,message:"请输入密码！"}

export default function AntdFom4PageFunc(props) {
  //自定义hook
  const [form] =Form.useForm();
  const onFinish=val=>{
    console.log("onFinish",val)
  }
  const onFinishFailed=val=>{
    console.log("onFinishFailed",val)
  }

  useEffect(()=>{
    form.setFieldsValue({username:"test"});
    console.log("form",form);
  },[]);

  return (
    <div>
      <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <FormItem label="用户名"  name="username" rules={[nameRules]}>
           <Input placeholder="请输入用户名" />
        </FormItem>
        <FormItem label="密码" name="password" rules={[passwordRules]}>
           <Input  placeholder="请输入密码" />
        </FormItem>
        <FormItem>
           <Button type="primary" size="large" htmlType="submit">登录</Button>
        </FormItem>
      </Form>
    </div>
  )
}
