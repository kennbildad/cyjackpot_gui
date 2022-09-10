<template>
    <div>
        <div class="text-center mt-5"><router-link class="navbar-brand" to="/"><img alt="cyjackpotLogo" src="@/assets/logo.png"></router-link></div>
        <div>
            <div class="card-body">
                <h3 class="text-center">SIGN UP</h3>
                <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6">
                <form @submit.prevent="createUser">
                    <div class="form-floating mb-3">
                    <input type="email" v-model="userInput.email" class="form-control" name="email" id="email" placeholder="Email" required>
                    <label for="email">Email</label>
                    </div>

                    <div class="row g-2 mb-3">
                    <div class="col-4">
                        <div class="form-floating">
                        <input type="text" class="form-control" placeholder="Phone"  disabled>
                        <label for="country">NGN</label>
                        </div>
                    </div>
                    <div class="col-8">
                        <div class="form-floating">
                        <input v-model="userInput.phone" type="text" class="form-control" id="phone" name="phone" placeholder="Phone" required>
                        <label for="phone"><i class="fa-solid fa-envelope"></i>Phone</label>
                        </div>
                    </div>
                    </div>

                    <div class="form-floating mb-3">
                    <input v-model="userInput.password" type="password" class="form-control" name="password" id="password" placeholder="Password">
                    <label for="password">Create Password</label>
                    </div>
                    <div class="form-floating mb-3">
                    <input v-model="userInput.confirm_password" type="password" class="form-control" name="confirm_password" id="confirm_password" placeholder="Confirm Password">
                    <label for="confirm_password">Confirm Password</label>
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="checkbox" required>
                        <label class="form-check-label" for="exampleCheck1">By clicking, you already accept to our terms and conditions.</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Sign Up</button>
                </form>
                <div class="card-footer mt-3 text-center">
                    Already have an account? <router-link to="/login">Login</router-link> <br />
                    <router-link to="/">Bact To Home Page</router-link>
                </div>
                </div>
                <div class="col-md-3"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useNotificationStore } from '@/stores/notification'
import { useUserStore } from '@/stores/user'
import NotificationMessage from '@/components/NotificationMessage.vue'
import { useRouter } from 'vue-router'


const router = useRouter()
const notificationStore = useNotificationStore()
const userStore = useUserStore()


const userInput = ref({
  email: ''.trim(),
  phone: ''.trim(),
  password: ''.trim(),
  confirm_password: ''.trim()
})

function validateForm() {

    const user_email = userInput.value.email
    const user_phone = userInput.value.phone
    const user_password = userInput.value.password
    const user_confirm_password = userInput.value.confirm_password


    if(user_email == '' || user_phone == '' || user_password == '' || user_confirm_password == '') {
        return false;
    } else if (user_password.length < 6) {
        alert('password must be more than 6 characters')
        return false;
    } else if (isNaN(user_phone)) {
        alert('must be a valid phone number')
        return false;
    } else if (user_phone.length !== 11) {
        alert('must be a valid phone number')
        return false;
    } else if (user_password !== user_confirm_password) {
        alert('Password Mismatch')
        return false;
    } else {
        return true
    }
}
async function createUser() {
    if (validateForm()) {
        await axios.post('/sign_up', userInput.value)
        .then((response) => {
            if (response.data.new_user == 'created') {
                userStore.email = response.data.email
                notificationStore.alert = 'success'
                notificationStore.message = 'Account Created Successfully, But Activation Required'
                router.push('/email-activation')
            } else {
                notificationStore.alert = 'error'
                notificationStore.message = 'Account Creation failed!'
                router.push('/sign-up')
            }
        })
    } else {
        notificationStore.alert = 'error'
        notificationStore.message = 'Form Filling failed!'
        router.push('/sign-up')
    }

}
</script>
