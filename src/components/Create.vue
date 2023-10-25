<template>
  <div class="recipe-card">
    <form @submit.prevent="addRecipe" class="recipe-form">
      <div class="form-group">
        <label for="name">Recipe Name:</label>
        <input type="text" id="name" v-model="recipe.name" placeholder="E.g., Spaghetti Carbonara" required>
      </div>
      <div class="form-group">
        <label for="preparationTime">Preparation Time (minutes):</label>
        <input type="number" id="preparationTime" v-model="recipe.preparationTime" placeholder="E.g., 30">
      </div>
      <div class="form-group">
        <label for="description">Short Description:</label>
        <input type="text" id="description" v-model="recipe.shortDescription"
          placeholder="E.g., Quick and delicious pasta recipe">
      </div>
      <div>
        <label for="ingredients">Ingredients:</label>
        <div v-for="(ingredient, index) in recipe.ingredients" :key="index" class="ingredient-input">
          <input type="text" v-model="ingredient.name" placeholder="Ingredient Name" class="ingredient-input-field">
          <input type="text" v-model="ingredient.quantity" placeholder="Quantity" class="ingredient-input-field">
          <button @click="removeIngredient(index)" type="button" class="remove-button">Remove</button>
        </div>
        <button @click="addIngredient" type="button" class="add-button">Add Ingredient</button>
      </div>
      <div>
        <label for="instructions">Instructions:</label>
        <div v-for="(instruction, index) in recipe.instructions" :key="index" class="instruction-input">
          <textarea v-model="recipe.instructions[index]" placeholder="E.g., Boil the pasta, "
            class="instruction-input-field"></textarea>
          <button @click="removeInstruction(index)" type="button" class="remove-button">Remove</button>
        </div>
        <button @click="addInstruction" type="button" class="add-button">Add Instruction</button>
      </div>
      <div class="form-group">
        <label for="calories">Calories:</label>
        <input type="number" id="calories" v-model="recipe.calories" placeholder="E.g., 450">
      </div>
      <div>
        <label for="nutrition">Nutrition Values:</label>
        <div class="nutrition-values">
          <div v-for="(nutrition, index) in recipe.nutritionValues" :key="index" class="nutrition-input">
            <input type="text" v-model="nutrition.name" :placeholder="nutrition.name" class="nutrition-input-field"
              disabled>
            <input type="text" v-model="nutrition.value" placeholder="Value" class="nutrition-input-field">
            <button @click="removeNutritionValue(index)" type="button" class="remove-button">Remove</button>
          </div>
        </div>
      </div>
      <button type="submit" class="submit-button">{{ editing ? 'Update Recipe' : 'Add Recipe' }}</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRecipeStore } from '@/stores/recipeStore'
import router from '../router';

const recipeStore = useRecipeStore()

const editing = ref(false);

const recipes = ref(recipeStore.recipes)
const recipe = ref({
  name: '',
  description: '',
  shortDescription: '',
  instructions: [],
  preparationTime: '',
  calories: '',
  nutritionValues: [
    { name: 'Energy', value: '' },
    { name: 'Carbohydrates', value: '' },
    { name: 'Sodium', value: '' },
    { name: 'Egg White', value: '' },
    { name: 'Fat', value: '' },
    { name: 'Fibres', value: '' }
  ],
  ingredients: [],
  image: [],
})

const imageInputRef = ref(null);

const addIngredient = () => {
  recipe.value.ingredients.push({ name: '', quantity: '' });
};

const removeIngredient = (index) => {
  recipe.value.ingredients.splice(index, 1);
};

const addInstruction = () => {
  recipe.value.instructions.push('');
};

const removeInstruction = (index) => {
  recipe.value.instructions.splice(index, 1);
};

const addRecipe = () => {
  const nextId = recipes.value.length > 0 ? recipes.value[recipes.value.length - 1].id + 1 : 1;

  const newRecipe = {
    ...recipe.value,
    id: nextId,
    shortDescription: recipe.value.shortDescription,
  };

  recipeStore.addRecipe(newRecipe);

  editing.value = false;

  recipe.value = {
    name: '',
    description: '',
    shortDescription: '',
    instructions: [],
    preparationTime: '',
    calories: '',
    nutritionValues: [
      { name: 'Energy', value: '' },
      { name: 'kcal', value: '' },
      { name: 'Carbohydrates', value: '' },
      { name: 'Sodium', value: '' },
      { name: 'Egg White', value: '' },
      { name: 'Fat', value: '' },
      { name: 'Fibres', value: '' }
    ],
    ingredients: [],
    image: [],
  };

  router.push({ name: 'home' });
};

const openImageUpload = () => {
  imageInputRef.value.click();
};

const handleImageUpload = (event) => {
  const selectedImage = event.target.files[0];
};

const addNutritionValue = () => {
  recipe.value.nutritionValues.push({ name: '', value: '' });
};

const removeNutritionValue = (index) => {
  recipe.value.nutritionValues.splice(index, 1);
};

onMounted(() => {
  imageInputRef.value = document.getElementById('image');
});
</script>

<style scoped>
.recipe-form {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f7f7f7;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
}

.form-group {
  margin-bottom: 20px;
}

label {
  font-weight: bold;
}

input[type="text"],
input[type="number"],
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

.ingredient-input,
.instruction-input,
.nutrition-input {
  display: flex;
  gap: 10px;
  align-items: center;
}

.ingredient-input-field,
.instruction-input-field,
.nutrition-input-field {
  flex: 1;
}

.remove-button {
  background-color: #ff0000;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
}

.add-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
}

.submit-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 20px;
}

.submit-button:hover,
.remove-button:hover,
.add-button:hover {
  background-color: #0056b3;
}

input::placeholder,
textarea::placeholder {
  color: #888;
}

.image-input {
  display: flex;
  align-items: center;
}

.image-input-field {
  display: none;
}

.image-upload-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  margin-left: 10px;
}

.image-upload-button:hover {
  background-color: #0056b3;
}</style>
