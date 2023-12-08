import { v4 as uuidv4 } from "uuid";
import Dog from "./dog";

export const dogData: Dog[] = [
  {
    name: "Floofus",
    species: "Dog",
    favFoods: ["Marshmallows"],
    birthYear: 2020,
  },
  {
    name: "Doofus",
    species: "Dog",
    favFoods: ["Porridge, Dog food"],
    birthYear: 2010,
  },
  {
    name: "Goofus",
    species: "Dog",
    favFoods: ["Bouncy balls"],
    birthYear: 2015,
  },
  {
    name: "Dumblepaw",
    species: "Dog",
    favFoods: ["Magic feasts"],
    birthYear: 1715,
  },
];
dogData.forEach((dog) => (dog.id = uuidv4()));
export default dogData;
