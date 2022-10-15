import {Outlet, NavLink, useRoutes} from "react-router-dom"
import {Button} from "antd";
import {rules} from "./Routes/Routes";
import {useEffect, useState} from "react";

export default function Body1() {
    const element = useRoutes(rules)
    useEffect(() => {
        return () => {
            console.log("被销毁了")
        }
    }, [])
    const data = [{title: "love1", content: "content1"}, {title: "love2", content: "content2"}]
    return (
        <div>
            <h1>Body1</h1>
            <br/>
            <NavLink to={`/Body1.html/item1`} state={{title: data[0].title, content: data[0].content}}><Button
                type="primary">item1</Button></NavLink>
            <br/>
            <br/>
            <NavLink to="/Body1.html/item2"><Button type="primary">item2</Button></NavLink>
            {element}
        </div>
    )
};
