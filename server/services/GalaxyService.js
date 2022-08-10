import { dbContext } from "../db/DbContext.js"



class GalaxyService {
    async getGalaxy() {
        let galaxy = await dbContext.Galaxy.find()
        return galaxy
    }

    async createGalaxy(galaxyData) {
        let galaxy = await dbContext.Galaxy.create(galaxyData)
        return galaxy
    }



}



export const galaxyService = new GalaxyService()