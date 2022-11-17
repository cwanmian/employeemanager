import {
    Button, Col, Image, message, Modal, Pagination, Row, Space, Table, Tag, Tooltip, Upload
} from 'antd'
import {
    PlusOutlined,
    CaretRightOutlined,
    FilterFilled,
    UploadOutlined,
    ExclamationCircleOutlined
} from '@ant-design/icons'
import React, {Fragment, useEffect, useRef, useState} from 'react'
import BugTableRowExpan from "./BugTableRowExpan"
import "./CompanyListPage.css"
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import FilterSearchComp from "./FilterSearchComp";
import "../assets/font-awesome-4.7.0/css/font-awesome.min.css"
import ResizableTitle from "./ResizableTitle"
import {GlobalData} from "../GlobalData";
import AddCompanyForm from "./AddCompanyForm";
import EditCompanyForm from "./EditCompanyForm";

const App = () => {
    useEffect(() => {
        console.log("tablestart")
        getdata()
        window.addEventListener("resize", () => {
            if (window.innerWidth < 500) {
                setfixtable(false)
                setfinalcolumns((cols) => {
                    cols.map((itm, index) => {
                        if (index === 1) {
                            itm.fixed = false
                        }
                        return itm
                    })
                    return [...cols]
                })
            } else {
                setfixtable(true)
                setfinalcolumns((cols) => {
                    cols.map((itm, index) => {
                        if (index === 1) {
                            itm.fixed = true
                        }
                        return itm
                    })
                    return [...cols]
                })
            }
        })
    }, [])
    const modaladdform=useRef()
    const modaleditform=useRef()
    const allsearchs = useRef({})
    const allselects = useRef({})
    const getdata = (type, page = 1, pageSize = 20) => {
        setcurrentpage(page)
        axios.post("/CompanyList", {
            search: JSON.stringify(allsearchs.current), page, pageSize, filter: JSON.stringify(allselects.current)
        },).then((res) => {
            settableloading(false)
            if (res.data.code === 200) {
                let temrowkeys = []
                let temdata = res.data.res.data.map((item, index) => {
                    item["key"] = item["id"] + ""
                    item["index"] = (page - 1) * pageSize + index + 1
                    temrowkeys.push(item["key"])
                    return item
                })
                console.log(res.data.res)
                setexpandedRowKeys(temrowkeys)
                setpagedata(res.data.res.pagedata)
                setdata(temdata)
            } else {
                message.error(res.data.res)
            }
        }, (res) => {
            settableloading(false)
            message.error("通讯错误")
            console.log(res)
        })
    }
    const dispatch = useDispatch()
    const [uploadDataFileLoading, setuploadDataFileLoading] = useState(false)
    const [fixtable, setfixtable] = useState(window.innerWidth < 500 ? false : true)
    const [data, setdata] = useState([])
    const [pagedata, setpagedata] = useState({})
    const [tableloading, settableloading] = useState(true)
    const [expandedRowKeys, setexpandedRowKeys] = useState([])
    const [currentpage, setcurrentpage] = useState(1)
    const [uploadprogress, setuploadprogress] = useState("")
    const allFilterInfo = useRef({})
    const handleTableChange = (pagination, filters, sorter) => {
        settableloading(true)
        allFilterInfo.current = {...filters}
        //更新筛选状态每一列的filteredValue
        setfinalcolumns((cols) => {
            Object.keys(allFilterInfo.current).forEach((itm, idx) => {
                cols.map((col) => {
                    if (col.key === itm) {
                        col.filteredValue = allFilterInfo.current[itm]
                    }
                    return col
                })
            })
            return [...cols]
        })
        allselects.current = {...filters}
        Object.keys(filters).forEach((item) => {
            Object.keys(allsearchs.current).forEach((itm) => {
                if (item === itm) {
                    allselects.current[item] = null
                }
            })
        })
        getdata()
    }
    const clearAllFilters = () => {
        settableloading(true)
        allsearchs.current = {}
        allselects.current = {}
        setfinalcolumns((cols) => {
            Object.keys(allFilterInfo.current).forEach((itm, idx) => {
                allFilterInfo.current[itm] = null
                cols.map((col) => {
                    if (col.key === itm) {
                        col.filteredValue = null
                    }
                    return col
                })
            })
            return [...cols]
        })
        getdata()
    }
    const handleSearch = (col, data, confirm) => {
        console.log("handleSearch", data)
        if (allsearchs.current[col] !== (data[0] ? data[0] : null)) {
            console.log(data)
            allsearchs.current[col] = data[0] ? data[0] : null
            confirm()
        } else {
            message.warn("数据未改变")
        }
    }
    const handleResize = (col) => {
        return (e, {size}) => {
            setfinalcolumns((columns) => {
                columns.forEach((item) => {
                    if (item === col) {
                        item.width = size.width
                    }
                })
                return [...columns]
            })
        }
    }
    const SearchFilterreset = (col, confirm) => {
        settableloading(true)
        allsearchs.current[col] = null
        confirm()
    }
    const getFilterIcon = (filtered, type) => {
        switch (type) {
            case "search":
                return (<i style={{
                    fontSize: 16, color: filtered ? '#1890ff' : undefined,
                }} className="	fa fa-search"/>)
            case "select":
                return (<FilterFilled style={{
                    fontSize: 16, color: filtered ? '#1890ff' : undefined,
                }}/>)
        }

    }
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isModalOpen2, setIsModalOpen2] = useState(false)
    const [editdata, seteditdata] = useState({a:2})
    const deleteCompany=(id)=>{
        Modal.confirm({
            title: '确认删除么？',
            icon: <ExclamationCircleOutlined />,
            okText: '确认',
            cancelText: '取消',
            onOk(){
                axios.post("/deleteCompany",{id}).then((res)=>{
                    if(res.data.code===200){
                        message.success("delete success")
                        getdata()
                    }else{
                        message.error(res.data.res)
                    }
                },(res)=>{
                    message.error(res.data)
                })
            }
        });
    }
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        modaladdform.current.submit()
        // setIsModalOpen(false)
    };
    const handleCancel = () => {
        setIsModalOpen(false)
    };
    const handleOk2 = () => {
        modaleditform.current.submit()
        // setIsModalOpen(false)
    };
    const handleCancel2 = () => {
        setIsModalOpen2(false)
    };
    const colnames = useRef({
        index: "序号",
        name: "公司名称"
    })
    const columns = [
        {
            title: '操作', align: "center", width: 90, dataIndex: 'index', key: 'index', render(text, record) {
                return <Row justify="center" style={{cursor: "pointer"}} align="middle">
                    <Button onClick={()=>{setIsModalOpen2(true);seteditdata({...record})}} style={{padding:3}} type="link">编辑</Button>
                    <Button onClick={()=>{deleteCompany(record.id)}} style={{padding:3}} type="link" danger>删除</Button>
                </Row>

            }, fixed: "left"
        },
        {
            title: '公司名称',
            key: 'name',
            dataIndex: 'name',
            width: 160,
            ellipsis: {
                showTitle: false,
            },
            fixed: fixtable,
            filterIcon: (filted) => {
                return getFilterIcon(filted, "search")
            },
            filteredValue: allFilterInfo.current.name || null,
            filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters}) => <FilterSearchComp
                selectedKeys={selectedKeys} setSelectedKeys={setSelectedKeys} confirm={confirm} col="name"
                SearchFilterreset={SearchFilterreset} handlesearch={handleSearch}/>,
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
        },
        {
            title: '编号',
            ellipsis: {
                showTitle: false,
            },
            dataIndex: 'number', key: 'number', width: 130, render(text, record) {
                return <Tooltip placement="topLeft" title={text}>
                    {text}
                </Tooltip>
            }
        },
        {
            title: 'WebSite', dataIndex: 'web', key: 'web', width: 300, render(text, record) {
                return <a href={text} target="_blank">{text}</a>
            }
        },
        {
            title: 'Address',
            ellipsis: {
                showTitle: false,
            }, dataIndex: 'address', key: 'address', width: 100, render(text, record) {
                return <Tooltip placement="topLeft" title={text}>
                    {text}
                </Tooltip>
            }
        },
        {
            title: 'Notes',
            ellipsis: {
                showTitle: false,
            },
            dataIndex: 'notes', key: 'notes', width: 400, render(text, record) {
                return <Tooltip placement="topLeft" title={text}>
                    {text}
                </Tooltip>
            }
        },
        {
            title: 'Type', dataIndex: 'type', key: 'type', width: 100, render(text, record) {
                return text
            }
        },
        {
            title: 'Stock', width: 70, dataIndex: 'stock', key: 'stock', render(text, record) {
                return text
            }
        }
    ]
    const removeSearchItem = (item) => {
        allsearchs.current[item] = null
        allFilterInfo.current[item] = null
        setfinalcolumns((cols) => {
            Object.keys(allFilterInfo.current).forEach((itm, idx) => {
                cols.map((col) => {
                    if (col.key === itm) {
                        col.filteredValue = allFilterInfo.current[itm]
                    }
                    return col
                })
            })
            return [...cols]
        })
        getdata()
    }
    const removeSelectItem = (item) => {
        allselects.current[item] = null
        allFilterInfo.current[item] = null
        setfinalcolumns((cols) => {
            Object.keys(allFilterInfo.current).forEach((itm, idx) => {
                cols.map((col) => {
                    if (col.key === itm) {
                        col.filteredValue = allFilterInfo.current[itm]
                    }
                    return col
                })
            })
            return [...cols]
        })
    }
    const [finalcolumns, setfinalcolumns] = useState(columns.map((col, index) => {
        col.onHeaderCell = () => ({width: col.width, onResize: handleResize(col)})
        return col
    }))
    const handlePageChange = (page, pageSize) => {
        settableloading(true);
        getdata("BUG", page, pageSize);
        setcurrentpage(page)
    }
    const uploadfileprops = {
        name: 'file',
        accept: ".xlsx",
        data: (file) => ({filename: file.uid}),
        action: GlobalData.AppServerIp + '/addUploadCompanyData',
        showUploadList: false,
        onChange(info) {
            setuploadDataFileLoading(true)
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
                setuploadDataFileLoading(false)
                setuploadprogress("")
            }
            if (info.file.status === 'uploading') {
                setuploadprogress(info.file.percent.toString().substring(0, 4) + "%")
            }
            console.log(info)
            if (info.file.status === 'done') {
                getdata()
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        }
    }
    const getaddForm=(form)=>{
        modaladdform.current=form
    }
    const geteditForm=(form)=>{
        modaleditform.current=form
    }
    return (<Fragment>
        <div>
            {Object.keys(allsearchs.current).map((item) => {
                return allsearchs.current[item] !== null ? <Tag key={item} closable onClose={() => {
                    removeSearchItem(item)
                }}>
                    {colnames.current[item]} 包含 {allsearchs.current[item]}
                </Tag> : ""
            })}
            {Object.keys(allselects.current).map((item) => {
                return allselects.current[item] !== null ? <Tag key={item} closable onClose={() => {
                    removeSelectItem(item)
                }}>
                    {colnames.current[item]}={allselects.current[item]}
                </Tag> : ""
            })}
        </div>
        <div style={{overflowX: "auto", padding: 0, whiteSpace: "nowrap"}}>
            <Row justify="space-between" wrap={false}>
                <Col>
                    <Button type="primary" icon={<PlusOutlined/>} style={{margin: 10}}
                            onClick={showModal}>添加</Button>
                    <Button type="ghost" style={{margin: 10}} onClick={clearAllFilters}>刷新</Button></Col>
                <Col>
                    <span style={{display: "inline-flex"}}>
                    <Upload {...uploadfileprops}>
                        <Button disabled={uploadDataFileLoading} loading={uploadDataFileLoading} type="ghost"
                                style={{margin: "10px 5px"}}
                                icon={<UploadOutlined/>} onClick={() => {
                            dispatch({type: "openUpdateDataFileModal", data: true})
                        }}>{uploadprogress}导入excel</Button>
                    </Upload>
                </span>
                    <Button type="ghost" style={{margin: "10px 0"}}
                            href={GlobalData.AppServerIp + "/demofile/公司模板.xlsx"}>下载模板</Button>
                </Col>
            </Row>
        </div>
        <Table pagination={false}
               onChange={handleTableChange}
               loading={tableloading}
               components={{
                   header: {
                       cell: ResizableTitle
                   }
               }}
               columns={finalcolumns} dataSource={data} size="small" scroll={{
            x: 1200,
            y: useSelector((state) => state.IsFullScreenReducer.isFullScreen) ? window.innerHeight - 279 : window.innerHeight - 343
        }} expandable={{
            expandedRowKeys: expandedRowKeys,
            expandedRowRender: (record) => (<BugTableRowExpan {...record}/>),
            expandedRowClassName: () => ("expandedRow"),
            showExpandColumn: false,
            expandRowByClick: true
        }}/>
        <Pagination showTotal={(total) => `总共 ${total} 条`}
                    style={{marginTop: 20}} size="small"
                    total={pagedata.total}
                    current={currentpage}
                    showSizeChanger showQuickJumper
                    defaultPageSize={20}
                    onChange={(page, pageSize) => {
                        handlePageChange(page, pageSize)
                    }}
        />
        <Modal title="新增公司" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width={900} destroyOnClose okText="提交">
            <AddCompanyForm getForm={getaddForm} closeModal={()=>{handleCancel();getdata();}}/>
        </Modal>
        <Modal title="修改公司" open={isModalOpen2} onOk={handleOk2} onCancel={handleCancel2} width={900} destroyOnClose okText="提交">
            <EditCompanyForm getForm={geteditForm} initdata={editdata} closeModal={()=>{handleCancel2();getdata();}}/>
        </Modal>
    </Fragment>)
}

export default App