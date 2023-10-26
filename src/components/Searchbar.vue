<template>
    <div class="search-container">
        <input v-model="searchQuery" @input="emitSearchQuery" class="search-input" placeholder="Search for recipes" />
    </div>
</template>
  
<script setup>
import { ref, defineEmits } from 'vue';

const emit = defineEmits();
const searchQuery = ref('');

const emitSearchQuery = () => {
    emit('search', searchQuery.value);
};
</script>
  
<style scoped>
.search-container {
    position: absolute;
    top: -90px;
    right: 400px;
    padding: 100px;
    border-radius: 5px;
}

.search-input {
    width: 200px;
}
</style>
  