export const Sound = {
    BUTTON: "button",
    GAMEWIN: "gamewin",
    MOVE: "move",
    PUSHBOX: "pushbox",
    WRONG: "wrong",
} as const;
export type SoundKey = keyof typeof Sound;