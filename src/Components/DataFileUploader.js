import {InboxOutlined, PlusOutlined} from '@ant-design/icons';
import {Image, message, Modal, Upload} from 'antd';
import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useSelector} from "react-redux";
import {GlobalData} from "../GlobalData";
const { Dragger } = Upload;
const App = (props) => {
    const { value = [], onChange }=props
    const [fileList, setFileList] = useState([

    ]);
    const onRemove=(file)=>{

        axios.post("/removeUpdatefile", {filename:file.uid}).then((res) => {
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
        setFileList(newFileList)
    }
    return (
        <>
            <Dragger
                onRemove={(file)=>{onRemove(file)}}
                accept=".xlsx"
                action={GlobalData.AppServerIp+"/reciveuploaddatafile"}
                listType="picture"
                fileList={fileList}
                data={(file)=>{return {filename:file.uid}}}
                method="post"
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