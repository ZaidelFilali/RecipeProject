<template>
    <div>
        <Page :searchQuery="searchQuery" />
    </div>
</template>

<script setup>
import Page from '../components/Page.vue';
import { ref } from 'vue';

const searchQuery = ref('');

const performSearch = (query) => {
    searchQuery.value = query; 
};
</script>
