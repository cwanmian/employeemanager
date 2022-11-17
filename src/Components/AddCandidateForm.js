import {
    Button,
    message,
    Col,
    DatePicker,
    Form,
    Input,
    Row,
    Select,
    Tag,
    TreeSelect,
    InputNumber
} from 'antd';
import React, {useRef} from 'react';
import 'moment/locale/zh-cn';
import axios from "axios";
import {useDispatch} from "react-redux";
import {GlobalData} from "../GlobalData";
import HeadPhotoUploader from "./HeadPhotoUploader";
import {PlusOutlined} from "@ant-design/icons";
import TodayDatepicker from "./TodayDatepicker";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import "./AddCandidateForm.css"
import FilesUploader from "./FilesUploader";
import CompanyNameInput from "./CompanyNameInput";

const {Option} = Select
const dateFormat = 'YYYY/MM';
const App = () => {
    const dispatch = useDispatch()
    const CloseAddForm = () => {
        dispatch({type: "close"})
    }
    const onFinish = (values) => {
        const {resume,photo,birth,base,CommentsList,Companylist,Universitylist}=values
        if(photo.length>0){
            values.photo=JSON.stringify(photo.map((item)=>{
                return item.uid+".jpg"
            }))
        }
        values.birth=birth.format("YYYY/MM/DD")
        values.base=JSON.stringify(base)
        let newval={}
        let temobj={...values}
        delete temobj.Companylist
        delete temobj.CommentsList
        newval.emp=JSON.stringify(temobj)
        newval.Universitylist=JSON.stringify(Universitylist.map((item,index)=>{
            item.starttime=item.starttime.format("YYYY-MM")
            item.endtime=item.endtime==="至今"?"至今":item.endtime.format("YYYY-MM")
            return item
        }))
        newval.CommentsList=JSON.stringify(CommentsList.map((item,index)=>{
            item.time=item.time.format("YYYY-MM-DD HH:mm:ss")
            return item
        }))
        newval.Companylist=JSON.stringify(Companylist.map((item,index)=>{
            item.starttime=item.starttime.format("YYYY-MM")
            item.endtime=item.endtime==="至今"?"至今":item.endtime.format("YYYY-MM")
            return item
        }))
        newval.resume="[]"
        if(resume.length>0){
            newval.resume=JSON.stringify(resume.map((item,index)=>{
                let strarr=item.name.split(".")
                let ext=strarr[strarr.length-1]
                return {filename:item.uid+"."+ext}
            }))
        }
        console.dir(newval)
        axios.post("/addEmployeeOne", {...newval}).then((res) => {
            if(res.data.code===200){
                console.log("插入成功")
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
    const addCompanyButton=useRef()
    const addUniversityButton=useRef()
    const addCommentButton=useRef()
    return (
        <Form
            initialValues={{remarks:""}}
            labelWrap
            labelCol={{span: 6}}
            wrapperCol={{span: 14}}
            name="add_candidate"
            className="login-form"
            onFinish={onFinish}
        >
            <Row className="ItemTitle">基本信息</Row>
            <Row>
                <Col span={12}>
                    <Form.Item
                        label="姓名"
                        name="name"
                        rules={[
                            {
                                required: true,
                                pattern: /^.{1,20}$/,
                                message: "1-20个字符"
                            },
                        ]}
                    >
                        <Input placeholder="1-20个字符"/>
                    </Form.Item>
                    <Form.Item
                        label="性别"
                        name="gender"
                        rules={[
                            {
                                required: true,
                                message: "请选择性别"
                            },
                        ]}
                    >
                        <Select style={{width: 160}} onClick={(e) => {
                            e.stopPropagation()
                        }} optionLabelProp="children">
                            <Option value="♂"><Tag color="blue">♂</Tag></Option>
                            <Option value="♀"><Tag color="red">♀</Tag></Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="照片"
                        name="photo"
                        initialValue={[]}
                    >
                        <HeadPhotoUploader/>
                    </Form.Item>
                    <Form.Item
                        label="电话"
                        name="tel"
                        rules={[
                            {
                                required: true,
                                message: '请输入你的电话!',
                            },
                            {
                                pattern: /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
                                message: "请输入正确的电话号码!"
                            }
                        ]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label="工作地点"
                        name="base"
                        rules={[
                            {
                                required: true
                            },
                        ]}
                    >
                        <TreeSelect treeData={GlobalData.CityData} treeCheckable={true}
                                    showCheckedStrategy={TreeSelect.SHOW_PARENT} treeCheckable={true}/>
                    </Form.Item>
                    <Form.Item
                        label="出生日期"
                        name="birth"
                        rules={[
                            {
                                required: true
                            },
                        ]}
                    >
                        <DatePicker picker="date" inputReadOnly/>
                    </Form.Item>
                    <Form.Item
                        label="邮箱"
                        name="email"
                        rules={[
                            {
                                required: true
                            },
                            {
                                pattern: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
                                message: "请输入正确的邮箱地址!"
                            }
                        ]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label="简历"
                        name="resume"
                        initialValue={[]}
                    >
                        <FilesUploader/>
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
                </Col>
                <Col span={12}>

                </Col>
            </Row>
            <Row className="ItemTitle">能力</Row>
            <Row style={{marginBottom:"30px"}}>
                <Col sm={{span:3}} xs={{span:24}}>
                    <div className="labelColDiv ant-col ant-col-24 ant-form-item-label ant-form-item-label-wrap">
                        <label className="ant-form-item">工作经历：</label>
                    </div>
                </Col>
                <Col sm={{span:20}} xs={{span:24}} style={{border: "solid 1px #cccccc", padding: "20px"}}>
                    <Form.List name="Companylist"
                               initialValue={[]}
                               style={{borderBottom: "1px solid #cccccc"}}
                    >
                        {(fields, {add, remove}) => (
                            <>
                                <TransitionGroup>
                                {fields.map(({key, name, ...restField}, index) => (
                                    <CSSTransition
                                        key={key}
                                        timeout={300}
                                        classNames="item"
                                        onEntered={()=>{
                                            addCompanyButton.current.scrollIntoView({behavior:"smooth",block:"center"})
                                        }}
                                    >
                                    <Row key={key} style={{borderBottom:"1px solid #cccccc",marginBottom:"20px"}}>
                                        <Col span={20}>
                                            <Form.Item
                                                label="起始时间"
                                                labelCol={{lg:{span:3, offset: 0},md:{span:5, offset: 0}}}
                                                {...restField}
                                                name={[name, 'starttime']}
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: '必填起始时间',
                                                    },
                                                ]}
                                            >
                                                <DatePicker picker="month" inputReadOnly
                                                            placeholder="起始时间"/>
                                            </Form.Item>
                                            <Form.Item
                                                label="结束时间"
                                                labelCol={{lg:{span:3, offset: 0},md:{span:5, offset: 0}}}
                                                {...restField}
                                                name={[name, 'endtime']}
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: '必填结束时间时间',
                                                    },
                                                ]}
                                            >
                                                <TodayDatepicker/>
                                            </Form.Item>
                                            <Form.Item
                                                initialValue=""
                                                label="领域："
                                                labelCol={{lg:{span:3, offset: 0},md:{span:5, offset: 0}}}
                                                {...restField}
                                                name={[name, 'field']}
                                            >
                                                <Input placeholder="领域"/>
                                            </Form.Item>
                                            <Form.Item
                                                initialValue=""
                                                label="阶段"
                                                labelCol={{lg:{span:3, offset: 0},md:{span:5, offset: 0}}}
                                                {...restField}
                                                name={[name, 'stage']}
                                            >
                                                <Input placeholder="阶段"/>
                                            </Form.Item>
                                            <Form.Item
                                                label="公司"
                                                labelCol={{lg:{span:3, offset: 0},md:{span:5, offset: 0}}}
                                                {...restField}
                                                name={[name, 'company']}
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Missing Company',
                                                    },
                                                ]}
                                            >
                                                <CompanyNameInput/>
                                            </Form.Item>
                                            <Form.Item
                                                label="职位"
                                                labelCol={{lg:{span:3, offset: 0},md:{span:5, offset: 0}}}
                                                {...restField}
                                                name={[name, 'zhiwei']}
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Missing Position',
                                                    },
                                                ]}
                                            >
                                                <Input placeholder="岗位"/>
                                            </Form.Item>
                                        </Col>
                                        <Col span={4}>
                                            <Row style={{height:"100%",paddingLeft:10}} justify="start" align="middle">
                                            <Button type="primary" danger block style={{height: "90%", width: 100}}
                                                        onClick={() => remove(name)}
                                                        >删除</Button>
                                            </Row>
                                        </Col>
                                    </Row>
                                    </CSSTransition>
                                ))}
                                </TransitionGroup>
                                <Form.Item style={{margin: 0}}>
                                    <Button ref={addCompanyButton} type="dashed" onClick={(e) => {
                                        add()
                                    }} block icon={<PlusOutlined/>}>
                                        Add field
                                    </Button>
                                </Form.Item>
                            </>
                        )}
                    </Form.List>
                </Col>
            </Row>
            <Row style={{marginBottom:"30px"}}>
                <Col sm={{span:3}} xs={{span:24}}>
                    <div className="labelColDiv ant-col ant-col-24 ant-form-item-label ant-form-item-label-wrap">
                        <label className="ant-form-item">教育经历：</label>
                    </div>
                </Col>
                <Col sm={{span:20}} xs={{span:24}} style={{border: "solid 1px #cccccc", padding: "20px"}}>
                    <Form.List name="Universitylist"
                               initialValue={[]}
                        style={{borderBottom: "1px solid #cccccc"}}
                    >
                        {(fields, {add, remove}) => (
                            <>
                                <TransitionGroup>
                                {fields.map(({key, name, ...restField}, index) => (
                                    <CSSTransition
                                        key={key}
                                        timeout={300}
                                        classNames="item"
                                        onEntered={()=>{
                                            addUniversityButton.current.scrollIntoView({behavior:"smooth",block:"center"})
                                        }}
                                    >
                                    <Row key={key} style={{borderBottom:"1px solid #cccccc",marginBottom:"20px"}}>
                                        <Col span={20}>
                                            <Form.Item
                                                label="起始时间"
                                                labelCol={{lg:{span:3, offset: 0},md:{span:5, offset: 0}}}
                                                {...restField}
                                                name={[name, 'starttime']}
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: '必填起始时间',
                                                    },
                                                ]}
                                            >
                                                <DatePicker picker="month" inputReadOnly
                                                            placeholder="起始时间"/>
                                            </Form.Item>
                                            <Form.Item
                                                label="结束时间"
                                                labelCol={{lg:{span:3, offset: 0},md:{span:5, offset: 0}}}
                                                {...restField}
                                                name={[name, 'endtime']}
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: '必填结束时间时间',
                                                    },
                                                ]}
                                            >
                                                <TodayDatepicker/>
                                            </Form.Item>
                                            <Form.Item
                                                label="学校："
                                                labelCol={{lg:{span:3, offset: 0},md:{span:5, offset: 0}}}
                                                {...restField}
                                                name={[name, 'university']}
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Missing University',
                                                    },
                                                ]}
                                            >
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item
                                                label="专业"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Missing Major',
                                                    },
                                                ]}
                                                labelCol={{lg:{span:3, offset: 0},md:{span:5, offset: 0}}}
                                                {...restField}
                                                name={[name, 'major']}
                                            >
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item
                                                label="学位"
                                                labelCol={{lg:{span:3, offset: 0},md:{span:5, offset: 0}}}
                                                {...restField}
                                                name={[name, 'degree']}
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Missing Degree',
                                                    },
                                                ]}
                                            >
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item
                                                label="年薪"
                                                labelCol={{lg:{span:3, offset: 0},md:{span:5, offset: 0}}}
                                                {...restField}
                                                name={[name, 'yearsalary']}
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Missing Yearsalary',
                                                    },
                                                    {
                                                        pattern:/^([1-9][0-9]*)+(\.[0-9]{1,2})?$/,
                                                        message: '非零开头的最多带两位小数',
                                                    },
                                                ]}
                                            >
                                                <InputNumber addonBefore="￥"/>
                                            </Form.Item>
                                            <Form.Item
                                                label="月薪"
                                                labelCol={{lg:{span:3, offset: 0},md:{span:5, offset: 0}}}
                                                {...restField}
                                                name={[name, 'monthsalary']}
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Missing Monthsalary',
                                                    },{
                                                        pattern:/^([1-9][0-9]*)+(\.[0-9]{1,2})?$/,
                                                        message: '非零开头的最多带两位小数',
                                                    },
                                                ]}
                                            >
                                                <InputNumber addonBefore="￥"/>
                                            </Form.Item>
                                            <Form.Item
                                                label="Months"
                                                labelCol={{lg:{span:3, offset: 0},md:{span:5, offset: 0}}}
                                                {...restField}
                                                name={[name, 'months']}
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Missing Monthsalary',
                                                    },{
                                                        pattern:/^[1-9][0-9]{0,1}$/,
                                                        message: '非零开头最多2位整数',
                                                    },
                                                ]}
                                            >
                                                <InputNumber/>
                                            </Form.Item>
                                            <Form.Item
                                                label="奖金"
                                                labelCol={{lg:{span:3, offset: 0},md:{span:5, offset: 0}}}
                                                {...restField}
                                                name={[name, 'bonus']}
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Missing Bonus',
                                                    },{
                                                        pattern:/^([1-9][0-9]*)+(\.[0-9]{1,2})?$/,
                                                        message: '非零开头的最多带两位小数',
                                                    },
                                                ]}
                                            >
                                                <InputNumber addonBefore="￥"/>
                                            </Form.Item>
                                        </Col>
                                        <Col span={4}>
                                            <Row style={{height:"100%",paddingLeft:10}} justify="start" align="middle">
                                                <Button type="primary" danger block style={{height: "90%",width: 100}}
                                                        onClick={() => remove(name)}
                                                        >删除</Button>
                                            </Row>
                                        </Col>
                                    </Row>
                                    </CSSTransition>
                                ))}
                                </TransitionGroup>
                                <Form.Item style={{margin: 0}}>
                                    <Button ref={addUniversityButton} type="dashed" onClick={(e) => {
                                        add()
                                    }} block icon={<PlusOutlined/>}>
                                        Add field
                                    </Button>
                                </Form.Item>
                            </>
                        )}
                    </Form.List>
                </Col>
            </Row>
            <Row className="ItemTitle">评价</Row>
            <Row style={{marginBottom:"30px"}}>
                <Col sm={{span:3}} xs={{span:24}}>
                    <div className="labelColDiv ant-col ant-col-24 ant-form-item-label ant-form-item-label-wrap">
                        <label className="ant-form-item">随访：</label>
                    </div>
                </Col>
                <Col sm={{span:20}} xs={{span:24}} style={{border: "solid 1px #cccccc", padding: "20px"}}>
                    <Form.List name="CommentsList"
                               initialValue={[]}
                        style={{borderBottom: "1px solid #cccccc"}}
                    >
                        {(fields, {add, remove}) => (
                            <>
                                <TransitionGroup>
                                {fields.map(({key, name, ...restField}, index) => (
                                    <CSSTransition
                                        key={key}
                                        timeout={300}
                                        classNames="item"
                                        onEntered={()=>{
                                            addCommentButton.current.scrollIntoView({behavior:"smooth",block:"center"})
                                        }}
                                    >
                                    <Row key={key} style={{borderBottom:"1px solid #cccccc",marginBottom:"20px"}}>
                                        <Col span={20}>
                                            <Form.Item
                                                label="时间："
                                                labelCol={{lg:{span:3, offset: 0},md:{span:5, offset: 0}}}
                                                {...restField}
                                                name={[name, 'time']}
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Missing Time',
                                                    },
                                                ]}
                                            >
                                                <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" inputReadOnly/>
                                            </Form.Item>
                                            <Form.Item
                                                label="随访顾问"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Missing 随访顾问',
                                                    },{
                                                        pattern:/^.{2,20}$/,
                                                        message: '2-20个字符',
                                                    },
                                                ]}
                                                labelCol={{lg:{span:3, offset: 0},md:{span:5, offset: 0}}}
                                                {...restField}
                                                name={[name, 'adviser']}
                                            >
                                                <Input/>
                                            </Form.Item>
                                            <Form.Item
                                                label="内容"
                                                labelCol={{lg:{span:3, offset: 0},md:{span:5, offset: 0}}}
                                                {...restField}
                                                name={[name, 'comment']}
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Missing Comment',
                                                    },
                                                ]}
                                            >
                                                <Input.TextArea/>
                                            </Form.Item>
                                        </Col>
                                        <Col span={4}>
                                            <Row style={{height:"100%",paddingLeft:10}} justify="start" align="middle">
                                                <Button type="primary" danger block style={{height: "90%",width: 100 }}
                                                        onClick={() => remove(name)}
                                                        >删除</Button>
                                            </Row>
                                        </Col>
                                    </Row>
                                    </CSSTransition>
                                ))}
                                </TransitionGroup>
                                <Form.Item style={{margin: 0}}>
                                    <Button ref={addCommentButton} type="dashed" onClick={(e) => {
                                        add()
                                    }} block icon={<PlusOutlined/>}>
                                        Add field
                                    </Button>
                                </Form.Item>
                            </>
                        )}
                    </Form.List>
                </Col>
            </Row>
            <Form.Item wrapperCol={{span: 14, offset: 4}}>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    提交
                </Button>
            </Form.Item>

        </Form>
    )
}
export default App