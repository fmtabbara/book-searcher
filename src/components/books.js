import React from 'react';
import BookItem from './bookItem';
import './books.css';

const Books = ({ booksData }) => {
  return (
    <div className="books-container">
      {booksData.map(({ volumeInfo }, index) => (
        <BookItem key={index} bookInfo={volumeInfo} />
      ))}
    </div>
  );
};

export default Books;
