import {Button, Dropdown, Form, Image, Menu, message, Modal, Row} from "antd";
import {ExclamationCircleOutlined, FileAddFilled} from "@ant-design/icons";
import React, {useRef,useState} from "react";
import axios from "axios";
import ImageUploader from "./ImageUploader";
import {GlobalData} from "../GlobalData";
const { confirm } = Modal;

export default ({images,id,col})=>{
    const [form]=Form.useForm()
    const [pics,setpics]=useState(JSON.parse(images))
    const tempic=useRef()
    const [modalText, setModalText] = useState('确定修改么，你的操作将记入日志')
    const [open,setopen]=useState(false)
    const [confirmLoading,setconfirmLoading]=useState(false)
    const handleOk = (resolve, reject) => {
        setModalText('修改中，请等待')
        pics.splice(tempic.current.index,1)
        axios.post("/deleteColImgData", null, {params: {data:tempic.current.name, id,col}}).then((res) => {
            setModalText('确定修改么，你的操作将记入日志')
            if(res.data.code===200){
                message.success("删除成功")
                setpics(pics)
            }else{
                message.error(res.data.res)
            }
            resolve()
        }, (res) => {
            setModalText('确定修改么，你的操作将记入日志')
            message.error(res)
            resolve()
        })
    }
    const handleDelete=(name,index)=>{
        tempic.current= {name,index}
        confirm({
            title: '确定修改么?',
            icon: <ExclamationCircleOutlined />,
            content: modalText,

            onOk() {
                return new Promise((resolve, reject) => {
                    handleOk(resolve, reject)
                }).catch(() => console.log('Oops errors!'));
            },

            onCancel() {
            },
        });
    }
    const handleUpImgOk=()=>{
        form.submit()
    }
    const handleUpImgCancel=()=>{
        setopen(false)
    }
    const onFinish=(values)=>{
        const {images}=values
        let newimgarr=images.map((item)=>{
            return item.uid+".jpg"
        })
        const newimgs=JSON.stringify(newimgarr)
        console.log(newimgs)
        axios.post("/addColImage", {images:newimgs,id,col}).then((res) => {
            if(res.data.code===200){
                console.log("插入成功")
                message.success(res.data.res)
                console.log([...pics,...newimgarr])
                setpics([...pics,...newimgarr])
            }else{
                message.error(res.data.res)
            }
            setopen(false)
            console.log(res)
        }, (res) => {
            message.error("通讯错误")
            setopen(false)
            console.log(res)
        })
    }
    const imgrightmenu =(image,index)=> (
        <Menu
            items={[
                {
                    label: <a>删除</a>,
                    key: '2',
                    style: {width: 80,background:"#fe725c",color:"#fdfdfe"},
                    onClick:()=>{handleDelete(image,index)}
                }
            ]}
        />
    )

    return(
        <Row align="middle">
            <Image.PreviewGroup>
                {pics.map((itm, index) => {
                    return (
                        <Dropdown key={index} overlay={imgrightmenu(itm,index)} trigger={['contextMenu']}>
                            <Image
                                key={index}
                                height={90}
                                src={GlobalData.AppServerIp+"/BugImages/"+itm}
                                onClick={(e) => {
                                    e.stopPropagation();
                                }}
                                onContextMenu={(e) => {
                                    e.stopPropagation()
                                    e.preventDefault()
                                }
                                }

                            />
                        </Dropdown>
                    )
                })}
            </Image.PreviewGroup>
            <FileAddFilled onClick={()=>{setopen(true)}} style={{color: "#6488b9", fontSize: "24px", cursor: "pointer",margin:10}}/>
            <Modal
                maskClosable={false}
                title="上传图片"
                open={open}
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
                        <ImageUploader/>
                    </Form.Item>
                </Form>
            </Modal>
        </Row>
    )
}