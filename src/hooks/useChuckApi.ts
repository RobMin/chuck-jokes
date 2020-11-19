import axios from "axios";

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
    }).then(res => res.data);
  };

  return {
    getCategories,
    searchJokes
  };
};

export default useChuckApi;
