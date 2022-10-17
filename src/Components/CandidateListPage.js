import {
    Button, Col, Image, message, Pagination, Row, Space, Table, Tag
} from 'antd'
import {PlusOutlined, CaretRightOutlined, SearchOutlined, FilterFilled} from '@ant-design/icons'
import React, {Fragment, useEffect, useRef, useState} from 'react'
import BugTableRowExpan from "./BugTableRowExpan"
import "./CandidateListPage.css"
import TextareaConfirm from "./TextareaConfirm";
import IamgesCell from "./IamgesCell";
import DateSelector from "./DateSelector";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import Switcher from "./Switcher";
import Selector from "./Selector";
import FilterSearchComp from "./FilterSearchComp";
import "../assets/font-awesome-4.7.0/css/font-awesome.min.css"
import ResizableTitle from "./ResizableTitle"
import ChildTable from "./ChildTable";
import {GlobalData} from "../GlobalData";
import Body1 from "../Body1";
import PersonDetailData from "./PersonDetailData";
import UpdateFileModal from "./UpdateFileModal";

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
    const allsearchs = useRef({})
    const allselects = useRef({})
    const getdata = (type, page = 1, pageSize = 10) => {
        setcurrentpage(page)
        axios.post("/CandidateList", {
            search: JSON.stringify(allsearchs.current), page, pageSize, filter: JSON.stringify(allselects.current)
        },).then((res) => {
            settableloading(false)
            if (res.data.code === 200) {
                let temrowkeys = []
                let temdata = res.data.res.data.map((item, index) => {
                    let temempcompany = []
                    res.data.res.empcompanylist.forEach((itm, idx) => {
                        if (itm.uid === item.uid) {
                            temempcompany.push(itm)
                        }
                    })
                    // let temempedu=[]
                    // res.data.res.empedulist.forEach((itm,idx)=>{
                    //     if(itm.uid===item.uid){
                    //         temempedu.push(itm)
                    //     }
                    // })

                    item["companylist"] = temempcompany
                    // item["edulist"] = temempedu
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
    const [fixtable, setfixtable] = useState(window.innerWidth < 500 ? false : true)
    const [data, setdata] = useState([])
    const [pagedata, setpagedata] = useState({})
    const [tableloading, settableloading] = useState(true)
    const [expandedRowKeys, setexpandedRowKeys] = useState([])
    const [currentpage, setcurrentpage] = useState(1)
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
    const colnames = useRef({
        index: "序号",
        name: "姓名",
        gender: "性别",
        tel: "电话",
        base: "工作地点",
        photo: "照片",
        birth: "出生年月",
        email: "电子邮箱",
    })
    const columns = [
        {
            title: '序号', align: "center", width: 100, dataIndex: 'index', key: 'index', render(text, record) {
                return (<>
                    <Row justify="center" style={{cursor: "pointer"}} align="middle" onClick={(e) => {
                        togglerablerow(e, record)
                    }}>

                        <CaretRightOutlined className="icon-CaretRightOutlined icon"/>
                        <a>{record.index}</a>
                    </Row>
                    <Row justify="center">
                        <Button type="link" onClick={() => {
                            dispatch({
                                type: "addBodyItem", data: {
                                    title: record.name,
                                    content: <PersonDetailData/>,
                                    key: record.id,
                                }
                            })
                            dispatch({type: "setActiveKey", data: record.id})
                            dispatch({type: "setMenuActiveKey", data: record.id})
                        }}>详情</Button>
                    </Row>
                </>)
            }, fixed: "left"
        },
        {
            title: '姓名',
            key: 'name',
            dataIndex: 'name',
            width: 90,
            fixed: fixtable,
            filterIcon: (filted) => {
                return getFilterIcon(filted, "search")
            },
            filteredValue: allFilterInfo.current.name || null,
            filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters}) => <FilterSearchComp
                selectedKeys={selectedKeys} setSelectedKeys={setSelectedKeys} confirm={confirm} col="name"
                SearchFilterreset={SearchFilterreset} handlesearch={handleSearch}/>,
            render(text, record) {
                return <TextareaConfirm text={text} col="name" id={record.id}/>
            }
        },
        {
            title: "照片", key: "photo", dataIndex: 'photo', width: 120, render(text, record) {
                return (<Image
                    style={{clipPath: "circle(36px at 36px 36px)", objectFit: "cover", objectPosition: ""}}
                    fallback={GlobalData.AppServerIp + (record.gender === "♀" ? "/EmployeesImages/female.png" : "/EmployeesImages/male.png")}
                    width={72}
                    height={72}
                    src={GlobalData.AppServerIp + "/EmployeesImages/" + JSON.parse(text)[0]}
                />)
            }
        },
        {
            title: '性别',
            key: 'gender',
            width: 60,
            filterSearch: true,
            filterIcon: (filted) => {
                return getFilterIcon(filted, "select")
            },
            filteredValue: allFilterInfo.current.gender || null, filters: [
                {
                    text: '男', value: '♂',
                },
                {
                    text: '女', value: '♀',
                }],
            dataIndex: 'gender',
            render: (text, record) => {
                return <Selector col="gender" id={record.id} value={text}/>
            },
        },
        {
            title: '电话',
            key: 'tel',
            dataIndex: 'tel',
            width: 140,
            filterIcon: (filted) => {
                return getFilterIcon(filted, "search")
            },
            filteredValue: allFilterInfo.current.tel || null,
            filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters}) => <FilterSearchComp
                selectedKeys={selectedKeys} setSelectedKeys={setSelectedKeys} confirm={confirm} col="tel"
                SearchFilterreset={SearchFilterreset} handlesearch={handleSearch}/>,
            render(text, record) {
                return <TextareaConfirm text={text} col="tel" id={record.id}/>
            }
        },
        {
            title: '工作地点', dataIndex: 'base', key: 'base', width: 80, render(text, record) {
                return <TextareaConfirm text={text} col="base" id={record.id}/>
            }
        },
        {
            title: '现就职', dataIndex: 'companylist', key: 'companylist', width: 280, render(text, record) {
                return text[0].company
            }
        },
        {
            title: '出生年月',
            key: 'birth',
            dataIndex: 'birth',
            width: 100,
            render: (text, record) => (<DateSelector value={text} col="birth" id={record.id} clearable={false}/>),
        },
        {
            title: '电子邮箱 ',
            key: 'email',
            dataIndex: 'email',
            width: 260,
            render: (text, record) => (<TextareaConfirm text={text} col="email" id={record.id}/>),
        }]
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
    const togglerablerow = (e, record) => {
        let contentnode = e.currentTarget.parentNode.parentNode.nextSibling.firstChild.firstChild.firstChild
        if (contentnode.style.height === "0px") {
            e.currentTarget.firstChild.className = "icon-CaretRightOutlined icon icon-CaretRightOutlined-rotate"
            contentnode.style.height = contentnode.scrollHeight + "px"
            contentnode.parentNode.parentNode.className = "ant-table-cell"
        } else {
            e.currentTarget.firstChild.className = "icon-CaretRightOutlined icon"
            contentnode.style.height = "0px"
            contentnode.parentNode.parentNode.className = "ant-table-cell td-noborder"
        }
    }
    const handlePageChange = (page, pageSize) => {
        settableloading(true);
        getdata("BUG", page, pageSize);
        setcurrentpage(page)
    }
    const showAddBugModal = () => {
        dispatch({type: "open", data: ""})
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
            <Row justify="space-between">
                <Col>
                    <Button type="primary" icon={<PlusOutlined/>} style={{margin: 10}}
                            onClick={showAddBugModal}>添加</Button>
                    <Button type="ghost" style={{margin: 10}} onClick={clearAllFilters}>刷新表格</Button></Col>
                <Col>
                    <Button type="ghost" style={{margin: "10px 5px"}} onClick={() => {
                        dispatch({type: "openUpdateDataFileModal", data: true})
                    }}>导入excel</Button>
                    <Button type="ghost" style={{margin: "10px 0"}}
                            href={GlobalData.AppServerIp + "/demofile/模板.xlsx"}>下载模板</Button>
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
                    onChange={(page, pageSize) => {
                        handlePageChange(page, pageSize)
                    }}
        />
        <UpdateFileModal/>
    </Fragment>)
}

export default App