import React, {useEffect} from 'react'
import Form,{Field} from "../../../components/my-rc-field-form";//antd的组件就是在这个基础上实现的
import Input from "../../../components/Input";

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
    // form.setFieldsValue({username:"test"});
    console.log("form",form);
  },[]);

  return (
    <div>
      <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Field label="用户名"  name="username" rules={[nameRules]}>
           <Input placeholder="请输入用户名" />
        </Field>
        <Field label="密码" name="password" rules={[passwordRules]}>
           <Input  placeholder="请输入密码" />
        </Field>
           <button>登录</button>
      </Form>
    </div>
  )
}
