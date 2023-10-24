<template>
    <div>
        <Sidebar @search="performSearch" />
        <div class="container" style="margin-top: 20px;">
            <div class="row">
                <div v-for="(recipe, index) in displayedRecipes" :key="index" class="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div class="recipe-card card">
                        <div class="card-body">
                            <h5 class="card-title">{{ recipe.name }}</h5>
                            <p class="card-text">{{ recipe.shortDescription }}</p>
                            <button @click="viewRecipeDetails(recipe)" class="btn btn-primary spaced-button">View
                                Details</button>
                            <router-link :to="'/edit/' + recipe.id"
                                class="btn btn-primary edit-button spaced-button">Edit</router-link>
                            <button @click="deleteRecipe(recipe.id)" class="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="text-center" v-if="totalPages > 1">
        <nav>
            <ul class="pagination">
                <li class="page-item" :class="{ disabled: currentPage === 1 }">
                    <a class="page-link" @click="changePage(currentPage - 1)">Previous</a>
                </li>
                <li class="page-item" v-for="page in totalPages" :key="page" :class="{ active: page === currentPage }">
                    <a class="page-link" @click="changePage(page)">{{ page }}</a>
                </li>
                <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                    <a class="page-link" @click="changePage(currentPage + 1)">Next</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, defineProps } from 'vue';
import { useRecipeStore } from '@/stores/recipeStore';
import { useRouter } from 'vue-router';
import Sidebar from '../components/Sidebar.vue';

const router = useRouter();
const recipeStore = useRecipeStore();
const recipes = ref(recipeStore.recipes);
const itemsPerPage = 6;
const currentPage = ref(1);

const totalPages = computed(() => Math.ceil(recipes.value.length / itemsPerPage));

const displayedRecipes = computed(() => {
    const startIndex = (currentPage.value - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const filteredRecipes = searchQuery.value
        ? recipes.value.filter(recipe =>
            recipe.name.toLowerCase().includes(searchQuery.value.toLowerCase())
        )
        : recipes.value;

    return filteredRecipes.slice(startIndex, endIndex);
});

const props = defineProps({
    searchQuery: String,
    recipeId: String,
});

const searchQuery = ref('');

const changePage = (page) => {
    if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
    }
};

const viewRecipeDetails = (recipe) => {
    router.push({ name: 'recipe-detail', params: { recipeId: recipe.id } });
};

const deleteRecipe = (recipeId) => {
    recipeStore.deleteRecipeById(recipeId);
};

const performSearch = (query) => {
    searchQuery.value = query;
};

onMounted(() => {
    currentPage.value = 1;
});
</script>
  
<style scoped>
.spaced-button {
    margin-right: 40px;
}
</style>
  
  
<style scoped>
.spaced-button {
    margin-right: 40px;
}
</style>

  