<template>
    <div class="count">
        {{ useCounter.count }} <br />
        {{ useCounter.name }}
    </div>
</template>
<script setup>
import { useCounterStore } from '@/stores/counter'

const useCounter = useCounterStore()

</script>
