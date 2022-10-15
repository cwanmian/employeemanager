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
        bankuai: [{title: "安全人员", color: "blue"},
            {title: "安全指数", color: "red"},
            {title: "驾驶舱", color: "volcano"},
            {title: "监督检查", color: "orange"},
            {title: "其他", color: "lime"},
            {title: "项目部详情维护",
                color: "green"
            }, {
                title: "学习强安",
                color: "green"
            }, {
                title: "移动端指挥中心",
                color: "cyan"
            }, {
                title: "应急管理",
                color: "green"
            }, {
                title: "BI",
                color: "cyan"
            }],
        state:[
            {
                title: "待处理",
                color: "blue"
            },
            {
                title: "开发处理中",
                color: "red"
            },
            {
                title: "普联UAT测试通过",
                color: "volcano"
            },
            {
                title: "其他平台处理",
                color: "orange"
            },
            {
                title: "生产环境待验证",
                color: "lime"
            },
            {
                title: "生产环境验证不通过",
                color: "green"
            },
            {
                title: "中建UAT测试通过",
                color: "orange"
            },
            {
                title: "中建UAT验证通过",
                color: "cyan"
            },
            {
                title: "UAT待测试",
                color: "volcano"
            }
        ],
        shuxing:[
            {
                title: "BUG",
                color: "blue"
            },
            {
                title: "优化",
                color: "red"
            },
            {
                title: "运维组处理",
                color: "volcano"
            },
            {
                title: "人力数据问题",
                color: "orange"
            },
            {
                title: "主数据问题",
                color: "lime"
            },
            {
                title: "财务数据问题",
                color: "green"
            },
            {
                title: "新增功能",
                color: "lime"
            }
        ],
        timerequire:[
            {
                title: "高",
                color: "red"
            },
            {
                title: "中",
                color: "blue"
            },
            {
                title: "低",
                color: "green"
            }
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
        <><Select showSearch onChange={(value, option)=>{handleSelect(value, option)}} style={{width: 160}} onClick={(e) => {
            e.stopPropagation()
        }} showArrow={false} bordered={false} optionLabelProp="children" value={selectvalue}>
            {data[col].map((item,index)=>{
                return <Option key={item.title} value={item.title}><Tag color={item.color}>{item.title}</Tag></Option>
            })}
        </Select>
        </>

    )
}