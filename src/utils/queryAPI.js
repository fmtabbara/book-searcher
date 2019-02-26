const axios = require('axios');

const queryAPI = userInput => {
  const formatInput = encodeURI(userInput);
  const URI = `https://www.googleapis.com/books/v1/volumes?q=${formatInput}`;

  return axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=${formatInput}`
  );
};

export default queryAPI;
