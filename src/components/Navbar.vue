<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand">Alpina's Recipes</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="recipeDropdown" role="button"
                            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Recipes
                        </a>
                        <div class="dropdown-menu light-navbar-dropdown" aria-labelledby="recipeDropdown">
                            <a class="dropdown-item"
                                href="https://www.tasteofhome.com/collection/awesome-ideas-appetizer-recipes/">Appetizers</a>
                            <a class="dropdown-item"
                                href="https://www.bbcgoodfood.com/recipes/collection/top-20-main-recipes">Main Courses</a>
                            <a class="dropdown-item" href="https://insanelygoodrecipes.com/british-desserts/">Desserts</a>
                            <a class="dropdown-item"
                                href="https://www.townandcountrymag.com/leisure/drinks/g13092298/popular-bar-drinks-to-order/">Drinks</a>
                            <a class="dropdown-item" href="https://morerecipes.com/">More Recipes</a>
                            <div class="dropdown-divider"></div>
                        </div>
                    </li>
                    <li class="nav-item">
                        <router-link to="/create" class="nav-link create-recipe-link">
                            Create Recipe
                        </router-link>
                    </li>
                </ul>
                <div class="search-container">
                    <input v-model="searchQuery" @input="emitSearchQuery" class="search-input"
                        placeholder="Search for recipes" />
                </div>
            </div>
        </div>
    </nav>
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
.light-navbar-dropdown {
    padding: 10px 20px;
    color: #333;
    background-color: #fff;
    border-bottom: 1px solid #d0d0d0;
}

.dropdown-item {
    padding: 10px 20px;
}

.create-recipe-link {
    color: #fff;
    background-color: #6ed8f8;
    border: 1px solid #6ccfee;
    border-radius: 5px;
    padding: 5px 15px;
}

.create-recipe-link:hover {
    background-color: #2ba4c2;
}

.search-container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.search-input {
    max-width: 400px;
    width: 100%;
    border: 1px solid #d0d0d0;
    border-radius: 5px;
    padding: 5px 10px;
    background-color: #fff;
    color: #333;
}

.nav-link {
    color: #333;
}

.nav-link:hover {
    color: #0f5266;
}</style>
