import React from 'react';
import {
    NodePanel,
    EdgePanel,
    GroupPanel,
    MultiPanel,
    CanvasPanel,
    DetailPanel
} from 'gg-editor';
import {Card} from 'antd';
import NodeDetail from '../NodeDetail';
import EdgeDetail from '../EdgeDetail';
import styles from './index.scss';

class FlowDetailPanel extends React.Component{
    render(){
        return (
            <DetailPanel className={styles.detailPanel}>
                <NodePanel>
                    <NodeDetail/>
                </NodePanel>
                <EdgePanel>
                    <EdgeDetail/>
                </EdgePanel>
                <GroupPanel>
                    <Card title={'群组属性'} />
                </GroupPanel>
                <MultiPanel>
                    <Card title={'多选属性'}/>
                </MultiPanel>
                <CanvasPanel>
                    <Card title={'画布属性'}/>
                </CanvasPanel>
            </DetailPanel>
        )
    }
}

export default FlowDetailPanel;