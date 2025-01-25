import {people} from "@/pages/qcomps/list_keys_id";
import {RecipeProps} from "@/types/recipe";

export const recipes = [{
  id: 'greek-salad',
  name: 'Greek Salad',
  ingredients: new Set(['tomatoes', 'cucumber', 'onion', 'olives', 'feta'])
}, {
  id: 'hawaiian-pizza',
  name: 'Hawaiian Pizza',
  ingredients: new Set(['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple'])
}, {
  id: 'hummus',
  name: 'Hummus',
  ingredients: new Set(['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini'])
}];

function Recipe({ recipe }: { recipe: RecipeProps }) {

    const listItems = [...recipe.ingredients].map((ing, index) =>
        <li key={index}>
            {ing}
        </li>
    );

    return (
        <div>
            <h1>{recipe.name}</h1>
            <ul>{listItems}</ul>
        </div>
    );

}

export default function RecipeList() {

  const listRecipes = recipes.map(recipe =>
      <li key={recipe.id}>
          <Recipe recipe={recipe}>
          </Recipe>
      </li>

  );

  return (
      <div>
        <h1>Recipes</h1>
        <ul>{listRecipes}</ul>
      </div>
  );
}