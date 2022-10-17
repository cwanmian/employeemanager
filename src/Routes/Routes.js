import Body1 from "../Body1";
import PersonDetailData from "../Components/PersonDetailData";
import Body3 from "../Body3"
import Body4 from "../Body4";

export const rules = [
    {path: "/Body1.html/item1", element: <Body3/>},
    {path: "/Body1.html/item2", element: <Body4/>},
    {path: "/PersonDetailData.html", element: <PersonDetailData/>}
]