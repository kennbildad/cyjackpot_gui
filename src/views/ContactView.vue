<template>
    <div>
        <NavBar />
        <h2>Contact Us</h2>
        <div class="text-center">
            <MyCounter />
        <div class="bttn">
            <button @click="useCounter.addCount">+</button>
            <button @click="useCounter.subCount">-</button>
        </div>
        <hr />
        <div>
            This Number is: {{ useCounter.oddOrEven }}
        </div>
        <hr />
        <h3>Edit Counter</h3>
        <input
        v-model="useCounter.count"
        type="number" >
        </div>
    </div>
</template>
<style scoped>
.count {
    font-size: 60px;
}
.bttn button{
    font-size: 20px;
    margin: 10px;
}
</style>

<script setup>
import { useCounterStore } from '@/stores/counter'
import NavBar from '@/components/NavBar.vue'
import MyCounter from '@/components/MyCounter.vue'

const useCounter = useCounterStore()

</script>
