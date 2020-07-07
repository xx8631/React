//自定义hook 返回一个formStore
import React, { useRef } from "react";
//form仓库
class FormStore {
  constructor() {
    this.store = {};//form表单数据
    this.fieldEntities = [];//formField实例
    this.callbacks = {}  //回调
  }
  setCallback = callback => {
    //添加对象属性
    this.callbacks = {
      ...callback,//新增的对象属性
      ...this.callbacks//原来的对象属性
    }
  }
  //存储组件
  registerField  = field => {
    this.fieldEntities.push(field);
    return () => {
      //返回一个方法，删除组件
      this.fieldEntities = this.fieldEntities.field(item => item != field);
      delete this.store[field.props.name];
    }
  }
  getFieldValue = name => this.store[name];
  getFieldsValue = () => this.store;
  //修改store；
  setFieldsValue = newStore => {
    this.store = {
      //!调整下顺序
      ...this.store,
      ...newStore//...扩展运算符，相当于拷贝一个对象
      
    }
    console.log("修改值：",newStore)
    //store已经更新，但我们希望组件也跟着更新；（当前的field组件也要更新）
    this.fieldEntities.forEach(entity => {
      //只更新当前组件
      const { name } = entity.props;
      Object.keys(newStore).forEach(key => {
        if (key === name) {
          entity.onStoreChange();
        }
      })
    })
  }
  //校验
  validate = () => {
    let err = [];
    this.fieldEntities.forEach(entity => {
      const { name, rules } = entity.props;
      let value = this.store[name];
      let rule = rules && rules[0];
      if (rule && rule.required && (value === undefined || value === "")) {
        //出错
        err.push({
          [name]: rules.message,
          value
        })
      }
    })
    return err;
  }
  //提交方法
  submit = () => {
    let err = this.validate();
    if (err.length > 0) {
      //失败
      this.callbacks.onFinishFailed(err);
    } else {
      //成功
      this.callbacks.onFinish(this.store);
    }
  }
  getForm = () => {
    return {
      getFieldValue: this.getFieldValue,
      getFieldsValue: this.getFieldsValue,
      setFieldsValue: this.setFieldsValue,
      registerField: this.registerField,
      submit: this.submit,
      setCallback: this.setCallback
    };
  }
}

export default function useForm(form) {
  const formRef = useRef();//利用hooks
  if (!formRef.current) {
    if (form) {
      formRef.current = form;
    } else {
      //实例化form仓库，返回仓库的方法
      const formStore = new FormStore();
      formRef.current = formStore.getForm();
    }

  }
  return [formRef.current];//采用数组 更有扩展性，便于复用
}