import axios from 'axios';

const API_KEY = '8aba4e3419a44727b7eb66f35fce4fa2';

export const fetchData = async query => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;

  const options = {
    params: {
      api_key: API_KEY,
    },
  };

  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    console.error("This didn't work.");
    throw error;
  }
};

export const fetchPopular = async () => {
  const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';

  const options = {
    params: {
      api_key: API_KEY,
    },
  };

  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    console.error("This didn't work.");
    throw error;
  }
};

export const fetchDataById = async movieId => {
  const url = `https://api.themoviedb.org/3/trending/movie/day?language=en-US`;

  const options = {
    params: {
      api_key: API_KEY,
    },
  };

  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    console.error("This didn't work.");
    throw error;
  }
};
