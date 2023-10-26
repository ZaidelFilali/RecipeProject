<template>
    <div class="recipe-edit">
        <div class="form-container">
            <h2 class="mb-3">Edit Recipe</h2>
            <form @submit.prevent="saveRecipe">
                <div class="mb-2">
                    <label for="name" class="form-label">Name:</label>
                    <input type="text" id="name" v-model="formData.name" class="form-control" required>
                </div>
                <div class="mb-2">
                    <label for="shortDescription" class="form-label">Short Description:</label>
                    <input type="text" id="shortDescription" v-model="formData.shortDescription" class="form-control">
                </div>
                <div class="mb-2">
                    <label for="preparationTime" class="form-label">Preparation Time (minutes):</label>
                    <input type="number" id="preparationTime" v-model="formData.preparationTime" class="form-control"
                        required>
                </div>
                <div class="mb-2">
                    <label for="calories" class="form-label">Calories:</label>
                    <input type="number" id="calories" v-model="formData.calories" class="form-control" required>
                </div>

                <div class="mb-2">
                    <label class="form-label">Nutrition Values:</label>
                    <ul class="list-group">
                        <li v-for="(nutrition, index) in formData.nutritionValues" :key="index" class="list-group-item">
                            <input v-model="nutrition.name" type="text" class="form-control" placeholder="Nutrition Name"
                                :disabled="true">
                            <input v-model="nutrition.value" type="text" class="form-control" placeholder="Value">
                        </li>
                    </ul>
                </div>

                <div class="mb-2">
                    <label class="form-label">Ingredients:</label>
                    <ul class="list-group">
                        <li v-for="(ingredient, index) in formData.ingredients" :key="index" class="list-group-item">
                            <input v-model="ingredient.name" type="text" class="form-control" placeholder="Ingredient Name">
                            <input v-model="ingredient.quantity" type="text" class="form-control" placeholder="Quantity">
                        </li>
                    </ul>
                    <button @click.prevent="addIngredient" class="btn btn-primary mt-2">Add Ingredient</button>
                </div>

                <div class="mb-2">
                    <label class="form-label">Instructions:</label>
                    <ol class="list-group">
                        <li v-for="(instruction, index) in formData.instructions" :key="index" class="list-group-item">
                            <input v-model="formData.instructions[index].text" type="text" class="form-control"
                                placeholder="Step">
                        </li>
                    </ol>
                    <button @click.prevent="addInstruction" class="btn btn-primary mt-2">Add Instruction</button>
                </div>

                <div class="mb-2">
                    <button type="submit" class="btn btn-primary">Save</button>
                    <router-link to="/" class="btn btn-secondary ms-2">Cancel</router-link>
                </div>
            </form>
            <router-link to="/" class="back-to-home">Return to Home</router-link>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useRecipeStore } from '@/stores/recipeStore';

const route = useRoute();
const router = useRouter();
const recipeStore = useRecipeStore();

const recipeId = Number(route.params.recipeId);

const formData = ref({});

onMounted(() => {
    const recipeToEdit = recipeStore.getRecipeById(recipeId);
    if (recipeToEdit) {
        formData.value = { ...recipeToEdit };
    }
});

const saveRecipe = () => {
    recipeStore.updateRecipe(recipeId, formData.value);
    router.push({ name: 'recipe-detail', params: { recipeId } });
};

const addIngredient = () => {
    formData.value.ingredients.push({ name: '', quantity: '' });
};

const addInstruction = () => {
    formData.value.instructions.push({ text: '' });
};

const addNutritionValue = () => {
    formData.value.nutritionValues.push({ name: '', value: '' });
};
</script>

<style scoped>
.recipe-edit {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.form-container {
    max-width: 400px;
    width: 100%;
    padding: 10px;
    background-color: #f7f7f7;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.back-to-home {
    position: absolute;
    top: 5px;
    left: 1500px;
    background-color: #2c5e94;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    font-weight: bold;
    text-decoration: none;
}

.back-to-home:hover {
    background-color: #0056b3;
}
</style>
