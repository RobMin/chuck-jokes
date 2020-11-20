import { CategorizedJokes, Joke } from ".";

const addTo = (obj: CategorizedJokes, joke: Joke, category: string) => {
  if (!obj[category]) {
    return obj[category] = [ joke ];
  }
  obj[category].push(joke);
};

const randomNumTill = (till: number) => Math.floor(Math.random() * till);
const addLikesAndDislikes = (joke: Joke) => {
  joke.likes = randomNumTill(130);
  joke.dislikes = randomNumTill(70);
};

export const addToCategories = (obj: CategorizedJokes, joke: Joke) => {
  if (!joke?.categories?.length) {
    joke.categories = [ 'uncategorized' ];
  }
  addLikesAndDislikes(joke);
  joke.categories.forEach((category) => addTo(obj, joke, category));
  return obj;
};

export const getRandomKey = (obj: any) => {
  const keys = Object.keys(obj);
  return keys[randomNumTill(keys.length)];
};
