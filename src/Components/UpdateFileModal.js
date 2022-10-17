import {Button, Dropdown, Form, Image, Menu, message, Modal, Row} from "antd";
import {ExclamationCircleOutlined, FileAddFilled} from "@ant-design/icons";
import React, {useRef,useState} from "react";
import axios from "axios";
import ImageUploader from "./ImageUploader";
import {GlobalData} from "../GlobalData";
import {useDispatch, useSelector} from "react-redux";
import UpdateDataFileModalReducer from "../Redux/UpdateDataFileModalReducer";
import DataFileUploader from "./DataFileUploader";
const { confirm } = Modal;

export default ()=>{
    const dispatch=useDispatch()
    const [form]=Form.useForm()
    const [confirmLoading,setconfirmLoading]=useState(false)
    const handleUpImgOk=()=>{
        form.submit()
    }
    const handleUpImgCancel=()=>{
        dispatch({type:"closeUpdateDataFileModal",data:false})
    }
    const onFinish=(values)=>{
        const {images}=values
        let newimgarr=images.map((item)=>{
            return item.uid+".jpg"
        })
        const newimgs=JSON.stringify(newimgarr)
        console.log(newimgs)
        axios.post("/addColImage", {}).then((res) => {
            if(res.data.code===200){
                console.log("插入成功")
                message.success(res.data.res)
            }else{
                message.error(res.data.res)
            }
            dispatch({type:"closeUpdateDataFileModal",data:false})

            console.log(res)
        }, (res) => {
            message.error("通讯错误")
            dispatch({type:"closeUpdateDataFileModal",data:false})

            console.log(res)
        })
    }

    return(
        <Row align="middle">
            <Modal
                maskClosable={false}
                title="上传图片"
                open={useSelector(state => state.UpdateDataFileModalReducer.open)}
                onOk={handleUpImgOk}
                confirmLoading={confirmLoading}
                onCancel={handleUpImgCancel}
                destroyOnClose
            >
                <Form
                    form={form}
                    labelWrap
                    name="add_bug"
                    className="login-form"
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="images"
                        rules={[
                            {
                                required: true,
                                message:"请上传至少一张图片"
                            },
                        ]}
                    >
                        <DataFileUploader/>
                    </Form.Item>
                </Form>
            </Modal>
        </Row>
    )
}