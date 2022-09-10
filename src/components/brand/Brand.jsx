import React from 'react';

import { google, atlassian, dropbox, shopify, slack } from './imports';
import './brand.css';

export const Brand = () => {
    return (
        <div className="gpt3-brand section-padding">
            <div>
                <img src={google} alt="google" />
            </div>
            <div>
                <img src={slack} alt="slack" />
            </div>
            <div>
                <img src={atlassian} alt="atlassian" />
            </div>
            <div>
                <img src={dropbox} alt="dropbox" />
            </div>
            <div>
                <img src={shopify} alt="shopify" />
            </div>
        </div>
    )
}