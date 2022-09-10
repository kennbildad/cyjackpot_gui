import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    count: 0,
    name: ''
  }),
  getters: {
    oddOrEven (state) {
      if (state.count % 2 === 0) return 'even'
      return 'odd'
    },
    currentOperation (state) {
      if (state.name != '') return 'current state is ' + state.name
      return 'current state name is muted'
    }
  },
  actions: {
    addCount () {
      this.count++,
      this.name = 'Addiction'
    },
    subCount () {
      this.count--,
      this.name = 'Subtraction'
    }
  },
});
