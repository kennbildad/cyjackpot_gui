<template>
    <div>
        <NotificationMessage />
        <div class="text-center mt-5"><router-link class="navbar-brand" to="/"><img alt="cyjackpotLogo" src="@/assets/logo.png"></router-link></div>
        <div>
            <div class="card-body">
                <h3 class="text-center">LOGIN</h3>
                <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6">
                <form @submit.prevent="loginUser">
                    <div>
                    <div class="form-floating mb-3">
                    <input type="email" v-model="userInput.email" class="form-control" name="email" id="email" placeholder="Email" required>
                    <label for="email">Email</label>
                    </div>
                    <div class="form-floating">
                    <input type="password" v-model="userInput.password" class="form-control" name="password" id="password" placeholder="Password" required>
                    <label for="password">Password</label>
                    </div>
                    </div>
                    <button type="submit" class="btn btn-primary mt-3">Login</button>
                </form>
                <div class="card-footer mt-3 text-center">
                    Don't have an account yet? <router-link to="/sign-up">SignUp</router-link> <br />
                    Forgot your password? <router-link to="/password-reset">Reset</router-link> <br />
                    <router-link to="/">Bact To Home Page</router-link> <br />
                </div>
                </div>
                <div class="col-md-3"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref, watch, onMounted } from 'vue'
import axios from 'axios'
import { useNotificationStore } from '@/stores/notification'
import { useUserStore } from '@/stores/user'
import NotificationMessage from '@/components/NotificationMessage.vue'

const router = useRouter()
const notificationStore = useNotificationStore()
const userStore = useUserStore()

watch (() => notificationStore.alert, (newValue, oldValue) => {
    // alert('newValue', newValue)
})

onMounted (() => {
    if (userStore.user_id != '') {
        router.push('/')
    }
})

const userInput = ref({
    email: ''.trim(),
    password: ''.trim()
})

async function loginUser() { 
    await axios.post('/login', userInput.value)
    .then((response) => {
        if (response.data.message == 'Logged In' ) {
            window.localStorage.setItem('cy_jackpot_token', response.data.token);
            notificationStore.alert = 'success'
            notificationStore.message = 'Logged In Successfully'
            router.push('/dashboard')
        } else if (response.data.message == 'Logged Out') {
            userInput.value.email = ''
            userInput.value.password = ''
            notificationStore.alert = 'error'
            notificationStore.message = 'Invalid Username or Password'
            router.push('/login')
        }
    })
}

</script>
