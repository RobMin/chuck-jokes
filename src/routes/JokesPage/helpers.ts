import { CategorizedJokes, Joke } from ".";

const addTo = (obj: CategorizedJokes, joke: Joke, category: string) => {
  if (!obj[category]) {
    return obj[category] = [ joke ];
  }
  obj[category].push(joke);
};

export const addToCategories = (obj: CategorizedJokes, joke: Joke) => {
  if (!joke?.categories?.length) {
    joke.categories = [ 'uncategorized' ];
  }
  joke.categories.forEach((category) => addTo(obj, joke, category));
  return obj;
};
