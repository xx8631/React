//antd3 用高阶组件实现一个rc-form  （传入一个组件，返回一个组件）
import React, { Component } from 'react'

export default function createForm(Cmp) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {};
      this.options = {};
    }
    handleChange = (e) => {
      const { name, value } = e.target;
      this.setState({ [name]: value });
    }
    //包装控件
    getFieldDecorator = (field, option) => InputCmp => {
      this.options[field] = option;//配置 非state属性，如校验规则rule等
      //对组件进行包装，是否可理解为也是一个高阶组件
      return React.cloneElement(InputCmp, {
        name: field,//包装属性
        value: this.state[field] || "", //包装值
        onChange: this.handleChange //包装事件
      });
    }
    //设置Value
    setFieldsValue = newStore => {
      this.setState(newStore);
    }
    //获取Value
    getFieldsValue = () => {
      return this.state;
    };
    //校验规则
    validateFields = (callback) => {
      let err = [];
      //校验规则 this.options  校验值：this.state;
      for (let field in this.options) {
        //没有值 则说明 错误
        if (!this.state[field]) {
          err.push({ [field]: this.options[field].rules[0].message });
        }
      }
      if (err.length === 0) {
        callback(null, this.state);
      } else {
        callback(err, this.state);
      }

    }
    getForm = () => {
      return {
        form: {
          getFieldDecorator: this.getFieldDecorator,
          setFieldsValue: this.setFieldsValue,
          getFieldsValue: this.getFieldsValue,
          validateFields: this.validateFields
        }
      }
    }
    render() {
      //为组件添加了props和一些方法；
      return <Cmp {...this.props} {...this.getForm()} />
    }
  }
}