import { arrows } from "../static-data/arrows";

interface NavigatorProps {
  onClickDirection: (value: number) => void;
}

const Navigator = ({ onClickDirection }: NavigatorProps) => {
  const onArrowClick = (direction: number) => {
    onClickDirection(direction);
  };

  return (
    <div className="flex items-center justify-center space-x-4 h-1/4">
      {arrows.map((res, index) => (
        <button
          className="w-10 h-10 border-2 border-gray-700 bg-white text-lg focus:outline-none transition duration-300 hover:bg-gray-200"
          onClick={() => onArrowClick(index)}
        >
          {res}
        </button>
      ))}
    </div>
  );
};
export default Navigator;
