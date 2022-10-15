const initialdata = {open:false}
export default function AddFormDrawerReducer(predata = initialdata, action) {
    let {type, data} = action
    switch (type) {
        case "open":
            return {open:true}
        case "close":
            return {open:false}
        default:
            return predata
    }
}