//antd 4实现form表单方式
import _Form from "./Form";
import Field from "./Field";
import useForm from "./useForm";//自定义hook 返回一个store

const Form = _Form;
Form.Field = Field;
Form.useForm = useForm;

export { Field, useForm };
export default Form;