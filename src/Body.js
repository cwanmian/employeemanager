import {Tabs} from 'antd';
import React, {useRef, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
const Body = () => {
    const disptch = useDispatch()
    const initialPanes = useSelector(state => state.BodyItemReducer)
    let activeKey = useSelector(state => state.ActiveTabIdReducer)
    activeKey = (activeKey === null ? initialPanes[0].key : activeKey)
    const onChange = (newActiveKey) => {
        disptch({type: "setActiveKey", data: newActiveKey}
        )
        disptch({type: "setMenuActiveKey", data: newActiveKey})
    }
    const remove = (targetKey) => {
        disptch({type: "removeBodyItem", data: targetKey})
    }
    const onEdit = (targetKey, action) => {
        if (action === 'add') {
        } else {
            let activeIndex = 0
            initialPanes.forEach((item, index) => {
                if (item.key === targetKey) {
                    activeIndex = index - 1
                }
            })
            disptch({
                type: "setActiveKey", data: Object.values(initialPanes)[activeIndex].key
            })
            disptch({type: "setMenuActiveKey", data: Object.values(initialPanes)[activeIndex].key})

            remove(targetKey)
        }
    };
    const Tabitems=initialPanes.map((item)=>({label: item.title, key: item.key, children: item.content,closable:item.closable}))
    return (
        <Tabs style={{height:"100%"}} size="small" type="editable-card" onChange={onChange} activeKey={activeKey} onEdit={onEdit} items={Tabitems} hideAdd destroyInactiveTabPane={false}>
        </Tabs>
    );
};

export default Body;