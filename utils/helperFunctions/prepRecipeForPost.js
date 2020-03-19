import { postImage } from "./postImage";
import { serverErrorAlert } from "./serverErrorAlert";
import { cleanUpIngredients } from "./recipeCleanup/cleanUpIngredients";
import { cleanUpInstructions } from "./recipeCleanup/cleanUpInstructions";
import { cleanUpNotes } from "./recipeCleanup/cleanUpNotes";

export const prepRecipeForPost = async recipe => {
    const create = "create";
    return {
        ...recipe,
        ingredients: cleanUpIngredients(recipe.ingredients), // Removes empty ingredients, removes any newlines.
        instructions: cleanUpInstructions(recipe.instructions, create), // Removes empty instructions, removes any newlines.
        notes: cleanUpNotes(recipe.notes, create), // Removes empty notest, removes any newlines.
        author_comment: "Original Recipe",
        img: recipe.img ? await postImage(recipe.img, serverErrorAlert) : "",
    };
};
