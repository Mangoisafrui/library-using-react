import axios from "axios";

export const searchBooks = async (query) => {
  const res = await axios.get(`https://openlibrary.org/search.json?q=${query}`);
  return res.data.docs;
};

export const getBookDetails = async (id) => {
  const res = await axios.get(`https://openlibrary.org/works/${id}.json`);
  return res.data;
};