export const Formats: FormatList = [

    // TECA TWICH CUP
	///////////////////////////////////////////////////////////////////

    {
		section: "TECA TWICH CUP",
		column: 1,
	},
	{
		name: "[Gen 7] [TCC3] TECA TWICH CUP 3",
		timer: {
			starting: 15 * 60,
			addPerTurn: 0,
			maxPerTurn: 90,
			maxFirstTurn: 180,
			grace: 90,
			timeoutAutoChoose: true,
			dcTimerBank: false,
		},
		mod: 'gen7',
		ruleset: [
            'Obtainable Moves', 'Obtainable Abilities', 'Team Preview', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Endless Battle Clause', 'Double Item Clause',
            'OHKO Clause', 'Evasion Items Clause', 'Evasion Moves Clause', 'Max Team Size = 8', 'Default Level = 100',
            'Picked Team Size = 6', 'Z-Move Clause', 'Ability Clause = 1', 'Open Team Sheets'
		]
	},
    {
		name: "[Gen 7] [TCC3DOUBLES] DOUBLES - TECA TWICH CUP 3",

		mod: 'gen7',
        gameType: 'doubles',
		timer: {
			starting: 10 * 60,
			addPerTurn: 0,
			maxPerTurn: 60,
			maxFirstTurn: 90,
			grace: 90,
			timeoutAutoChoose: true,
			dcTimerBank: false,
		},
		ruleset: [
			'Obtainable Moves', 'Obtainable Abilities', 'Team Preview', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Double Item Clause', 'Endless Battle Clause', 
            'OHKO Clause', 'Evasion Items Clause', 'Evasion Moves Clause', 'Max Team Size = 8', 'Default Level = 100',
            'Picked Team Size = 4', 'Z-Move Clause', 'Ability Clause = 1', 'Open Team Sheets'
        ],
	},
	{
		name: "[Gen 7] [Training] TECA TWICH CUP 3",
		timer: {
			starting: 10 * 60,
			addPerTurn: 0,
			maxPerTurn: 60,
			maxFirstTurn: 180,
			grace: 90,
			timeoutAutoChoose: true,
			dcTimerBank: false,
		},
		mod: 'gen7',
		ruleset: [
            'Obtainable Moves', 'Obtainable Abilities', 'Team Preview', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Endless Battle Clause', 'Double Item Clause',
            'OHKO Clause', 'Evasion Items Clause', 'Evasion Moves Clause', 'Max Team Size = 8', 'Default Level = 100',
            'Picked Team Size = 6', 'Z-Move Clause', 'Ability Clause = 1', 'Open Team Sheets'
		]
	},
    {
		name: "[Gen 7] [Training] DOUBLES - TECA TWICH CUP 3",

		mod: 'gen7',
        gameType: 'doubles',
		timer: {
			starting: 10 * 60,
			addPerTurn: 0,
			maxPerTurn: 60,
			maxFirstTurn: 90,
			grace: 90,
			timeoutAutoChoose: true,
			dcTimerBank: false,
		},
		ruleset: [
			'Obtainable Moves', 'Obtainable Abilities', 'Team Preview', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Double Item Clause', 'Endless Battle Clause', 
            'OHKO Clause', 'Evasion Items Clause', 'Evasion Moves Clause', 'Max Team Size = 8', 'Default Level = 100',
            'Picked Team Size = 4', 'Z-Move Clause', 'Ability Clause = 1', 'Open Team Sheets'
        ],
	},
	{
		name: "[Gen 7] Multi TCC3 Battle",

		mod: 'gen7',
		gameType: 'multi',
		tournamentShow: false,
		rated: false,
		timer: {
			starting: 10 * 60,
			addPerTurn: 0,
			maxPerTurn: 60,
			maxFirstTurn: 90,
			grace: 90,
			timeoutAutoChoose: true,
			dcTimerBank: false,
		},
		ruleset: [
			'Obtainable Moves', 'Obtainable Abilities', 'Team Preview', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Double Item Clause', 'Endless Battle Clause', 
            'OHKO Clause', 'Evasion Items Clause', 'Evasion Moves Clause', 'Max Team Size = 6', 'Default Level = 100',
            'Picked Team Size = 6', 'Z-Move Clause', 'Ability Clause = 1', 'Open Team Sheets'
		],
	},
	{
		name: "[Gen 7] FULL (12v12) Multi TCC3 Battle",

		mod: 'gen7',
		gameType: 'multi',
		tournamentShow: false,
		rated: false,
		timer: {
			starting: 10 * 60,
			addPerTurn: 0,
			maxPerTurn: 60,
			maxFirstTurn: 90,
			grace: 90,
			timeoutAutoChoose: true,
			dcTimerBank: false,
		},
		ruleset: [
			'Obtainable Moves', 'Obtainable Abilities', 'Team Preview', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Double Item Clause', 'Endless Battle Clause', 
            'OHKO Clause', 'Evasion Items Clause', 'Evasion Moves Clause', 'Max Team Size = 8', 'Default Level = 100',
            'Picked Team Size = 3', 'Z-Move Clause', 'Ability Clause = 1'
		],
	},
	{
		name: "[Gen 8] [TCC2] TECA TWICH CUP 2 Singles",

		mod: 'gen8',
		ruleset: [
            'Obtainable Moves', 'Obtainable Abilities', 'Team Preview', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Endless Battle Clause', 'Double Item Clause',
            'OHKO Clause', 'Evasion Items Clause', 'Evasion Moves Clause', 'Max Team Size = 8', 'Default Level = 100',
            'Picked Team Size = 6', 'Dynamax Clause',
        ],
	},
    {
		name: "[Gen 8] [TCC2] TECA TWICH CUP 2 Doubles",

		mod: 'gen8',
        gameType: 'doubles',
		ruleset: [
			'Obtainable Moves', 'Obtainable Abilities', 'Team Preview', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Double Item Clause', 'Endless Battle Clause', 
            'OHKO Clause', 'Evasion Items Clause', 'Evasion Moves Clause', 'Max Team Size = 8', 'Default Level = 100',
            'Picked Team Size = 4', 'Dynamax Clause',
        ],
	},
];