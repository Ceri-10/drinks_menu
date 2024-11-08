import axios from "axios"
import { CagoriesAPIResponseSchema } from "../schemas/recipes-schema"

export async function getCategories() {

    const url = "www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
    const {data} = await axios(url)
    const result = CagoriesAPIResponseSchema.safeParse(data)
    if(result.success){
        result.data
    }

}