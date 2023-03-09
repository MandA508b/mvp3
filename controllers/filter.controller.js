const ApiError = require('../errors/api.error')
const filterService = require('../services/filter.service')

class filterController{
    async create(req, res, next){
        try{
            const {data} = req.body
            if (data.name == undefined) {
                return next(ApiError.badRequest())
            }
            const filter = await filterService.create(data)

            return res.json(filter)
        }catch (e){
            next()
        }
    }

    async findAll(req, res, next){
        try {
            const filters = await filterService.findAll()

            return res.json(filters)
        }catch (e){
            next()//e
        }
    }

    async delete(req, res, next){
        try{
            const {name} = req.body
            if(name === undefined){
                return next(ApiError.badRequest())
            }
            const filter = await filterService.delete(name)

            return res.json(filter)
        }catch (e){
            next()//e
        }
    }


}

module.exports = new filterController()