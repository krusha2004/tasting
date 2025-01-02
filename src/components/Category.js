import React, { useState } from 'react';
import axios from 'axios';
import NewsCard from './NewsCard'; 
import moment from 'moment';

const categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];

const NewsSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('general'); 
    
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState('');

    const handleSearch = async () => {

        try {
            const apiKey = 'd2f6680d6a7d42ca92c77fddcad93b9b'; 
            const response = await axios.get(
                `https://newsapi.org/v2/top-headlines?q=${searchTerm}&category=${selectedCategory}&apiKey=${apiKey}`
            );

            if (response.data.articles) {                
                setArticles(response.data.articles);
            } else {
                setArticles([]); 
            }
        } catch (error) {
            setError('')
        }
    }

    const handleCategorySelect = (category) => {
        setSelectedCategory(category)
        setSearchTerm(category)
        handleSearch()
    }

    return (
        <div>
            <header>
                <h1>News Search</h1>
                <nav>
                    {categories.map((category) => (
                        <button key={category} onClick={() => handleCategorySelect(category)}>
                            {category}
                        </button>
                    ))}
                </nav>
            </header>
            <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search news..." />
            <button onClick={handleSearch}>Search</button>

            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div className="articles">
                {articles.map((article) => (
                    <NewsCard key={article.url} article={article} />
                ))}
            </div>
        </div>
    );
};

export default NewsSearch;
