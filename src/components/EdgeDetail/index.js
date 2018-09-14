import React from 'react';
import {Card,Form,Input,Select} from 'antd';

const {Item}=Form;
const {Option}=Select;

const inlineFormItemLayout={
    labelCol:{
        sm:{span:6}
    },
    wrapperCol:{
        sm:{span:18}
    }
};

class EdgeDetail extends React.Component{

    handleSubmit=()=>{
        const {form,getSelected,updateItem}=this.props;

        //setTimeout 的作用：
        setTimeout(()=>{
            form.validateFieldsAndScroll((err,values)=>{
                if(err) return;

                const item=getSelected()[0];

                if(!item) return;

                updateItem(item,{
                    ...values
                });
            });
        },0);
    }

    renderShapeSelect(){
        return(
            <Select onChange={this.handleSubmit()}>
                <Option value={'flow-smooth'}>图曲线</Option>
                <Option value={'flow-polyline'}>图折线</Option>
                <Option value={'flow-polyline-round'}>圆角折线</Option>
            </Select>
        );
    }

    render(){
        const {form,getSelected}=this.props;
        const {getFieldDecorator}=form;

        const item=getSelected()[0];

        if(!item) return null;

        const {label='',shape='flow-smooth'}=item.getModel();

        //Card type inner可以不设置也能正常显示
        return(
            <Card type={'inner'} title={'边线属性'} border={false}>
                <Form onSubmit={this.handleSubmit}>
                    <Item label={'标签'} {...inlineFormItemLayout}>
                        {
                            getFieldDecorator('label',{
                                initialValue:label
                            })(<Input onBlur={this.handleSubmit}/>)
                        }
                    </Item>
                    <Item label={'图形'} {...inlineFormItemLayout}>
                        {
                            getFieldDecorator('shape',{
                                initialValue:shape
                            })(this.renderShapeSelect())
                        }
                    </Item>
                </Form>
            </Card>
        )
    }
}

export default Form.create()(EdgeDetail);