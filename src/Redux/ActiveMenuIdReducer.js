const initialdata = []
export default function ActiveMenuIdReducer(predata = initialdata, action) {
    let {type, data} = action
    switch (type) {
        case "setMenuActiveKey":
            return [data]
        default:
            return predata
    }
}