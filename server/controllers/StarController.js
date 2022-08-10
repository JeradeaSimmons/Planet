import { starService } from "../services/StarService.js";
import BaseController from "../utils/BaseController.js";






export class StarController extends BaseController {


    constructor() {
        super('api/star')
        this.router
            .post('', this.createStar)
    }

    async createStar(req, res, next) {

        try {
            let starData = req.body
            let star = await starService.createStar(starData)
            res.send(star)
        } catch (error) {
            next(error)
        }


    }













}