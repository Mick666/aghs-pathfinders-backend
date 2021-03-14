const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    changes: {
        type: [String],
        required: true
    }
})

module.exports = mongoose.model('Changelog', schema)