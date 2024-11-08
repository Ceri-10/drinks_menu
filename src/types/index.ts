import {z} from "zod"
import { CagoriesAPIResponseSchema } from "../schemas/recipes-schema"

export type Categories = z.infer<typeof CagoriesAPIResponseSchema>
