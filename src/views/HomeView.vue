<template>
    <div>
        <Sidebar @search="performSearch" />
        <Page :searchQuery="searchQuery" />
    </div>
</template>
  
<script setup>
import Sidebar from '../components/Sidebar.vue';
import Page from '../components/Page.vue';
import { ref } from 'vue';

const searchQuery = ref('');

const performSearch = (query) => {
    searchQuery.value = query; 
};

</script>