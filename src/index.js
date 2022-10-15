import ReactDOM from 'react-dom/client';
import './index.css';
import {store} from "./Redux/Store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import zhCN from 'antd/es/locale/zh_CN';
import {ConfigProvider} from "antd";
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <ConfigProvider locale={zhCN}>
                <App/>
            </ConfigProvider>
        </BrowserRouter>
    </Provider>
)

