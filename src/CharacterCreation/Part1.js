import React from "react";
import { Steps } from "../Steps";
import { Prompt } from "../Prompt";
import { TextInput } from "../TextInput";

export const Part1Config = {
  [Steps.INPUT_NAME_STRING]: {
    mainQuestion: "What's your name?",
    charKey: "NAME",
    options: {},
    defaultNextStep: "INPUT_CLASSNAME",
  },
};

export const PartOne = ({
  curStep,
  updateStep,
  characterSetup,
  updateCharacter,
}) => {
  const updateAndMoveTo = text => {
    const curConfig = Part1Config[curStep];
    const charKeyToUpdate = curConfig.charKey;
    const nextStep = curConfig.defaultNextStep;

    const newCharacterSetup = {
      ...characterSetup,
      [charKeyToUpdate]: text,
    };
    updateCharacter(newCharacterSetup);

    updateStep(nextStep);
  };
  return (
    <div>
      <Prompt>{Part1Config[curStep].mainQuestion}</Prompt>
      <TextInput handleText={updateAndMoveTo} />
    </div>
  );
};

export const StartAtCharCreation = ({ updateStep, updateCharacter }) => {
  const startOver = () => {
    updateStep(Steps.INPUT_NAME_STRING);
    updateCharacter({});
  };
  return (
    <div>
      <button onClick={startOver}>Start Over</button>
    </div>
  );
};

// def startAt(textKey):
//     characterSetup = {
//         CHAR_NAME: ''
//     }
//     curStep = output[textKey]
//     while (curStep):
//         print(curStep["mainQuestion"])
//         curOptions = curStep["options"]
//         if options.size > 0:
//             optionsWithSlash = curOptions.map(k,v).join("/")
//             printf("(%s)", optionsWithSlash)
//             playerInput = input(">>")
//             while (!curOptions.keys().contains(playerInput)):
//                 printf("Enter one of (%s)")
//                 playerInput = input(">>")
//             curStep = options[playerInput]["nextStep"]
//         else:
//             playerInput = input(">>")
//             curStep = options["defaultNextStep"]
//         characterSetup[curStep["charKey"]] = playerInput
//     return characterSetup

// def playerSetup():
//     characterSetup = startAt(INPUT_NAME_STRING)
