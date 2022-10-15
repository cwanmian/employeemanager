import {Button, Input, Space} from "antd";
import {SearchOutlined} from "@ant-design/icons";
import React, {createRef, useEffect, useRef, useState} from "react";

export default function (props) {
    const {col, SearchFilterreset, setSelectedKeys, selectedKeys, handlesearch, confirm} = props
    return <>
        <div
            style={{
                padding: 8,
            }}
        >
            <Input
                value={selectedKeys}
                placeholder={`Search`}
                onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                onPressEnter={(e) => {
                    handlesearch(col, selectedKeys, confirm)
                }}
                style={{
                    marginBottom: 8,
                    display: 'block',
                }}
            />
            <Space>
                <Button
                    type="primary"
                    onClick={() => handlesearch(col, selectedKeys, confirm)}
                    icon={<SearchOutlined/>}
                    size="small"
                    style={{
                        width: 90,
                    }}
                >
                    搜索
                </Button>
                <Button
                    onClick={() => {
                        console.log("selectedKeys", selectedKeys, selectedKeys.length === 0)
                        if (selectedKeys.length === 0) {
                            confirm()
                        } else {
                            setSelectedKeys([])
                            SearchFilterreset(col, confirm)
                        }
                    }}
                    size="small"
                    style={{
                        width: 90,
                    }}
                >
                    重置
                </Button>
            </Space>
        </div>
    </>
}