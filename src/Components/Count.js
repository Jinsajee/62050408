import React from "react";

const Count = () => {
  return <div>Count</div>;
};

const Home = () => {
  const [countNumber, setCountNumber] = useState(0);

  const onHandleClick = () => {
    setCountNumber(5);
  };

  return (
    <div>
      <TopMenu />
      <div className="text-center">
        <div>{countNumber}</div>
      </div>
      <button className="btn btn-outline-primary" onClick={onHandleClick}>
        Click
      </button>
    </div>
  );
};

export default Count;
