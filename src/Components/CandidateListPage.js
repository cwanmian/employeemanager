import {
    Button, Col, Image, message, Pagination, Row, Space, Table, Tag, Tooltip, Upload
} from 'antd'
import {PlusOutlined, CaretRightOutlined, FilterFilled, UploadOutlined} from '@ant-design/icons'
import React, {Fragment, useEffect, useRef, useState} from 'react'
import BugTableRowExpan from "./BugTableRowExpan"
import "./CandidateListPage.css"
import TextareaConfirm from "./TextareaConfirm";
import DateSelector from "./DateSelector";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import Selector from "./Selector";
import FilterSearchComp from "./FilterSearchComp";
import "../assets/font-awesome-4.7.0/css/font-awesome.min.css"
import ResizableTitle from "./ResizableTitle"
import {GlobalData} from "../GlobalData";
import PersonDetailData from "./PersonDetailData";
import CommentsPopContent from "./CommentsPopContent";
import moment from "moment";

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
    const getdata = (type, page = 1, pageSize = 20) => {
        setcurrentpage(page)
        axios.post("/CandidateList", {
            search: JSON.stringify(allsearchs.current), page, pageSize, filter: JSON.stringify(allselects.current)
        },).then((res) => {
            settableloading(false)
            if (res.data.code === 200) {
                let temrowkeys = []
                let temdata = res.data.res.data.map((item, index) => {
                    let temempcompany = []
                    let temempComments = []
                    res.data.res.empcompanylist.forEach((itm, idx) => {
                        if (itm.uid === item.uid) {
                            temempcompany.push(itm)
                        }
                    })
                    res.data.res.employeesCommentsList.forEach((itm, idx) => {
                        if (itm.uid === item.uid) {
                            temempComments.push(itm)
                        }
                    })
                    item["companylist"] = temempcompany
                    item["commentslist"] = temempComments
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
            message.error("????????????")
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
        //??????????????????????????????filteredValue
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
            message.warn("???????????????")
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
        index: "??????",
        name: "??????",
        gender: "??????",
        tel: "??????",
        base: "????????????",
        photo: "??????",
        birth: "????????????",
        email: "????????????",
    })
    const columns = [
        {
            title: '??????', align: "center", width: 50, dataIndex: 'index', key: 'index', render(text, record) {
                return (<>
                    <Row justify="center" style={{cursor: "pointer"}} align="middle" onClick={(e) => {
                        togglerablerow(e, record)
                    }}>

                        <CaretRightOutlined className="icon-CaretRightOutlined icon"/>
                        <a>??????</a>

                    </Row>

                </>)
            }, fixed: "left"
        },
        {
            title: '??????',
            key: 'name',
            dataIndex: 'name',
            width: 60,
            fixed: fixtable,
            filterIcon: (filted) => {
                return getFilterIcon(filted, "search")
            },
            filteredValue: allFilterInfo.current.name || null,
            filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters}) => <FilterSearchComp
                selectedKeys={selectedKeys} setSelectedKeys={setSelectedKeys} confirm={confirm} col="name"
                SearchFilterreset={SearchFilterreset} handlesearch={handleSearch}/>,
            render(text, record) {
                return <Button style={{paddingLeft: 0}} type="link" onClick={() => {
                    console.log("??????id", record.id)
                    dispatch({
                        type: "addBodyItem", data: {
                            title: record.name,
                            content: <PersonDetailData id={record.id}/>,
                            key: record.id,
                        }
                    })
                    dispatch({type: "setActiveKey", data: record.id})
                    dispatch({type: "setMenuActiveKey", data: record.id})
                }}><span style={{display:"inline-block",width:60,overflow:"hidden",textOverflow:"ellipsis"}}>{text}{record.gender === "???" ? GlobalData.maleicon() : GlobalData.femaleicon()}</span></Button>
            }
        },
        // {
        //     title: "??????", key: "photo", dataIndex: 'photo', width: 120, render(text, record) {
        //         return (<Image
        //             style={{clipPath: "circle(36px at 36px 36px)", objectFit: "cover", objectPosition: ""}}
        //             fallback={GlobalData.AppServerIp + (record.gender === "???" ? "/EmployeesImages/female.png" : "/EmployeesImages/male.png")}
        //             width={72}
        //             height={72}
        //             src={GlobalData.AppServerIp + "/EmployeesImages/" + JSON.parse(text)[0]}
        //         />)
        //     }
        // },
        /*{
            title: '??????',
            key: 'gender',
            width: 60,
            filterSearch: true,
            filterIcon: (filted) => {
                return getFilterIcon(filted, "select")
            },
            filteredValue: allFilterInfo.current.gender || null, filters: [
                {
                    text: '???', value: '???',
                },
                {
                    text: '???', value: '???',
                }],
            dataIndex: 'gender',
            render: (text, record) => {
                return text === "???" ? GlobalData.maleicon({size: 25}) : GlobalData.femaleicon()
            },
        },*/
        /*{
            title: '??????',
            key: 'birth',
            dataIndex: 'birth',
            width: 40,
            render: (text, record) => (moment().format("YYYY") - moment(text, "YYYY-MM").format("YYYY")),
        },*/
        // {
        //     title: '??????',
        //     key: 'tel',
        //     dataIndex: 'tel',
        //     width: 140,
        //     filterIcon: (filted) => {
        //         return getFilterIcon(filted, "search")
        //     },
        //     filteredValue: allFilterInfo.current.tel || null,
        //     filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters}) => <FilterSearchComp
        //         selectedKeys={selectedKeys} setSelectedKeys={setSelectedKeys} confirm={confirm} col="tel"
        //         SearchFilterreset={SearchFilterreset} handlesearch={handleSearch}/>,
        //     render(text, record) {
        //         return <TextareaConfirm text={text} col="tel" id={record.id}/>
        //     }
        // },
        {
            title: '????????????', dataIndex: 'companylist', key: 'companylist', width: 160,
            ellipsis: {
                showTitle: false,
            }, render(text, record) {
                return <Tooltip placement="topLeft" title={text.length > 0 ? text[0].company : "???"}>
                    {text.length > 0 ? text[0].company : ""}
                </Tooltip>
            }
        },
        {
            title: '??????',
            ellipsis: {
                showTitle: false,
            },
            dataIndex: 'companylist', key: 'companylist', width: 100, render(text, record) {
                return <Tooltip placement="topLeft" title={text.length > 0 ? text[0].zhiwei : "???"}>
                    {text.length > 0 ? text[0].zhiwei : ""}
                </Tooltip>
            }
        },
        {
            title: '????????????', dataIndex: 'commentslist', key: 'commentslist', width: 500, render(text, record) {
                return <CommentsPopContent name={record.name} list={record.commentslist}/>
            }
        },
        {
            title: '??????',
            ellipsis: {
                showTitle: false,
            }, dataIndex: 'companylist', key: 'companylist', width: 100, render(text, record) {
                return <Tooltip placement="topLeft" title={text.length > 0 ? text[0].field : "???"}>
                    {text.length > 0 ? text[0].field : ""}
                </Tooltip>
            }
        },
        {
            title: '??????',
            ellipsis: {
                showTitle: false,
            },
            dataIndex: 'companylist', key: 'companylist', width: 100, render(text, record) {
                return <Tooltip placement="topLeft" title={text.length > 0 ? text[0].stage : "???"}>
                    {text.length > 0 ? text[0].stage : ""}
                </Tooltip>
            }
        },
        {
            title: '??????', dataIndex: 'base', key: 'base', width: 100, render(text, record) {
                return JSON.parse(text).map((item, index) => {
                    return <Tag key={index} color="blue">{item}</Tag>
                })
            }
        },
        {
            title: '??????', align: "center", width: 70, dataIndex: 'index', key: 'index', render(text, record) {
                return text
            }
        },


        // {
        //     title: '???????????? ',
        //     key: 'email',
        //     dataIndex: 'email',
        //     width: 260,
        //     render: (text, record) => (<TextareaConfirm text={text} col="email" id={record.id}/>),
        // }
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
    const uploadfileprops = {
        name: 'file',
        accept: ".xlsx",
        data: (file) => ({filename: file.uid}),
        action: GlobalData.AppServerIp + '/addUploadData',
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
    return (<Fragment>
        <div>
            {Object.keys(allsearchs.current).map((item) => {
                return allsearchs.current[item] !== null ? <Tag key={item} closable onClose={() => {
                    removeSearchItem(item)
                }}>
                    {colnames.current[item]} ?????? {allsearchs.current[item]}
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
                            onClick={showAddBugModal}>??????</Button>
                    <Button type="ghost" style={{margin: 10}} onClick={clearAllFilters}>??????</Button></Col>
                <Col>
                    <span style={{display: "inline-flex"}}>
                    <Upload {...uploadfileprops}>
                        <Button disabled={uploadDataFileLoading} loading={uploadDataFileLoading} type="ghost"
                                style={{margin: "10px 5px"}}
                                icon={<UploadOutlined/>} onClick={() => {
                            dispatch({type: "openUpdateDataFileModal", data: true})
                        }}>{uploadprogress}??????excel</Button>
                    </Upload>
                </span>
                    <Button type="ghost" style={{margin: "10px 0"}}
                            href={GlobalData.AppServerIp + "/demofile/??????.xlsx"}>????????????</Button>
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
        <Pagination showTotal={(total) => `?????? ${total} ???`}
                    style={{marginTop: 20}} size="small"
                    total={pagedata.total}
                    current={currentpage}
                    showSizeChanger showQuickJumper
                    defaultPageSize={20}
                    onChange={(page, pageSize) => {
                        handlePageChange(page, pageSize)
                    }}
        />
    </Fragment>)
}

export default App