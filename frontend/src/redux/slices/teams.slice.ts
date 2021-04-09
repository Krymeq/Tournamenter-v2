import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Team } from "../../entities/team.entity";

const initialState: Team[] = [];

const teamSlice = createSlice({
    name: "teams",
    initialState,
    reducers: {
        set(_, action: PayloadAction<Team[]>) {
            return action.payload;
        },

        clear() {
            console.log("Clearing...");
            return initialState;
        }
    }
})

export default teamSlice.reducer;