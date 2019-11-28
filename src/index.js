import React from "react";
import ReactDOM from "react-dom";

const Head = props => {
  return <h1>{props.course}</h1>;
};

const Part = props => {
  return (
    <div>
      {props.part} {props.exercise}
    </div>
  );
};

const Content = props => {
  let rows = [];
  for (let i = 0; i < props.parts.length; i++) {
    rows.push(<Part part={props.parts[i]} exercise={props.exercises[i]} />);
  }

  return <tbody>{rows}</tbody>;
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Head course={course} />
      <Content
        exercises={[exercises1, exercises2, exercises3]}
        parts={[part1, part2, part3]}
      />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
