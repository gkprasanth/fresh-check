import { create } from "zustand";

export const useUserStore = create((set) => ({
  user: null, // Initial state for user details
  setUser: (userDetails) => set({ user: userDetails }), // Function to set user details
  clearUser: () => set({ user: null }), // Function to clear user details
}));