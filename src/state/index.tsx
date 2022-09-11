import { identity, prop } from "ramda";
import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";
import { Task } from "../types/tasks.types";
import { minutesToSeconds } from "../utils/time.util";
import { LONG_BREAK, SHORT_BREAK, WORK } from "./constants";
import Interface from "../assets/Interface.mp3";
import Micellaneus from "../assets/Miscellaneus.mp3";

const { persistAtom } = recoilPersist();

export const timersConfig = atom({
  key: "timerConfig",
  default: {
    alarms: {
      alarm1: Micellaneus,
      alarm2: Interface,
    },
    timers: {
      [WORK]: minutesToSeconds(25),
      [SHORT_BREAK]: minutesToSeconds(5),
      [LONG_BREAK]: minutesToSeconds(10),
    },
  },
  effects: [persistAtom],
});

export const currentTimer = atom({
  key: "currentTimer",
  default: 0,
});

export const currentMode = atom({
  key: "currentMode",
  default: WORK,
  effects: [persistAtom],
});

export const currentSession = atom({
  key: "currentSession",
  default: 0,
});

export const tasksList = atom<Task[]>({
  key: "tasksList",
  default: [],
  effects: [persistAtom],
});

export const modeSelector = selector({
  key: "mode",
  get: ({ get }) => get(currentMode),
  set: ({ set, get }, mode) => {
    const newMode = String(mode);
    const { timers } = get(timersConfig);
    const timer = Number(prop(newMode)(timers));

    set(currentMode, newMode);
    set(currentTimer, timer);
  },
});
