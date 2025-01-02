import React from 'react';
import moment from 'moment';

const NewsCard = ({ article }) => {
    return (
        <div className="card">
            {article.urlToImage && <img src={article.urlToImage} alt={article.title} />}
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <p>{article.content}</p>
            <p>Author: {article.author || 'Unknown'}</p>
            <p>Published: {moment(article.publishedAt).format('MMMM Do YYYY')}</p>
        </div>
    );
};

export default NewsCard;
