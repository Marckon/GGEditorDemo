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
import styles from './index.scss'

class FlowDetailPanel extends React.Component{
    render(){
        return (
            <DetailPanel className={styles.detailPanel}>
                <NodePanel>
                    <NodeDetail/>
                </NodePanel>
            </DetailPanel>
        )
    }
}

export default FlowDetailPanel;