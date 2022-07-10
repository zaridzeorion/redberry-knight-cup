import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    name: "",
    email: "",
    phone: "",
    birthDate: "",
    levelOfKnowledge: "Level of knowledge",
    character: "Choose your character",
    championshipParticipation: null,
};

const applicantSlice = createSlice({
    name: "applicant",
    initialState,
    reducers: {
        setName(state, action) {
            return { ...state, name: action.payload };
        },
        setEmail(state, action) {
            return { ...state, email: action.payload };
        },
        setPhone(state, action) {
            return { ...state, phone: action.payload };
        },
        setBirthDate(state, action) {
            return { ...state, birthDate: action.payload };
        },
        setLevelOfKnowledge(state, action) {
            return { ...state, levelOfKnowledge: action.payload };
        },
        setCharacter(state, action) {
            return { ...state, character: action.payload };
        },
        setChampionshipParticipation(state, action) {
            return { ...state, championshipParticipation: action.payload };
        },
    },
});

export const {
    setName,
    setEmail,
    setPhone,
    setBirthDate,
    setLevelOfKnowledge,
    setCharacter,
    setChampionshipParticipation
} = applicantSlice.actions;

export default applicantSlice.reducer;