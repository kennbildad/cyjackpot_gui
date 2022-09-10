<template>
  <div>
    <NavBar />
    <h2>About cyJackpot</h2>
    <div class="bttn-count">
      <button @click="useCounter.addCount">{{ useCounter.count }}</button>
    </div>
    <div>
      {{ useCounter.currentOperation }}
    </div>
  </div>
</template>
<style scoped>
.bttn-count {
  font-size: 70px;
  text-align: center;
}
</style>

<script setup>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import { useCounterStore } from '@/stores/counter'

const useCounter = useCounterStore()

</script>
