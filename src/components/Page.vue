<template>
    <div>
        <!-- <Navbar @search="performSearch" /> -->
        Searvh
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

    <footer class="footer mt-4 p-4 text-center">
        <div class="text-center mt-4" v-if="totalPages > 1">
            <nav>
                <ul class="pagination">
                    <li class="page-item" :class="{ disabled: currentPage === 1 }">
                        <a class="page-link" @click="changePage(currentPage - 1)">Previous</a>
                    </li>
                    <li class="page-item" v-for="page in totalPages" :key="page" :class="{ active: page === currentPage }">
                        <a class="page-link">{{ page }}</a>
                    </li>
                    <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                        <a class="page-link" @click="changePage(currentPage + 1)">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="container">
            <p class="text-muted">Discover more delicious recipes and cooking tips at </p>
            <a href="https://smartslowcooker.com/blog/cooking-inspiration" class="btn btn-primary btn-lg">Get Cooking
                Inspiration</a>
            <br>
            <div class="social-icons mt-3">
                <a href="https://www.instagram.com/your_instagram" target="_blank">
                    <img src="../assets/instagram.png" alt="Instagram" class="social-logo" />
                </a>
                <a href="https://github.com/your_github" target="_blank">
                    <img src="../assets/github.png" alt="GitHub" class="social-logo" />
                </a>
                <a href="https://www.linkedin.com/in/your_linkedin" target="_blank">
                    <img src="../assets/linkedin.png" alt="LinkedIn" class="social-logo" />
                </a>
                <a href="https://www.snapchat.com/add/your_snapchat" target="_blank">
                    <img src="../assets/snapchat.jpg" alt="Snapchat" class="social-logo" />
                </a>
            </div>
            <br>
            <p>&copy; 2023 Alpina's Recipes</p>
        </div>
    </footer>
</template>
  
<script setup>
import { ref, computed, onMounted, defineProps } from 'vue';
import { useRecipeStore } from '@/stores/recipeStore';
import { useRouter } from 'vue-router';

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

.pagination {
    margin: 0;
}

.page-link {
    color: #007bff;
    background-color: transparent;
    border: 1px solid #007bff;
}

.page-link:hover {
    background-color: #007bff;
    border: 1px solid #007bff;
    color: #fff;
}

body {
    font-family: 'Arial', sans-serif;
    background-color: #f2f2f2;
}

.container {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
}

.social-icons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
}

.social-logo {
    width: 40px;
    height: 40px;
    object-fit: contain;
}

.social-logo:hover {
    filter: brightness(1.2);
}

.footer {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.pagination {
    margin: 0;
    display: flex;
    justify-content: center;
}

.page-item {
    margin: 0 5px;
    list-style: none;
}

.page-link {
    color: #007bff;
    background-color: transparent;
    border: 1px solid #007bff;
    border-radius: 5px;
    padding: 5px 10px;
    transition: background-color 0.3s, color 0.3s;
}

.page-link:hover {
    background-color: #007bff;
    color: #fff;
}

.page-item.active .page-link {
    background-color: #007bff;
    color: #fff;
}

.page-item.disabled .page-link {
    background-color: #f0f0f0;
    color: #a0a0a0;
    cursor: not-allowed;
}
</style>
