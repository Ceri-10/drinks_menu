import {z} from "zod"
import { CagoriesAPIResponseSchema, DrinksAPIResponse, SearchFilterSchema } from "../schemas/recipes-schema"

export type Categories = z.infer<typeof CagoriesAPIResponseSchema>
export type SearchFilter = z.infer<typeof SearchFilterSchema>
export type Drinks = z.infer<typeof DrinksAPIResponse>
