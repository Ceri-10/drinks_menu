import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRecipesSlice, RecipesSliceType } from "./recipeSlice";
import { FavoritesSliceType, createFavoritesSlice } from "./favoriteSlice";

export const useAppStore = create<RecipesSliceType & FavoritesSliceType>()(devtools ((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoritesSlice(...a),
})))