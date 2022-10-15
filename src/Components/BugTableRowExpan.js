import {Collapse, Row, Col, DatePicker, Timeline, Switch} from 'antd';
import {EnterOutlined} from "@ant-design/icons";
import moment from 'moment';
import "./BugTableRowExpan.css"
import 'moment/locale/zh-cn';
import DateSelector from "./DateSelector";
import {useEffect,createRef} from "react";
import {useSelector} from "react-redux";

const {Panel} = Collapse;
const dateFormat = 'YYYY-MM-DD';
const App = ({startdate, planoverdate, id}) => {
    const con=createRef()
    useEffect(() => {
        con.current.parentNode.parentNode.className="ant-table-cell td-noborder"
    }, [])
    function onChange() {

    }

    function prevent(e) {
        e.stopPropagation()
    }

    const Header = () => {
        return ("")
    }
    return (
        <div ref={con} className="rowExspanCon" style={{height:0}}>
            <Row justify="center">
                <Col span={23}>
                    <Row style={{height:80}} align="middle">
                        <Col style={{width: 40}}>
                            <EnterOutlined className="entericon"/>
                        </Col>
                        <Col>
                            <Row justify="start">
                                <Col>
                                    <a>提交时间:</a>
                                    <span onClick={prevent}>
                                    <DateSelector value={startdate} clearable={false}/>
                        </span>
                                </Col>
                                <Col>
                                    <a>计划完成:</a>
                                    <span onClick={prevent}>
                                    <DateSelector value={planoverdate} clearable={false}/>
                        </span>
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                </Col>

            </Row>
            <Row>
                <Timeline mode="left" className="timeline" style={{paddingLeft: "50px"}}>
                    <Timeline.Item>2022-09-22 10:00:32 创建记录</Timeline.Item>
                    <Timeline.Item>2022-09-22 10:00:32 由"王小花"修改计划完成时间</Timeline.Item>
                </Timeline>
            </Row>
        </div>
    )
}
export default App