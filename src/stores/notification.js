import { defineStore } from "pinia";
import { ref } from 'vue'

export const useNotificationStore = defineStore({
    id: "notificationStore",
    state: () => ({
      alert: ref(''),
      message: ref('')
    }),
    getters: {
      getAlert (state) {
        if (state.alert != '') return state.alert
      },
      getMessage (state) {
        if (state.message != '') return state.message
      }
    },
    actions: {
        clearStore () {
            this.alert = '',
            this.message = ''
        }
    }
})