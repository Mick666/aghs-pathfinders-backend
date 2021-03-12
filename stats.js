const Heroes = require('./Heroes')
// eslint-disable-next-line
const grandMagus = require('./Pathfinders - Apex Mage.json')
// eslint-disable-next-line
const apexMage = require('./pathfinder.json')
// eslint-disable-next-line
const sorcerer = require('./Pathfinders - Sorcerer.json')

const convertHeroNames = (string) => {
    switch (string) {
    case 'nevermore': return 'ShadowFiend'
    case 'ogre_magi': return 'OgreMagi'
    case 'legion_commander': return 'LegionCommander'
    case 'phantom_assassin': return 'PhantomAssassin'
    case 'queenofpain': return 'QueenofPain'
    case 'templar_assassin': return 'TemplarAssassin'
    case 'winter_wyvern': return 'WinterWyvern'
    case 'witch_doctor': return 'WitchDoctor'
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
        const room = levels[key]
        if (key === 'victory') convertedData.victory = levels[key]
        else {
            if (room.unpicked_elite === 'nil') room.unpicked_elite = false
            convertedData.rooms.push(room)
        }
    }
    return convertedData
}

function createMatchData(rawData) {
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
        }).filter(x => x && x.levelData && x.levelData.rooms && x.levelData.rooms.length > 1)
    const convertedHeroes = Heroes
        .map(hero => {
            return { totalGames: 0, victories: 0, defeats: 0, deaths: 0, heroId: hero.id, hero: hero.name, depth: [], popularShards: [], items: [], winningShards: [] }
        })
        .reduce((obj, item) => (obj[item.heroId] = { ...item }, obj), {})
    const shardWinrates = {}
    // console.log(convertedHeroes)
    convertedData.forEach(match => match.players.forEach(player => {
        if (player.victory || !player.hero || !convertedHeroes[player.hero]) return
        match.levelData.victory ? convertedHeroes[player.hero].victories++ : convertedHeroes[player.hero].defeats++
        convertedHeroes[player.hero].totalGames++
        convertedHeroes[player.hero].deaths += player.deaths
        convertedHeroes[player.hero].depth.push(player.depth)
        if (!player.upgrades) return
        player.upgrades.forEach(shard => {
            if (shardWinrates[shard]) {
                match.levelData.victory ? shardWinrates[shard].victories++ : shardWinrates[shard].defeats++
                shardWinrates[shard].totalGames++
            } else {
                shardWinrates[shard] = {
                    totalGames: 1,
                    victories: match.levelData.victory ? 1 : 0,
                    defeats: match.levelData.victory ? 0 : 1,
                    shard: shard,
                    hero: player.hero
                }
            }
        })
    }))
    const heroAsArray = Object.entries(convertedHeroes).map(x => x[1])
    console.log(heroAsArray[0])
    const shardsAsArray = Object.entries(shardWinrates).map(x => x[1])
    const victoriousGames = convertedData.filter(match => match.levelData.victory)
    // console.log(victoriousGames[0])
    return { convertedData: convertedData, convertedHeroes: convertedHeroes, heroAsArray: heroAsArray, victoriousGames: victoriousGames, shardWinrates: shardsAsArray }
}

const aghsStats = [createMatchData(grandMagus), createMatchData(apexMage), createMatchData(sorcerer)]

module.exports = aghsStats