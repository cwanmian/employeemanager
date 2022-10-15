// 重写Table组件header单元格渲染方式
import {Resizable} from "react-resizable"
import "react-resizable/css/styles.css"

export default (props) => {
    const { onResize, width, ...restProps } = props
    if (width === undefined) {
        return <th {...restProps}></th>
    }
    return (
        // 外包一层Resizable组件
        // 其中onResize属性调用col.onResize方法
        <Resizable width={width} height={0} onResize={onResize}>
            <th {...restProps}></th>
        </Resizable>
    )
}