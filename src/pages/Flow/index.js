import React from 'react';
import GGEditor from 'gg-editor';
import {Row,Col} from 'antd';
import FlowToolbar from '../../components/EditorToolbar';
import styles from './index.scss'

class Flow extends React.Component{
    render(){
        return(
        <GGEditor className={styles.editor}>
            <Row type='flex' className={styles.editorHd}>
                <Col span={24}>
                    <FlowToolbar/>
                </Col>
            </Row>
        </GGEditor>
        );
    }
}

export default Flow;