const Heroes = [
    {
        id: 'Axe',
        name: 'Axe',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/2/23/Axe_icon.png',
        desc: 'Mogul Khan, the Axe, is a melee strength hero, infamous for creating chaos in battle and thriving off of it. Axe is commonly played as an initiator, as his potent disables can disrupt the enemy\'s formation and give his team openings in fights.',
        talents: [
            ['+100 Battle Hunger DPS', '25', '+800 Berserker\'s Call'],
            ['+20 Health Regen', '20', '+180 Culling Blade Kill Threshold'],
            ['+Attacking Proc Counter Helix', '15', '+5 Mana Regen'],
            ['+20 Movement Speed', '10', '+25 Attack Speed'],
        ],
        abilities: ['beserkersCall', 'battleHunger', 'counterHelix', 'cullingBlade', 'talentTree'],
        shards: ['axetrovertedPersonality', 'cardiovascularAxercises', 'comeAxeMeAQuestion', 'axeCellentCamaraderie', 'axeCitingDevelopments', 'axeQuisiteAllure', 'axeCeptionalInfluences',
            'hugePainInTheAxe', 'lowAxePectation', 'backInAxeTion', 'omnidirectionalAxeTravaganza', 'unforgettableAxePeriences', 'workplaceAxeCidents']
    },
    {
        id: 'LegionCommander',
        name: 'Legion Commander',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/a/a2/Legion_Commander_icon.png',
        desc: 'Tresdin, the Legion Commander, is a melee strength hero fitting the role of carry. A highly mobile and somewhat tanky hero, her skillset and gameplay revolve mainly around killing off targets and especially backliners and supports, with her ultimate, Duel.' +
        'Each successful Duel grants Tresdin permanent bonus damage. Though she is extremely skilled in "fair" one-on-one fights, Tresdin suffers when outnumbered and must choose her engagements carefully.',
        talents: [
            ['+65 Press The Attack HP Regen', '25', '+350 Overwhelming Odds Base Damage'],
            ['+7% Moment Proc Chance', '20', '+30 Movement Speed'],
            ['+5s Overwhelming Odds Movespeed Duration', '15', '+25 Attack Speed'],
            ['+1.5 Mana Regen', '10', '+7 Strength'],
        ],
        abilities: ['overwhelmingOdds', 'pressTheAttack', 'momentOfCourage', 'duel', 'talentTree'],
        shards: ['blotOutTheSun', 'justDonTLeadEmSoMuch', 'tonightDineInHell', 'soYouReFinallyAwake', 'fightInTheShade', 'areYouNotEntertained', 'bornToKill', 'etTuTresdin', 'giveThemNothing']
    },
    {
        id: 'Magnus',
        name: 'Magnus',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/b/ba/Magnus_icon.png',
        desc: 'Magnus, the Magnoceros, is a monstrous melee strength hero who is usually played as a ganker, initiator, or semi-carry. His ability to battle multiple heroes at once gives him an excellent presence in team fights.'+
        'In addition to his teamfight presence, he can buff allies or himself with bonus damage and cleave, capitalizing on his ability to group up multiple enemies.',
        talents: [
            ['+1s Reverse Polarity Stun Duration', '25', '+10% Empower Damage/Cleave'],
            ['+425 Skewer Range', '20', '+350 Health'],
            ['-5s Skewer Cooldown', '15', '+8 Strength'],
            ['+200 Mana', '10', '+20 Damage'],
        ],
        abilities: ['shockwave', 'empower', 'skewer', 'reversePolarity', 'talentTree'],
        shards: ['triwave', 'shockAndAwe', 'shockarang', 'empowerment', 'vampower', 'tooManyWaves', 'bulldoze', 'spitTake', 'blastOff', 'reverseReversePolarity', 'dematerialization', 'extraPolarity']
    },
    {
        id: 'Mars',
        name: 'Mars',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/9/9d/Mars_icon.png',
        desc: 'Mars, the First Son of Heaven, is an aggressive melee strength hero who controls the battlefield with numerous knockbacks and impassable terrain.'+
        'Equipped with a large shield, his Bulwark passively blocks attacks from the front and sides, making him a very durable fighter in most situations.',
        talents: [
            ['Arena of Blood Grants Team +120 HP Regen', '25', 'God\'s Rebuke +65% Crit'],
            ['+0.8s Spear of Mars Stun', '20', '+160 Spear Of Mars Damage'],
            ['+6 Armor', '15', '-4s God\'s Rebuke Cooldown'],
            ['+175 Health', '10', '+15 Damage'],
        ],
        abilities: ['spearOfMars', 'godsRebuke', 'bulwark', 'arenaOfBlood', 'talentTree'],
        shards: ['shishKebab', 'boomstick', 'trailblazer', 'fullCircle', 'stunningRebuke', 'strongArgument', 'bulwarkReturn', 'bastion', 'phalanx', 'remoteWorkplace', 'coliseum', 'anywayHeresSpearwall']
    },
    {
        id: 'Omniknight',
        name: 'Omniknight',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/e/e2/Omniknight_icon.png',
        desc: 'Purist Thunderwrath, the Omniknight, is a melee strength hero who is renowned for his ability to protect his allies, preventing the enemy from easily killing them.'+
        'A holy and courageous hero, Purist Thunderwrath is an adept support whose powerful spells give his team strong survivability.',
        talents: [
            ['-3s Heavenly Grace Cooldown', '25', '+160 Purification Damage/Heal'],
            ['+3 Mana Regen', '20', '-15% Degen Aura'],
            ['+30 Movement Speed', '15', '+6 Armor'],
            ['+40 Base Damage', '10', '+250 Mana'],
        ],
        abilities: ['purification', 'heavenlyGrace', 'degenAura', 'guardianAngel', 'talentTree'],
        shards: ['holyPlace', 'benevolence', 'blessedCure', 'heavenlyPurification', 'zeal', 'heavenlyBarrier', 'judgement', 'righteousPath', 'condemnation', 'absolution', 'healLifeAngel', 'angelicFlight', 'personalSavior']
    },
    {
        id: 'Snapfire',
        name: 'Snapfire',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/7/7a/Snapfire_icon.png',
        desc: 'Beatrix Snapfire, or simply Snapfire, is a ranged strength hero armed with a wide array of firepower, riding into battle on her dragon toad Mortimer.',
        talents: [
            ['+6 Mortimer Kisses Launched', '25', '+90 Damage'],
            ['+20% Mortimer Kisses Movement Slow', '20', 'Lil\' Shredder Uses Your Attack Damage'],
            ['+60 Scatterblast Damage', '15', 'Firesnap Cookie Restores 200 Health'],
            ['+20 Movement Speed', '10', '+200 Health'],
        ],
        abilities: ['scatterblast', 'firesnapCookie', 'lilShredder', 'mortimerKisses', 'talentTree'],
        shards: ['doubleBarreled', 'stoppingPower', 'sawedOff', 'bakerSDozen', 'raisinFiresnaps', 'freshlyBaked', 'explosiveShells', 'lilFriendlyShredder', 'ricochet', 'fragmentsOfKisses', 'autocannon', 'safetyFirst']
    },
    {
        id: 'Tidehunter',
        name: 'Tidehunter',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/d/d5/Tidehunter_icon.png',
        desc: 'Leviathan, the Tidehunter, is a melee strength hero who is formidable due to his uncommonly tough hide and his ocean spells that sweep enemies upward.'+
        'He can be played as a support or as an offlane hero whose greatest strengths lie in being able to take heavy amounts of damage in the early game and the disabling powers of his spells.',
        talents: [
            ['+200 Damage', '25', '20% Coooldown Reduction'],
            ['+4 Gush Armour Reduction', '20', '+30 Shell Damage Block'],
            ['+15% Anchor Smash Attack Damage Reduction', '15', '+5 Mana Regen'],
            ['+90 Gush Damage', '10', '+15 Movement Speed'],
        ],
        abilities: ['gush', 'krakenShell', 'anchorSmash', 'ravage', 'talentTree'],
        shards: ['saltWaterFaceWash', 'tentacularFondling', 'togetherUntoTheDepth', 'anchorWhack', 'fishManKarate', 'safeHarbours', 'lovecraftianRomance', 'maelrawnSlament', 'razorShore', 'redSeaSclamour', 'capNCrunch']
    },
    {
        id: 'Tusk',
        name: 'Tusk',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/c/ce/Tusk_icon.png',
        desc: 'Ymir, the Tusk, is a melee strength hero whose array of icy disables makes him a very strong team initiator and ganker.'+
        'He has a damage nuke and a disable in Ice Shards, which lets him precisely place a barrier in an enemy\'s path, inhibiting their movement and blocking off their escape path.',
        talents: [
            ['+40 Attack Speed', '25', '+12% Chance Walrus Punch'],
            ['+80% Walrus Punch Crit', '20', '+30 Movement Speed'],
            ['+120 Snowball Damage', '15', '+325 Health'],
            ['+0.4s Walrus Punch Stun Duration', '10', '+8 Health Regen'],
        ],
        abilities: ['iceShards', 'snowball', 'tagTeam', 'walrusPunch', 'talentTree'],
        shards: ['icebreaker', 'deepFreeze', 'iceShardExtension', 'snowFort', 'snowballBlast', 'globalCooling', 'coolParty', 'tagYoureIn', 'everybodyTagNow', 'andAnotherPunch', 'tuskyDuskie', 'walrusWallop', 'sigilFromCobalt', 'goldenEye']
    },
    {
        id: 'Hoodwink',
        name: 'Hoodwink',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/c/c9/Hoodwink_icon.png',
        desc: 'Hoodwink is a tricky ranged agility hero who runs wild through the trees of Mistwoods. Firing acorns from her arbalest, she creates new forests through which to Scurry.'+
        'For her foes, the woods are a dangerous place, full of  Bushwhack traps and vantage points for the  Sharpshooter to aim the ultimate crossbow shot. This crafty critter should never be underestimated.',
        talents: [
            ['+40% Magic Resistance', '25', '+9000 Sharpshooter Range'],
            ['-3 Armor Corruption', '20', '+4 Acorn Shot Bounces'],
            ['+14 Agility', '15', 'Sharpshooter Grants Invisibility'],
            ['+30 Movement Speed', '10', '+200 Health'],
        ],
        abilities: ['acornShot', 'bushwhack', 'scurry', 'sharpshooter', 'talentTree'],
        shards: ['aintNoFortunateOnes', 'wookieDoctrine', 'lookAtItGo', 'canadianHeritage', 'andISpeakForTheTrees', 'getNutted', 'smeltOfElderBerries', 'theresAMouseWithABowOverThere', 'overTheRiverAndThroughTheWoods', 'weveGottaGetOutOfThisPlace', 'sapperOfTomokan']
    },
    {
        id: 'Juggernaut',
        name: 'Juggernaut',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/0/03/Juggernaut_icon.png',
        desc: 'Yurnero, the Juggernaut, is a melee agility hero whose abilities allow him to sprint into battle and recklessly devastate enemies in an impenetrable flurry of blades. \
        \nHis abilities grant invulnerability and spell immunity, turning him into an unstoppable force on a hairpin.',
        talents: [
            ['+1s Omnislash Duration', '25', '+475 health'],
            ['+160 Blade Fury DPS', '20', '+8 Armor'],
            ['+20 Attack Speed', '15', '-20 Healing Ward cooldown'],
            ['+20 Movement Speed', '10', '+5 All Stats'],
        ],
        abilities: ['bladeFury', 'healingWard', 'bladeDance', 'omnislash', 'talentTree'],
        shards: ['studiedTheBlade', 'maskOfLeeroy', 'helicopter', 'letItRip', 'meatSpin', 'wrathOfGaia', 'timmothyTheBrave', 'badOmen', 'passTheGrass', 'armyOfTheIsle']
    },
    {
        id: 'PhantomAssassin',
        name: 'Phantom Assassin',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/8/8e/Phantom_Assassin_icon.png',
        desc: 'Mortred, the Phantom Assassin, is a melee agility hero fitting the role of hard carry. Mortred is best-known, and infamous for, her ability to inflict staggering damage with single strikes.'+
        'Her abilities synergize supremely well with each other, rendering her an extremely formidable foe once she has acquired the items she requires.',
        talents: [
            ['+100% Coup De Grace Crit Damage', '25', '+40% Blur Evasion'],
            ['Global Phantom Strike Range', '20', '-3 Armor Corruption'],
            ['+3s Phantom Strike Buff Duration', '15', '12% Lifesteal'],
            ['-400% Stifling Dagger Movement Slow', '10', '+175 Health'],
        ],
        abilities: ['stiflingDagger', 'phantomStrike', 'blur', 'coupDeGrace', 'talentTree'],
        shards: ['aViewToAKill', 'quantumOfSolace', 'spectre', 'forYourEyesOnly', 'dieAnotherDay', 'ohMyGodSheKilledKenny', 'liveAndLetDie', 'theWorldIsNotEnough', 'licenseToKill', 'theLivingDaylights']
    },
    {
        id: 'ShadowFiend',
        name: 'Shadow Fiend',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/3/36/Shadow_Fiend_icon.png',
        desc: 'Nevermore, the Shadow Fiend, is a ranged agility hero possessing abilities that inflict superb burst damage from varying distances. Whether near or far, Shadow Fiend is able to release incredible'+
        'offensive power, both physical and magical. Shadow Fiend\'s true power comes from the souls he takes, making him more dangerous every time he kills.',
        talents: [
            ['30% Cooldown Reduction', '25', 'Global Dark Lord Aura'],
            ['+150 Shadowraze Damage', '20', '+3 Damage per Soul'],
            ['+30 Movement Speed', '15', '+100 Attack Range'],
            ['+15 Attack Speed', '10', '+6% Spell Amplification'],
        ],
        abilities: ['shadowraze', 'necromastery', 'presenceOfTheDarkLord', 'requiemOfSouls', 'talentTree'],
        shards: ['oathboundRevenant', 'deathOfNight', 'happyHallowfiend', 'gluttonOfTheAbyss', 'requiemForADream', 'injusticeForAll', 'ozkavoshHospitality', 'conductorOfTheHellwardExpress', 'favorsOfRistful', 'soulOfAPoet']
    },
    {
        id: 'Slark',
        name: 'Slark',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/a/aa/Slark_icon.png',
        desc: 'Slark, the Nightcrawler, is a melee agility hero that utilizes his abilities to spring onto enemy heroes and slip out unhindered. He is a very mobile ganker, but remains attribute-wise below most other carries unless he is able to steal away attributes with his abilities.'+
        'Once he does, though, only a few heroes can hope to be as fearsome as the Nightcrawler - extremely mobile to the point of ever-presence, his strikes only hitting harder and faster.',
        talents: [
            ['+475 Health', '25', '+1s Shadow Dance Duration'],
            ['+0.8s Pounce Leash', '20', '+120 Dark Pact Damage'],
            ['15% Lifesteal', '15', '+20 Attack Speed'],
            ['20 Movement Speed', '10', '+5 All Stats'],
        ],
        abilities: ['darkPact', 'pounce', 'essenceShift', 'shadowDance', 'talentTree'],
        shards: ['brokenContract', 'smellsFishy', 'brackishBath', 'goneFishing', 'littleSkippers', 'fishFood', 'apexPredator', 'luckyCatch', 'seaSchool', 'reefRage', 'deepSix', 'hookLineAndSinker']
    },
    {
        id: 'Sniper',
        name: 'Sniper',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/5/51/Sniper_icon.png',
        desc: 'Kardel Sharpeye, the Sniper, is a ranged agility hero who excels at dealing moderate to heavy damage from an incredible range. With no escape mechanism, poor mobility, and a low health pool, Sniper is'+
        'exceptionally frail at all stages of the game and vulnerable to enemies who confront him head-on. However, his abilities provide him both the means to keep his distance and systematically destroy his enemies from afar.',
        talents: [
            ['+5 Shrapnel Charges', '25', '+100 Attack Range'],
            ['+24 Shrapnel DPS', '20', '+28 Knockback Distance Headshot'],
            ['-14% Shrapnel Slow', '15', '+30 Attack Speed'],
            ['+15 Damage', '10', '15% Cooldown Reduction'],
        ],
        abilities: ['shrapnel', 'headshot', 'takeAim', 'assassinate', 'talentTree'],
        shards: ['explosiveShrapnel', 'hoHoHaHa', 'suppressiveFire', 'bulletDance', 'sayGoodbyeToYerHead', 'stoppinPower', 'purgeSprint', 'tacticalHop', 'armorPiercing', 'rapidFire', 'buckshot', 'hipfire', 'bigGameHunter']
    },
    {
        id: 'TemplarAssassin',
        name: 'Templar Assassin',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/9/9c/Templar_Assassin_icon.png',
        desc: 'Lanaya, the Templar Assassin, is a very short-ranged agility hero capable of dealing huge bursts of physical damage to swathes of enemies with expert positioning and timing. Unlike most physical damage dealers, Lanaya'+
        'reaches her damage potential quite early and then scales up from that point with carry items, letting her gank with impunity throughout the mid-game, and her short attack range increases from being comparable to that of a melee hero to a'+
        'ranged hero with short reach as she levels Psi Blades.',
        talents: [
            ['+6 Refraction Instances', '25', '1s Meld Hit Bash'],
            ['-3 Meld Armor Reduction', '20', 'Meld Dispels'],
            ['+160 Psionic Trap Damage', '15', '15% Evasion'],
            ['+20 Movement Speed', '10', '+15 Attack Speed'],
        ],
        abilities: ['refraction', 'meld', 'psiBlades', 'psionicTrap', 'talentTree'],
        shards: ['absorption', 'smokeAndMirrors', 'glassShield', 'vanishingSlice', 'celestialStep', 'latentCharge', 'psychicBurst', 'covertDevices', 'shadedEcho', 'resurgence', 'veiledCuts']
    },
    {
        id: 'Ursa',
        name: 'Ursa',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/4/40/Ursa_icon.png',
        desc: 'Ulfsaar, the Ursa Warrior (or simply Ursa), is a melee agility hero whose abilities\' main focus is the increase of attack damage, allowing for some of the most impressive sustained damage in the entire game.'|
        'He specializes in increasing damage against one target. His abilities allow him to attack with almost maximum speed and gain bonus damage with each consecutive hit on a single target.',
        talents: [
            ['+3 Overpower Attacks', '25', '+480 AoE Earthshock'],
            ['+12 Fury Swipes Damage', '20', '+1.2s Enrage Duration'],
            ['+350 Health', '15', '+12 Agility'],
            ['+1.5 Mana Regen', '10', '+20 Damage'],
        ],
        abilities: ['earthshock', 'overpower', 'furySwipes', 'Enrage', 'talentTree'],
        shards: ['concealed', 'cannonball', 'diggingIn', 'relentless', 'tornToShreds', 'elusive', 'reckless', 'laceratedArmor', 'rend', 'ursaMinor', 'protectTheCubs', 'intimidatingRoar', 'ferocity', 'rampage']
    },
    {
        id: 'Venomancer',
        name: 'Venomancer',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/2/25/Venomancer_icon.png',
        desc: 'Lesale Deathbringer, the Venomancer, is a ranged agility hero who is focused on dealing damage over time and slowing enemies down. While unassuming due to his mediocre stats and low attack range,'+
        'he can inflict surprising amounts of gradual damage with his poisonous abilities if left alone.',
        talents: [
            ['20% Cooldown Reduction', '25', '+20% Spell Amplification'],
            ['Plague Ward gains True Strike', '20', 'Plague Ward gains Split Shot'],
            ['+70 Attack Speed', '15', '+20 Plague Ward Duration'],
            ['+200 Health', '10', '+3 Mana Regen'],
        ],
        abilities: ['venomousGale', 'poisonSting', 'plagueWard', 'poisonNova', 'talentTree'],
        shards: ['herdImmunity', 'globalEpidemic', 'rottenDelicacy', 'fertileSoil', 'airborneParasites', 'seasonalAllergy', 'bananamancer', 'terrorOfJidiIsles', 'poisonSnap', 'venomousDischarge', 'contagion']
    },
    {
        id: 'Viper',
        name: 'Viper',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/5/5f/Viper_icon.png',
        desc: 'Viper, the Netherdrake, is a ranged agility hero who functions as an excellent nuker, ganker and carry due to his assortment of low-cooldown spells and debilitating attacks. His modus operandi is to whittle away his opponents\''+
        'vitality over long stretches of time while they fail to inflict fatal damage. To that end Viper wields magic-based abilities focused on inhibiting speed and defenses.',
        talents: [
            ['+30 Movement speed', '25', '+400 Health'],
            ['+70 Damage', '20', '+80 Viper Strike DPS'],
            ['+5 Corrosive Skin Stats', '15', '+100 Attack Range'],
            ['6% Spell Lifesteal', '10', '+20 Attack Speed'],
        ],
        abilities: ['poisonAttack', 'nethertoxin', 'corrosiveSkin', 'viperStrike', 'talentTree'],
        shards: ['nethertoxinCharges', 'toxicOsmosis', 'lingeringMiasma', 'exudate', 'flyIntoARage', 'sheddingSkin', 'antitoxin', 'snakebite', 'contamination']
    },
    {
        id: 'Weaver',
        name: 'Weaver',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/0/09/Weaver_icon.png',
        desc: 'Yurnero, the Juggernaut, is a melee agility hero whose abilities allow him to sprint into battle and recklessly devastate enemies in an impenetrable flurry of blades. \
        \nHis abilities grant invulnerability and spell immunity, turning him into an unstoppable force on a hairpin.',
        talents: [
            ['+1 Germinate Attack', '25', '+475 health'],
            ['+4 Swarm Attacks to Kill', '20', '+0.4 Swarm Armor Reduction'],
            ['+11 Strength', '15', '-3 Armor Corruption'],
            ['+6 Agility', '10', '+60 Shukuchi Damage'],
        ],
        abilities: ['theSwarm', 'shukuchi', 'geminateAttack', 'timeLapse', 'talentTree'],
        shards: ['bugYourFriends', 'bugBugBoom', 'hivemind', 'realityRips', 'beneficialPassing', 'blacklist', 'shukuchiSwarm', 'manyThreads', 'swarmTheBeaches', 'giveSomeTakeSome', 'backToBasics', 'allSWellThatStartsWell', 'explosiveReality']
    },
    {
        id: 'Disruptor',
        name: 'Disruptor',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/9/97/Disruptor_icon.png',
        desc: 'Disruptor, the Stormcrafter, is a ranged intelligence hero who requires good positioning to use his abilities effectively. His signature ability is Kinetic Field, a pseudo-disable that traps enemies within a small area for a long duration.'+
        'Combined with his Static Storm, Disruptor can act as the initiator for a teamfight, or supplement his teammates\' initiation very well.',
        talents: [
            ['+3s Kinetic Field Duration', '25', '-8s Glimpse Cooldown'],
            ['+3 Thunder Strike Hits', '20', '+20 Intelligence'],
            ['-3s Kinetic Field Cooldown', '15', '+125 Cast Range'],
            ['+30 Thunder Strike Damage', '10', '+20% Magic Resistance'],
        ],
        abilities: ['thunderStrike', 'glimpse', 'kineticField', 'staticStorm', 'talentTree'],
        shards: ['cloudCover', 'manaStorm', 'criticalStrike', 'loadedWeapon', 'blastInThePast', 'shockingTravel', 'electricFence', 'areaOfBliss', 'stayInTheZone', 'ringCeption', 'perfectStorm', 'fieldOfDreams', 'pacificStorm']
    },
    {
        id: 'Jakiro',
        name: 'Jakiro',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/2/2f/Jakiro_icon.png',
        desc: 'Jakiro, the Twin Head Dragon, is a ranged intelligence hero who utilizes the powers of ice and fire with powerful linear area spells. He can freeze enemies in place with Ice Path, or slow them down with Dual Breath.'+
        'He is capable of dealing heavy damage throughout the game by locking enemies inside his Macropyre, and provides great pushing power with Liquid Fire.',
        talents: [
            ['+5 Ice Path Lifetime', '25', '+2000 Macropyre Length'],
            ['+325 Dual Breath Travel Distance', '20', '+50 Liquid Fire Attack Slow'],
            ['+25 Dual Breath Burn Damage', '15', '10% Cooldown Reduction'],
            ['+6% Spell Amplification', '10', '+325 Attack Range'],
        ],
        abilities: ['dualBreath', 'icePath', 'liquidFire', 'macropyre', 'talentTree'],
        shards: ['crystalizedVeins', 'tacobellianIndigestion', 'throughTheFireAndFlames', 'iceSolationProtocol', 'letItGo', 'onThinIce', 'vanillaIce', 'drachenFammenwerfer', 'moltenBloodTransfusion', 'warmPersonality', 'darlingItsColdOutside', 'festivityOfTheBurningMan', 'lavatherapy', 'aSongOfFireAndMoreFire']

    },
    {
        id: 'OgreMagi',
        name: 'Ogre-Magi',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/e/e0/Ogre_Magi_icon.png',
        desc: 'Aggron Stonebreak, the Ogre Magi, is a melee intelligence hero, famous for his random potential for extreme burst damage and his enormous health pool for an intelligence hero. He has good base attributes, and'+
        'some of the best attributes gain in the game, having a very high base strength, as well as the highest strength gain of any intelligence hero by far.',
        talents: [
            ['+240 Fireblast Damage', '25', '+60 Movement Speed'],
            ['+15% Bloodlust Movespeed', '20', '+30 Strength'],
            ['+275 Health', '15', '+80 Damage'],
            ['+75 Cast Range', '10', '+16 Ignite DPS'],
        ],
        abilities: ['fireblast', 'ignite', 'bloodlust', 'multicast', 'talentTree'],
        shards: ['getOuttaMySwamp', 'concussionTherapy', 'ogreIsLoveOgreIsLife', 'tooHotToHandle', 'hymnOfTheGiants', 'casinoRoyale', 'itsAllOgreNow', 'thatllDoDonkeyThatLlDo']

    },
    {
        id: 'QueenofPain',
        name: 'Queen of Pain',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/a/a1/Queen_of_Pain_icon.png',
        desc: 'Akasha, the Queen of Pain, is a ranged intelligence hero who uses her abilities to close in and deal huge area damage to the enemy. She is typically played in the middle lane as a ganker and semi-carry,'+
        'with her ability to appear in battle and deal damage in quick succession, as well as hunt down fleeing heroes with ease. ',
        talents: [
            ['+24% Critical Strike (200%)', '25', 'Scream of Pain 1.5s Stun'],
            ['+525 AoE Shadow Strike', '20', '+25% Spell Lifesteal'],
            ['+30 Attack Speed', '15', '10% Cooldown Reduction'],
            ['+9 Strength', '10', '+20 Damage'],
        ],
        abilities: ['shadowStrike', 'blink', 'screamOfPain', 'sonicWave', 'talentTree'],
        shards: ['stingingLash', 'spreadThePain', 'delightAndTorment', 'hauntingEchoes', 'ferventAssault', 'hallOfPain', 'rapturousCry', 'resoundingWail', 'invigoratingShriek', 'thunderingResonance', 'sonicTsunami', 'discordantForce']
    },
    {
        id: 'Windranger',
        name: 'Windranger',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/6/60/Windranger_icon.png',
        desc: 'Lyralei, the Windranger, is a ranged intelligence hero that uses powerful abilities in conjunction with her physical attack to take down enemies. Despite being an intelligence Hero, Windranger\'s'+
        'playstyle resembles that of an agility Hero, due in large part to her skill set. ',
        talents: [
            ['25% Cooldown Reduction', '25', '+10s Focus Fire Duration'],
            ['+1s Shackleshot Target', '20', '+16% Spell Lifesteal'],
            ['+100 Attack Speed', '15', '+100 Powershot Damage'],
            ['+1s Shackleshot Stun Duration', '10', '+2.5 Mana Regen'],
        ],
        abilities: ['shackleshot', 'powershot', 'windrun', 'focusFire', 'talentTree'],
        shards: ['fairWeatherFriends', 'windwardHaze', 'kentuckyWindage', 'autumnChill', 'sweepingGale', 'semiautomaticAssaultArchery', 'picnicInThePark', 'feelTheBreeze', 'arrowRain']
    },
    {
        id: 'WinterWyvern',
        name: 'Winter Wyvern',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/4/4a/Winter_Wyvern_icon.png',
        desc: 'Auroth, the Winter Wyvern, is a ranged intelligence hero whose arsenal of spells gives her powerful nuking capabilities. Usually played as a lane support, Winter Wyvern\'s spells allow her to fulfill a myriad of roles depending on what her team needs.',
        talents: [
            ['Splinter Blast 1.5s Stun', '25', '+1.5s Winter\'s Curse Duration'],
            ['+11% Spell Amplification', '20', '+12% Artic Burn Slow'],
            ['+30 Attack Speed', '15', '+275 Health'],
            ['+50 Damage', '10', '+1% Cold Embrace Heal'],
        ],
        abilities: ['arcticBurn', 'splinterBlast', 'coldEmbrace', 'wintersCurse', 'talentTree'],
        shards: ['secondDegreeBurn', 'arcticSplash', 'wintersBreath', 'coolAndCollected', 'chilledToTheBone', 'soothingBreeze', 'empoweredEmbrace', 'iceColdKilling', 'diamondize', 'sharingIsScaring', 'wintermancy', 'foulCursing']
    },
    {
        id: 'WitchDoctor',
        name: 'Witch Doctor',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/3/33/Witch_Doctor_icon.png',
        desc: 'Zharvakko, the Witch Doctor, is a ranged intelligence hero who can take on the role of a support or a ganker. A master of voodoo curses and healing arts,'+
        'he possesses several positioning-dependent crowd control/damage spells as well as a heal that scales well into the late game.',
        talents: [
            ['+60s Death Ward Damage', '25', '+1.2% Max Health Voodoo Restoration'],
            ['+1 Maledict Tick', '20', '+100 Death Ward Attack Range'],
            ['+80 Maledict AoE', '15', '+2 Cask Bounces'],
            ['+5 Armor', '10', '+60 Damage'],
        ],
        abilities: ['paralyzingCask', 'voodooRestoration', 'maledict', 'deathWard', 'talentTree'],
        shards: ['multiCask', 'badMedicine', 'aFinePowder', 'aBigMess', 'blighted', 'mumboJumbo', 'strangeBoon', 'infectiousMalady', 'hocusPocus', 'invigoratingCharm', 'cursedAura', 'spiritBalm', 'bewitched', 'painDiffuser', 'wiseEnchantment']
    }

]

module.exports = Heroes