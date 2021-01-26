const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 5
    },
    createdAt: {
        type: String,
        required: true
    },
    rating: {
        type: [Number],
        required: true
    },
    hero: {
        type: String,
        required: true,
    },
    itemGroups: {
        type: [
            {
                groupName: {
                    type: String,
                    required: true
                },
                items: {
                    type: [String],
                    required: true
                }
            }
        ],
        required: true,
    },
    selectedTalents: {
        type: [Number],
        required: true
    },
    levels: {
        type: [Number],
        required: true,
    },
    shards: {
        type: [String],
        required: true,
    },
    shardCombinations: [
        {
            description: {
                type: String,
                required: true
            },
            combination: {
                type: [String],
                required: true
            }
        }
    ],
})

module.exports = mongoose.model('Guide', schema)