import React from 'react';

const BookItem = ({ bookInfo }) => {
  return (
    <div>
      <h2>{bookInfo.title}</h2>
      {bookInfo.authors && bookInfo.authors.map(authors => <p>{authors}</p>)}
      <p>{bookInfo.publisher}</p>
      {bookInfo.imageLinks ? (
        <img src={bookInfo.imageLinks.smallThumbnail} />
      ) : (
        <img src="https://www.quantabiodesign.com/wp-content/uploads/No-Photo-Available.jpg" />
      )}
    </div>
  );
};

export default BookItem;
