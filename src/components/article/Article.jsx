import React from 'react';

import './article.css';

export const Article = ({imgUrl, date, text}) => {
    return (
        <div className="gpt3-blog-container-article">
            <div className="gpt3-blog-container-article-image">
                <img src={imgUrl} alt="blog_image" />
            </div>
            <div className="gpt3-blog-container-article-content">
                <div>
                    <p>{date}</p>
                    <h3>{text}</h3>
                </div>
                <p>Read Full Article</p>
            </div>
        </div>
    )
}
