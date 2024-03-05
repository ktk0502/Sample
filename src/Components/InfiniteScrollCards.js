import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const Card = ({ title, description, imageUrl }) => (
  <div className="max-w-xs bg-white shadow-lg rounded-md overflow-hidden mb-4">
    <img className="w-full h-16 object-cover object-center" src={imageUrl} alt="Card" />
    <div className="p-2">
      <h2 className="text-sm font-semibold text-gray-800 mb-1">{title}</h2>
      <p className="text-gray-600 text-xs">{description}</p>
    </div>
  </div>
);

const InfiniteScrollCards = () => {
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(1);

  const fetchCards = useCallback(() => {
    const pageSize = 20; // Adjust the page size as needed
    const maxResponses = 140;
    
    if (cards.length >= maxResponses) {
      console.log("Reached maximum responses");
      return;
    }
  
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=cf4bf35b31214c47b1bc2b90e8a127e5&page=${page}`;
  
    axios.get(apiUrl)
      .then(response => {
        const newCards = response.data.articles.slice(0, pageSize);
        console.log("New cards:", newCards);
  
        if (newCards.length > 0) {
          setCards(prevCards => [...prevCards, ...newCards]);
          setPage(prevPage => prevPage + 1);
        }
      })
      .catch(error => {
        console.error('Error fetching cards:', error);
      });
  }, [cards.length,page]);
  
  const handleClick = ()=>{
    fetchCards()
  }

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      fetchCards();
    }
  }, [fetchCards]);

  useEffect(() => {
    fetchCards();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchCards]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <div className='bg-pink-100'>
      <div className="flex flex-wrap justify-center mx-2 my-3">
      {cards.map((card, index) => (
        <Card
          key={index} // Using index as a key, you might want to use a unique identifier from the API response
          title={card.title}
          description={card.description}
          imageUrl={card.urlToImage}
        />
      ))}      
    </div>
    <div>
            <button type="submit" className="flex w-full justify-center rounded-md bg-pink-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600" onClick={handleClick}>LoadMore</button>
        </div>
      </div>
    </>
  );
};

export default InfiniteScrollCards;
