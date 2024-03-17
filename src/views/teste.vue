<script setup>
import { ref } from 'vue';

const open = ref(false)
</script>

<template>
    <button @click="open = true">Abrir PopUP</button>

    <div v-if="open" class="modal">
    <p>Hello from the modal!</p>
    <button @click="open = false">Close</button>
  </div>
</template>

<style scoped>
</style>