import React, { useState } from "react";

import { StartAtCharCreation } from "./CharacterCreation/Part1";
import { ShowIfDev } from "./ShowIfDev";
import { GameRunner } from "./GameRunner";
import { Steps } from "./Steps";

export const GameController = () => {
  const [curStep, updateStep] = useState(Steps.INPUT_NAME_STRING);
  const [characterSetup, updateCharacter] = useState({});

  return (
    <div>
      <ShowIfDev>
        <div>{curStep}</div>
      </ShowIfDev>
      <ShowIfDev>
        <div>{JSON.stringify(characterSetup)}</div>
      </ShowIfDev>
      <GameRunner
        curStep={curStep}
        updateStep={updateStep}
        characterSetup={characterSetup}
        updateCharacter={updateCharacter}
      />

      <StartAtCharCreation
        updateStep={updateStep}
        updateCharacter={updateCharacter}
      />
    </div>
  );
};
