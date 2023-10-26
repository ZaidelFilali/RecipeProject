<template>
    <nav>
      <ul class="pagination">
        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <a class="page-link" @click="changePage(currentPage - 1)" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li v-for="page in pages" :key="page" class="page-item" :class="{ active: page === currentPage }">
          <a class="page-link" @click="changePage(page)">{{ page }}</a>
        </li>
        <li class="page-item" :class="{ disabled: currentPage === totalPages }">
          <a class="page-link" @click="changePage(currentPage + 1)" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </template>
  
  <script setup>
  import { ref, computed, defineProps } from 'vue';
  
  const props = defineProps({
    currentPage: Number,
    totalPages: Number,
    changePage: Function,
  });
  
  const pages = computed(() => {
    const startPage = Math.max(1, props.currentPage - 2);
    const endPage = Math.min(props.totalPages, startPage + 4);
  
    const pageArray = [];
    for (let i = startPage; i <= endPage; i++) {
      pageArray.push(i);
    }
  
    return pageArray;
  });
  </script>
  
  <style scoped>
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    list-style: none;
    padding: 0;
  }
  
  .page-item {
    margin: 0 5px;
  }
  
  .page-link {
    color: #007bff;
    background-color: transparent;
    border: 1px solid #007bff;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
  }
  
  .page-link:hover {
    background-color: #007bff;
    border: 1px solid #007bff;
    color: #fff;
  }
  </style>
  