import { gridArray } from "../static-data/grideArray";

interface GridProps {
  robo: string;
  onUpdateRobo: (cell: string) => void;
}

const Gride = ({ robo, onUpdateRobo }: GridProps) => {
  const animateMovement = async (
    startValue: number,
    endValue: number,
    index: number,
    onUpdate: { (index: any, value: any): void; (arg0: any, arg1: any): void }
  ) => {
    let tempValue = startValue;
    const step = startValue < endValue ? 1 : -1;

    while (tempValue !== endValue) {
      await new Promise((resolve) => setTimeout(resolve, 200));

      tempValue += step;
      onUpdate(index, tempValue);
    }
  };

  // method - 1
  const onClickCell = async (cell: string) => {
    if (cell !== robo) {
      const roboValues = robo.split(",");
      const cellValues = cell.split(",");

      if (roboValues[0] !== cellValues[0] || roboValues[1] !== cellValues[1]) {
        for (let i = 0; i < 2; i++) {
          const roboIndex = i;
          const roboStart = parseInt(roboValues[i]);
          const roboEnd = parseInt(cellValues[i]);

          await animateMovement(
            roboStart,
            roboEnd,
            roboIndex,
            (index, value) => {
              roboValues[index] = value.toString();
              const resultString = roboValues.join(",");
              onUpdateRobo(resultString);
            }
          );
        }
      }
    }
  };

  // method - 2

  // const onClickCell = async (cell: any) => {
  //   if (cell !== robo) {
  //     const roboValues = robo.split(",");
  //     const cellValues = cell.split(",");

  //     if (roboValues[0] !== cellValues[0] || roboValues[1] !== cellValues[1]) {
  //       if (roboValues[0] < cellValues[0]) {
  //         let tempValue = parseInt(roboValues[0]);
  //         while (tempValue < parseInt(cellValues[0])) {
  //           await new Promise((resolve) => setTimeout(resolve, 200));

  //           tempValue++;
  //           roboValues[0] = tempValue.toString();
  //           const resultString = roboValues.join(",");
  //           onUpdateRobo(resultString);
  //         }
  //       }

  //       if (roboValues[0] > cellValues[0]) {
  //         let tempValue = parseInt(roboValues[0]);
  //         while (tempValue > parseInt(cellValues[0])) {
  //           await new Promise((resolve) => setTimeout(resolve, 200));

  //           tempValue--;
  //           roboValues[0] = tempValue.toString();
  //           const resultString = roboValues.join(",");
  //           onUpdateRobo(resultString);
  //         }
  //       }

  //       if (roboValues[1] < cellValues[1]) {
  //         let tempValue = parseInt(roboValues[1]);
  //         while (tempValue < parseInt(cellValues[1])) {
  //           await new Promise((resolve) => setTimeout(resolve, 200));

  //           tempValue++;
  //           roboValues[1] = tempValue.toString();
  //           const resultString = roboValues.join(",");
  //           onUpdateRobo(resultString);
  //         }
  //       }

  //       if (roboValues[1] > cellValues[1]) {
  //         let tempValue = parseInt(roboValues[1]);
  //         while (tempValue > parseInt(cellValues[1])) {
  //           await new Promise((resolve) => setTimeout(resolve, 200));

  //           tempValue--;
  //           roboValues[1] = tempValue.toString();
  //           const resultString = roboValues.join(",");
  //           onUpdateRobo(resultString);
  //         }
  //       }
  //     }
  //   }
  // };

  return (
    <div className="grid grid-cols-5 h-3/4">
      {gridArray.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            className={`border border-red-700 flex justify-center items-center cursor-pointer ${
              cell === robo ? "bg-robo bg-contain bg-center" : ""
            }`}
            onClick={() => onClickCell(cell)}
          ></div>
        ))
      )}
    </div>
  );
};

export default Gride;
