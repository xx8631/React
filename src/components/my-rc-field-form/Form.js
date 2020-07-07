import React from 'react'
import FieldContext from './FieldContext'
import useForm from './useForm';
//Form组件
export default function Form({form,children,onFinish,onFinishFailed}) {
  const [formInstance]=useForm(form);
  
  formInstance.setCallback({onFinish,onFinishFailed});//设置回调

  return (
    <form onSubmit={e=>{
      e.preventDefault();//取消事件的默认动作
      formInstance.submit();//绑定提交方法，该方法会做数据校验
    }}>
      {/* 使用context 传递 store方法 */}
      <FieldContext.Provider value={formInstance}>
     {children}
     </FieldContext.Provider>
    </form>
  )
}
