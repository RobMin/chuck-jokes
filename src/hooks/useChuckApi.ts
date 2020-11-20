import axios from "axios";
import { useCallback } from "react";
import { Joke } from "routes/JokesPage";

export interface JokesResData {
  result: Array<Joke>;
  total: number;
}

const apiUrl = 'https://api.chucknorris.io/jokes';
const useChuckApi = () => {
  const getCategories = useCallback(async () =>
    axios.get(`${ apiUrl }/categories`).then(res => res.data)
  , []);

  const searchJokes = useCallback(async (search: string = 'all') =>
    axios.get(`${ apiUrl }/search`, {
      params: {
        query: search.length < 3 ? 'all' : search
      }
    }).then(res => res.data as JokesResData)
  , []);

  return {
    getCategories,
    getAllJokes: searchJokes,
    searchJokes
  };
};

export default useChuckApi;
