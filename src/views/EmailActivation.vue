<template>
    <div>
        <NotificationMessage />
        <div class="text-center mt-5"><router-link class="navbar-brand" to="/"><img alt="cyjackpotLogo" src="@/assets/logo.png"></router-link></div>
        <div>
            <div class="card-body">
                <div class="row">
                <div class="col-md-4"></div>
                <div class="col-md-4 text-center">
                    <h5>We sent a 6 digit activation code to your email <br /> <i>{{ userStore.getEmail }}</i> <br />
                    The code is valid for 24 hours.</h5>
                <form @submit.prevent="activateEmail">
                    <div>
                    <div class="form-floating mb-3">
                    <input type="text" v-model="userInput.activation_code" class="form-control" name="activation_code" id="activation_code" placeholder="activation_code" required>
                    <label for="email">Activation Code</label>
                    </div>
                    </div>
                    <button type="submit" class="btn btn-primary mt-3">Submit</button>
                </form>
                </div>
                <div class="col-md-4"></div>
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
    import NotificationMessage from '@/components/NotificationMessage.vue'
    import { useUserStore } from '@/stores/user'
    
    const router = useRouter()
    const notificationStore = useNotificationStore()
    const userStore = useUserStore()
    
    // watch (() => notificationStore.alert, (newValue, oldValue) => {
    //     // alert('newValue', newValue)
    // })
    
    onMounted (() => {
        if (userStore.email == '') {
            notificationStore.alert = 'error'
            notificationStore.message = 'fatal error occur'
            router.push('/')
        }
    })
    
    const userInput = ref({
        activation_code: ''.trim(),
        user_email: userStore.getEmail
    })
    
    async function activateEmail() { 
        await axios.post('/email-activation', userInput.value)
        .then((response) => {
            if (response.data.activated == 'yes' ) {
                notificationStore.alert = 'success'
                notificationStore.message = 'Email Activates Successfully'
                router.push('/login')
            } else if (response.data.activated != 'yes') {
                notificationStore.alert = 'error'
                notificationStore.message = 'email not activated'
                router.push('/email-activation')
            }
        })
    }
    
</script>
    
