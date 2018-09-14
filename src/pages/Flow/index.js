import React from 'react';
import GGEditor, {Flow}from 'gg-editor';
import {Row,Col} from 'antd';
import FlowToolbar from '../../components/EditorToolbar';
import EditorItemPanel from '../../components/EditorItemPanel';
import FlowDetailPanel from '../../components/EditorDetailPanel';
import styles from './index.scss';

class FlowPage extends React.Component{
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
                <Col span={16} className={styles.editorContent}>
                    <Flow className={styles.flow}/>
                </Col>
                <Col span={4} className={styles.editorSidebar}>
                    <FlowDetailPanel/>
                </Col>
            </Row>
        </GGEditor>
        );
    }
}

export default FlowPage;