import { createStore } from "vuex"

export default createStore({
  state () {
    return {
      visibleNavbar: true,
      visibleFooter: true,
      isDarkMode: false
    }
  },
  getters: {
    visibleNavbar: (state) => state.visibleNavbar,
    visibleFooter: (state) => state.visibleFooter,
    isDarkMode: (state) => state.isDarkMode
  },
  mutations: {
    setVisibleNavbar: (state, value) => state.visibleNavbar = value,
    setVisibleFooter: (state, value) => state.visibleFooter = value,
    setIsDarkMode: (state, value) => state.isDarkMode = value
  }
})