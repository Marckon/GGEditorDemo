import React from 'react';
import {
    NodePanel,
    EdgePanel,
    GroupPanel,
    MultiPanel,
    CanvasPanel,
    DetailPanel
} from 'gg-editor';
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
            </DetailPanel>
        )
    }
}

export default FlowDetailPanel;