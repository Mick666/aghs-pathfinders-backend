const Guides = [
    {
        title: 'Max Damage Build',
        createdAt: '15-01-2021',
        rating: '97',
        id: 'J1',
        hero: 'Juggernaut',
        itemGroups: [
            {
                groupName: 'Starting Items',
                items: ['bootsOfSpeed']
            },
            {
                groupName: 'Rush first',
                items: ['maelstrom']
            },
            {
                groupName: 'Need for final fight',
                items: ['euls']
            },
            {
                groupName: 'Final Build',
                items: ['powerTreads', 'mjollnir', 'euls', 'daedalus', 'butterfly', 'heart']
            }
        ],
        selectedTalents: ['+475 health', '+160 Blade Fury DPS', '+20 Attack Speed', '20 Movement Speed'],
        levels: [0, 1, 2, 0, 0, 3, 0, 1, 1, 4, 2, 3, 2, 1, 4, 2, 5, 3,],
        shards: ['letItRip', 'studiedTheBlade', 'maskOfLeeroy', 'helicopter', 'helicopter', 'helicopter'],
        shardCombinations: [
            { combination: ['letItRip', 'studiedTheBlade'], description: 'Help! Help! I’m being repressed!' },
            { combination: ['maskOfLeeroy', 'helicopter'], description: 'Alright, but apart from the sanitation, the medicine, education, wine, public order, irrigation, roads, the fresh-water system, and public health, what have the Romans ever done for us?' }
        ]
    },
    {
        title: 'Another Valid Build',
        createdAt: '15-01-2021',
        rating: '97',
        id: 'J2',
        hero: 'Juggernaut',
        itemGroups: [
            {
                groupName: 'Starting Items',
                items: ['bracer']
            },
            {
                groupName: 'Final Build',
                items: ['daedalus', 'butterfly', 'heart']
            }
        ],
        selectedTalents: ['+475 health', '+160 Blade Fury DPS', '+20 Attack Speed', '20 Movement Speed'],
        levels: [0, 1, 2, 0, 0, 3, 0, 1, 1, 4, 2, 3, 2, 1, 4, 2, 5, 3,],
        shards: ['letItRip', 'studiedTheBlade', 'maskOfLeeroy', 'helicopter', 'helicopter', 'helicopter'],
        shardCombinations: [
            { combination: ['letItRip', 'studiedTheBlade'], description: 'Help! Help! I’m being repressed!' },
            { combination: ['maskOfLeeroy', 'helicopter'], description: 'Alright, but apart from the sanitation, the medicine, education, wine, public order, irrigation, roads, the fresh-water system, and public health, what have the Romans ever done for us?' }
        ]
    },
    {
        title: 'Another Valid Build',
        createdAt: '15-01-2021',
        rating: '97',
        id: 'J2',
        hero: 'Juggernaut',
        itemGroups: [
            {
                groupName: 'Starting Items',
                items: ['bracer']
            },
            {
                groupName: 'Final Build',
                items: ['daedalus', 'butterfly', 'heart']
            }
        ],
        selectedTalents: ['+475 health', '+160 Blade Fury DPS', '+20 Attack Speed', '20 Movement Speed'],
        levels: [0, 1, 2, 0, 0, 3, 0, 1, 1, 4, 2, 3, 2, 1, 4, 2, 5, 3,],
        shards: ['letItRip', 'studiedTheBlade', 'maskOfLeeroy', 'helicopter', 'helicopter', 'helicopter'],
        shardCombinations: [
            { combination: ['letItRip', 'studiedTheBlade'], description: 'Help! Help! I’m being repressed!' },
            { combination: ['maskOfLeeroy', 'helicopter'], description: 'Alright, but apart from the sanitation, the medicine, education, wine, public order, irrigation, roads, the fresh-water system, and public health, what have the Romans ever done for us?' }
        ]
    }
]

module.exports = Guides