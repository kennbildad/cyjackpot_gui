<template>
    <div v-if="isAlertSuccess" class="alert alert-success alert-dismissible fade show" role="alert">
        {{ notificationStore.getMessage }}
        <button type="button" @click="notificationStore.clearStore" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>

    <div v-if="isAlertError" class="alert alert-danger alert-dismissible fade show" role="alert">
        {{ notificationStore.getMessage }}
        <button type="button" @click="notificationStore.clearStore" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { useNotificationStore } from '@/stores/notification'

const notificationStore = useNotificationStore()

const isAlertSuccess = ref(false)
const isAlertError = ref(false)

onMounted (() => {
    if (notificationStore.alert == 'success') {
        isAlertSuccess.value = true
    }
    else if (notificationStore.alert == 'error') {
        isAlertError.value = true
    }
    })
</script>