import { createSlice } from "@reduxjs/toolkit";

// If true - route is open for that page, therefore redirect is allowed
// If false - route is closed for that page, therefore redirect is not allowed
let initialState = {
    experience: false,
    onboardingCompleted: false,
};

const routesOpenClose = createSlice({
    name: "routesOpenClose",
    initialState,
    reducers: {
        openExperienceRoute(state) {
            return { ...state, experience: true };
        },
        openOnboardingRoute(state) {
            return { ...state, onboardingCompleted: true };
        },

        closeExperienceRoute(state) {
            return { ...state, experience: false };
        },
        closeOnboardingRoute(state) {
            return { ...state, onboardingCompleted: false };
        },
    },
});

export const {
    openExperienceRoute,
    openOnboardingRoute,
    closeExperienceRoute,
    closeOnboardingRoute
} = routesOpenClose.actions;

export default routesOpenClose.reducer;