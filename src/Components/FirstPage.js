import { SisternodeOutlined } from '@ant-design/icons';
import {Card, Col, Row, Statistic} from 'antd';
import React from 'react';
import "./FirstPage.css"
const App = () => (
    <Row gutter={[16,16]}>
        <Col xs={24} sm={12} md={8}>
            <Card className="StatisticCard-1">
                <Statistic title="今日新增候选人" value={11} prefix={<i className="fa fa-user-circle-o"/>} />
            </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
            <Card className="StatisticCard-2">
                <Statistic title="候选人总数" value={119} prefix={<i className="fa fa-group"/>}/>
            </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
            <Card className="StatisticCard-3">
                <Statistic title="公司数量" value={93} prefix={<i className="fa fa-suitcase"/>} />
            </Card>
        </Col>
    </Row>
);

export default App;