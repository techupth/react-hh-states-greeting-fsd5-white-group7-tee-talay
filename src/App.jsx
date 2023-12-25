import "./App.css";
import { useState } from "react";

function App() {
  const [greeting, setGreeting] = useState("Greeting Message");

  const greetingThai = () => {
    setGreeting("สวัสดี!");
  };

  const greetingEnglish = () => {
    setGreeting("Hi!");
  };

  const greetingChinese = () => {
    setGreeting("你好!");
  };
  return (
    <div className="App">
      <div className="greeting-container">{greeting}</div>
      <div className="buttons">
        <button onClick={greetingThai}>สวัสดี!</button>
        <button onClick={greetingEnglish}>Hi!</button>
        <button onClick={greetingChinese}>你好!</button>
      </div>
    </div>
  );
}

export default App;
