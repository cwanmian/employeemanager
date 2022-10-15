import {useLocation, useNavigationType} from "react-router-dom";
import {useEffect} from "react";

export default function Body3() {
    useEffect(() => {
        return () => {
            console.log("Body3销毁了")
        }
    }, [])
    const usestate = useLocation().state
    console.log(useNavigationType())
    return (
        <div>
            <ul>
                <li>消息的标题：{usestate.title}</li>
                <li>消息的标题：{usestate.content}</li>
            </ul>
        </div>
    )
}