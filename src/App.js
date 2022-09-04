import React from "react";
import "./style.css";
import StepProgressBar from "react-step-progress";
import "react-step-progress/dist/index.css";

export default function App() {
  const step1Content = <h1></h1>;
  const step2Content = <h1></h1>;
  const step3Content = <h1></h1>;

  // setup step validators, will be called before proceeding to the next ste
  function step2Validator() {
    return true;
  }

  return (
    <div className="App">
      <StepProgressBar
        startingStep={0}
        steps={[
          {
            label: "Welcome to Knowledge Transistion",
            name: "Welcome to Knowledge Transistion",
            content: step1Content
          },
          {
            label: "Introduction to Travelers",
            name: "Introduction to Travelers",
            content: step2Content,
            validator: step2Validator
          },
          {
            label: "Insurance & Its Types",
            name: "Insurance & Its Types",
            content: step2Content,
            validator: step2Validator
          },
          {
            label: "Quiz",
            name: "Quiz",
            content: step2Content,
            validator: step2Validator
          },
          {
            label: "Choose Your Path",
            name: "Choose Your Path",
            content: step2Content,
            validator: step2Validator
          },
          {
            label: "Finish",
            name: "Finish",
            content: step3Content
          }
        ]}
      />
    </div>
  );
}
