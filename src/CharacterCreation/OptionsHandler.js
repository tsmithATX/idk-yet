import React from "react";
import { Steps } from "../Steps";
import { Prompt } from "../Prompt";
import { TextInput } from "../TextInput";

const temp = {
  [Steps.INPUT_CLASSNAME]: {
    mainQuestion: "Choose a class:",
    charKey: "CLASS",
    options: {
      m: { text: "Type 'm' for Mage", nextStep: Steps.MAGE_WEAPON_CHOICE },
      w: { text: "'w' for Warrior", nextStep: Steps.WARRIOR_WEAPON_CHOICE },
      t: { text: "or 't' for Thief", nextStep: Steps.DONT_KNOW },
    },
  },
  [Steps.WARRIOR_WEAPON_CHOICE]: {
    mainQuestion: "Choose a weapon:",
    charKey: "WEAPON",
    options: {
      sword: { text: "Type 'sword'", nextStep: Steps.DONT_KNOW },
      axe: { text: "'axe'", nextStep: Steps.DONT_KNOW },
      spear: { text: "'spear'", nextStep: Steps.DONT_KNOW },
      toaster: { text: "or 'toaster'", nextStep: Steps.DONT_KNOW },
    },
  },
  [Steps.MAGE_WEAPON_CHOICE]: {
    mainQuestion: "Choose a weapon:",
    charKey: "WEAPON",
    options: {
      staff: { text: "Type 'staff'", nextStep: Steps.DONT_KNOW },
      wand: { text: "'wand'", nextStep: Steps.DONT_KNOW },
      dogbone: { text: "'dogbone'", nextStep: Steps.DONT_KNOW },
      toaster: { text: "or 'toaster'", nextStep: Steps.DONT_KNOW },
    },
  },
};

export const OptionsHandler = ({
  curStep,
  updateStep,
  characterSetup,
  updateCharacter,
}) => {
  const curConfig = temp[curStep];
  const updateAndMoveTo = text => {
    const allowedEntries = Object.keys(curConfig.options);
    const isValid = allowedEntries.indexOf(text) > -1;
    if (isValid) {
      const charKeyToUpdate = curConfig.charKey;
      const nextStep = curConfig.options[text].nextStep;
      const newCharacterSetup = {
        ...characterSetup,
        [charKeyToUpdate]: text,
      };
      updateCharacter(newCharacterSetup);

      updateStep(nextStep);
    } else {
      alert("Invalid Input");
    }
  };
  return (
    <div>
      <Prompt>{curConfig.mainQuestion}</Prompt>
      <Prompt>
        (
        {Object.values(curConfig.options)
          .map(option => {
            return option.text;
          })
          .join(" / ")}
        )
      </Prompt>
      <TextInput handleText={updateAndMoveTo} />
    </div>
  );
};
