import React from 'react';
import BookItem from './bookItem';

const Books = ({ booksData }) => {
  return (
    <div>
      <h2>Books displayed here..</h2>
      {booksData.map(({ volumeInfo }, index) => (
        <BookItem key={index} bookInfo={volumeInfo} />
      ))}
    </div>
  );
};

export default Books;
