import { assistantScene } from "./assistant";
import { automateScene } from "./automate";
import { buildScene } from "./build";
import { improveScene } from "./improve";
import { maintainScene } from "./maintain";
import type { SceneBuilder } from "./types";

// Keys match the `scene` field of each service in the i18n files.
export const SCENES: Record<string, SceneBuilder> = {
  maintain: maintainScene,
  improve: improveScene,
  build: buildScene,
  assistant: assistantScene,
  automate: automateScene,
};
