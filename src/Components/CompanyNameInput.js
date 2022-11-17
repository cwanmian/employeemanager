import {Button, Col, Form, Image, Input, message, Modal, Pagination, Row, Select, Spin, Table, Tooltip} from "antd";
import React, {useEffect, useRef, useState} from "react";
import axios from "axios";
import {GlobalData} from "../GlobalData";

export default (props) => {
    useEffect(() => {
        setLoading(true)
        getdata()
    }, [])
    const [companyName,setcompanyName]=useState("")
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const allSearchs = useRef({})
    const allSelects = useRef({})
    const [pagedata, setpagedata] = useState({})
    const [currentpage, setcurrentpage] = useState(1)
    const {value = [], onChange} = props
    const getdata = (type, page = 1, pageSize = 6) => {
        setcurrentpage(page)
        axios.post("/CompanyList", {
            search: JSON.stringify(allSearchs.current), page, pageSize, filter: JSON.stringify(allSelects.current)
        },).then((res) => {
            setLoading(false)
            if (res.data.code === 200) {
                let temdata = res.data.res.data.map((item, index) => {
                    item["key"] = item["id"] + ""
                    item["index"] = (page - 1) * pageSize + index + 1
                    return item
                })
                console.log(res.data.res)
                setpagedata(res.data.res.pagedata)
                setData(temdata)
            } else {
                message.error(res.data.res)
            }
        }, (res) => {
            setLoading(false)
            message.error("通讯错误")
            console.log(res)
        })
    }
    const [form] = Form.useForm()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const onFinish = (values) => {
        let {type, value} = values
        if (type === "id") {
            allSearchs.current = {number: value}
        } else {
            allSearchs.current = {name: value}
        }

        getdata()
    }
    const showModal = () => {
        getdata()
        setIsModalOpen(true)
    }
    const handleCancel = () => {
        form.setFieldValue("value", "")
        setLoading(true)
        allSearchs.current = {}
        allSelects.current = {}
        setData([])
        setIsModalOpen(false)
    }
    const handlePageChange = (page, pageSize) => {
        setLoading(true);
        getdata("BUG", page, pageSize);
        setcurrentpage(page)
    }
    const handleSearch = () => {
        form.submit()
    }
    const handleDoubleClick=(record)=>{
        onChange(record.number)
        setcompanyName(record.name)
        handleCancel()
    }
    const columns = [
        {
            title: '序号',
            dataIndex: 'index', key: 'index', width: 50, render(text, record) {
                return text
            }
        },
        {
            title: '编号',
            dataIndex: 'number', key: 'number', width: 80, render(text, record) {
                return text
            }
        },
        {
            title: '公司名称',
            key: 'name',
            dataIndex: 'name',
            width: 160,
            ellipsis: {
                showTitle: false,
            },
            render(text, record) {
                return <Tooltip placement="topLeft" title={text}>
                    {text}
                </Tooltip>

            }
        },
        {
            title: "Logo", key: "logo", dataIndex: 'logo', width: 90, render(text, record) {
                return (<Image
                    style={{objectFit: "cover", objectPosition: ""}}
                    fallback={GlobalData.AppServerIp + (record.gender === "♀" ? "/EmployeesImages/female.png" : "/EmployeesImages/male.png")}
                    width={40}
                    height={40}
                    src={GlobalData.AppServerIp + "/CompanyLogo/" + JSON.parse(text)[0]}
                />)
            }
        },
        {
            title: 'EN',
            ellipsis: {
                showTitle: false,
            },
            dataIndex: 'enname', key: 'enname', width: 100, render(text, record) {
                return <Tooltip placement="topLeft" title={text}>
                    {text}
                </Tooltip>
            }
        }
    ]
    return <>
        <Input readOnly value={companyName} style={{cursor: "pointer"}} onClick={showModal}></Input>
        <Modal title="公司字典" open={isModalOpen} onCancel={handleCancel} width={900} destroyOnClose
               footer={[]}>
            <Form
                form={form}
                initialValues={{}}
                labelWrap
                labelCol={{span: 10}}
                wrapperCol={{span: 14}}
                layout="inline"
                onFinish={onFinish}
            >
                <Form.Item
                    label="检索字段"
                    name="type"
                    initialValue="name"
                    rules={[
                        {
                            required: true,
                            message: "选择要检索的字段"
                        },
                    ]}
                >
                    <Select style={{
                                width: 160,
                            }}
                            options={[
                                {
                                    value: 'id',
                                    label: '公司ID',
                                },
                                {
                                    value: 'name',
                                    label: '公司名称',
                                }
                            ]}/>
                </Form.Item>
                <Form.Item
                    label="值"
                    name="value"
                    initialValue=""
                >
                    <Input placeholder="回车检索" onPressEnter={handleSearch}/>
                </Form.Item>
                <span>双击行进行选择</span>
            </Form>
            <div style={{width: "100%", height: 440, padding: "10px 0"}}>
                <Table scroll={{y: 380}}
                       pagination={false} size="small"
                       loading={loading} columns={columns}
                       dataSource={data}
                       onRow={record => {
                           return {
                               onDoubleClick: event => {
                                   handleDoubleClick(record)
                               },
                           }
                       }}/>
                <Pagination showTotal={(total) => `总共 ${total} 条`}
                            style={{marginTop: 20}} size="small"
                            total={pagedata.total}
                            current={currentpage}
                            showSizeChanger showQuickJumper
                            defaultPageSize={6}
                            pageSizeOptions={[6, 10, 20]}
                            onChange={(page, pageSize) => {
                                handlePageChange(page, pageSize)
                            }}
                />
            </div>
        </Modal>
    </>
}