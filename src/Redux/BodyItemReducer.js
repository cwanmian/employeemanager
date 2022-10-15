import IndexBody from "../IndexBody";
const initialdata = [{
    title: '首页',
    content: <IndexBody/> ,
    key: 'index',
    closable:false
}]
export default function BodyItemReducer(predata = initialdata, action) {
    let {type, data} = action
    switch (type) {
        case "addBodyItem":
            let tem=0
            predata.forEach((item)=>{
                if(item.key===data.key){
                    tem=1
                }
            })
            if(tem===1){
                return predata
            }
            return [...predata,data]
        case "removeBodyItem":
            let a=[]
            predata.forEach((item)=>{
                if(item.key!==data){
                    a.push(item)
                }
            })
            return a
        default:
            return predata
            break
    }
}