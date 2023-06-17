import React from "react";
import {
  Route,
  BrowserRouter,
  Routes,
  Link,
  useSearchParams,
} from "react-router-dom";

const swCharacters = [
  { name: "Luke Skywalker", type: "Jedi" },
  { name: "Darth Vader", type: "Sith" },
  { name: "Princess Leia Organa", type: "Rebel" },
  { name: "Han Solo", type: "Smuggler" },
  { name: "Yoda", type: "Jedi" },
  { name: "Obi-Wan Kenobi", type: "Jedi" },
  { name: "Chewbacca", type: "Rebel" },
  { name: "Darth Maul", type: "Sith" },
  { name: "Rey Skywalker", type: "Jedi" },
  { name: "Finn", type: "Rebel" },
  { name: "Kylo Ren", type: "Sith" },
  { name: "Poe Dameron", type: "Rebel" },
  { name: "Anakin Skywalker", type: "Jedi" },
  { name: "Padmé Amidala", type: "Rebel" },
  { name: "Lando Calrissian", type: "Smuggler" },
  { name: "Mace Windu", type: "Jedi" },
  { name: "Emperor Palpatine", type: "Sith" },
  { name: "BB-8", type: "Rebel" },
];

export default function HomePage() {
  // const [searchParams, setSearchParams ] = useSearchParams();

  const charEls = swCharacters.map((char) => (
    <div key={char.name}>
      <h3
        style={{
          color:
            char.type.toLowerCase() === "jedi"
              ? "blue"
              : char.type.toLowerCase() === "rebel"
              ? "green"
              : char.type.toLowerCase() === "sith"
              ? "red"
              : "orange",
        }}
      >
        Name: {char.name}
      </h3>
      <p>Type: {char.type}</p>
      <hr />
    </div>
  ));

  return <div>{charEls}</div>;
}
