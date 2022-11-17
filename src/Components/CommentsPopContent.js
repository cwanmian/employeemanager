import {Button, Popover} from "antd";
import React, {useState} from "react";

export default ({list, name}) => {
    const [open, setOpen] = useState(false)
    const handleOpenChange = (v) => {
        if (v === false) {
            setOpen(v)
        }
    }
    return (
        <>
            <Popover
                content={list.map((item, index) => {
                    if (index !== 0) {
                        return <div key={index}>{item.time}:{item.comment}</div>
                    }
                })}
                trigger="click"
                title={name + "的随访历史"}
                open={open}
                onOpenChange={handleOpenChange}
                placement="bottomLeft"
            >{list.length > 0 ? <span>{list[0].time}：{list[0].comment}<Button type="link" onClick={() => {
                setOpen(true)
            }}>More</Button></span>:""}

            </Popover></>
    )
}