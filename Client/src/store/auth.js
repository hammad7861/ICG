import { create } from "zustand";


const useAuthStore = create((set, get) => ({
  token: null,
  userId: null,
  isLoading: true,
  logIn: (token, id) => {
    set({ token, userId: id, 
      isLoading: false,
     });
    localStorage.setItem("authToken", token);
    localStorage.setItem("userId", id.toString());
  },
  logout: async () => {
    set({
      token: null,
      userId: null,
      isLoading: false,
    });
    localStorage.removeItem("authToken");
    localStorage.removeItem("userId");
  },

  autoLogin: () => {
    const token = localStorage.getItem("authToken");
    const userId = localStorage.getItem("userId");
    console.log(token,"inside");
    
    if (!token || !userId) {
      get().logout();
      return;
    }
    set({
      token,
      userId: Number(userId),
      isLoading:false
    });
  },
}));

export default useAuthStore;
