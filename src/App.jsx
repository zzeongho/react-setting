import { useState } from "react";

const App = () => {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [result, setResult] = useState(0);
  const onChangeNum1 = (e) => {
    setNum1(e.target.value);
  };
  const onChangeNum2 = (e) => {
    setNum2(e.target.value);
  };

  const checkNum = (n1, n2) => {
    if (n1 === "" || n2 === "") {
      alert("값을 입력해주세요.");
      return;
    }
    if (isNaN(n1) || isNaN(n2)) {
      alert("숫자를 입력해주세요.");
      return;
    }
  };

  const onClickAdd = () => {
    checkNum(num1, num2);
    setResult(Number(num1) + Number(num2));
  };
  const onClickSubtract = () => {
    checkNum(num1, num2);
    setResult(Number(num1) - Number(num2));
  };
  const onClickMultiply = () => {
    checkNum(num1, num2);
    setResult(Number(num1) * Number(num2));
  };
  const onClickDevide = () => {
    checkNum(num1, num2);
    setResult(Number(num1) / Number(num2));
  };

  // function onClick
  return (
    <div className="bg-red-100 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold mb-4">
        Awesome한 계산기 (로 바뀔 예정)
      </h1>
      <div className="text-3xl font-black mb-4">{result}</div>
      <div className="mb-4">
        <input
          className="border-2 focus:outline-none focus:border-purple-400 rounded-lg px-4 py-2 text-xl"
          type="number"
          value={num1}
          onChange={onChangeNum1}
        />
        <input
          className="border-2 focus:outline-none focus:border-purple-400 rounded-lg px-4 py-2 text-xl ml-4"
          type="text"
          value={num2}
          onChange={onChangeNum2}
        />
      </div>
      <div>
        <button
          onClick={onClickAdd}
          className="border-2 px-2 rounded-lg border-red-500 text-red-500"
        >
          Add
        </button>
        <button
          onClick={onClickSubtract}
          className="border-2 px-2 rounded-lg border-blue-500 text-blue-500"
        >
          Subtract
        </button>
        <button
          onClick={onClickMultiply}
          className="border-2 px-2 rounded-lg border-black text-black"
        >
          Multiply
        </button>
        <button
          onClick={onClickDevide}
          className="border-2 px-2 rounded-lg border-white text-black"
        >
          Devide
        </button>
      </div>
    </div>
  );
};

export default App;
