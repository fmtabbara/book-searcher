import React from 'react';
import './book-item.css';

const BookItem = ({ bookInfo }) => {
  const bookData = {
    title: bookInfo.title || '...',
    author: (bookInfo.authors && bookInfo.authors[0]) || '...',
    publisher: bookInfo.publisher || '...'
  };
  const imgSrc = bookInfo.imageLinks
    ? bookInfo.imageLinks.smallThumbnail
    : 'https://www.quantabiodesign.com/wp-content/uploads/No-Photo-Available.jpg';

  const imageStyle = {
    width: '125px',
    height: '220px',
    backgroundImage: `url(${imgSrc})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  };

  return (
    <div className="book">
      <a href={bookInfo.infoLink} target="_blank">
        <div style={imageStyle} />
      </a>
      <div className="text-container">
        <h2>
          {bookData.title.length > 15
            ? bookData.title.slice(0, 15) + ' ...'
            : bookData.title}
        </h2>
        <p className="author">
          {bookData.author.length > 15
            ? bookData.author.slice(0, 15) + ' ...'
            : bookData.author}
        </p>
        <p className="publisher">
          {bookData.publisher.length > 15
            ? bookData.publisher.slice(0, 15) + ' ...'
            : bookData.publisher}
        </p>
      </div>
    </div>
  );
};

export default BookItem;
