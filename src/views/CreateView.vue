<script setup>
import Create from '../components/Create.vue';
</script>

<template>
    <router-link to="/" class="back-to-home">Return to Home</router-link>
    <Create />
</template>

<style>
.back-to-home {
    position: absolute;
    top: 10px;
    left: 10px;
    background-color: #2c5e94;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    font-weight: bold;
    text-decoration: none;
}

.back-to-home:hover {
    background-color: #0056b3;
}
</style>