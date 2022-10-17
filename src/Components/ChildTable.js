import {useState} from "react";
import {Col, Row} from "antd";
import "./ChildTable.css"
export default ({list}) => {
    return (
        <>

            {/*<Row>
                <Col span={2}></Col>
                <Col span={4}>公司</Col>
                <Col span={3}>职位</Col>
                <Col span={3}>阶段</Col>
                <Col span={4}>领域</Col>
                <Col span={4}>Notes</Col>
                <Col span={2}>起始</Col>
                <Col span={2}>结束</Col>
            </Row>
            {
                list.map((item, index) => {
                    return <Row key={item.id} style={{borderTop:"solid 1px #d8d8d8" }}>
                        <Col span={2}><img src="" alt=""/></Col>
                        <Col span={4}>{item.company}</Col>
                        <Col span={3}>{item.zhiwei}</Col>
                        <Col span={3}>{item.stage}</Col>
                        <Col span={4}>{item.field}</Col>
                        <Col span={4}>{item.notes}</Col>
                        <Col span={2}>{item.starttime}</Col>
                        <Col span={2}>{item.endtime}</Col>
                    </Row>
                })
            }*/}

        </>
    )
}