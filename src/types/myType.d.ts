import React from "react";

declare global {
  export type Key =
    | "C"
    | "C#"
    | "D"
    | "D#"
    | "E"
    | "F"
    | "F#"
    | "G"
    | "G#"
    | "A"
    | "A#"
    | "B";
  export type Third = "major" | "minor" | "sus4";
  export type Fifth = "aug" | "-5";
  export type Seventh = "7" | "M7";
  export type Tension = "9" | "11" | "13" | "b9" | "#9" | "#11" | "b13";
  export interface Chord {
    key: Key;
    third: Third;
    fifth?: Fifth;
    seventh?: Seventh;
    tension?: Tension;
    base?: Key;
  }
}
