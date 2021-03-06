import axios from "axios";
import { useCallback } from "react";
import { Joke } from "routes/JokesPage";

interface JokesResData {
  result: Array<Joke>;
  total: number;
}

const apiUrl = 'https://api.chucknorris.io/jokes';
const useChuckApi = () => {
  const getCategories = useCallback(async () =>
    axios.get(`${ apiUrl }/categories`).then(res => res.data)
  , []);

  const searchJokes = useCallback(async (search: string) =>
    axios.get(`${ apiUrl }/search`, {
      params: {
        query: (!search || search.length === 0) ? 'all' : search
      }
    }).then(res => res.data as JokesResData)
  , []);

  return {
    getCategories,
    getAllJokes: searchJokes as () => Promise<JokesResData>,
    searchJokes
  };
};

export default useChuckApi;
