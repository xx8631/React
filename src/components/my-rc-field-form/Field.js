import { Component, cloneElement } from 'react'
import FieldContext from "./FieldContext";

export default class Field extends Component {
  //利用context中的contextType  接收父组件provider的参数
  static contextType = FieldContext;
  //组件挂载完执行该生命周期，只执行一次
  componentDidMount() {
    //注册组件 注册会返回一个删除组件的方法
    this.cancleRegister = this.context.registerField(this);
  }
  componentWillUnmount() {
    //取消注册
    if (this.cancleRegister) {
      //执行删除方法
      this.cancleRegister();
    }
  }
  onStoreChange = () => {
    this.forceUpdate();//强制刷新  方法从哪来
  }
  //为child添加属性和方法
  getControled = () => {
    //用context 获取Form中的props属性
    const { getFieldValue, setFieldsValue } = this.context;  //从父组件得到的方法
    const { name } = this.props;
    return {
      value: getFieldValue(name),//从store中取值
      onChange: (e) => {
        
        //把新值存到store中
        const newValue = e.target.value;
        setFieldsValue({ [name]: newValue });//保存新值
        // console.log("newValue", newValue)
      }
    };
  };
  render() {
    const { children } = this.props;
    //克隆元素,增加属性
    const returnChildNode = cloneElement(children, this.getControled());
    return returnChildNode
  };
}
