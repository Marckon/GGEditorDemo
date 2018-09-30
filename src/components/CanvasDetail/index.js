import React from 'react';
import {Row,Col,Button,Card,Upload,Modal} from 'antd';
import {withPropsAPI} from 'gg-editor';

class CanvasDetail extends React.Component{

    handleSave=()=>{
        const {propsAPI}=this.props;
        const {save}=propsAPI;

        const data=JSON.stringify(save());
        Modal.info({
            title:"请复制以下数据",
            content:data,
            okText:"复制",
            onOk(){
                const oInput=document.createElement('input');
                oInput.value=data;
                document.body.appendChild(oInput);
                oInput.select();
                document.execCommand("Copy");
                document.body.removeChild(oInput);
            }
        })
    };

    handleImport=(ev)=>{
        const {propsAPI}=this.props;
        const {read}=propsAPI;
        let reader=new FileReader();
        let file=ev.fileList[0].originFileObj;
        console.log(file);
        reader.readAsText(file);
        reader.onloadend=(ev)=>{
            console.log(ev.target.result);
            read(JSON.parse(ev.target.result));
        }

    };

    render(){


        return (
            <Card
                title={"画布属性"}
            >
                <Row>
                    <Col span={12}>
                        <Button onClick={this.handleSave}>保存数据</Button>
                    </Col>
                    <Col span={12}>
                        <Upload type={"file"} accept={".json"} onChange={this.handleImport}>
                            <Button>导入数据</Button>
                        </Upload>
                    </Col>
                </Row>
            </Card>

        )
    }
}

export default withPropsAPI(CanvasDetail)