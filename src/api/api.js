import axios from "axios";

const API_URL = "https://6616aa66ed6b8fa4348113b6.mockapi.io/movies";

export const fetchAllMovies = async () => {
  try {
    const { data } = await axios.get(API_URL);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchMovieById = async (id) => {
  try {
    const { data } = await axios.get(`${API_URL}/?id=${id}`);
    return data[0];
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteMovieById = async (id) => {
  try {
    console.log(id);
    const res = await axios.delete(`${API_URL}/${id}`);

    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateMovieById = async (id, newData) => {
  try {
    const res = await axios.put(`${API_URL}/${id}`, newData);
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export const postMovie = async (data) => {
  try {
    const res = await axios.post(API_URL, data);
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchFavouriteMovies = async (id) => {
  try {
    const { data } = await axios.get(API_URL);

    const filteredData = data.filter((movie) => id.includes(movie.id));

    return filteredData;
  } catch (error) {
    throw new Error(error);
  }
};
