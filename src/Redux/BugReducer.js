const initialdata = 3
export default function Bugreducer(predata = initialdata, action) {
    let {type, data} = action
    switch (type) {
        case "add":
            console.log("reducer收到")
            return predata + data
        default:
            return predata
    }
}