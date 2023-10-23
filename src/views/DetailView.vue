<template>
    <main>
        <div class="container py-4">
            <div class="p-4 mb-2 bg-body-tertiary rounded-3">
                <div class="container-fluid py-3">
                    <div class="row">
                        <div class="col-md-8">
                            <h1 class="display-5 fw-bold">{{ selectedRecipe.name }}</h1>
                            <p class="fs-4">{{ selectedRecipe.shortDescription }}</p>
                            <p><strong>Preparation Time: {{ selectedRecipe.preparationTime }} minutes</strong></p>
                            <p><strong>Calories: {{ selectedRecipe.calories }}</strong></p>
                            <h2>Nutrition Values:</h2>
                            <ul>
                                <li v-for="(nutrition, index) in selectedRecipe.nutritionValues" :key="index">
                                    <strong>{{ nutrition.name }}:</strong> {{ nutrition.value }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row align-items-md-stretch">
                <div class="col-md-6">
                    <div class="h-100 p-5 text-bg-dark rounded-3" style="padding: 2rem;">
                        <strong v-if="selectedRecipe.ingredients">Ingredients:</strong>
                        <ul v-if="selectedRecipe.ingredients">
                            <li v-for="(ingredient, ingredientIndex) in selectedRecipe.ingredients" :key="ingredientIndex">
                                {{ ingredient.name }}, <strong>Quantity:</strong> {{ ingredient.quantity }}
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="h-100 p-5 bg-body-tertiary border rounded-3" style="padding: 2rem;">
                        <h2>Instructions:</h2>
                        <ol v-if="selectedRecipe.instructions && Array.isArray(selectedRecipe.instructions)">
                            <li v-for="(instruction, index) in selectedRecipe.instructions" :key="index">
                                {{ instruction }}
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <router-link to="/" class="back-to-home">Return to Home</router-link>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useRecipeStore } from '@/stores/recipeStore';

const route = useRoute();
const recipeId = route.params.recipeId;
const recipeStore = useRecipeStore();
const selectedRecipe = ref({});

onMounted(() => {
    selectedRecipe.value = recipeStore.getRecipeById(recipeId);
});
</script>

<style scoped>
.bigger-image {
    max-width: 100px;
    max-height: auto;
}

.p-4.mb-2.bg-body-tertiary.rounded-3 {
    padding: 1rem;
}
</style>
