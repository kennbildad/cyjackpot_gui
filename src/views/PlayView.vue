<template>
    <div>
        <NavBar />
        <h2>How to Play <i>{{ user }}</i></h2>
        <button @click="getUser()">play</button>
    </div>
</template>

<script setup>
// @ is an alias to /src
import { ref } from 'vue'
import axios from 'axios'
import NavBar from '@/components/NavBar.vue'

const user = ref('')

async function getUser() {
    try {
        const response = await axios.get('/admin');
        user.value = response.data.hello;
        console.log(user.value)
    } catch (error) {
        if (error.response) {
            console.log(error.response)
        }
    }
}


</script>
