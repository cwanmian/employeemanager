import {InboxOutlined, PlusOutlined} from '@ant-design/icons';
import {Image, message, Modal, Upload} from 'antd';
import React, {useEffect, useState} from 'react';
import axios from "axios";
import {GlobalData} from "../GlobalData";
const { Dragger } = Upload;
const App = (props) => {
    const { value = [], onChange }=props
    const [fileList, setFileList] = useState([

    ]);
    const onRemove=(file)=>{
        let strarr=file.name.split(".")
        let ext=strarr[strarr.length-1]
        axios.post("/removeResumes", {filename:file.uid+"."+ext}).then((res) => {
            if(res.data.code===200){
                console.log("删除成功")
                message.success(res.data.res)
            }else{
                if(res.data.res==="file delete error"){
                    message.error(res.data.res)
                    return false
                }
            }
        }, (res) => {
            message.error("通讯错误")
            console.log(res)
            return false
        })
    }

    const handleChange = ({ fileList: newFileList }) => {
        onChange(newFileList)
        console.log(newFileList)
        setFileList(newFileList)
    }

    return (
        <>
            <Dragger
                onRemove={(file)=>{onRemove(file)}}
                accept=".png, .jpg, .jpeg, .doc, .docx, .xlsx, .pdf"
                action={GlobalData.AppServerIp+"/reciveResumes"}
                listType="picture"
                fileList={fileList}
                data={(file)=>{return {filename:file.uid}}}
                method="post"
                maxCount={5}
                onChange={handleChange}
            >
                <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                </p>
                <p className="ant-upload-text">单击或拖动文件到此区域进行上载</p>
                <p className="ant-upload-hint">
                    支持单个或批量上载
                </p>
            </Dragger>
        </>
    );
};

export default App;