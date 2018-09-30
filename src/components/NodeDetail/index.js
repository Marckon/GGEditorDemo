import React from 'react';
import {Card,Form,Input,InputNumber} from 'antd';
import ColorPicker from 'rc-color-picker';
import 'rc-color-picker/assets/index.css';
import {withPropsAPI} from 'gg-editor';

const {Item}=Form;

const inlineFormItemLayout={
    labelCol:{
        sm:{span:6}
    },
    wrapperCol:{
        sm:{span:18}
    }
};

class NodeDetail extends React.Component{
    handleSubmit=()=>{
        /*
    * antd规定form组件自带this.props属性,
    * form：即Form，对象类型（来自antd）
    * getSelected：获取当前选中的图项（来自ggeditor，ggeditor继承自g6editor）
    * updateItem：更行图项（来自ggeditor，ggeditor继承自g6editor）
    * */
        const {form,propsAPI}=this.props;
        const {getSelected,update}=propsAPI;

        //validateFieldAndScroll：antd规定的this.props.form的方法——校验，如果校验不通过，自动滚进可见范围
        form.validateFieldsAndScroll((err,values)=>{
            if(err) return;

            const item=getSelected()[0];

            if(!item) return;

            values.size=`${values.width}*${values.height}`;
            values.color=values.color.color?values.color.color:values.color

            update(item,{
                ...values
            });
        });
    };

    render(){
        const {form,propsAPI}=this.props;
        //getFieldDecorator：用于和表单进行双向绑定
        const {getFieldDecorator}=form;
        const {getSelected}=propsAPI;

        const item=getSelected()[0]

        if(!item) return null;

        const {label}=item.getModel()

        return(
            <Card type={'inner'} title={'节点属性'} borderd={false}>
                <Form onSubmit={this.handleSubmit}>
                    <Item label={'标签'} {...inlineFormItemLayout}>
                        {
                            getFieldDecorator('label',{
                                initialValue:label
                            })(<Input onBlur={this.handleSubmit}/>)
                        }
                    </Item>
                    <Item label={'尺寸'} {...inlineFormItemLayout}>
                        {
                            getFieldDecorator('width',{
                                initialValue:getSelected()[0].getModel().size.split('*')[0]
                            })(<InputNumber onKeyUp={this.handleSubmit} />)
                        }
                        {
                            getFieldDecorator('height',{
                                initialValue:getSelected()[0].getModel().size.split('*')[1]
                            })(<InputNumber onKeyUp={this.handleSubmit} />)
                        }
                    </Item>
                    <Item label={'颜色'} {...inlineFormItemLayout}>
                        {
                            getFieldDecorator('color',{
                                initialValue:getSelected()[0].getModel().color
                            })(<ColorPicker
                                color={getSelected()[0].getModel().color}
                                animation={'slide-up'}
                                onChange={this.handleSubmit}
                                mode={'HSB'}/>)
                        }
                    </Item>
                </Form>
            </Card>
        )
    }
}


export default Form.create()(withPropsAPI(NodeDetail));