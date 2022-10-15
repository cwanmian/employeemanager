const initialdata = null
export default function ActiveTabIdReducer(predata = initialdata, action) {
    let {type, data} = action
    switch (type) {
        case "setActiveKey":
            return data
        default:
            return predata
    }
}