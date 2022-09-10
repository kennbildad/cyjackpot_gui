<template>
  <div>
    <nav class="navbar navbar-expand-lg sticky-top navbar-light bg-white">
    <div class="container-fluid">
    <router-link class="navbar-brand" to="/"><img alt="cyjackpotLogo" src="@/assets/logo.png"></router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/">HOME</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/about">ABOUT</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/play">HOW TO PLAY</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/contact">CONTACT</router-link>
        </li>
      </ul>
      <div v-if="!isLoggedIn" class="d-flex">
        <router-link class="nav-link" to="/login">LOG IN</router-link>
        <router-link class="nav-link" to="/sign-up">SIGN UP</router-link>
      </div>
      <div v-if="isLoggedIn" class="d-flex">
        <router-link class="nav-link" to="/dashboard">MY DASHBOARD</router-link>
        <a href="" @click="userLogout" class="nav-link">LOGOUT </a>
      </div>
    </div>
    </div>
    </nav>
    <NotificationMessage />
    
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import NotificationMessage from "@/components/NotificationMessage.vue"
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
const token = window.localStorage.getItem('cy_jackpot_token')

const isLoggedIn = ref(false)

async function checkUser() {
  if (token) {
    await axios.get('/user/')
    .then((response) => {
      if (response.data.status == 'success') {
        isLoggedIn.value = true
      } else {
        userStore.clearStore()
        isLoggedIn.value = false
      }
    })
  } else {
    userStore.clearStore()
    isLoggedIn.value = false
  }
}

onMounted(() => {
  checkUser()
})

function userLogout() {
//  const fake_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiIzN…U5NH0.dQhJYprkobxvd4fQS8gvaicHpV7_Z_8wyoleXQrucus'
  window.localStorage.removeItem('cy_jackpot_token')
  userStore.clearStore()
}

</script>
