import "./App.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";
import { useState } from "react";
import AnimalCard from "./components/animal_card";
import Cat from "./data/cat";
import { catData } from "./data/cat-data";
import Dog from "./data/dog";
import { dogData } from "./data/dog-data";

function App(): JSX.Element {
  const [cats] = useState<Array<Cat>>(catData);
  const [dogs] = useState<Array<Dog>>(dogData);

  const allAnimals = [...cats, ...dogs];

  console.log(allAnimals);

  // console.log("Our pretties 😻: ", cats);
  const catCount = cats.length;
  const dogCount = dogs.length;

  return (
    <>
      <Navbar />
      <Header catCount={catCount} dogCount={dogCount} />

      <main>
        <div className="cards__wrapper">
          {allAnimals.map((animals, index) => (
            <AnimalCard
              key={animals.id}
              name={animals.name}
              species={animals.species}
              favFoods={animals.favFoods}
              birthYear={animals.birthYear}
              animalIndex={index}
            />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
