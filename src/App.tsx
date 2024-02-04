import { useState } from "react";
import "./App.css";
import Gride from "./components/Gride";
import Navigator from "./components/Navigator";

function App() {
  const [robo, setRobo] = useState("1,1");

  const updateRobo = (
    value: number,
    operation: string,
    comparisonValue: string
  ) => {
    const numbers = robo.split(",");

    if (operation === "increment" && numbers[value] !== comparisonValue) {
      numbers[value] = (parseInt(numbers[value]) + 1).toString();
    } else if (
      operation === "decrement" &&
      numbers[value] !== comparisonValue
    ) {
      numbers[value] = (parseInt(numbers[value]) - 1).toString();
    }

    const resultString = numbers.join(",");
    setRobo(resultString);
  };

  const onClickDirection = (value: number) => {
    if (value === 0) {
      updateRobo(0, "decrement", "1");
    }

    if (value === 1) {
      updateRobo(1, "increment", "5");
    }

    if (value === 2) {
      updateRobo(1, "decrement", "1");
    }

    if (value === 3) {
      updateRobo(0, "increment", "5");
    }
  };

  const onUpdateRobo = (value: string) => {
    setRobo(value);
  };

  return (
    <div className="App">
      <Gride robo={robo} onUpdateRobo={onUpdateRobo} />
      <Navigator onClickDirection={onClickDirection} />
    </div>
  );
}

export default App;
