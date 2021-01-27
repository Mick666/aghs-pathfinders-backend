const rawData = require('./pathfinder.json')
const Heroes = require('./Heroes')

const convertHeroNames = (string) => {
    switch (string) {
    case 'nevermore': return 'Shadow Fiend'
    case 'ogre_magi': return 'Ogre-Magi'
    case 'legion_commander': return 'Legion Commander'
    case 'phantom_assassin': return 'Phantom Assasin'
    case 'queenofpain': return 'Queen of Pain'
    case 'templar_assassin': return 'Templar Assasin'
    case 'winter_wyvern': return 'Winter Wyvern'
    case 'witch_doctor': return 'Witch Doctor'
    case 'magnataur': return 'Magnus'
    case 'windrunner': return 'Windranger'
    default:
        return string
            .replace(/([a-z])/, function (v) { return v.toUpperCase() })
            .replace('_', ' ')
    }
}

function convertLevelData(levels) {
    const convertedData = { rooms: [], victory: false }
    for (let key in levels) {
        if (levels[key].lives_lost) convertedData.rooms.push(levels[key])
        else convertedData.victory = levels[key]
    }
    return convertedData
}


const convertedData = Object.entries(rawData)
    .map((match) => Object.entries(match[1])
        .map(ent => Object.entries(ent)).map(ent => ent[1])
        .map((ent) => ent[1])
    )
    .map((match) => match
        .map((player) => {
            if (player.hero) return { ...player, hero: convertHeroNames(player.hero) }
            return player
        })
    ).map(match => {
        const changedData = { players: [], levelData: {} }
        match.forEach(entry => {
            if (entry.hero) changedData.players.push(entry)
            else changedData.levelData = convertLevelData(entry)
        })
        return changedData
    }).filter(x => x)
// console.log(convertedData)
const convertedHeroes = Heroes
    .map(hero => {
        return { totalGames: 0, victories: 0, defeats: 0, deaths: 0, hero: hero.id }
    })
    .reduce((obj, item) => (obj[item.hero] = { ...item }, obj), {})
console.log(convertedHeroes)
convertedData.forEach(match => match.players.forEach(player => {
    if (player.victory || !player.hero || !convertedHeroes[player.hero]) return
    match.levelData.victory ? convertedHeroes[player.hero].victories++ : convertedHeroes[player.hero].defeats++
    convertedHeroes[player.hero].totalGames++
    convertedHeroes[player.hero].deaths += player.deaths
}))

const victoriousGames = convertedData.filter(match => match.levelData.victory)
console.log(victoriousGames)

module.exports = {
    convertedHeroes,
    convertedData,
    victoriousGames
}