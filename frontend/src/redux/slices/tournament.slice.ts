import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Tournament } from "../../entities/tournament.entity";

const tournamentSlice = createSlice({
    name: "tournament",
    initialState: null as Tournament | null,
    reducers: {
        set(_, action: PayloadAction<Tournament | null>) {
            return action.payload;
        },

        clear() {
            console.log("Clearing...");
            return null;
        }
    }
});

export default tournamentSlice.reducer;