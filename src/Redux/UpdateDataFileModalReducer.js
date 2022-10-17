const initialdata = {open:false}
export default function UpdateDataFileModalReducer(predata = initialdata, action) {
    let {type, data} = action
    switch (type) {
        case "openUpdateDataFileModal":
            return {open:true}
        case "closeUpdateDataFileModal":
            return {open:false}
        default:
            return predata
    }
}