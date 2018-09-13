import React from 'react';
import {Tooltip, Divider} from 'antd';
import styles from './index.scss';
import iconfont from '../theme/iconfont.scss';
import {Toolbar, Command} from 'gg-editor';

const commands = {
    undo: {
        com:'undo',
        text:'撤销',
        className:iconfont['icon-undo']
    },
    redo: {
        com:'redo',
        text:'重做',
        className:iconfont['icon-redo']
    },
    copy: {
        com:'copy',
        text:'复制',
        className:'icon-copy-o'
    },
    paste: {
        com:'paste',
        text:'粘贴',
        className:iconfont['icon-paster-o']
    },
    del: {
        com:'delete',
        text:'删除',
        className:iconfont['icon-delete-o']
    },
    zoomIn: {
        com:'zoomIn',
        text:'放大',
        className:iconfont["icon-zoom-in-o"]
    },
    zoomOut: {
        com:'zoomOut',
        text:'缩小',
        className:iconfont["icon-zoom-out-o"]
    },
    autoZoom: {
        com:'autoZoom',
        text:'适应画布',
        className:iconfont["icon-fit"]
    },
    resetZoom: {
        com:'resetZoom',
        text:'实际尺寸',
        className:iconfont["icon-actual-size-o"]
    },
    toFront: {
        com:'toFront',
        text:'层及前置',
        className:iconfont["icon-to-front"]
    },
    toBack: {
        com:'toBack',
        text:'层级后置',
        className:iconfont["icon-to-back"]
    },
    multiSelect: {
        com:'multiSelect',
        text:'多选',
        className:iconfont["icon-select"]
    },
    addGroup: {
        com:'addGroup',
        text:'成组',
        className:iconfont["icon-group"]
    },
    unGroup: {
        com:'unGroup',
        text:'解组',
        className: iconfont.iconUngroup
    },
};

class FlowToolbar extends React.Component {
    renderCommands(...chooseCommands) {
        return chooseCommands.map((item, idx) => {
            return (
                <Command name={`${item.com}`}>
                    <Tooltip title={item.text} placement='bottom' overlayClassName={styles.tooltip}>
                        <i className={`${iconfont.iconfont} ${item.className}`}/>
                    </Tooltip>
                </Command>)
        })
    }

    render() {
        return (
            <Toolbar className={styles.toolbar}>
                {
                    this.renderCommands(commands.undo,commands.redo)
                }
                <Divider type='vertical'/>
                {
                    this.renderCommands(commands.copy,commands.paste,commands.del)
                }
                <Divider type='vertical'/>
                {
                    this.renderCommands(commands.zoomIn,commands.zoomOut,commands.autoZoom,commands.resetZoom)
                }
                <Divider type='vertical'/>
                {
                    this.renderCommands(commands.toBack,commands.toFront)
                }
                <Divider type='vertical'/>
                {
                    this.renderCommands(commands.multiSelect,commands.addGroup,commands.unGroup)
                }
            </Toolbar>
        );
    }
}

export default FlowToolbar;