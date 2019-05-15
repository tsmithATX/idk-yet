import React from "react";
import { Prompt } from "./Prompt";
import { TextInput } from "./TextInput";
import { StepComponentMap } from "./StepComponentMap";

export const GameRunner = props => {
  const CurrentStepHandler = StepComponentMap[props.curStep];

  return <CurrentStepHandler {...props} />;
};
