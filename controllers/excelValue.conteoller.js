const ApiError = require('../errors/api.error')
const excelValueService = require('../services/excelValue.service')

class excelValueController {
    async create(req, res, next){
        try {
            const {data} = req.data
            if(data.name === undefined){
                return next(ApiError.badRequest())
            }
            const excelValue = await excelValueService.create(data)

            return res.json(excelValue)
        } catch (e) {
            next()//e
        }
    }

    async findAll(req, res, next){
        try{
            const excelValues = await excelValueService.findAll()

            return res.json(excelValues)
        }catch (e) {
            next()//e
        }
    }

    async update(req, res, next){
        try{
            const {name, param}= req.body
            if(name === undefined){
                return throw(ApiError.badRequest())
            }
            const excelValue = await excelValueService.update(name, param)

            return res.json(excelValue)
        }catch(e){
            next()//
        }
    }

}

module.exports = new excelValueController()