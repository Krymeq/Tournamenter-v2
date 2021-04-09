import { configureStore } from "@reduxjs/toolkit";
import teamReducer from "./slices/teams.slice";
import tournamentReducer from './slices/tournament.slice';

const store = configureStore({
    reducer: {
        teams: teamReducer,
        tournament: tournamentReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export default store;