<template>
    <div>
        <Searchbar @search="performSearch" />
        <div class="container mt-4">
            <div class="row">
                <div v-for="(recipe, index) in displayedRecipes" :key="index" class="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div class="recipe-card card">
                        <div class="card-body">
                            <h5 class="card-title text-primary">{{ recipe.name }}</h5>
                            <p class="card-text mt-3">{{ recipe.shortDescription }}</p>
                            <div class="button-group d-flex justify-content-between mt-3">
                                <button @click="viewRecipeDetails(recipe)" class="btn btn-outline-primary">View
                                    Details</button>
                                <router-link :to="'/edit/' + recipe.id" class="btn btn-outline-secondary">Edit</router-link>
                                <button @click="deleteRecipe(recipe.id)" class="btn btn-outline-danger">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { ref, computed, onMounted, defineProps } from 'vue';
import { useRecipeStore } from '@/stores/recipeStore';
import { useRouter } from 'vue-router';
import Searchbar from './Searchbar.vue';

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

.card-text {
    font-size: 1rem;
}

.recipe-icons {
    display: flex;
    align-items: center;
}

.button-group {
    display: flex;
    justify-content: space-between;
}

</style>