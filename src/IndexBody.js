import {Carousel} from 'antd';
import React from 'react';
import BugStatistic from "./Components/FirstPage";

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const App = () => {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    return (
        <BugStatistic/>
    );
};

export default App;