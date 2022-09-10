<template>
  <div>
  <UserNav />
  <div class="container">
    <div class="card-body">

        <div class="row text-center">
          <div class="col"><img src="@/assets/user_icon.png" class="" alt="user_icon"><br /><b>{{ userStore.getEmail }}</b></div>
          <div class="col"><h3>{{ userStore.getRegNo }}</h3></div>
        </div>

    </div>
  </div>
</div>
</template>

<style scope>

</style>

<script setup>
// import { onMounted } from 'vue'
import { useUserStore } from '@/stores/user'
// import axios from 'axios'
import UserNav from '@/components/UserNav.vue'

const userStore = useUserStore()


</script>
