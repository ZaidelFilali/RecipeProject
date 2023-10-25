import { defineStore } from 'pinia';

export const useStore = defineStore('store', {
  state: () => {
    return {
      someState: 'hello pinia',
    }
  },
  persist: true,
})

export const useRecipeStore = defineStore('recipes', {
  state: () => ({
    recipes: [
      {
        name: 'Spaghetti',
        shortDescription: 'Quick and delicious pasta recipe',
        instructions: [
          'Snipper de ui. Schil de winterpeen en snijd in plakjes. Snijd de bleekselderij in boogjes. Verhit de olie met de boter in een pan, voeg de ui, peen en bleekselderij toe en bak 5 min. op middelhoog vuur. Voeg de tomatenpuree en het gehakt toe en bak in 5 min. rul.',
          'Voeg de bouillon en tomatenblokjes erdoor. Breng op smaak met peper en eventueel zout. Breng aan de kook en laat de saus met de deksel op de pan 30 min. op laag vuur sudderen. Roer af en toe.',
          'Kook ondertussen de spaghetti volgens de aanwijzingen op de verpakking. Verdeel de spaghetti over de borden en schep de saus erover.'
        ],
        preparationTime: '123',
        calories: '12312',
        nutritionValues: '123',
        ingredients: [
          { name: "Ui", quantity: "1" },
          { name: "Winterpeen", quantity: "200g" },
          { name: "Bleekselderij", quantity: "2 stengels" },
          { name: "Olie", quantity: "2 eetlepels" },
          { name: "Boter", quantity: "1 eetlepel" },
          { name: "Tomatenpuree", quantity: "2 eetlepels" },
          { name: "Gehakt", quantity: "500g" },
          { name: "Bouillon", quantity: "500ml" },
          { name: "Tomatenblokjes", quantity: "400g" },
          { name: "Peper", quantity: "naar smaak" },
          { name: "Zout", quantity: "naar smaak" },
          { name: "Spaghetti", quantity: "300g" }
        ],
        images: [],
        id: 1
      },
      {
        name: 'test',
        shortDescription: 'Test recipe',
        instructions: [],
        preparationTime: '123',
        calories: '12312',
        nutritionValues: '123',
        ingredients: [],
        images: [],
        id: 2
      },
      {
        name: 'Another Recipe',
        shortDescription: 'Test recipe',
        instructions: [
          "Instructions for Another Recipe."
        ],
        preparationTime: '45',
        calories: '5678',
        nutritionValues: '456',
        ingredients: [
          { name: "Ingredient 1", quantity: "200g" },
          { name: "Ingredient 2", quantity: "2 stengels" }
        ],
        images: [],
        id: 3
      },
      {
        name: 'Test Recipe 1',
        shortDescription: 'This is a test recipe with some instructions.',
        instructions: [
          'Step 1: Do something.',
          'Step 2: Do something else.',
        ],
        preparationTime: '30',
        calories: '300',
        nutritionValues: 'Test',
        ingredients: [
          { name: 'Ingredient A', quantity: '100g' },
          { name: 'Ingredient B', quantity: '1 cup' },
        ],
        images: [],
        id: 4,
      },
      {
        name: 'Test Recipe 2',
        shortDescription: 'Another test recipe for you to enjoy.',
        instructions: [
          'Step 1: Start by doing this.',
          'Step 2: Then do that.',
        ],
        preparationTime: '45',
        calories: '350',
        nutritionValues: 'Test',
        ingredients: [
          { name: 'Ingredient X', quantity: '200g' },
          { name: 'Ingredient Y', quantity: '2 cups' },
        ],
        images: [],
        id: 5,
      },
    ],
    images: [],
  }),

  actions: {
    addRecipe(recipe) {
      this.recipes.push(recipe);
    },

    getRecipeById(recipeId) {
      return this.recipes.find((recipe) => recipe.id == recipeId);
    },

    updateRecipe(recipeId, updatedRecipeData) {
      const recipeIndex = this.recipes.findIndex((recipe) => recipe.id == recipeId);
      if (recipeIndex !== -1) {
        this.recipes[recipeIndex] = { ...this.recipes[recipeIndex], ...updatedRecipeData };
      }
    },

    getImageByRecipeId(recipeId) {
      return this.images.find((imageData) => imageData.recipeId === recipeId)?.image || null;
    },

    addImage(recipeId, image) {
      this.images.push({ recipeId, image });
    },

    deleteRecipeById(recipeId) {
      const index = this.recipes.findIndex((recipe) => recipe.id === recipeId);
      if (index !== -1) {
        this.recipes.splice(index, 1);
      }
    },
    searchRecipesByTitle(title) {
      return this.recipes.filter((recipe) => recipe.name.toLowerCase().includes(title.toLowerCase()));
    },
  },
  persist: true,
});

