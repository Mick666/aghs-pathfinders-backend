const mongoose = require('mongoose')

const schema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 5
    },
    passwordHash: {
        type: String,
        required: true
    },
    guides: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Guide'
        }
    ]
})

module.exports = mongoose.model('User', schema)