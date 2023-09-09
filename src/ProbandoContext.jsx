import React, { useContext } from "react";
import { ContextTestProvider } from "./App";

const ProbandoContext = () => {
  const { tasks, dispatch } = useContext(ContextTestProvider);
  console.log(tasks);
  console.log(dispatch);

  return (
    <div>
      <h1
        style={{
          backgroundColor: "red",
          display: "inline-block",
          padding: "1rem",
        }}
      >
        {tasks[0].text} ---- Context test
      </h1>
    </div>
  );
};

export default ProbandoContext;
