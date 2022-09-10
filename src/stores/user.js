import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "userStore",
  state: () => ({
    user_id: '',
    reg_no: '',
    email: '',
    phone: '',
    activated: '',
    verified: '',
    amount: ''
  }),
  getters: {
    getId (state) {
      if (state.user_id != '') return state.user_id
    },
    getRegNo (state) {
      if (state.reg_no != '') return state.reg_no
    },
    getEmail (state) {
      if (state.email != '') return state.email
    },
    getPhone (state) {
      if (state.email != '') return state.phone
    },
    getAmount (state) {
      if (state.amount != '') return state.amount
    },
    isActivated (state) {
      return state.activated
    },
    isVerified (state) {
      return state.verified
    }
  },
  actions: {
    clearStore () {
        this.user_id = '',
        this.reg_no = '',
        this.email = '',
        this.phone = '',
        this.verified = '',
        this.activated = '',
        this.amount = ''
    }
  }
})
