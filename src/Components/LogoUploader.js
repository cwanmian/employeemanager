import {InboxOutlined, PlusOutlined} from '@ant-design/icons';
import {Image, message, Modal, Upload} from 'antd';
import React, {useEffect, useState} from 'react';
import axios from "axios";
import {GlobalData} from "../GlobalData";
const { Dragger } = Upload;
const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => resolve(reader.result);

        reader.onerror = (error) => reject(error);
    });

const App = (props) => {
    const { value = [], onChange }=props
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState([

    ]);
    const onRemove=(file)=>{
        axios.post("/removelogoimg", {filename:file.uid}).then((res) => {
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

    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };

    const handleChange = ({ fileList: newFileList }) => {
        onChange(newFileList)
        setFileList(newFileList)
    }

    return (
        <>
            <Dragger
                onRemove={(file)=>{onRemove(file)}}
                accept=".png, .jpg, .jpeg"
                action={GlobalData.AppServerIp+"/recivelogoimg"}
                listType="picture"
                fileList={fileList}
                data={(file)=>{return {filename:file.uid}}}
                method="post"
                onPreview={handlePreview}
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
            <Image
                width={200}
                style={{
                    display: 'none',
                }}
                src={previewImage}
                preview={{
                    visible:previewOpen,
                    src: previewImage,
                    onVisibleChange: (value) => {
                        setPreviewOpen(value);
                    },
                }}
            />
        </>
    );
};

export default App;