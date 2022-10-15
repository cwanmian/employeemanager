import TextArea from "antd/es/input/TextArea"
import {message, Popconfirm} from "antd"
import React, {createRef, useEffect, useRef, useState} from "react"
import "./TextareaConfirm.css"
import axios from "axios";

const App = ({text,col,id}) => {
    const textareafocus = useRef(0)
    const oldtext = useRef(text)
    const newtext = useRef(text)
    const [content, setcontent] = useState(text)
    const [open, setOpen] = useState(false)
    const [confirmLoading, setConfirmLoading] = useState(false)
    const [showTextarera, setshowTextarera] = useState(false)
    const textdivnode = createRef()
    const [textareaheight, settextareaheight] = useState(0)
    const handleChange = (e) => {
        e.currentTarget.style.height=e.currentTarget.scrollHeight+2+"px"
        newtext.current = e.target.value
        setcontent(e.target.value)
        showPopconfirm()
    }
    const showPopconfirm = () => {
        textareafocus.current = 1
        console.log("获取", textareafocus)
        setOpen(true)
    }
    const handleblur = () => {
        textareafocus.current = 0
        setshowTextarera(false)
    }
    const handleOk = (e) => {
        e.stopPropagation()
        setConfirmLoading(true)
        console.log(id,col,text)
        updatedata(id,col,newtext.current)
    }
    const updatedata = (id,col, data) => {
        axios.post("/updateColData", null, {params: {id,col, data}}).then((res) => {
            setOpen(false)
            setConfirmLoading(false)
            setshowTextarera(false)
            if(res.data.code===200){
                setcontent(newtext.current)
                oldtext.current = newtext.current
                message.success("更新成功")
            }else{
                message.error(res)
            }
        }, (res) => {
            setOpen(false)
            setConfirmLoading(false)
            setshowTextarera(false)
            message.error(res.data.res)
        })
    }
    const handleCancel = () => {
        console.log('Clicked cancel button')
        setOpen(false)
        setcontent(oldtext.current)
    }
    const handleShowTextarea = () => {
        settextareaheight(textdivnode.current.scrollHeight + 2)
        setshowTextarera(true)
    }
    useEffect(() => {
        //textarea失去焦点后不确定是否点击了确定按钮，window对象点击在最后可以拿到是否点击了确定
        window.addEventListener("click", () => {
            if (textareafocus.current === 0) {
                setcontent(oldtext.current)
                setOpen(false)
            }
        })
    }, [])
    return (
        <>
            <Popconfirm
                placement="right"
                title="点击提交确认修改"
                cancelText="取消"
                okText="提交"
                open={open}
                onConfirm={handleOk}
                okButtonProps={{
                    loading: confirmLoading,
                }}
                onCancel={handleCancel}

            >
                <>{showTextarera ?
                    <TextArea autoFocus bordered={true} style={{height: textareaheight}} onChange={handleChange}
                              value={content}
                              onBlur={handleblur}
                    /> :
                    <div ref={textdivnode} className="textdiv" onClick={handleShowTextarea}>{oldtext.current}</div>}
                </>

            </Popconfirm>


        </>

    )
}
export default App