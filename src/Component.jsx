import { type } from "@testing-library/user-event/dist/type";
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
  const [searchParams, setSearchParams] = useSearchParams();

  const typeFilter = searchParams.get("type");

  const displayCharacters = typeFilter
    ? swCharacters.filter((char) => char.type.toLowerCase() === typeFilter)
    : swCharacters;

  const charEls = displayCharacters.map((char) => (
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
              : char.type.toLowerCase() === "smuggler"
              ? "orange"
              : "#161616",
        }}
      >
        Name: {char.name}
      </h3>
      <p
        style={{
          color:
            char.type.toLowerCase() === "jedi"
              ? "blue"
              : char.type.toLowerCase() === "rebel"
              ? "green"
              : char.type.toLowerCase() === "smuggler"
              ? "orange"
              : char.type.toLowerCase() === "sith"
              ? "red"
              : "#161616",
        }}
      >
        Type: {char.type}
      </p>
      <hr />
    </div>
  ));

  return (
    <div>
      <h1>Home</h1>
      <div className="link-container-j-s">
        <button onClick={() => setSearchParams({type: "jedi"})}>Jedi</button>
        <button onClick={() => setSearchParams({type: "sith"})}>Sith</button>
        <button onClick={() => setSearchParams({type: "rebel"})}>Rebel</button>
        <button onClick={() => setSearchParams({type: "smuggler"})}>Smuggler</button>
        <button onClick={() => setSearchParams({})}>Clear</button>      
      </div>
      <div>{charEls}</div>
    </div>
    //  <Link to="?type=jedi">Jedi</Link>
    //  <Link to="?type=sith">Sith</Link>
    //  <Link to="?type=smuggler">Smuggler</Link>
    //  <Link to="?type=rebel">Rebel</Link>
    //  <Link to=".">All</Link> 
     
  );
}
