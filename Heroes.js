const Heroes = [
    {
        id: 'Axe',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/2/23/Axe_icon.png',
        desc: 'Yurnero, the Juggernaut, is a melee agility hero whose abilities allow him to sprint into battle and recklessly devastate enemies in an impenetrable flurry of blades. \
        \nHis abilities grant invulnerability and spell immunity, turning him into an unstoppable force on a hairpin.',
        talents: [
            ['+1s Omnislash Duration', '25', '+475 health'],
            ['+160 Blade Fury DPS', '20', '+8 Armor'],
            ['+20 Attack Speed', '15', '-20 Healing Ward cooldown'],
            ['20 Movement Speed', '10', '+5 All Stats'],
        ],
        abilities: ['beserkersCall', 'battleHunger', 'counterHelix', 'cullingBlade', 'talentTree'],
        shards: ['axetrovertedPersonality', 'cardiovascularAxercises', 'comeAxeMeAQuestion', 'axeCellentCamaraderie', 'axeCitingDevelopments', 'axeQuisiteAllure', 'axeCeptionalInfluences',
            'hugePainInTheAxe', 'lowAxePectation', 'backInAxeTion', 'omnidirectionalAxeTravaganza', 'unforgettableAxePeriences', 'workplaceAxeCidents']
    },
    {
        id: 'Legion Commander',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/a/a2/Legion_Commander_icon.png',
        desc: 'Yurnero, the Juggernaut, is a melee agility hero whose abilities allow him to sprint into battle and recklessly devastate enemies in an impenetrable flurry of blades. \
        \nHis abilities grant invulnerability and spell immunity, turning him into an unstoppable force on a hairpin.',
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
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/b/ba/Magnus_icon.png',
        desc: 'Yurnero, the Juggernaut, is a melee agility hero whose abilities allow him to sprint into battle and recklessly devastate enemies in an impenetrable flurry of blades. \
        \nHis abilities grant invulnerability and spell immunity, turning him into an unstoppable force on a hairpin.',
        talents: [
            ['+1s Omnislash Duration', '25', '+475 health'],
            ['+160 Blade Fury DPS', '20', '+8 Armor'],
            ['+20 Attack Speed', '15', '-20 Healing Ward cooldown'],
            ['20 Movement Speed', '10', '+5 All Stats'],
        ],
        abilities: ['shockwave', 'empower', 'skewer', 'reversePolarity', 'talentTree'],
        shards: ['triwave', 'shockAndAwe', 'shockarang', 'empowerment', 'vampower', 'tooManyWaves', 'bulldoze', 'spitTake', 'blastOff', 'reverseReversePolarity', 'dematerialization', 'extraPolarity']
    },
    {
        id: 'Mars',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/9/9d/Mars_icon.png',
        desc: 'Yurnero, the Juggernaut, is a melee agility hero whose abilities allow him to sprint into battle and recklessly devastate enemies in an impenetrable flurry of blades. \
        \nHis abilities grant invulnerability and spell immunity, turning him into an unstoppable force on a hairpin.',
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
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/e/e2/Omniknight_icon.png',
        desc: 'Yurnero, the Juggernaut, is a melee agility hero whose abilities allow him to sprint into battle and recklessly devastate enemies in an impenetrable flurry of blades. \
        \nHis abilities grant invulnerability and spell immunity, turning him into an unstoppable force on a hairpin.',
        talents: [
            ['+1s Omnislash Duration', '25', '+475 health'],
            ['+160 Blade Fury DPS', '20', '+8 Armor'],
            ['+20 Attack Speed', '15', '-20 Healing Ward cooldown'],
            ['20 Movement Speed', '10', '+5 All Stats'],
        ],
        abilities: ['purification', 'heavenlyGrace', 'degenAura', 'guardianAngel', 'talentTree'],
        shards: ['holyPlace', 'benevolence', 'blessedCure', 'heavenlyPurification', 'zeal', 'heavenlyBarrier', 'judgement', 'righteousPath', 'condemnation', 'absolution', 'healLifeAngel', 'angelicFlight', 'personalSavior']
    },
    {
        id: 'Snapfire',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/7/7a/Snapfire_icon.png',
        desc: 'Yurnero, the Juggernaut, is a melee agility hero whose abilities allow him to sprint into battle and recklessly devastate enemies in an impenetrable flurry of blades. \
        \nHis abilities grant invulnerability and spell immunity, turning him into an unstoppable force on a hairpin.',
        talents: [
            ['+1s Omnislash Duration', '25', '+475 health'],
            ['+160 Blade Fury DPS', '20', '+8 Armor'],
            ['+20 Attack Speed', '15', '-20 Healing Ward cooldown'],
            ['20 Movement Speed', '10', '+5 All Stats'],
        ],
        abilities: ['scatterblast', 'firesnapCookie', 'lilShredder', 'mortimerKisses', 'talentTree'],
        shards: ['doubleBarreled', 'stoppingPower', 'sawedOff', 'bakerSDozen', 'raisinFiresnaps', 'freshlyBaked', 'explosiveShells', 'lilFriendlyShredder', 'ricochet', 'fragmentsOfKisses', 'autocannon', 'safetyFirst']
    },
    {
        id: 'Tidehunter',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/d/d5/Tidehunter_icon.png',
        desc: 'Yurnero, the Juggernaut, is a melee agility hero whose abilities allow him to sprint into battle and recklessly devastate enemies in an impenetrable flurry of blades. \
        \nHis abilities grant invulnerability and spell immunity, turning him into an unstoppable force on a hairpin.',
        talents: [
            ['+1s Omnislash Duration', '25', '+475 health'],
            ['+160 Blade Fury DPS', '20', '+8 Armor'],
            ['+20 Attack Speed', '15', '-20 Healing Ward cooldown'],
            ['20 Movement Speed', '10', '+5 All Stats'],
        ],
        abilities: ['gush', 'krakenShell', 'anchorSmash', 'ravage', 'talentTree'],
        shards: ['saltWaterFaceWash', 'tentacularFondling', 'togetherUntoTheDepth', 'anchorWhack', 'fishManKarate', 'safeHarbours', 'lovecraftianRomance', 'maelrawnSlament', 'razorShore', 'redSeaSclamour', 'capNCrunch']
    },
    {
        id: 'Tusk',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/c/ce/Tusk_icon.png',
        desc: 'Yurnero, the Juggernaut, is a melee agility hero whose abilities allow him to sprint into battle and recklessly devastate enemies in an impenetrable flurry of blades. \
        \nHis abilities grant invulnerability and spell immunity, turning him into an unstoppable force on a hairpin.',
        talents: [
            ['+1s Omnislash Duration', '25', '+475 health'],
            ['+160 Blade Fury DPS', '20', '+8 Armor'],
            ['+20 Attack Speed', '15', '-20 Healing Ward cooldown'],
            ['20 Movement Speed', '10', '+5 All Stats'],
        ],
        abilities: ['iceShards', 'snowball', 'tagTeam', 'walrusPunch', 'talentTree'],
        shards: ['icebreaker', 'deepFreeze', 'iceShardExtension', 'snowFort', 'snowballBlast', 'globalCooling', 'coolParty', 'tagYoureIn', 'everybodyTagNow', 'andAnotherPunch', 'tuskyDuskie', 'walrusWallop', 'sigilFromCobalt', 'goldenEye']
    },
    {
        id: 'Hoodwink',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/c/c9/Hoodwink_icon.png',
        desc: 'Yurnero, the Juggernaut, is a melee agility hero whose abilities allow him to sprint into battle and recklessly devastate enemies in an impenetrable flurry of blades. \
        \nHis abilities grant invulnerability and spell immunity, turning him into an unstoppable force on a hairpin.',
        talents: [
            ['+1s Omnislash Duration', '25', '+475 health'],
            ['+160 Blade Fury DPS', '20', '+8 Armor'],
            ['+20 Attack Speed', '15', '-20 Healing Ward cooldown'],
            ['20 Movement Speed', '10', '+5 All Stats'],
        ],
        abilities: ['acornShot', 'bushwhack', 'scurry', 'sharpshooter', 'talentTree'],
        shards: ['aintNoFortunateOnes', 'wookieDoctrine', 'lookAtItGo', 'canadianHeritage', 'andISpeakForTheTrees', 'getNutted', 'smeltOfElderBerries', 'theresAMouseWithABowOverThere', 'overTheRiverAndThroughTheWoods', 'weveGottaGetOutOfThisPlace', 'sapperOfTomokan']
    },
    {
        id: 'Juggernaut',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/0/03/Juggernaut_icon.png',
        desc: 'Yurnero, the Juggernaut, is a melee agility hero whose abilities allow him to sprint into battle and recklessly devastate enemies in an impenetrable flurry of blades. \
        \nHis abilities grant invulnerability and spell immunity, turning him into an unstoppable force on a hairpin.',
        talents: [
            ['+1s Omnislash Duration', '25', '+475 health'],
            ['+160 Blade Fury DPS', '20', '+8 Armor'],
            ['+20 Attack Speed', '15', '-20 Healing Ward cooldown'],
            ['20 Movement Speed', '10', '+5 All Stats'],
        ],
        abilities: ['bladeFury', 'healingWard', 'bladeDance', 'omnislash', 'talentTree'],
        shards: ['studiedTheBlade', 'maskOfLeeroy', 'helicopter', 'letItRip', 'meatSpin', 'wrathOfGaia', 'timmothyTheBrave', 'badOmen', 'passTheGrass', 'armyOfTheIsle']
    },
    {
        id: 'Phantom Assasin',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/8/8e/Phantom_Assassin_icon.png',
        desc: 'Yurnero, the Juggernaut, is a melee agility hero whose abilities allow him to sprint into battle and recklessly devastate enemies in an impenetrable flurry of blades. \
        \nHis abilities grant invulnerability and spell immunity, turning him into an unstoppable force on a hairpin.',
        talents: [
            ['+1s Omnislash Duration', '25', '+475 health'],
            ['+160 Blade Fury DPS', '20', '+8 Armor'],
            ['+20 Attack Speed', '15', '-20 Healing Ward cooldown'],
            ['20 Movement Speed', '10', '+5 All Stats'],
        ],
        abilities: ['stiflingDagger', 'phantomStrike', 'blur', 'coupDeGrace', 'talentTree'],
        shards: ['aViewToAKill', 'quantumOfSolace', 'spectre', 'forYourEyesOnly', 'dieAnotherDay', 'ohMyGodSheKilledKenny', 'liveAndLetDie', 'theWorldIsNotEnough', 'licenseToKill', 'theLivingDaylights']
    },
    {
        id: 'Shadow Fiend',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/3/36/Shadow_Fiend_icon.png',
        desc: 'Yurnero, the Juggernaut, is a melee agility hero whose abilities allow him to sprint into battle and recklessly devastate enemies in an impenetrable flurry of blades. \
        \nHis abilities grant invulnerability and spell immunity, turning him into an unstoppable force on a hairpin.',
        talents: [
            ['+1s Omnislash Duration', '25', '+475 health'],
            ['+160 Blade Fury DPS', '20', '+8 Armor'],
            ['+20 Attack Speed', '15', '-20 Healing Ward cooldown'],
            ['20 Movement Speed', '10', '+5 All Stats'],
        ],
        abilities: ['shadowraze', 'necromastery', 'presenceOfTheDarkLord', 'requiemOfSouls', 'talentTree'],
        shards: ['oathboundRevenant', 'deathOfNight', 'happyHallowfiend', 'gluttonOfTheAbyss', 'requiemForADream', 'injusticeForAll', 'ozkavoshHospitality', 'conductorOfTheHellwardExpress', 'favorsOfRistful', 'soulOfAPoet']
    },
    {
        id: 'Slark',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/a/aa/Slark_icon.png',
        desc: 'Yurnero, the Juggernaut, is a melee agility hero whose abilities allow him to sprint into battle and recklessly devastate enemies in an impenetrable flurry of blades. \
        \nHis abilities grant invulnerability and spell immunity, turning him into an unstoppable force on a hairpin.',
        talents: [
            ['+1s Omnislash Duration', '25', '+475 health'],
            ['+160 Blade Fury DPS', '20', '+8 Armor'],
            ['+20 Attack Speed', '15', '-20 Healing Ward cooldown'],
            ['20 Movement Speed', '10', '+5 All Stats'],
        ],
        abilities: ['darkPact', 'pounce', 'essenceShift', 'shadowDance', 'talentTree'],
        shards: ['brokenContract', 'smellsFishy', 'brackishBath', 'goneFishing', 'littleSkippers', 'fishFood', 'apexPredator', 'luckyCatch', 'seaSchool', 'reefRage', 'deepSix', 'hookLineAndSinker']
    },
    {
        id: 'Sniper',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/5/51/Sniper_icon.png',
        desc: 'Yurnero, the Juggernaut, is a melee agility hero whose abilities allow him to sprint into battle and recklessly devastate enemies in an impenetrable flurry of blades. \
        \nHis abilities grant invulnerability and spell immunity, turning him into an unstoppable force on a hairpin.',
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
        id: 'Templar Assasin',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/9/9c/Templar_Assassin_icon.png',
        desc: 'Yurnero, the Juggernaut, is a melee agility hero whose abilities allow him to sprint into battle and recklessly devastate enemies in an impenetrable flurry of blades. \
        \nHis abilities grant invulnerability and spell immunity, turning him into an unstoppable force on a hairpin.',
        talents: [
            ['+1s Omnislash Duration', '25', '+475 health'],
            ['+160 Blade Fury DPS', '20', '+8 Armor'],
            ['+20 Attack Speed', '15', '-20 Healing Ward cooldown'],
            ['20 Movement Speed', '10', '+5 All Stats'],
        ],
        abilities: ['refraction', 'meld', 'psiBlades', 'psionicTrap', 'talentTree'],
        shards: ['absorption', 'smokeAndMirrors', 'glassShield', 'vanishingSlice', 'celestialStep', 'latentCharge', 'psychicBurst', 'covertDevices', 'shadedEcho', 'resurgence', 'veiledCuts']
    },
    {
        id: 'Ursa',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/4/40/Ursa_icon.png',
        desc: 'Yurnero, the Juggernaut, is a melee agility hero whose abilities allow him to sprint into battle and recklessly devastate enemies in an impenetrable flurry of blades. \
        \nHis abilities grant invulnerability and spell immunity, turning him into an unstoppable force on a hairpin.',
        talents: [
            ['+1s Omnislash Duration', '25', '+475 health'],
            ['+160 Blade Fury DPS', '20', '+8 Armor'],
            ['+20 Attack Speed', '15', '-20 Healing Ward cooldown'],
            ['20 Movement Speed', '10', '+5 All Stats'],
        ],
        abilities: ['earthshock', 'overpower', 'furySwipes', 'Enrage', 'talentTree'],
        shards: ['concealed', 'cannonball', 'diggingIn', 'relentless', 'tornToShreds', 'elusive', 'reckless', 'laceratedArmor', 'rend', 'ursaMinor', 'protectTheCubs', 'intimidatingRoar', 'ferocity', 'rampage']
    },
    {
        id: 'Venomancer',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/2/25/Venomancer_icon.png',
        desc: 'Yurnero, the Juggernaut, is a melee agility hero whose abilities allow him to sprint into battle and recklessly devastate enemies in an impenetrable flurry of blades. \
        \nHis abilities grant invulnerability and spell immunity, turning him into an unstoppable force on a hairpin.',
        talents: [
            ['+1s Omnislash Duration', '25', '+475 health'],
            ['+160 Blade Fury DPS', '20', '+8 Armor'],
            ['+20 Attack Speed', '15', '-20 Healing Ward cooldown'],
            ['20 Movement Speed', '10', '+5 All Stats'],
        ],
        abilities: ['venomousGale', 'poisonSting', 'plagueWard', 'poisonNova', 'talentTree'],
        shards: ['herdImmunity', 'globalEpidemic', 'rottenDelicacy', 'fertileSoil', 'airborneParasites', 'seasonalAllergy', 'bananamancer', 'terrorOfJidiIsles', 'poisonSnap', 'venomousDischarge', 'contagion']
    },
    {
        id: 'Viper',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/5/5f/Viper_icon.png',
        desc: 'Viper, the Netherdrake, is a ranged agility hero who functions as an excellent nuker, ganker and carry due to his assortment of low-cooldown spells and debilitating attacks. \
        \nHis modus operandi is to whittle away his opponents\' vitality over long stretches of time while they fail to inflict fatal damage.',
        talents: [
            ['+1s Omnislash Duration', '25', '+475 health'],
            ['+160 Blade Fury DPS', '20', '+8 Armor'],
            ['+20 Attack Speed', '15', '-20 Healing Ward cooldown'],
            ['20 Movement Speed', '10', '+5 All Stats'],
        ],
        abilities: ['poisonAttack', 'nethertoxin', 'corrosiveSkin', 'viperStrike', 'talentTree'],
        shards: ['nethertoxinCharges', 'toxicOsmosis', 'lingeringMiasma', 'exudate', 'flyIntoARage', 'sheddingSkin', 'antitoxin', 'snakebite', 'contamination']
    },
    {
        id: 'Weaver',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/0/09/Weaver_icon.png',
        desc: 'Yurnero, the Juggernaut, is a melee agility hero whose abilities allow him to sprint into battle and recklessly devastate enemies in an impenetrable flurry of blades. \
        \nHis abilities grant invulnerability and spell immunity, turning him into an unstoppable force on a hairpin.',
        talents: [
            ['+1s Omnislash Duration', '25', '+475 health'],
            ['+160 Blade Fury DPS', '20', '+8 Armor'],
            ['+20 Attack Speed', '15', '-20 Healing Ward cooldown'],
            ['20 Movement Speed', '10', '+5 All Stats'],
        ],
        abilities: ['theSwarm', 'shukuchi', 'geminateAttack', 'timeLapse', 'talentTree'],
        shards: ['bugYourFriends', 'bugBugBoom', 'hivemind', 'realityRips', 'beneficialPassing', 'blacklist', 'shukuchiSwarm', 'manyThreads', 'swarmTheBeaches', 'giveSomeTakeSome', 'backToBasics', 'allSWellThatStartsWell', 'explosiveReality']
    },
    {
        id: 'Disruptor',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/9/97/Disruptor_icon.png',
        desc: 'Yurnero, the Juggernaut, is a melee agility hero whose abilities allow him to sprint into battle and recklessly devastate enemies in an impenetrable flurry of blades. \
        \nHis abilities grant invulnerability and spell immunity, turning him into an unstoppable force on a hairpin.',
        talents: [
            ['+1s Omnislash Duration', '25', '+475 health'],
            ['+160 Blade Fury DPS', '20', '+8 Armor'],
            ['+20 Attack Speed', '15', '-20 Healing Ward cooldown'],
            ['20 Movement Speed', '10', '+5 All Stats'],
        ],
        abilities: ['thunderStrike', 'glimpse', 'kineticField', 'staticStorm', 'talentTree'],
        shards: ['cloudCover', 'manaStorm', 'criticalStrike', 'loadedWeapon', 'blastInThePast', 'shockingTravel', 'electricFence', 'areaOfBliss', 'stayInTheZone', 'ringCeption', 'perfectStorm', 'fieldOfDreams', 'pacificStorm']
    },
    {
        id: 'Jakiro',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/2/2f/Jakiro_icon.png',
        desc: 'Yurnero, the Juggernaut, is a melee agility hero whose abilities allow him to sprint into battle and recklessly devastate enemies in an impenetrable flurry of blades. \
        \nHis abilities grant invulnerability and spell immunity, turning him into an unstoppable force on a hairpin.',
        talents: [
            ['+1s Omnislash Duration', '25', '+475 health'],
            ['+160 Blade Fury DPS', '20', '+8 Armor'],
            ['+20 Attack Speed', '15', '-20 Healing Ward cooldown'],
            ['20 Movement Speed', '10', '+5 All Stats'],
        ],
        abilities: ['dualBreath', 'icePath', 'liquidFire', 'macropyre', 'talentTree'],
        shards: ['crystalizedVeins', 'tacobellianIndigestion', 'throughTheFireAndFlames', 'iceSolationProtocol', 'letItGo', 'onThinIce', 'vanillaIce', 'drachenFammenwerfer', 'moltenBloodTransfusion', 'warmPersonality', 'darlingItsColdOutside', 'festivityOfTheBurningMan', 'lavatherapy', 'aSongOfFireAndMoreFire']

    },
    {
        id: 'Ogre-Magi',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/e/e0/Ogre_Magi_icon.png',
        desc: 'Yurnero, the Juggernaut, is a melee agility hero whose abilities allow him to sprint into battle and recklessly devastate enemies in an impenetrable flurry of blades. \
        \nHis abilities grant invulnerability and spell immunity, turning him into an unstoppable force on a hairpin.',
        talents: [
            ['+1s Omnislash Duration', '25', '+475 health'],
            ['+160 Blade Fury DPS', '20', '+8 Armor'],
            ['+20 Attack Speed', '15', '-20 Healing Ward cooldown'],
            ['20 Movement Speed', '10', '+5 All Stats'],
        ],
        abilities: ['fireblast', 'ignite', 'bloodlust', 'multicast', 'talentTree'],
        shards: ['getOuttaMySwamp', 'concussionTherapy', 'ogreIsLoveOgreIsLife', 'tooHotToHandle', 'hymnOfTheGiants', 'casinoRoyale', 'itsAllOgreNow', 'thatllDoDonkeyThatLlDo']

    },
    {
        id: 'Queen of Pain',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/a/a1/Queen_of_Pain_icon.png',
        desc: 'Yurnero, the Juggernaut, is a melee agility hero whose abilities allow him to sprint into battle and recklessly devastate enemies in an impenetrable flurry of blades. \
        \nHis abilities grant invulnerability and spell immunity, turning him into an unstoppable force on a hairpin.',
        talents: [
            ['+1s Omnislash Duration', '25', '+475 health'],
            ['+160 Blade Fury DPS', '20', '+8 Armor'],
            ['+20 Attack Speed', '15', '-20 Healing Ward cooldown'],
            ['20 Movement Speed', '10', '+5 All Stats'],
        ],
        abilities: ['shadowStrike', 'blink', 'screamOfPain', 'sonicWave', 'talentTree'],
        shards: ['stingingLash', 'spreadThePain', 'delightAndTorment', 'hauntingEchoes', 'ferventAssault', 'hallOfPain', 'rapturousCry', 'resoundingWail', 'invigoratingShriek', 'thunderingResonance', 'sonicTsunami', 'discordantForce']
    },
    {
        id: 'Windranger',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/6/60/Windranger_icon.png',
        desc: 'Yurnero, the Juggernaut, is a melee agility hero whose abilities allow him to sprint into battle and recklessly devastate enemies in an impenetrable flurry of blades. \
        \nHis abilities grant invulnerability and spell immunity, turning him into an unstoppable force on a hairpin.',
        talents: [
            ['+1s Omnislash Duration', '25', '+475 health'],
            ['+160 Blade Fury DPS', '20', '+8 Armor'],
            ['+20 Attack Speed', '15', '-20 Healing Ward cooldown'],
            ['20 Movement Speed', '10', '+5 All Stats'],
        ],
        abilities: ['shackleshot', 'powershot', 'windrun', 'focusFire', 'talentTree'],
        shards: ['fairWeatherFriends', 'windwardHaze', 'kentuckyWindage', 'autumnChill', 'sweepingGale', 'semiautomaticAssaultArchery', 'picnicInThePark', 'feelTheBreeze', 'arrowRain']
    },
    {
        id: 'Winter Wyvern',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/4/4a/Winter_Wyvern_icon.png',
        desc: 'Yurnero, the Juggernaut, is a melee agility hero whose abilities allow him to sprint into battle and recklessly devastate enemies in an impenetrable flurry of blades. \
        \nHis abilities grant invulnerability and spell immunity, turning him into an unstoppable force on a hairpin.',
        talents: [
            ['+1s Omnislash Duration', '25', '+475 health'],
            ['+160 Blade Fury DPS', '20', '+8 Armor'],
            ['+20 Attack Speed', '15', '-20 Healing Ward cooldown'],
            ['20 Movement Speed', '10', '+5 All Stats'],
        ],
        abilities: ['arcticBurn', 'splinterBlast', 'coldEmbrace', 'wintersCurse', 'talentTree'],
        shards: ['secondDegreeBurn', 'arcticSplash', 'wintersBreath', 'coolAndCollected', 'chilledToTheBone', 'soothingBreeze', 'empoweredEmbrace', 'iceColdKilling', 'diamondize', 'sharingIsScaring', 'wintermancy', 'foulCursing']
    },
    {
        id: 'Witch Doctor',
        image: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/3/33/Witch_Doctor_icon.png',
        desc: 'Yurnero, the Juggernaut, is a melee agility hero whose abilities allow him to sprint into battle and recklessly devastate enemies in an impenetrable flurry of blades. \
        \nHis abilities grant invulnerability and spell immunity, turning him into an unstoppable force on a hairpin.',
        talents: [
            ['+1s Omnislash Duration', '25', '+475 health'],
            ['+160 Blade Fury DPS', '20', '+8 Armor'],
            ['+20 Attack Speed', '15', '-20 Healing Ward cooldown'],
            ['20 Movement Speed', '10', '+5 All Stats'],
        ],
        abilities: ['paralyzingCask', 'voodooRestoration', 'maledict', 'deathWard', 'talentTree'],
        shards: ['multiCask', 'badMedicine', 'aFinePowder', 'aBigMess', 'blighted', 'mumboJumbo', 'strangeBoon', 'infectiousMalady', 'hocusPocus', 'invigoratingCharm', 'cursedAura', 'spiritBalm', 'bewitched', 'painDiffuser', 'wiseEnchantment']
    }

]

module.exports = Heroes