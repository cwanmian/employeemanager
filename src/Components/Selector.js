import {message, Modal, Select, Tag} from "antd";
import React, {useRef} from "react";
import {useState} from "react";
import axios from "axios";
import {ExclamationCircleOutlined} from "@ant-design/icons";
import {ProFormSelect} from "@ant-design/pro-components";
const {Option}=Select
const { confirm } = Modal;
export default function ({col,id,value}) {
    const [modalText, setModalText] = useState('确定修改么，你的操作将记入日志')
    const [data, setdata] = useState({
        gender:[
            {title:"♂",color:"blue"},
            {title:"♀",color:"red"},
        ]
    })
    const [selectvalue,setselectvalue]=useState(value)
    const temv=useRef()

    const handleOk = (resolve, reject) => {
        setModalText('修改中，请等待')
        axios.post("/updateColData", null, {params: {data:temv.current, id,col}}).then((res) => {
            setModalText('确定修改么，你的操作将记入日志')
            if(res.data.code===200){
                message.success("修改成功")
                setselectvalue(temv.current)
            }else{
                message.error(res.data.res)
            }
            resolve()
        }, (res) => {
            setModalText('确定修改么，你的操作将记入日志')
            message.error(res)
            resolve()
        })
    }
    const handleSelect=(value, option)=>{
        temv.current=value
        confirm({
            title: '确定修改么?',
            icon: <ExclamationCircleOutlined />,
            content: modalText,
            onOk() {
                return new Promise((resolve, reject) => {
                    handleOk(resolve, reject)
                }).catch(() => console.log('Oops errors!'));
            },
            onCancel() {
            },
        });
    }

    return (
        <><Select onChange={(value, option)=>{handleSelect(value, option)}} style={{width: 160}} onClick={(e) => {
            e.stopPropagation()
        }} showArrow={false} bordered={false} optionLabelProp="children" value={selectvalue}>
            {data[col].map((item,index)=>{
                return <Option key={item.title} value={item.title}><Tag color={item.color}>{item.title}</Tag></Option>
            })}
        </Select>
        </>

    )
}