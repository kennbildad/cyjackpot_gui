<template>
    <div>
      <div class="text-center mt-1 mb-1">
      <router-link class="navbar-brand" to="/"><img alt="cyjackpotLogo" src="@/assets/logo.png"></router-link>
      </div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <router-link class="navbar-brand" to="/dashboard">MY DASHBOARD</router-link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">My Jackpot(s)</a>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/user-profile">My Profile</router-link>
        </li>

        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<NotificationMessage />
</div>
</template>

<script setup>
import NotificationMessage from "@/components/NotificationMessage.vue"
import { onBeforeMount, onBeforeUnmount, watch } from 'vue'
import { useUserStore } from '@/stores/user'
import { useNotificationStore } from '@/stores/notification'
import { useRouter } from 'vue-router'
import axios from 'axios'


const token = window.localStorage.getItem('cy_jackpot_token')
const router = useRouter()
const userStore = useUserStore()
const notificationStore = useNotificationStore()

async function getUserDetail() {
  if (token) {
    await axios.get('/user/')
    .then((response) => {
        if (response.data.status == 'success') {
          userStore.user_id = response.data.user._id
          userStore.reg_no = response.data.user.reg_no
          userStore.email = response.data.user.email
          userStore.phone = response.data.user.phone
          userStore.activated = response.data.user.email_activated
          userStore.verified = response.data.user.phone_verified
          userStore.amount = response.data.user.amount
        } else {
          userStore.clearStore()
          notificationStore.alert = 'error'
          notificationStore.message = 'Session Expired, Login Required'
          router.push('/login')
        }
    })
  } else {
    notificationStore.alert = 'error'
    notificationStore.message = 'Session Expired, Login Required'
    router.push('/login')
  }

}

onBeforeMount(() => {
  getUserDetail()
})

// watch (() => userStore.user_id, (newValue, oldValue) => {
//     // alert('newValue', newValue)
//     if (newValue == "" || oldValue == "") {
//       notificationStore.alert = 'error'
//       notificationStore.message = 'Session Expired, Login Required'
//       router.push('/login')
//     }
// })

const check = () => {
  if (userStore.user_id == '') {
    notificationStore.alert = 'error'
    notificationStore.message = 'Not in Session, Login Required'
    router.push('/login')
  }
}

// onBeforeUnmount (() => {
//   if (userStore.user_id == '') {
//     notificationStore.alert = 'error'
//     notificationStore.message = 'Not in Session, Login Required'
//     router.push('/login')
//   }
// })

    
</script>

