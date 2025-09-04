import type { State } from "./store";

export function happyCountSelector(state: State){
    return state.happyCount;
}

export function sadCountSelector(state: State){
    return state.sadCount;
}