const ExcelValue = require('../models/excelValue.model')
const ApiError = require(`../errors/api.error`)

class excelValueService {

    async create(data) {
        try{
            const candidate = await ExcelValue.findOne({name: data.name})
            if (candidate) {
                throw ApiError.preconditionFailed()
            }
            console.log({...data})
            const excelValue = await ExcelValue.create({...data})

            return excelValue
        }catch (e) {
            console.log(e)
        }
    }

    async findAll(){
        try{
            const excelValues = await ExcelValue.find()

            return excelValues
        }catch (e){
            console.log(e)
        }
    }

    async update(name, data){
        try{
            const excelValue = await ExcelValue.findOneAndUpdate({name}, {...data})
            console.log(name, data)
            if(!excelValue)
            throw ApiError.badRequest()

            return excelValue
        }catch (e){
            console.log(e)
        }
    }
}

module.exports = new excelValueService()
