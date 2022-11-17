import {
    message,
    Col,
    Form,
    Input,
    Row,
} from 'antd';
import React, {useEffect, useRef} from 'react';
import 'moment/locale/zh-cn';
import axios from "axios";
import {useDispatch} from "react-redux";
import "./AddCompanyForm.css"
import LogoUploader from "./LogoUploader";

const App = ({getForm, closeModal}) => {
    const [form] = Form.useForm()
    useEffect(() => {
        getForm(form)
    }, [])
    const dispatch = useDispatch()
    const CloseAddForm = () => {
        dispatch({type: "close"})
    }
    const onFinish = (values) => {
        const {logo} = values
        if (logo.length > 0) {
            values.logo = JSON.stringify(logo.map((item) => {
                return item.uid + ".jpg"
            }))
        }
        console.log(values)
        axios.post("/addCompanyOne", {...values}).then((res) => {
            if (res.data.code === 200) {
                console.log("插入成功")
                message.success(res.data.res)
                closeModal()
            } else {
                message.error(res.data.res)
            }
            console.log(res)
        }, (res) => {
            message.error("通讯错误")
            console.log(res)
        })
    };
    return (
        <div style={{height: 500, overflowY: "auto"}}>
            <Form
                form={form}
                initialValues={{remarks: ""}}
                labelWrap
                labelCol={{span: 6}}
                wrapperCol={{span: 18}}
                name="add_candidate"
                className="login-form"
                onFinish={onFinish}
            >
                <Row>
                    <Col span={20}>
                        <Form.Item
                            label="公司名称"
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    pattern: /^.{1,50}$/,
                                    message: "1-50个字符"
                                },
                            ]}
                        >
                            <Input placeholder="1-20个字符"/>
                        </Form.Item>

                        <Form.Item
                            label="名称(EN)"
                            name="enname"
                            rules={[
                                {
                                    required: true,
                                    pattern: /^.{1,50}$/,
                                    message: "1-50个字符"
                                },
                            ]}
                        >
                            <Input placeholder="1-20个字符"/>
                        </Form.Item>
                        {/*<Form.Item
                            label="编号"
                            name="number"
                            rules={[
                                {
                                    required: true,
                                    pattern: /^\d{8}$/,
                                    message: "8位数字"
                                },
                                {
                                    validator(_,val){
                                        return new Promise((resolve,reject)=>{
                                            axios.post("/checkCompanynumber",{number:val}).then((res)=>{
                                                if(res.data.code===200){
                                                    resolve()
                                                }else{
                                                    reject("已存在")
                                                }
                                            }, (res) => {
                                                reject("网络错误")
                                            })
                                        }).then()
                                    }
                                }
                            ]}
                        >
                            <Input placeholder="1-20个字符"/>
                        </Form.Item>*/}
                        <Form.Item
                            label="Logo"
                            name="logo"
                            initialValue={[]}
                        >
                            <LogoUploader/>
                        </Form.Item>
                        <Form.Item
                            label="官网"
                            name="web"
                            rules={[
                                {
                                    required: true
                                },
                                {
                                    pattern: /[a-zA-z]+:\/\/[^\s]*/,
                                    message: "请输入正确的网址!"
                                }
                            ]}
                        >
                            <Input/>
                        </Form.Item>
                        <Form.Item
                            label="地址"
                            name="address"
                            rules={[
                                {
                                    required: true
                                },
                                {
                                    required: true,
                                    pattern: /^.{1,50}$/,
                                    message: "1-50个字符"
                                },
                            ]}
                        >
                            <Input/>
                        </Form.Item>
                        <Form.Item
                            label="Type"
                            name="type"
                            rules={[
                                {
                                    required: true,
                                    pattern: /^.{1,50}$/,
                                    message: "1-50个字符"
                                },
                            ]}
                        >
                            <Input/>
                        </Form.Item>
                        <Form.Item
                            label="Stock"
                            name="stock"
                            rules={[
                                {
                                    required: true,
                                    pattern: /^.{1,50}$/,
                                    message: "1-50个字符"
                                },
                            ]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            label="Notes"
                            name="notes"
                            initialValue=""
                            rules={[
                                {
                                    pattern: /^.{10,2000}$/,
                                    message: "5-400个字符"
                                },
                            ]}
                        >
                            <Input.TextArea autoSize={{minRows: 3}} placeholder="备注"/>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>

    )
}
export default App