import React from 'react';
import {Card} from 'antd';
import {ItemPanel,Item} from 'gg-editor';
import styles from './index.scss';

class EditorItemPanel extends React.Component{
    render(){
        return (
            <ItemPanel className={styles["item-panel"]}>
                <Card borderd={false}>
                    <Item
                        type={'node'}
                        size={'72*72'}
                        shape={'flow-circle'}
                        model={{
                            color:'#FA8C16',
                            label:'起止节点'
                        }}
                        src="https://gw.alipayobjects.com/zos/rmsportal/ZnPxbVjKYADMYxkTQXRi.svg"
                    />
                    <Item
                        type={'node'}
                        size={'80*48'}
                        shape={'flow-rect'}
                        model={{
                            color:'#1890ff',
                            label:'常规节点(normal node)'
                        }}
                        src="https://gw.alipayobjects.com/zos/rmsportal/wHcJakkCXDrUUlNkNzSy.svg"
                    />
                    <Item
                        type={'node'}
                        size={'80*72'}
                        shape={'flow-rhombus'}
                        model={{
                            color:'#13c2c2',
                            label:'分叉节点'
                        }}
                        src="https://gw.alipayobjects.com/zos/rmsportal/SnWIktArriZRWdGCnGfK.svg"
                    />
                    <Item
                        type={'node'}
                        size={'80*48'}
                        shape={'flow-capsule'}
                        model={{
                            color:'#FA8C16',
                            label:'模型节点'
                        }}
                        src="https://gw.alipayobjects.com/zos/rmsportal/rQMUhHHSqwYsPwjXxcfP.svg"
                    />
                </Card>
            </ItemPanel>
        )
    }
}

export default EditorItemPanel;