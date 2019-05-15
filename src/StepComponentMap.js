import { BaseMenu } from "./BaseMenu";
import { PartOne } from "./CharacterCreation/Part1";
import { Steps } from "./Steps";
import { OptionsHandler } from "./CharacterCreation/OptionsHandler";

export const StepComponentMap = {
  [Steps.INPUT_NAME_STRING]: PartOne,
  [Steps.INPUT_CLASSNAME]: OptionsHandler,
  [Steps.WARRIOR_WEAPON_CHOICE]: OptionsHandler,
  [Steps.MAGE_WEAPON_CHOICE]: OptionsHandler,
  [Steps.DONT_KNOW]: BaseMenu,
};
