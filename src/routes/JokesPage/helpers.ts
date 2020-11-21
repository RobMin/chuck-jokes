import { Category } from 'components/Category/index.d';
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

export type JokeWithIdx = { idx: number, joke: Joke };
export const getRandomJokePerRandomCategory = (obj: CategorizedJokes, count = 4): Array<JokeWithIdx> => {
  const availableCategories = Object.keys(obj) as Array<Category>;

  let chosenCategories: Array<Category> = [];
  if (availableCategories.length <= count) {
    chosenCategories = availableCategories;
  } else {
    for (let i = 0; i < count; ++i) {
      const idx = randomNumTill(availableCategories.length);
      const chosenCategory = availableCategories.splice(idx, 1)[0];
      chosenCategories.push(chosenCategory);
    }
  }

  return chosenCategories.reduce((chosenJokes: Array<JokeWithIdx>, cat: Category) => {
    const idx = randomNumTill(obj[cat].length);
    const joke = obj[cat][idx];
    chosenJokes.push({ idx, joke });
    return chosenJokes;
  }, []);
};
