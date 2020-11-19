import axios from "axios";
import { Joke } from "../routes/JokesPage";

export interface JokeSearchData {
  result: Array<Joke>;
  total: number;
}

const useChuckApi = () => {
  const getCategories = async () =>
    axios.get('https://api.chucknorris.io/jokes/categories').then(res => res.data);

  const searchJokes = async (search: string) => {
    if (search === '') {
      return { total: 0, result: [] }; // otherwise the API will throw an error
    }

    return axios.get('https://api.chucknorris.io/jokes/search', {
      params: {
        query: search
      }
    }).then(res => res.data as JokeSearchData);
  };

  return {
    getCategories,
    searchJokes
  };
};

export default useChuckApi;
