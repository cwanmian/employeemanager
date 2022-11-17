import {Checkbox, DatePicker} from "antd";
import {useState} from "react";
import moment from "moment";

export default ({value, onChange}) => {
    const dateFormat = 'YYYY/MM'
    const[pickerdisable,setpickerdisable]=useState(false)
    const[pickervalue,setpickervalue]=useState(false)
    const handlecheckbox=(e)=>{
        if(e.target.checked===true){
            onChange("至今")
            setpickervalue("")
            setpickerdisable(true)
        }else{
            onChange("")
            setpickerdisable(false)
        }
    }
    const handlePicker=(v)=>{
        setpickervalue(v)
        onChange(moment(v,dateFormat))
    }
    return <div style={{display:"flex"}}>
        <DatePicker onChange={handlePicker} value={pickervalue} disabled={pickerdisable} picker="month" placeholder="结束时间" inputReadOnly></DatePicker>
        <div style={{flex:"1",display:"flex",paddingLeft:3,alignItems:"center"}}>至今<Checkbox name="today" onChange={handlecheckbox}/></div>
    </div>
}