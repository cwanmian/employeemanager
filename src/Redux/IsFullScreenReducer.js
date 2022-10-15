const initialdata = {isFullScreen:window.innerHeight>500&&window.innerWidth>500?false:true}
export default function IsFullScreenReducer(predata = initialdata, action) {
    let {type, data} = action
    switch (type) {
        case "openSider":
            return {isFullScreen:false}
        case "closeSider":
            return {isFullScreen:true}
        default:
            return predata
    }
}