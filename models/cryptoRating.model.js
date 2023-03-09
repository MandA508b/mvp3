const db= require('../db/db')

const schema = new db.Schema({
    name: {
        type: String,
        required: true
    },
    coinId: {
        type: String,
        required: true
    },
    classification:{
        type: String,
        required: true
    },
    rating: {
        type: Number,
        default: 0
    }
})

module.exports = db.model('CryptoRating', schema)