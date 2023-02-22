import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Input from "./components/input";
import Card from "./components/card";
import { iCardProps } from "./components/card";

function App() {
  const [name, setName] = useState<iCardProps | null>(null);
  const [people, setPeople] = useState<iCardProps[]>([]);

  return (
    <div className="App">
      <h1>TypeScript Test</h1>
      <Input placeholder="Nome" label="Inserir nome:" />
      <Card name="Arthur" age={31} hobby="Design" />
    </div>
  );
}

export default App;
