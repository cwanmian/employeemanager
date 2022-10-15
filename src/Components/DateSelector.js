import moment from "moment";
import {DatePicker, message, Modal} from "antd";
import React, {useRef, useState} from "react";
import axios from "axios";
import {ExclamationCircleOutlined} from "@ant-design/icons";
const { confirm } = Modal;
const dateFormat = 'YYYY-MM-DD';

export default ({id,clearable, value,col}) => {
    const [date, setdate] = useState(value)
    const [modalText, setModalText] = useState('确定修改么，你的操作将记入日志')
    const temdate=useRef()
    const handleOk = (resolve, reject) => {
        setModalText('修改中，请等待')
        axios.post("/updateColData", null, {params: {data:temdate.current, id,col}}).then((res) => {
            setModalText('确定修改么，你的操作将记入日志')
            if(res.data.code===200){
                message.success("修改成功")
                setdate(temdate.current)
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
    const handleChange = (value, mode) => {
        temdate.current=mode
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
        <><DatePicker
            onChange={(value, mode) => {
                handleChange(value, mode)
            }}
            inputReadOnly
            style={{width: 120}}
            value={date === "" ? "" : moment(date, dateFormat)}
            allowClear={clearable}
            bordered={false}
        />
        </>
    )
}