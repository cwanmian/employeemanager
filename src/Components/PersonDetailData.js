import React, {useEffect, useState} from "react";
import axios from "axios";
import {Badge, Button, Card, Col, Divider, Image, message, Row, Space, Spin, Tag, Timeline} from "antd";
import {GlobalData} from "../GlobalData";
import {useDispatch, useSelector} from "react-redux";
import "./PersonDetailData.css"
import {HomeFilled, MailFilled, PhoneFilled, PhoneOutlined} from "@ant-design/icons";
import moment from "moment/moment";

export default function PersonDetailData({id}) {
    const [loading, setloading] = useState(true)
    const dispatch = useDispatch()
    const [data, setdata] = useState([])
    const [likedata, setlikedata] = useState([])
    const getDetail = (id) => {
        axios.post("/CandidateList", {
            search: JSON.stringify({id}), page: 1, pageSize: 1, filter: JSON.stringify({})
        },).then((res) => {
            if (res.data.code === 200) {
                let temrowkeys = []
                let temdata = res.data.res.data.map((item, index) => {
                    let temempcompany = []
                    let temempComments = []
                    let temempedu = []
                    res.data.res.empcompanylist.forEach((itm, idx) => {
                        if (itm.uid === item.uid) {
                            let endtime = moment(itm.endtime)._isValid ? moment(itm.endtime) : moment()
                            let years = endtime.diff(moment(itm.starttime), "years")
                            let months = endtime.diff(moment(itm.starttime), "months") - years * 12
                            let duration = (years === 0 ? "" : years + "年") + (months === 0 ? "" : months + "个月")
                            itm.duration = duration
                            temempcompany.push(itm)
                        }
                    })
                    res.data.res.employeesCommentsList.forEach((itm, idx) => {
                        if (itm.uid === item.uid) {
                            temempComments.push(itm)
                        }
                    })
                    res.data.res.employeesEduList.forEach((itm, idx) => {
                        if (itm.uid === item.uid) {
                            temempedu.push(itm)
                        }
                    })
                    item["companylist"] = temempcompany
                    item["commentslist"] = temempComments
                    item["employeesEduList"] = temempedu
                    item["key"] = item["id"] + ""
                    temrowkeys.push(item["key"])
                    return item
                })
                console.log(temdata[0])
                setdata(temdata[0])
            } else {
                message.error(res.data.res)
            }
            setloading(false)
        }, (res) => {
            setloading(false)
            message.error("通讯错误")
            console.log(res)
        })
    }
    const getlikeEmployess = () => {
        axios.post("/likeEmployess", {id: id.toString()},).then((res) => {
            if (res.data.code === 200) {
                let temdata = res.data.res.data.map((item, index) => {
                    let temempcompany = []
                    let temempedu = []
                    res.data.res.empcompanylist.forEach((itm, idx) => {
                        if (itm.uid === item.uid) {
                            temempcompany.push(itm)
                        }
                    })
                    res.data.res.employeesEduList.forEach((itm, idx) => {
                        if (itm.uid === item.uid) {
                            temempedu.push(itm)
                        }
                    })
                    item.years = moment().format("YYYY") - moment(item.birth, "YYYY-MM").format("YYYY")
                    item["companylist"] = temempcompany
                    item["employeesEduList"] = temempedu
                    return item
                })
                setlikedata(temdata)
                console.log(temdata)
            } else {
                message.error(res.data.res)
            }
            setloading(false)
        }, (res) => {
            setloading(false)
            message.error("通讯错误")
            console.log(res)
        })
    }
    const toLikeDetail = (item) => {
        dispatch({
            type: "addBodyItem", data: {
                title: item.name,
                content: <PersonDetailData id={item.id}/>,
                key: item.id,
            }
        })
        dispatch({type: "setActiveKey", data: item.id})
        dispatch({type: "setMenuActiveKey", data: item.id})
    }
    useEffect(() => {
        getDetail(id)
        getlikeEmployess()
    }, [])

    return (
        <div style={{
            height: useSelector((state) => state.IsFullScreenReducer.isFullScreen) ? window.innerHeight - 121.5 : window.innerHeight - 185.5,
            overflow: "auto",
            padding: "20px 20px",
            borderTop: "1px solid #e8e8e8"
        }}>
            {loading === true ? <div style={{textAlign: "center"}}><Spin/></div> : (data === [] ? "" :
                <Row style={{
                    minWidth: 1450,
                    width: "100%",
                    paddingRight: 30
                }}>
                    <Col flex="auto" style={{paddingLeft: 20}}>
                        <Row align="middle" style={{boxShadow: "0 0 10px #c8c8c8"}}>
                            <Col style={{width: 150}}>
                                <Image
                                    style={{/*clipPath: "circle(36px at 36px 36px)",*/
                                        objectFit: "cover",
                                        objectPosition: "",
                                        margin: 0
                                    }}
                                    fallback={GlobalData.AppServerIp + (data.gender === "♀" ? "/EmployeesImages/female.png" : "/EmployeesImages/male.png")}
                                    width={120}
                                    height={170}
                                    src={GlobalData.AppServerIp + "/EmployeesImages/" + JSON.parse(data.photo)[0]}
                                />
                            </Col>
                            <Col style={{width: 780}}>
                                <Row style={{marginBottom: 20}}>
                                    <Space size="large">
                                        <span className="litleTile">{data.name}</span>
                                        <span className="litleTile">
                                            {data.gender==="♂"?GlobalData.maleicon({style:{fontSize:16}}):GlobalData.femaleicon()}
                                        </span>
                                        {/* {data.commentslist.length > 0 ?
                                            <span className="customBadge">{data.commentslist[0].comment}</span> : ""}*/}
                                    </Space>
                                </Row>
                                <Row>
                                        <span className="titleItem">{moment().format("YYYY") - moment(data.birth, "YYYY-MM").format("YYYY")}岁  | {JSON.parse(data.base).length > 0 ? JSON.parse(data.base).map((item, index) => {
                                            return <Tag key={index} color="blue">{item}</Tag>
                                        }) : "地点待完善"} | {data.employeesEduList.length > 0 ? data.employeesEduList[0].degree : "教育信息待完善"} | {data.companylist.length > 0 ? "工作年限 " + moment(data.companylist[data.companylist.length - 1].starttime, "YYYY-MM").fromNow(true) : "工作年限待完善"}</span>
                                </Row>
                                <Row>
                                    <span className="titleItem">{data.companylist.length > 0 ?
                                        <span>{data.companylist[0].zhiwei === "" ? "职位待完善" : data.companylist[0].zhiwei} | {data.companylist[0].company}</span> : "无职业信息"}</span>
                                </Row>
                                <Row>
                                    <span className="titleItem"><PhoneFilled/>：{data.tel}       </span>
                                    <span className="titleItem"><MailFilled/>：{data.email}</span>
                                </Row>
                            </Col>
                            <Col style={{
                                flex: "1",
                                backgroundImage: "linear-gradient(to right, #e8e8e8, #ffffff)",
                                padding: "12px 12px",
                                height: 170
                            }}>
                                <Row>
                                    <Space size={"large"}>
                                        <span className="litleTile" style={{fontWeight: "normal"}}>相似人才</span>
                                        <span className="linkTitle" style={{fontWeight: "normal"}}><Button
                                            type="link">更多>></Button></span>
                                    </Space>
                                </Row>
                                <div style={{width: 600, overflowX: "auto", whiteSpace: "nowrap"}}>
                                    {likedata.slice(0, 2).map((item, index) => {
                                        return <div key={index} style={{width: 300, display: "inline-block", whiteSpace: "pre"}}>
                                            <Row style={{padding: "10px 5px"}} align="middle">
                                                <Col>
                                                    <Image style={{objectFit: "cover", borderRadius: 5}} width={80}
                                                           height={90}
                                                           src={GlobalData.AppServerIp + "/EmployeesImages/" + JSON.parse(item.photo)[0]}
                                                           fallback={GlobalData.AppServerIp + (item.gender === "♀" ? "/EmployeesImages/female.png" : "/EmployeesImages/male.png")}
                                                           alt=""/>
                                                </Col>
                                                <Col style={{paddingLeft: 10, cursor: "pointer"}} onClick={() => {
                                                    toLikeDetail(item)
                                                }}>
                                                    <Row style={{fontSize: 18}}>
                                                        {item.name}
                                                    </Row>
                                                    <Row style={{padding: "8px 0"}}>
                                                        <Tag
                                                            color={item.gender === "♂" ? "blue" : "red"}>{data.gender}</Tag> | {item.years}岁
                                                        | {item.employeesEduList.length > 0 ? item.employeesEduList[0].degree : "未查询到学历信息"}
                                                    </Row>
                                                    <Row>
                                                        {item.companylist.length > 0 ? item.companylist[0].company : "未查询到就职公司"}
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </div>
                                    })}

                                </div>
                            </Col>
                        </Row>
                        <Divider/>
                        <Row>
                            <Col style={{width: 900}}>
                                <Row style={{position: "relative"}}>
                                    <span className="litleTile litleTileDot">工作经历</span>
                                </Row>
                                {data.companylist.map((item, index) => {
                                    return <div key={index} style={{marginBottom: 70}}>
                                        <Row style={{marginTop: 30}}>
                                            <div className="callout">
                                                <div className="calloutdot"/>
                                                <span className="calloutItem">{item.company}</span>
                                                <i className="fa fa-bookmark"
                                                   style={{fontSize: 20, margin: 10, color: "#51bcff"}}/>
                                                <span className="calloutItem"
                                                      style={{width: 220,whiteSpace:"pre"}}>{item.starttime}-{item.endtime}  ({item.duration})</span>
                                            </div>
                                        </Row>
                                        <div style={{paddingLeft: 20}}>
                                            <Row style={{marginTop: 10}}>
                                                <span>{item.field === "" ? "" :
                                                    <Tag color="processing">{item.field}</Tag>}</span>
                                            </Row>
                                            <Row style={{marginTop: 15}}>
                                                <span className="litleTile2"
                                                      style={{fontWeight: "normal"}}>{item.zhiwei}</span>
                                            </Row>
                                            <Row style={{marginTop: 20}}>
                                                <Col style={{width: 100}}>
                                                    <span className="litleTile2">工作内容：</span>
                                                </Col>
                                                <Col
                                                    style={{borderLeft: "1px solid #91d5ff", paddingLeft: 10, flex: 1}}>
                                                    <div style={{
                                                        lineHeight: "24px",
                                                        whiteSpace: "pre-wrap"
                                                    }}>{item.notes}</div>
                                                </Col>
                                            </Row>
                                            <Row style={{marginTop: 20}}>
                                                <Col style={{width: 100}}>
                                                    <span className="litleTile2">职责业绩：</span>
                                                </Col>
                                                <Col
                                                    style={{borderLeft: "1px solid #91d5ff", paddingLeft: 10, flex: 1}}>
                                                    <div style={{
                                                        lineHeight: "24px",
                                                        whiteSpace: "pre-wrap"
                                                    }}>{item.stage}</div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                })}
                            </Col>
                            <Col style={{width: 600, borderLeft: "1px solid #f0f0f0", marginLeft: 30, paddingLeft: 30}}>
                                <Row style={{position: "relative", marginBottom: 40}}>
                                    <span className="litleTile litleTileDot">寻访记录</span>
                                </Row>
                                <Row>
                                    <div style={{width: "600px"}}>
                                        <Timeline mode="left" style={{marginLeft: "-400px"}}>
                                            {data.commentslist.map((itm, idx) => {
                                                return <Timeline.Item key={idx} label={itm.time}>
                                                    <p>{itm.adviser}</p>
                                                    <p>{itm.comment}</p>
                                                </Timeline.Item>
                                            })}
                                        </Timeline>
                                    </div>
                                </Row>
                            </Col>
                        </Row>
                        <Divider/>
                        <Row>
                            <Col flex="auto">
                                <Row>
                                    <span className="litleTile litleTileDot">教育信息</span>
                                </Row>
                            </Col>
                        </Row>
                        {data.employeesEduList.map((item, index) => {
                            return <Row key={index} style={{marginTop: 20, paddingLeft: 20}}>
                                <Col>
                                    <span style={{width: 120}} className="litleTile3">2013-2017</span>
                                </Col>
                                <Col>
                                    <span style={{width: 160}} className="litleTile3">{item.university}</span>
                                </Col>
                                <Col>
                                    <span style={{width: 120}} className="litleTile3">{item.major}</span>
                                </Col>
                                <Col>
                                    <span style={{width: 80}} className="litleTile3">{item.degree}</span>
                                </Col>
                            </Row>
                        })}
                    </Col>
                </Row>)}


        </div>
    )
}