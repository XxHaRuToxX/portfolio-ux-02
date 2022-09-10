import React from 'react';

import { Footer, Blog, Features, Header, Possibility, WhatGPT3 } from './containers';
import { CTA, Brand, Navbar } from './components';

export const App = () => {

    return (
        <div className="App">
            <div className="gradient-bg">
                <Navbar/>
                <Header/>
            </div>
            <Brand/>
            <WhatGPT3/>
            <Features/>
            <Possibility/>
            <CTA/>
            <Blog/>
            <Footer/>
        </div>
    )
}
