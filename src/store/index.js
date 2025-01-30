import { createStore } from "vuex"

export default createStore({
  state () {
    return {
      visibleNavbar: true,
      isDarkMode: false
    }
  },
  getters: {
    visibleNavbar: (state) => state.visibleNavbar,
    isDarkMode: (state) => state.isDarkMode
  },
  mutations: {
    setVisibleNavbar: (state, value) => state.visibleNavbar = value,
    setIsDarkMode: (state, value) => state.isDarkMode = value
  }
})