<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-maroon">
            <div class="container">
                <a class="navbar-brand">Alpina's Recipes</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="socialDropdown" role="button"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Social
                            </a>
                            <div class="dropdown-menu" aria-labelledby="socialDropdown">
                                <a class="dropdown-item" href="https://www.instagram.com/your_instagram"
                                    target="_blank">Instagram</a>
                                <a class="dropdown-item" href="https://github.com/your_github" target="_blank">GitHub</a>
                                <a class="dropdown-item" href="https://www.linkedin.com/in/your_linkedin"
                                    target="_blank">LinkedIn</a>
                                <a class="dropdown-item" href="https://www.snapchat.com/add/your_snapchat"
                                    target="_blank">Snapchat</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item dropdown-toggle" href="#" id="moreSocialDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    More Social
                                </a>
                                <div class="dropdown-menu" aria-labelledby="moreSocialDropdown">
                                    <a class="dropdown-item" href="https://twitter.com/your_twitter"
                                        target="_blank">Twitter</a>
                                    <a class="dropdown-item" href="https://www.pinterest.com/your_pinterest"
                                        target="_blank">Pinterest</a>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="recipeDropdown" role="button"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Recipes
                            </a>
                            <div class="dropdown-menu" aria-labelledby="recipeDropdown">
                                <a class="dropdown-item" href="#">Appetizers</a>
                                <a class="dropdown-item" href="#">Main Courses</a>
                                <a class="dropdown-item" href="#">Desserts</a>
                                <a class="dropdown-item" href="#">Drinks</a>
                                <a class="dropdown-item" href="#">More Recipes</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item dropdown-toggle" href="#" id="moreRecipesDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    More Recipes
                                </a>
                                <div class="dropdown-menu" aria-labelledby="moreRecipesDropdown">
                                    <a class="dropdown-item" href="#">Salads</a>
                                    <a class="dropdown-item" href="#">Soups</a>
                                    <a class="dropdown-item" href="#">Sides</a>
                                    <a class="dropdown-item" href="#">Breakfast</a>
                                </div>
                            </div>
                        </li>

                        <li class="nav-item">
                            <router-link to="/create" class="nav-link create-recipe-link">Create Recipe</router-link>
                        </li>
                    </ul>
                    <div class="search-container">
                        <input v-model="searchQuery" @input="emitSearchQuery" placeholder="Search for recipes" />
                    </div>
                </div>
            </div>
        </nav>
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
.navbar {
    background-color: #786cdd;
    padding: 15px;
}

.dropdown-menu .dropdown-item {
    padding: 8px 20px;
}

.create-recipe-link {
    color: #f2a42e;
    background-color: #287c96;
}

.search-container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.search-input {
    max-width: 400px;
    width: 100%;
}

.nav-link {
    color: #fff;
}

.nav-link:hover {
    color: #EFEFEF;
}
</style>
  