import React from 'react';
import GGEditor from 'gg-editor';
import {Row,Col} from 'antd';
import FlowToolbar from '../../components/EditorToolbar';
import EditorItemPanel from '../../components/EditorItemPanel';
import styles from './index.scss';

class Flow extends React.Component{
    render(){
        return(
        <GGEditor className={styles.editor}>
            <Row type='flex' className={styles.editorHd}>
                <Col span={24}>
                    <FlowToolbar/>
                </Col>
            </Row>
            <Row type='flex' className={styles.editorBd}>
                <Col span={4} className={styles.editorSidebar}>
                    <EditorItemPanel/>
                </Col>
            </Row>
            <Row>
                <Col span={16}/>
            </Row>
            <Row>
                <Col span={4}/>
            </Row>
        </GGEditor>
        );
    }
}

export default Flow;