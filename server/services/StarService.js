import { dbContext } from "../db/DbContext.js";




class StarService {


    async createStar(starData) {
        let star = await dbContext.Star.create(starData)
        return star
    }





}



export const starService = new StarService()