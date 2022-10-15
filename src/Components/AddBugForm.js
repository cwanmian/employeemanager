import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {Button,message, Checkbox, Col, DatePicker, Form, Input, Row, Select, Tag} from 'antd';
import React from 'react';
import moment from "moment";
import ImageUploader from "./ImageUploader";
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';
import axios from "axios";
import {useDispatch} from "react-redux";

const {Option} = Select
const dateFormat = 'YYYY-MM-DD';
const App = () => {
    const dispatch=useDispatch()
    const CloseAddForm=()=>{
        dispatch({type:"close"})
    }
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        const {images,startdate}=values


        const newimgs=JSON.stringify(images.map((item)=>{
            return item.uid+".jpg"
        }))

        axios.post("/addBug", {...values,images:newimgs,startdate:startdate.format(dateFormat)}).then((res) => {
            if(res.data.code===200){
                console.log("插入成功")
                message.success(res.data.res)
                CloseAddForm()
            }else{
                message.error(res.data.res)
            }
            console.log(res)
        }, (res) => {
            message.error("通讯错误")
            console.log(res)
        })
    };
    const normFile = (e) => {
        console.log('Upload event:', e);

        if (Array.isArray(e)) {
            return e;
        }

        return e?.fileList;
    };

    return (
        <Form
            labelWrap
            initialValues={{
                startdate:moment(),
                state:"待处理",
            }}
            labelCol={{span: 4}}
            wrapperCol={{span: 14}}
            name="add_bug"
            className="login-form"
            onFinish={onFinish}
        >
            <Form.Item
                label="编号"
                hidden={true}
                name="bianhao"
                rules={[
                    {
                        pattern: /^[1-9]\d{0,4}$/,
                        message: "非0开头1-5位数字"
                    },
                ]}
            >
                <Input placeholder="编号"/>
            </Form.Item>
            <Form.Item
                label="具体问题"
                name="content"
                rules={[
                    {
                        required: true,
                        pattern: /^.{5,200}$/,
                        message: "5-200个字符"
                    },
                ]}
            >
                <Input.TextArea autoSize={{minRows: 3}} placeholder="具体问题"/>
            </Form.Item>
            <Form.Item
                label="问题板块"
                name="bankuai"
                rules={[
                    {
                        required: true
                    },
                ]}
            >
                <Select style={{width: 160}} onClick={(e) => {
                    e.stopPropagation()
                }} optionLabelProp="children">
                    <Option value="安全人员"><Tag color="blue">安全人员</Tag></Option>
                    <Option value="安全指数"><Tag color="red">安全指数</Tag></Option>
                    <Option value="驾驶舱"><Tag color="volcano">驾驶舱</Tag></Option>
                    <Option value="监督检查"><Tag color="orange">监督检查</Tag></Option>
                    <Option value="其他"><Tag color="lime">其他</Tag></Option>
                    <Option value="项目部详情维护"><Tag color="green">项目部详情维护</Tag></Option>
                    <Option value="学习强安"><Tag color="cyan">学习强安</Tag></Option>
                    <Option value="移动端指挥中心"><Tag color="cyan">移动端指挥中心</Tag></Option>
                    <Option value="应急管理"><Tag color="cyan">应急管理</Tag></Option>
                    <Option value="BI"><Tag color="cyan">BI</Tag></Option>
                </Select>
            </Form.Item>
            <Form.Item
                label="问题种类"
                name="type"
                rules={[
                    {
                        required: true
                    },
                ]}
            >
                <Select style={{width: 160}} onClick={(e) => {
                    e.stopPropagation()
                }} optionLabelProp="children">
                    <Option value="现阶段优化项"><Tag color="blue">现阶段优化项</Tag></Option>
                    <Option value="BUG"><Tag color="red">BUG</Tag></Option>
                    <Option value="咨询类问题"><Tag color="red">咨询类问题</Tag></Option>
                    <Option value="未开发板块需求"><Tag color="red">未开发板块需求</Tag></Option>
                    <Option value="搁置类问题"><Tag color="red">搁置类问题</Tag></Option>
                </Select>
            </Form.Item>
            <Form.Item
                label="问题状态"
                name="state"
                rules={[
                    {
                        required: true
                    },
                ]}
            >
                <Select style={{width: 160}} onClick={(e) => {
                    e.stopPropagation()
                }} optionLabelProp="children">
                    <Option value="待处理"><Tag color="blue">待处理</Tag></Option>
                    <Option value="开发处理中"><Tag color="red">开发处理中</Tag></Option>
                    <Option value="普联UAT测试通过"><Tag color="volcano">普联UAT测试通过</Tag></Option>
                    <Option value="其他平台处理"><Tag color="orange">其他平台处理</Tag></Option>
                    <Option value="生产环境待验证"><Tag color="lime">生产环境待验证</Tag></Option>
                    <Option value="生产环境验证不通过"><Tag color="green">生产环境验证不通过</Tag></Option>
                    <Option value="中建UAT测试通过"><Tag color="cyan">中建UAT测试通过</Tag></Option>
                    <Option value="中建UAT验证通过"><Tag color="cyan">中建UAT验证通过</Tag></Option>
                    <Option value="UAT待测试"><Tag color="cyan">UAT待测试</Tag></Option>
                </Select>
            </Form.Item>
            <Form.Item
                label="问题属性"
                name="shuxing"
                rules={[
                    {
                        required: true
                    },
                ]}
            >
                <Select style={{width: 160}} onClick={(e) => {
                    e.stopPropagation()
                }} optionLabelProp="children">
                    <Option value="BUG"><Tag color="blue">BUG</Tag></Option>
                    <Option value="优化"><Tag color="red">优化</Tag></Option>
                    <Option value="运维组处理"><Tag color="volcano">运维组处理</Tag></Option>
                    <Option value="人力数据问题"><Tag color="orange">人力数据问题</Tag></Option>
                    <Option value="主数据问题"><Tag color="lime">主数据问题</Tag></Option>
                    <Option value="财务数据问题"><Tag color="green">财务数据问题</Tag></Option>
                    <Option value="新增功能"><Tag color="cyan">新增功能</Tag></Option>
                </Select>
            </Form.Item>
            <Form.Item
                label="问题图片"
                name="images"
                rules={[
                    {
                        required: true,
                        message:"请上传至少一张图片"
                    },
                ]}
            >
                <ImageUploader/>
            </Form.Item>
            <Form.Item
                label="时限要求"
                name="timerequire"
                rules={[
                    {
                        required: true
                    },
                ]}
            >
                <Select style={{width: 160}} onClick={(e) => {
                    e.stopPropagation()
                }} optionLabelProp="children">
                    <Option value="高"><Tag color="red">高</Tag></Option>
                    <Option value="中"><Tag color="blue">中</Tag></Option>
                    <Option value="低"><Tag color="green">低</Tag></Option>
                </Select>
            </Form.Item>
            <Form.Item
                label="提出单位"
                name="proposer"
                rules={[
                    {
                        required: true,
                        pattern: /^.{1,20}$/,
                        message: "1-20个字符"
                    },
                ]}
            >
                <Input placeholder="提出单位"/>
            </Form.Item>
            <Form.Item
                label="填写人"
                name="filler"
                rules={[
                    {
                        required: true,
                        pattern: /^.{1,20}$/,
                        message: "1-20个字符"
                    },
                ]}
            >
                <Input placeholder="填写人"/>
            </Form.Item>
            <Form.Item
                label="提出日期"
                name="startdate"
                rules={[
                    {
                        required: true
                    },
                ]}
            >
                <DatePicker inputReadOnly locale={locale}/>
            </Form.Item>
            <Form.Item
                label="备注"
                name="remarks"
                rules={[
                    {
                        pattern: /^.{10,200}$/,
                        message: "5-200个字符"
                    },
                ]}
            >
                <Input.TextArea autoSize={{minRows: 3}} placeholder="备注"/>
            </Form.Item>
            <Form.Item wrapperCol={{span: 14, offset: 4}}>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    提交
                </Button>
            </Form.Item>
        </Form>
    );
};

export default App;