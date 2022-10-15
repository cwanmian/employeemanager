import {message, Switch} from "antd";
import React, {useState} from "react";
import axios from "axios";

export default function ({col,id,checked}){
    const[loading,setloading]=useState(false)
    const[switchopen,setswitchopen]=useState(checked==1)
    const handleStatechange = (checked, event, id) => {
        setloading(true)
        axios.post("/updateColData", null, {params: {data:checked?1:0, id,col}}).then((res) => {
            setloading(false)
            if(res.data.code===200){
                message.success("修改成功")
                setswitchopen(!switchopen)
            }else{
                message.error(res.data.res)
            }
        }, (res) => {
            setloading(false)
            message.error(res)
        })
    }
    return(
        <Switch loading={loading} onChange={(checked, event) => {
            handleStatechange(checked, event, id)
        }} checkedChildren="已归档" unCheckedChildren="处理中" checked={switchopen}/>
    )
}