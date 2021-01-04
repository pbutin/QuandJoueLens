//ligue 1 id: 2015
//http://api.football-data.org/v2/competitions/2015/teams

//lens id : 546

// https://pqina.nl/flip/#presets


function requestData() {
	// $.ajax({
	// 	url: 'https://quand-joue-lens.herokuapp.com/lensData',
	// 	dataType: 'json',
	// 	type: 'GET',
	// 	success: function (response) {
		var response = {
  "standing": {
    "filters": {},
    "competition": {
      "id": 2015,
      "area": {
        "id": 2081,
        "name": "France"
      },
      "name": "Ligue 1",
      "code": "FL1",
      "plan": "TIER_ONE",
      "lastUpdated": "2020-12-24T01:45:04Z"
    },
    "season": {
      "id": 596,
      "startDate": "2020-08-22",
      "endDate": "2021-05-23",
      "currentMatchday": 18,
      "winner": null
    },
    "standings": [
      {
        "stage": "REGULAR_SEASON",
        "type": "TOTAL",
        "group": null,
        "table": [
          {
            "position": 1,
            "team": {
              "id": 523,
              "name": "Olympique Lyonnais",
              "crestUrl": "https://crests.football-data.org/523.svg"
            },
            "playedGames": 17,
            "form": "W,W,D,W,W",
            "won": 10,
            "draw": 6,
            "lost": 1,
            "points": 36,
            "goalsFor": 34,
            "goalsAgainst": 14,
            "goalDifference": 20
          },
          {
            "position": 2,
            "team": {
              "id": 521,
              "name": "Lille OSC",
              "crestUrl": "https://crests.football-data.org/521.svg"
            },
            "playedGames": 17,
            "form": "W,D,W,W,W",
            "won": 10,
            "draw": 6,
            "lost": 1,
            "points": 36,
            "goalsFor": 31,
            "goalsAgainst": 12,
            "goalDifference": 19
          },
          {
            "position": 3,
            "team": {
              "id": 524,
              "name": "Paris Saint-Germain FC",
              "crestUrl": "https://crests.football-data.org/524.svg"
            },
            "playedGames": 17,
            "form": "W,D,W,L,W",
            "won": 11,
            "draw": 2,
            "lost": 4,
            "points": 35,
            "goalsFor": 39,
            "goalsAgainst": 10,
            "goalDifference": 29
          },
          {
            "position": 4,
            "team": {
              "id": 529,
              "name": "Stade Rennais FC 1901",
              "crestUrl": "https://crests.football-data.org/529.svg"
            },
            "playedGames": 17,
            "form": "W,W,W,W,L",
            "won": 9,
            "draw": 4,
            "lost": 4,
            "points": 31,
            "goalsFor": 26,
            "goalsAgainst": 19,
            "goalDifference": 7
          },
          {
            "position": 5,
            "team": {
              "id": 516,
              "name": "Olympique de Marseille",
              "crestUrl": "https://crests.football-data.org/516.svg"
            },
            "playedGames": 15,
            "form": "L,D,L,W,W",
            "won": 8,
            "draw": 4,
            "lost": 3,
            "points": 28,
            "goalsFor": 22,
            "goalsAgainst": 15,
            "goalDifference": 7
          },
          {
            "position": 6,
            "team": {
              "id": 548,
              "name": "AS Monaco FC",
              "crestUrl": "https://crests.football-data.org/548.svg"
            },
            "playedGames": 17,
            "form": "D,W,L,L,L",
            "won": 8,
            "draw": 3,
            "lost": 6,
            "points": 27,
            "goalsFor": 28,
            "goalsAgainst": 25,
            "goalDifference": 3
          },
          {
            "position": 7,
            "team": {
              "id": 546,
              "name": "Racing Club de Lens",
              "crestUrl": "https://crests.football-data.org/546.svg"
            },
            "playedGames": 16,
            "form": "W,L,W,L,W",
            "won": 8,
            "draw": 3,
            "lost": 5,
            "points": 27,
            "goalsFor": 26,
            "goalsAgainst": 24,
            "goalDifference": 2
          },
          {
            "position": 8,
            "team": {
              "id": 518,
              "name": "Montpellier HSC",
              "crestUrl": "https://crests.football-data.org/518.svg"
            },
            "playedGames": 17,
            "form": "L,D,L,W,L",
            "won": 8,
            "draw": 3,
            "lost": 6,
            "points": 27,
            "goalsFor": 29,
            "goalsAgainst": 28,
            "goalDifference": 1
          },
          {
            "position": 9,
            "team": {
              "id": 532,
              "name": "Angers SCO",
              "crestUrl": "https://crests.football-data.org/532.svg"
            },
            "playedGames": 17,
            "form": "W,D,L,D,W",
            "won": 8,
            "draw": 3,
            "lost": 6,
            "points": 27,
            "goalsFor": 23,
            "goalsAgainst": 26,
            "goalDifference": -3
          },
          {
            "position": 10,
            "team": {
              "id": 545,
              "name": "FC Metz",
              "crestUrl": "https://crests.football-data.org/545.svg"
            },
            "playedGames": 17,
            "form": "L,W,W,D,L",
            "won": 6,
            "draw": 5,
            "lost": 6,
            "points": 23,
            "goalsFor": 19,
            "goalsAgainst": 17,
            "goalDifference": 2
          },
          {
            "position": 11,
            "team": {
              "id": 512,
              "name": "Stade Brestois 29",
              "crestUrl": "https://crests.football-data.org/512.svg"
            },
            "playedGames": 17,
            "form": "L,D,D,W,L",
            "won": 7,
            "draw": 2,
            "lost": 8,
            "points": 23,
            "goalsFor": 28,
            "goalsAgainst": 31,
            "goalDifference": -3
          },
          {
            "position": 12,
            "team": {
              "id": 522,
              "name": "OGC Nice",
              "crestUrl": "https://crests.football-data.org/522.svg"
            },
            "playedGames": 16,
            "form": "D,L,W,L,D",
            "won": 6,
            "draw": 4,
            "lost": 6,
            "points": 22,
            "goalsFor": 21,
            "goalsAgainst": 22,
            "goalDifference": -1
          },
          {
            "position": 13,
            "team": {
              "id": 526,
              "name": "FC Girondins de Bordeaux",
              "crestUrl": "https://crests.football-data.org/526.svg"
            },
            "playedGames": 17,
            "form": "L,W,L,L,W",
            "won": 6,
            "draw": 4,
            "lost": 7,
            "points": 22,
            "goalsFor": 18,
            "goalsAgainst": 20,
            "goalDifference": -2
          },
          {
            "position": 14,
            "team": {
              "id": 527,
              "name": "AS Saint-Étienne",
              "crestUrl": "https://crests.football-data.org/527.svg"
            },
            "playedGames": 17,
            "form": "D,D,W,D,D",
            "won": 4,
            "draw": 6,
            "lost": 7,
            "points": 18,
            "goalsFor": 18,
            "goalsAgainst": 25,
            "goalDifference": -7
          },
          {
            "position": 15,
            "team": {
              "id": 547,
              "name": "Stade de Reims",
              "crestUrl": "https://crests.football-data.org/547.svg"
            },
            "playedGames": 17,
            "form": "W,D,W,L,D",
            "won": 4,
            "draw": 5,
            "lost": 8,
            "points": 17,
            "goalsFor": 24,
            "goalsAgainst": 28,
            "goalDifference": -4
          },
          {
            "position": 16,
            "team": {
              "id": 543,
              "name": "FC Nantes",
              "crestUrl": "https://crests.football-data.org/543.svg"
            },
            "playedGames": 17,
            "form": "L,D,L,D,L",
            "won": 3,
            "draw": 6,
            "lost": 8,
            "points": 15,
            "goalsFor": 18,
            "goalsAgainst": 30,
            "goalDifference": -12
          },
          {
            "position": 17,
            "team": {
              "id": 576,
              "name": "RC Strasbourg Alsace",
              "crestUrl": "https://crests.football-data.org/576.svg"
            },
            "playedGames": 17,
            "form": "L,L,W,D,W",
            "won": 4,
            "draw": 2,
            "lost": 11,
            "points": 14,
            "goalsFor": 22,
            "goalsAgainst": 32,
            "goalDifference": -10
          },
          {
            "position": 18,
            "team": {
              "id": 525,
              "name": "FC Lorient",
              "crestUrl": "https://crests.football-data.org/525.svg"
            },
            "playedGames": 17,
            "form": "D,L,L,W,L",
            "won": 3,
            "draw": 3,
            "lost": 11,
            "points": 12,
            "goalsFor": 17,
            "goalsAgainst": 31,
            "goalDifference": -14
          },
          {
            "position": 19,
            "team": {
              "id": 528,
              "name": "Dijon Football Côte d'Or",
              "crestUrl": "https://crests.football-data.org/528.svg"
            },
            "playedGames": 17,
            "form": "W,L,L,D,D",
            "won": 2,
            "draw": 6,
            "lost": 9,
            "points": 12,
            "goalsFor": 12,
            "goalsAgainst": 26,
            "goalDifference": -14
          },
          {
            "position": 20,
            "team": {
              "id": 556,
              "name": "Nîmes Olympique",
              "crestUrl": "https://crests.football-data.org/556.svg"
            },
            "playedGames": 17,
            "form": "L,D,L,L,L",
            "won": 3,
            "draw": 3,
            "lost": 11,
            "points": 12,
            "goalsFor": 14,
            "goalsAgainst": 34,
            "goalDifference": -20
          }
        ]
      },
      {
        "stage": "REGULAR_SEASON",
        "type": "HOME",
        "group": null,
        "table": [
          {
            "position": 1,
            "team": {
              "id": 521,
              "name": "Lille OSC",
              "crestUrl": "https://crests.football-data.org/521.svg"
            },
            "playedGames": 9,
            "form": null,
            "won": 6,
            "draw": 3,
            "lost": 0,
            "points": 21,
            "goalsFor": 17,
            "goalsAgainst": 4,
            "goalDifference": 13
          },
          {
            "position": 2,
            "team": {
              "id": 524,
              "name": "Paris Saint-Germain FC",
              "crestUrl": "https://crests.football-data.org/524.svg"
            },
            "playedGames": 9,
            "form": null,
            "won": 6,
            "draw": 1,
            "lost": 2,
            "points": 19,
            "goalsFor": 22,
            "goalsAgainst": 5,
            "goalDifference": 17
          },
          {
            "position": 3,
            "team": {
              "id": 523,
              "name": "Olympique Lyonnais",
              "crestUrl": "https://crests.football-data.org/523.svg"
            },
            "playedGames": 8,
            "form": null,
            "won": 5,
            "draw": 3,
            "lost": 0,
            "points": 18,
            "goalsFor": 19,
            "goalsAgainst": 6,
            "goalDifference": 13
          },
          {
            "position": 4,
            "team": {
              "id": 548,
              "name": "AS Monaco FC",
              "crestUrl": "https://crests.football-data.org/548.svg"
            },
            "playedGames": 9,
            "form": null,
            "won": 5,
            "draw": 3,
            "lost": 1,
            "points": 18,
            "goalsFor": 20,
            "goalsAgainst": 13,
            "goalDifference": 7
          },
          {
            "position": 5,
            "team": {
              "id": 512,
              "name": "Stade Brestois 29",
              "crestUrl": "https://crests.football-data.org/512.svg"
            },
            "playedGames": 8,
            "form": null,
            "won": 5,
            "draw": 1,
            "lost": 2,
            "points": 16,
            "goalsFor": 17,
            "goalsAgainst": 14,
            "goalDifference": 3
          },
          {
            "position": 6,
            "team": {
              "id": 529,
              "name": "Stade Rennais FC 1901",
              "crestUrl": "https://crests.football-data.org/529.svg"
            },
            "playedGames": 9,
            "form": null,
            "won": 5,
            "draw": 1,
            "lost": 3,
            "points": 16,
            "goalsFor": 12,
            "goalsAgainst": 11,
            "goalDifference": 1
          },
          {
            "position": 7,
            "team": {
              "id": 546,
              "name": "Racing Club de Lens",
              "crestUrl": "https://crests.football-data.org/546.svg"
            },
            "playedGames": 8,
            "form": null,
            "won": 4,
            "draw": 2,
            "lost": 2,
            "points": 14,
            "goalsFor": 15,
            "goalsAgainst": 13,
            "goalDifference": 2
          },
          {
            "position": 8,
            "team": {
              "id": 545,
              "name": "FC Metz",
              "crestUrl": "https://crests.football-data.org/545.svg"
            },
            "playedGames": 8,
            "form": null,
            "won": 4,
            "draw": 1,
            "lost": 3,
            "points": 13,
            "goalsFor": 11,
            "goalsAgainst": 9,
            "goalDifference": 2
          },
          {
            "position": 9,
            "team": {
              "id": 532,
              "name": "Angers SCO",
              "crestUrl": "https://crests.football-data.org/532.svg"
            },
            "playedGames": 9,
            "form": null,
            "won": 4,
            "draw": 1,
            "lost": 4,
            "points": 13,
            "goalsFor": 9,
            "goalsAgainst": 12,
            "goalDifference": -3
          },
          {
            "position": 10,
            "team": {
              "id": 516,
              "name": "Olympique de Marseille",
              "crestUrl": "https://crests.football-data.org/516.svg"
            },
            "playedGames": 7,
            "form": null,
            "won": 3,
            "draw": 3,
            "lost": 1,
            "points": 12,
            "goalsFor": 11,
            "goalsAgainst": 8,
            "goalDifference": 3
          },
          {
            "position": 11,
            "team": {
              "id": 526,
              "name": "FC Girondins de Bordeaux",
              "crestUrl": "https://crests.football-data.org/526.svg"
            },
            "playedGames": 9,
            "form": null,
            "won": 3,
            "draw": 3,
            "lost": 3,
            "points": 12,
            "goalsFor": 8,
            "goalsAgainst": 7,
            "goalDifference": 1
          },
          {
            "position": 12,
            "team": {
              "id": 518,
              "name": "Montpellier HSC",
              "crestUrl": "https://crests.football-data.org/518.svg"
            },
            "playedGames": 9,
            "form": null,
            "won": 4,
            "draw": 0,
            "lost": 5,
            "points": 12,
            "goalsFor": 16,
            "goalsAgainst": 19,
            "goalDifference": -3
          },
          {
            "position": 13,
            "team": {
              "id": 543,
              "name": "FC Nantes",
              "crestUrl": "https://crests.football-data.org/543.svg"
            },
            "playedGames": 8,
            "form": null,
            "won": 2,
            "draw": 4,
            "lost": 2,
            "points": 10,
            "goalsFor": 10,
            "goalsAgainst": 14,
            "goalDifference": -4
          },
          {
            "position": 14,
            "team": {
              "id": 527,
              "name": "AS Saint-Étienne",
              "crestUrl": "https://crests.football-data.org/527.svg"
            },
            "playedGames": 8,
            "form": null,
            "won": 2,
            "draw": 3,
            "lost": 3,
            "points": 9,
            "goalsFor": 8,
            "goalsAgainst": 10,
            "goalDifference": -2
          },
          {
            "position": 15,
            "team": {
              "id": 522,
              "name": "OGC Nice",
              "crestUrl": "https://crests.football-data.org/522.svg"
            },
            "playedGames": 9,
            "form": null,
            "won": 2,
            "draw": 2,
            "lost": 5,
            "points": 8,
            "goalsFor": 10,
            "goalsAgainst": 18,
            "goalDifference": -8
          },
          {
            "position": 16,
            "team": {
              "id": 525,
              "name": "FC Lorient",
              "crestUrl": "https://crests.football-data.org/525.svg"
            },
            "playedGames": 8,
            "form": null,
            "won": 2,
            "draw": 1,
            "lost": 5,
            "points": 7,
            "goalsFor": 9,
            "goalsAgainst": 12,
            "goalDifference": -3
          },
          {
            "position": 17,
            "team": {
              "id": 547,
              "name": "Stade de Reims",
              "crestUrl": "https://crests.football-data.org/547.svg"
            },
            "playedGames": 7,
            "form": null,
            "won": 2,
            "draw": 1,
            "lost": 4,
            "points": 7,
            "goalsFor": 6,
            "goalsAgainst": 10,
            "goalDifference": -4
          },
          {
            "position": 18,
            "team": {
              "id": 576,
              "name": "RC Strasbourg Alsace",
              "crestUrl": "https://crests.football-data.org/576.svg"
            },
            "playedGames": 8,
            "form": null,
            "won": 1,
            "draw": 2,
            "lost": 5,
            "points": 5,
            "goalsFor": 6,
            "goalsAgainst": 14,
            "goalDifference": -8
          },
          {
            "position": 19,
            "team": {
              "id": 528,
              "name": "Dijon Football Côte d'Or",
              "crestUrl": "https://crests.football-data.org/528.svg"
            },
            "playedGames": 9,
            "form": null,
            "won": 0,
            "draw": 4,
            "lost": 5,
            "points": 4,
            "goalsFor": 3,
            "goalsAgainst": 10,
            "goalDifference": -7
          },
          {
            "position": 20,
            "team": {
              "id": 556,
              "name": "Nîmes Olympique",
              "crestUrl": "https://crests.football-data.org/556.svg"
            },
            "playedGames": 9,
            "form": null,
            "won": 1,
            "draw": 1,
            "lost": 7,
            "points": 4,
            "goalsFor": 9,
            "goalsAgainst": 22,
            "goalDifference": -13
          }
        ]
      },
      {
        "stage": "REGULAR_SEASON",
        "type": "AWAY",
        "group": null,
        "table": [
          {
            "position": 1,
            "team": {
              "id": 523,
              "name": "Olympique Lyonnais",
              "crestUrl": "https://crests.football-data.org/523.svg"
            },
            "playedGames": 9,
            "form": null,
            "won": 5,
            "draw": 3,
            "lost": 1,
            "points": 18,
            "goalsFor": 15,
            "goalsAgainst": 8,
            "goalDifference": 7
          },
          {
            "position": 2,
            "team": {
              "id": 524,
              "name": "Paris Saint-Germain FC",
              "crestUrl": "https://crests.football-data.org/524.svg"
            },
            "playedGames": 8,
            "form": null,
            "won": 5,
            "draw": 1,
            "lost": 2,
            "points": 16,
            "goalsFor": 17,
            "goalsAgainst": 5,
            "goalDifference": 12
          },
          {
            "position": 3,
            "team": {
              "id": 516,
              "name": "Olympique de Marseille",
              "crestUrl": "https://crests.football-data.org/516.svg"
            },
            "playedGames": 8,
            "form": null,
            "won": 5,
            "draw": 1,
            "lost": 2,
            "points": 16,
            "goalsFor": 11,
            "goalsAgainst": 7,
            "goalDifference": 4
          },
          {
            "position": 4,
            "team": {
              "id": 521,
              "name": "Lille OSC",
              "crestUrl": "https://crests.football-data.org/521.svg"
            },
            "playedGames": 8,
            "form": null,
            "won": 4,
            "draw": 3,
            "lost": 1,
            "points": 15,
            "goalsFor": 14,
            "goalsAgainst": 8,
            "goalDifference": 6
          },
          {
            "position": 5,
            "team": {
              "id": 529,
              "name": "Stade Rennais FC 1901",
              "crestUrl": "https://crests.football-data.org/529.svg"
            },
            "playedGames": 8,
            "form": null,
            "won": 4,
            "draw": 3,
            "lost": 1,
            "points": 15,
            "goalsFor": 14,
            "goalsAgainst": 8,
            "goalDifference": 6
          },
          {
            "position": 6,
            "team": {
              "id": 518,
              "name": "Montpellier HSC",
              "crestUrl": "https://crests.football-data.org/518.svg"
            },
            "playedGames": 8,
            "form": null,
            "won": 4,
            "draw": 3,
            "lost": 1,
            "points": 15,
            "goalsFor": 13,
            "goalsAgainst": 9,
            "goalDifference": 4
          },
          {
            "position": 7,
            "team": {
              "id": 522,
              "name": "OGC Nice",
              "crestUrl": "https://crests.football-data.org/522.svg"
            },
            "playedGames": 7,
            "form": null,
            "won": 4,
            "draw": 2,
            "lost": 1,
            "points": 14,
            "goalsFor": 11,
            "goalsAgainst": 4,
            "goalDifference": 7
          },
          {
            "position": 8,
            "team": {
              "id": 532,
              "name": "Angers SCO",
              "crestUrl": "https://crests.football-data.org/532.svg"
            },
            "playedGames": 8,
            "form": null,
            "won": 4,
            "draw": 2,
            "lost": 2,
            "points": 14,
            "goalsFor": 14,
            "goalsAgainst": 14,
            "goalDifference": 0
          },
          {
            "position": 9,
            "team": {
              "id": 546,
              "name": "Racing Club de Lens",
              "crestUrl": "https://crests.football-data.org/546.svg"
            },
            "playedGames": 8,
            "form": null,
            "won": 4,
            "draw": 1,
            "lost": 3,
            "points": 13,
            "goalsFor": 11,
            "goalsAgainst": 11,
            "goalDifference": 0
          },
          {
            "position": 10,
            "team": {
              "id": 547,
              "name": "Stade de Reims",
              "crestUrl": "https://crests.football-data.org/547.svg"
            },
            "playedGames": 10,
            "form": null,
            "won": 2,
            "draw": 4,
            "lost": 4,
            "points": 10,
            "goalsFor": 18,
            "goalsAgainst": 18,
            "goalDifference": 0
          },
          {
            "position": 11,
            "team": {
              "id": 545,
              "name": "FC Metz",
              "crestUrl": "https://crests.football-data.org/545.svg"
            },
            "playedGames": 9,
            "form": null,
            "won": 2,
            "draw": 4,
            "lost": 3,
            "points": 10,
            "goalsFor": 8,
            "goalsAgainst": 8,
            "goalDifference": 0
          },
          {
            "position": 12,
            "team": {
              "id": 526,
              "name": "FC Girondins de Bordeaux",
              "crestUrl": "https://crests.football-data.org/526.svg"
            },
            "playedGames": 8,
            "form": null,
            "won": 3,
            "draw": 1,
            "lost": 4,
            "points": 10,
            "goalsFor": 10,
            "goalsAgainst": 13,
            "goalDifference": -3
          },
          {
            "position": 13,
            "team": {
              "id": 576,
              "name": "RC Strasbourg Alsace",
              "crestUrl": "https://crests.football-data.org/576.svg"
            },
            "playedGames": 9,
            "form": null,
            "won": 3,
            "draw": 0,
            "lost": 6,
            "points": 9,
            "goalsFor": 16,
            "goalsAgainst": 18,
            "goalDifference": -2
          },
          {
            "position": 14,
            "team": {
              "id": 548,
              "name": "AS Monaco FC",
              "crestUrl": "https://crests.football-data.org/548.svg"
            },
            "playedGames": 8,
            "form": null,
            "won": 3,
            "draw": 0,
            "lost": 5,
            "points": 9,
            "goalsFor": 8,
            "goalsAgainst": 12,
            "goalDifference": -4
          },
          {
            "position": 15,
            "team": {
              "id": 527,
              "name": "AS Saint-Étienne",
              "crestUrl": "https://crests.football-data.org/527.svg"
            },
            "playedGames": 9,
            "form": null,
            "won": 2,
            "draw": 3,
            "lost": 4,
            "points": 9,
            "goalsFor": 10,
            "goalsAgainst": 15,
            "goalDifference": -5
          },
          {
            "position": 16,
            "team": {
              "id": 528,
              "name": "Dijon Football Côte d'Or",
              "crestUrl": "https://crests.football-data.org/528.svg"
            },
            "playedGames": 8,
            "form": null,
            "won": 2,
            "draw": 2,
            "lost": 4,
            "points": 8,
            "goalsFor": 9,
            "goalsAgainst": 16,
            "goalDifference": -7
          },
          {
            "position": 17,
            "team": {
              "id": 556,
              "name": "Nîmes Olympique",
              "crestUrl": "https://crests.football-data.org/556.svg"
            },
            "playedGames": 8,
            "form": null,
            "won": 2,
            "draw": 2,
            "lost": 4,
            "points": 8,
            "goalsFor": 5,
            "goalsAgainst": 12,
            "goalDifference": -7
          },
          {
            "position": 18,
            "team": {
              "id": 512,
              "name": "Stade Brestois 29",
              "crestUrl": "https://crests.football-data.org/512.svg"
            },
            "playedGames": 9,
            "form": null,
            "won": 2,
            "draw": 1,
            "lost": 6,
            "points": 7,
            "goalsFor": 11,
            "goalsAgainst": 17,
            "goalDifference": -6
          },
          {
            "position": 19,
            "team": {
              "id": 543,
              "name": "FC Nantes",
              "crestUrl": "https://crests.football-data.org/543.svg"
            },
            "playedGames": 9,
            "form": null,
            "won": 1,
            "draw": 2,
            "lost": 6,
            "points": 5,
            "goalsFor": 8,
            "goalsAgainst": 16,
            "goalDifference": -8
          },
          {
            "position": 20,
            "team": {
              "id": 525,
              "name": "FC Lorient",
              "crestUrl": "https://crests.football-data.org/525.svg"
            },
            "playedGames": 9,
            "form": null,
            "won": 1,
            "draw": 2,
            "lost": 6,
            "points": 5,
            "goalsFor": 8,
            "goalsAgainst": 19,
            "goalDifference": -11
          }
        ]
      }
    ]
  },
  "matches": {
    "count": 25,
    "filters": {
      "dateFrom": "2020-10-06",
      "dateTo": "2021-04-04",
      "permission": "TIER_ONE",
      "status": [
        "SCHEDULED",
        "PAUSED",
        "IN_PLAY",
        "FINISHED"
      ],
      "limit": 100
    },
    "matches": [
      {
        "id": 296911,
        "competition": {
          "id": 2015,
          "name": "Ligue 1",
          "area": {
            "name": "France",
            "code": "FRA",
            "ensignUrl": "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg"
          }
        },
        "season": {
          "id": 596,
          "startDate": "2020-08-22",
          "endDate": "2021-05-23",
          "currentMatchday": 18,
          "winner": null
        },
        "utcDate": "2020-10-18T19:00:00Z",
        "status": "FINISHED",
        "matchday": 7,
        "stage": "REGULAR_SEASON",
        "group": "Regular Season",
        "lastUpdated": "2020-11-13T15:33:36Z",
        "odds": {
          "msg": "Activate Odds-Package in User-Panel to retrieve odds."
        },
        "score": {
          "winner": "HOME_TEAM",
          "duration": "REGULAR",
          "fullTime": {
            "homeTeam": 4,
            "awayTeam": 0
          },
          "halfTime": {
            "homeTeam": 1,
            "awayTeam": 0
          },
          "extraTime": {
            "homeTeam": null,
            "awayTeam": null
          },
          "penalties": {
            "homeTeam": null,
            "awayTeam": null
          }
        },
        "homeTeam": {
          "id": 521,
          "name": "Lille OSC"
        },
        "awayTeam": {
          "id": 546,
          "name": "Racing Club de Lens"
        },
        "referees": [
          {
            "id": 43918,
            "name": "François Letexier",
            "role": "REF",
            "nationality": "France"
          },
          {
            "id": 57080,
            "name": "Cyril Mugnier",
            "role": "REF",
            "nationality": "France"
          },
          {
            "id": 57049,
            "name": "Mehdi Rahmouni",
            "role": "REF",
            "nationality": "France"
          },
          {
            "id": 57031,
            "name": "Alexandre Perreau Niel",
            "role": "REF",
            "nationality": "France"
          },
          {
            "id": 57070,
            "name": "Johan Hamel",
            "role": "REF",
            "nationality": "France"
          }
        ]
      },
      {
        "id": 296947,
        "competition": {
          "id": 2015,
          "name": "Ligue 1",
          "area": {
            "name": "France",
            "code": "FRA",
            "ensignUrl": "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg"
          }
        },
        "season": {
          "id": 596,
          "startDate": "2020-08-22",
          "endDate": "2021-05-23",
          "currentMatchday": 18,
          "winner": null
        },
        "utcDate": "2020-11-08T14:00:00Z",
        "status": "FINISHED",
        "matchday": 10,
        "stage": "REGULAR_SEASON",
        "group": "Regular Season",
        "lastUpdated": "2020-11-08T19:48:32Z",
        "odds": {
          "msg": "Activate Odds-Package in User-Panel to retrieve odds."
        },
        "score": {
          "winner": "DRAW",
          "duration": "REGULAR",
          "fullTime": {
            "homeTeam": 4,
            "awayTeam": 4
          },
          "halfTime": {
            "homeTeam": 1,
            "awayTeam": 0
          },
          "extraTime": {
            "homeTeam": null,
            "awayTeam": null
          },
          "penalties": {
            "homeTeam": null,
            "awayTeam": null
          }
        },
        "homeTeam": {
          "id": 546,
          "name": "Racing Club de Lens"
        },
        "awayTeam": {
          "id": 547,
          "name": "Stade de Reims"
        },
        "referees": [
          {
            "id": 57039,
            "name": "Thomas Léonard",
            "role": "REF",
            "nationality": "France"
          },
          {
            "id": 57044,
            "name": "Frédéric Hebrard",
            "role": "REF",
            "nationality": "France"
          },
          {
            "id": 57030,
            "name": "Gilles Lang",
            "role": "REF",
            "nationality": "France"
          },
          {
            "id": 1063,
            "name": "Cédric Dos Santos",
            "role": "REF",
            "nationality": "France"
          },
          {
            "id": 1049,
            "name": "Jeremy Stinat",
            "role": "REF",
            "nationality": "France"
          }
        ]
      },
      {
        "id": 296960,
        "competition": {
          "id": 2015,
          "name": "Ligue 1",
          "area": {
            "name": "France",
            "code": "FRA",
            "ensignUrl": "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg"
          }
        },
        "season": {
          "id": 596,
          "startDate": "2020-08-22",
          "endDate": "2021-05-23",
          "currentMatchday": 18,
          "winner": null
        },
        "utcDate": "2020-11-22T14:00:00Z",
        "status": "FINISHED",
        "matchday": 11,
        "stage": "REGULAR_SEASON",
        "group": "Regular Season",
        "lastUpdated": "2020-11-23T01:35:06Z",
        "odds": {
          "msg": "Activate Odds-Package in User-Panel to retrieve odds."
        },
        "score": {
          "winner": "AWAY_TEAM",
          "duration": "REGULAR",
          "fullTime": {
            "homeTeam": 0,
            "awayTeam": 1
          },
          "halfTime": {
            "homeTeam": 0,
            "awayTeam": 1
          },
          "extraTime": {
            "homeTeam": null,
            "awayTeam": null
          },
          "penalties": {
            "homeTeam": null,
            "awayTeam": null
          }
        },
        "homeTeam": {
          "id": 528,
          "name": "Dijon Football Côte d'Or"
        },
        "awayTeam": {
          "id": 546,
          "name": "Racing Club de Lens"
        },
        "referees": [
          {
            "id": 57092,
            "name": "Eric Wattellier",
            "role": "MAIN_REFEREE",
            "nationality": "France"
          },
          {
            "id": 64762,
            "name": "Aurélien Berthomieu",
            "role": "ASSISTANT_N1",
            "nationality": "France"
          },
          {
            "id": 57040,
            "name": "Matthieu Lombard",
            "role": "ASSISTANT_N2",
            "nationality": "France"
          },
          {
            "id": 57081,
            "name": "Mickaël Leleu",
            "role": "FOURTH_OFFICIAL",
            "nationality": "France"
          }
        ]
      },
      {
        "id": 296929,
        "competition": {
          "id": 2015,
          "name": "Ligue 1",
          "area": {
            "name": "France",
            "code": "FRA",
            "ensignUrl": "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg"
          }
        },
        "season": {
          "id": 596,
          "startDate": "2020-08-22",
          "endDate": "2021-05-23",
          "currentMatchday": 18,
          "winner": null
        },
        "utcDate": "2020-11-25T18:00:00Z",
        "status": "FINISHED",
        "matchday": 8,
        "stage": "REGULAR_SEASON",
        "group": "Regular Season",
        "lastUpdated": "2020-12-21T16:33:34Z",
        "odds": {
          "msg": "Activate Odds-Package in User-Panel to retrieve odds."
        },
        "score": {
          "winner": "DRAW",
          "duration": "REGULAR",
          "fullTime": {
            "homeTeam": 1,
            "awayTeam": 1
          },
          "halfTime": {
            "homeTeam": 1,
            "awayTeam": 0
          },
          "extraTime": {
            "homeTeam": null,
            "awayTeam": null
          },
          "penalties": {
            "homeTeam": null,
            "awayTeam": null
          }
        },
        "homeTeam": {
          "id": 546,
          "name": "Racing Club de Lens"
        },
        "awayTeam": {
          "id": 543,
          "name": "FC Nantes"
        },
        "referees": [
          {
            "id": 57068,
            "name": "Florent Batta",
            "role": "MAIN_REFEREE",
            "nationality": "France"
          },
          {
            "id": 57035,
            "name": "Benjamin Pages",
            "role": "ASSISTANT_N1",
            "nationality": "France"
          },
          {
            "id": 57044,
            "name": "Frédéric Hebrard",
            "role": "ASSISTANT_N2",
            "nationality": "France"
          },
          {
            "id": 57081,
            "name": "Mickaël Leleu",
            "role": "FOURTH_OFFICIAL",
            "nationality": "France"
          },
          {
            "id": 57048,
            "name": "Mickael Annonier",
            "role": "ASSISTANT_N1",
            "nationality": "France"
          },
          {
            "id": 64788,
            "name": "Samir Zolota",
            "role": "FOURTH_OFFICIAL",
            "nationality": "France"
          }
        ]
      },
      {
        "id": 296968,
        "competition": {
          "id": 2015,
          "name": "Ligue 1",
          "area": {
            "name": "France",
            "code": "FRA",
            "ensignUrl": "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg"
          }
        },
        "season": {
          "id": 596,
          "startDate": "2020-08-22",
          "endDate": "2021-05-23",
          "currentMatchday": 18,
          "winner": null
        },
        "utcDate": "2020-11-29T14:00:00Z",
        "status": "FINISHED",
        "matchday": 12,
        "stage": "REGULAR_SEASON",
        "group": "Regular Season",
        "lastUpdated": "2020-11-29T18:41:07Z",
        "odds": {
          "msg": "Activate Odds-Package in User-Panel to retrieve odds."
        },
        "score": {
          "winner": "AWAY_TEAM",
          "duration": "REGULAR",
          "fullTime": {
            "homeTeam": 1,
            "awayTeam": 3
          },
          "halfTime": {
            "homeTeam": 1,
            "awayTeam": 1
          },
          "extraTime": {
            "homeTeam": null,
            "awayTeam": null
          },
          "penalties": {
            "homeTeam": null,
            "awayTeam": null
          }
        },
        "homeTeam": {
          "id": 546,
          "name": "Racing Club de Lens"
        },
        "awayTeam": {
          "id": 532,
          "name": "Angers SCO"
        },
        "referees": [
          {
            "id": 57062,
            "name": "Aurélien Petit",
            "role": "MAIN_REFEREE",
            "nationality": "France"
          },
          {
            "id": 57041,
            "name": "Mikael Berchebru",
            "role": "ASSISTANT_N1",
            "nationality": "France"
          },
          {
            "id": 1064,
            "name": "Erwan Finjean",
            "role": "ASSISTANT_N2",
            "nationality": "France"
          },
          {
            "id": 64797,
            "name": "William Toulliou",
            "role": "FOURTH_OFFICIAL",
            "nationality": "France"
          }
        ]
      },
      {
        "id": 296974,
        "competition": {
          "id": 2015,
          "name": "Ligue 1",
          "area": {
            "name": "France",
            "code": "FRA",
            "ensignUrl": "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg"
          }
        },
        "season": {
          "id": 596,
          "startDate": "2020-08-22",
          "endDate": "2021-05-23",
          "currentMatchday": 18,
          "winner": null
        },
        "utcDate": "2020-12-05T16:00:00Z",
        "status": "FINISHED",
        "matchday": 13,
        "stage": "REGULAR_SEASON",
        "group": "Regular Season",
        "lastUpdated": "2020-12-21T16:33:34Z",
        "odds": {
          "msg": "Activate Odds-Package in User-Panel to retrieve odds."
        },
        "score": {
          "winner": "AWAY_TEAM",
          "duration": "REGULAR",
          "fullTime": {
            "homeTeam": 0,
            "awayTeam": 2
          },
          "halfTime": {
            "homeTeam": 0,
            "awayTeam": 1
          },
          "extraTime": {
            "homeTeam": null,
            "awayTeam": null
          },
          "penalties": {
            "homeTeam": null,
            "awayTeam": null
          }
        },
        "homeTeam": {
          "id": 529,
          "name": "Stade Rennais FC 1901"
        },
        "awayTeam": {
          "id": 546,
          "name": "Racing Club de Lens"
        },
        "referees": [
          {
            "id": 57070,
            "name": "Johan Hamel",
            "role": "MAIN_REFEREE",
            "nationality": "France"
          },
          {
            "id": 57060,
            "name": "Mathieu Grosbost",
            "role": "ASSISTANT_N1",
            "nationality": "France"
          },
          {
            "id": 64770,
            "name": "Brice Parinet-Le Tellier",
            "role": "ASSISTANT_N2",
            "nationality": "France"
          },
          {
            "id": 57077,
            "name": "Sylvain Palhies",
            "role": "FOURTH_OFFICIAL",
            "nationality": "France"
          }
        ]
      },
      {
        "id": 296989,
        "competition": {
          "id": 2015,
          "name": "Ligue 1",
          "area": {
            "name": "France",
            "code": "FRA",
            "ensignUrl": "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg"
          }
        },
        "season": {
          "id": 596,
          "startDate": "2020-08-22",
          "endDate": "2021-05-23",
          "currentMatchday": 18,
          "winner": null
        },
        "utcDate": "2020-12-12T20:00:00Z",
        "status": "FINISHED",
        "matchday": 14,
        "stage": "REGULAR_SEASON",
        "group": "Regular Season",
        "lastUpdated": "2020-12-21T16:33:35Z",
        "odds": {
          "msg": "Activate Odds-Package in User-Panel to retrieve odds."
        },
        "score": {
          "winner": "AWAY_TEAM",
          "duration": "REGULAR",
          "fullTime": {
            "homeTeam": 2,
            "awayTeam": 3
          },
          "halfTime": {
            "homeTeam": 1,
            "awayTeam": 2
          },
          "extraTime": {
            "homeTeam": null,
            "awayTeam": null
          },
          "penalties": {
            "homeTeam": null,
            "awayTeam": null
          }
        },
        "homeTeam": {
          "id": 546,
          "name": "Racing Club de Lens"
        },
        "awayTeam": {
          "id": 518,
          "name": "Montpellier HSC"
        },
        "referees": [
          {
            "id": 1049,
            "name": "Jeremy Stinat",
            "role": "MAIN_REFEREE",
            "nationality": "France"
          },
          {
            "id": 57107,
            "name": "Gwenaël Pasqualotti",
            "role": "ASSISTANT_N1",
            "nationality": "France"
          },
          {
            "id": 57052,
            "name": "Julien Aube",
            "role": "ASSISTANT_N2",
            "nationality": "France"
          },
          {
            "id": 57039,
            "name": "Thomas Léonard",
            "role": "FOURTH_OFFICIAL",
            "nationality": "France"
          }
        ]
      },
      {
        "id": 296998,
        "competition": {
          "id": 2015,
          "name": "Ligue 1",
          "area": {
            "name": "France",
            "code": "FRA",
            "ensignUrl": "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg"
          }
        },
        "season": {
          "id": 596,
          "startDate": "2020-08-22",
          "endDate": "2021-05-23",
          "currentMatchday": 18,
          "winner": null
        },
        "utcDate": "2020-12-16T20:00:00Z",
        "status": "FINISHED",
        "matchday": 15,
        "stage": "REGULAR_SEASON",
        "group": "Regular Season",
        "lastUpdated": "2020-12-17T01:55:04Z",
        "odds": {
          "msg": "Activate Odds-Package in User-Panel to retrieve odds."
        },
        "score": {
          "winner": "AWAY_TEAM",
          "duration": "REGULAR",
          "fullTime": {
            "homeTeam": 0,
            "awayTeam": 3
          },
          "halfTime": {
            "homeTeam": 0,
            "awayTeam": 3
          },
          "extraTime": {
            "homeTeam": null,
            "awayTeam": null
          },
          "penalties": {
            "homeTeam": null,
            "awayTeam": null
          }
        },
        "homeTeam": {
          "id": 548,
          "name": "AS Monaco FC"
        },
        "awayTeam": {
          "id": 546,
          "name": "Racing Club de Lens"
        },
        "referees": [
          {
            "id": 57042,
            "name": "Willy Delajod",
            "role": "MAIN_REFEREE",
            "nationality": "France"
          },
          {
            "id": 57072,
            "name": "Yannick Boutry",
            "role": "ASSISTANT_N1",
            "nationality": "France"
          },
          {
            "id": 57049,
            "name": "Mehdi Rahmouni",
            "role": "ASSISTANT_N2",
            "nationality": "France"
          },
          {
            "id": 76760,
            "name": "Azzedine Souifi",
            "role": "FOURTH_OFFICIAL",
            "nationality": "France"
          }
        ]
      },
      {
        "id": 297009,
        "competition": {
          "id": 2015,
          "name": "Ligue 1",
          "area": {
            "name": "France",
            "code": "FRA",
            "ensignUrl": "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg"
          }
        },
        "season": {
          "id": 596,
          "startDate": "2020-08-22",
          "endDate": "2021-05-23",
          "currentMatchday": 18,
          "winner": null
        },
        "utcDate": "2020-12-19T16:00:00Z",
        "status": "FINISHED",
        "matchday": 16,
        "stage": "REGULAR_SEASON",
        "group": "Regular Season",
        "lastUpdated": "2020-12-19T21:40:22Z",
        "odds": {
          "msg": "Activate Odds-Package in User-Panel to retrieve odds."
        },
        "score": {
          "winner": "HOME_TEAM",
          "duration": "REGULAR",
          "fullTime": {
            "homeTeam": 2,
            "awayTeam": 0
          },
          "halfTime": {
            "homeTeam": 1,
            "awayTeam": 0
          },
          "extraTime": {
            "homeTeam": null,
            "awayTeam": null
          },
          "penalties": {
            "homeTeam": null,
            "awayTeam": null
          }
        },
        "homeTeam": {
          "id": 545,
          "name": "FC Metz"
        },
        "awayTeam": {
          "id": 546,
          "name": "Racing Club de Lens"
        },
        "referees": [
          {
            "id": 43917,
            "name": "Amaury Delerue",
            "role": "MAIN_REFEREE",
            "nationality": "France"
          },
          {
            "id": 43947,
            "name": "Bertrand Jouannaud",
            "role": "ASSISTANT_N1",
            "nationality": "France"
          },
          {
            "id": 57035,
            "name": "Benjamin Pages",
            "role": "ASSISTANT_N2",
            "nationality": "France"
          },
          {
            "id": 128458,
            "name": "Ludovic Genest",
            "role": "FOURTH_OFFICIAL",
            "nationality": "France"
          }
        ]
      },
      {
        "id": 297019,
        "competition": {
          "id": 2015,
          "name": "Ligue 1",
          "area": {
            "name": "France",
            "code": "FRA",
            "ensignUrl": "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg"
          }
        },
        "season": {
          "id": 596,
          "startDate": "2020-08-22",
          "endDate": "2021-05-23",
          "currentMatchday": 18,
          "winner": null
        },
        "utcDate": "2020-12-23T18:00:00Z",
        "status": "FINISHED",
        "matchday": 17,
        "stage": "REGULAR_SEASON",
        "group": "Regular Season",
        "lastUpdated": "2020-12-24T01:00:03Z",
        "odds": {
          "msg": "Activate Odds-Package in User-Panel to retrieve odds."
        },
        "score": {
          "winner": "HOME_TEAM",
          "duration": "REGULAR",
          "fullTime": {
            "homeTeam": 2,
            "awayTeam": 1
          },
          "halfTime": {
            "homeTeam": 2,
            "awayTeam": 0
          },
          "extraTime": {
            "homeTeam": null,
            "awayTeam": null
          },
          "penalties": {
            "homeTeam": null,
            "awayTeam": null
          }
        },
        "homeTeam": {
          "id": 546,
          "name": "Racing Club de Lens"
        },
        "awayTeam": {
          "id": 512,
          "name": "Stade Brestois 29"
        },
        "referees": [
          {
            "id": 57088,
            "name": "Bastien Dechepy",
            "role": "MAIN_REFEREE",
            "nationality": "France"
          },
          {
            "id": 64770,
            "name": "Brice Parinet-Le Tellier",
            "role": "ASSISTANT_N1",
            "nationality": "France"
          },
          {
            "id": 57030,
            "name": "Gilles Lang",
            "role": "ASSISTANT_N2",
            "nationality": "France"
          },
          {
            "id": 64826,
            "name": "Pierre Legat",
            "role": "FOURTH_OFFICIAL",
            "nationality": "France"
          }
        ]
      },
      {
        "id": 297022,
        "competition": {
          "id": 2015,
          "name": "Ligue 1",
          "area": {
            "name": "France",
            "code": "FRA",
            "ensignUrl": "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg"
          }
        },
        "season": {
          "id": 596,
          "startDate": "2020-08-22",
          "endDate": "2021-05-23",
          "currentMatchday": 18,
          "winner": null
        },
        "utcDate": "2021-01-06T20:00:00Z",
        "status": "SCHEDULED",
        "matchday": 18,
        "stage": "REGULAR_SEASON",
        "group": "Regular Season",
        "lastUpdated": "2020-12-21T18:33:36Z",
        "odds": {
          "msg": "Activate Odds-Package in User-Panel to retrieve odds."
        },
        "score": {
          "winner": null,
          "duration": "REGULAR",
          "fullTime": {
            "homeTeam": null,
            "awayTeam": null
          },
          "halfTime": {
            "homeTeam": null,
            "awayTeam": null
          },
          "extraTime": {
            "homeTeam": null,
            "awayTeam": null
          },
          "penalties": {
            "homeTeam": null,
            "awayTeam": null
          }
        },
        "homeTeam": {
          "id": 523,
          "name": "Olympique Lyonnais"
        },
        "awayTeam": {
          "id": 546,
          "name": "Racing Club de Lens"
        },
        "referees": []
      },
      {
        "id": 297038,
        "competition": {
          "id": 2015,
          "name": "Ligue 1",
          "area": {
            "name": "France",
            "code": "FRA",
            "ensignUrl": "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg"
          }
        },
        "season": {
          "id": 596,
          "startDate": "2020-08-22",
          "endDate": "2021-05-23",
          "currentMatchday": 18,
          "winner": null
        },
        "utcDate": "2021-01-09T20:00:00Z",
        "status": "SCHEDULED",
        "matchday": 19,
        "stage": "REGULAR_SEASON",
        "group": "Regular Season",
        "lastUpdated": "2020-12-27T09:33:19Z",
        "odds": {
          "msg": "Activate Odds-Package in User-Panel to retrieve odds."
        },
        "score": {
          "winner": null,
          "duration": "REGULAR",
          "fullTime": {
            "homeTeam": null,
            "awayTeam": null
          },
          "halfTime": {
            "homeTeam": null,
            "awayTeam": null
          },
          "extraTime": {
            "homeTeam": null,
            "awayTeam": null
          },
          "penalties": {
            "homeTeam": null,
            "awayTeam": null
          }
        },
        "homeTeam": {
          "id": 546,
          "name": "Racing Club de Lens"
        },
        "awayTeam": {
          "id": 576,
          "name": "RC Strasbourg Alsace"
        },
        "referees": []
      },
      {
        "id": 297049,
        "competition": {
          "id": 2015,
          "name": "Ligue 1",
          "area": {
            "name": "France",
            "code": "FRA",
            "ensignUrl": "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg"
          }
        },
        "season": {
          "id": 596,
          "startDate": "2020-08-22",
          "endDate": "2021-05-23",
          "currentMatchday": 18,
          "winner": null
        },
        "utcDate": "2021-01-17T14:00:00Z",
        "status": "SCHEDULED",
        "matchday": 20,
        "stage": "REGULAR_SEASON",
        "group": "Regular Season",
        "lastUpdated": "2020-12-27T09:33:19Z",
        "odds": {
          "msg": "Activate Odds-Package in User-Panel to retrieve odds."
        },
        "score": {
          "winner": null,
          "duration": "REGULAR",
          "fullTime": {
            "homeTeam": null,
            "awayTeam": null
          },
          "halfTime": {
            "homeTeam": null,
            "awayTeam": null
          },
          "extraTime": {
            "homeTeam": null,
            "awayTeam": null
          },
          "penalties": {
            "homeTeam": null,
            "awayTeam": null
          }
        },
        "homeTeam": {
          "id": 543,
          "name": "FC Nantes"
        },
        "awayTeam": {
          "id": 546,
          "name": "Racing Club de Lens"
        },
        "referees": []
      },
      {
        "id": 296934,
        "competition": {
          "id": 2015,
          "name": "Ligue 1",
          "area": {
            "name": "France",
            "code": "FRA",
            "ensignUrl": "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg"
          }
        },
        "season": {
          "id": 596,
          "startDate": "2020-08-22",
          "endDate": "2021-05-23",
          "currentMatchday": 18,
          "winner": null
        },
        "utcDate": "2021-01-20T20:00:00Z",
        "status": "SCHEDULED",
        "matchday": 9,
        "stage": "REGULAR_SEASON",
        "group": "Regular Season",
        "lastUpdated": "2020-12-22T09:33:38Z",
        "odds": {
          "msg": "Activate Odds-Package in User-Panel to retrieve odds."
        },
        "score": {
          "winner": null,
          "duration": "REGULAR",
          "fullTime": {
            "homeTeam": null,
            "awayTeam": null
          },
          "halfTime": {
            "homeTeam": null,
            "awayTeam": null
          },
          "extraTime": {
            "homeTeam": null,
            "awayTeam": null
          },
          "penalties": {
            "homeTeam": null,
            "awayTeam": null
          }
        },
        "homeTeam": {
          "id": 516,
          "name": "Olympique de Marseille"
        },
        "awayTeam": {
          "id": 546,
          "name": "Racing Club de Lens"
        },
        "referees": []
      },
      {
        "id": 297058,
        "competition": {
          "id": 2015,
          "name": "Ligue 1",
          "area": {
            "name": "France",
            "code": "FRA",
            "ensignUrl": "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg"
          }
        },
        "season": {
          "id": 596,
          "startDate": "2020-08-22",
          "endDate": "2021-05-23",
          "currentMatchday": 18,
          "winner": null
        },
        "utcDate": "2021-01-23T16:00:00Z",
        "status": "SCHEDULED",
        "matchday": 21,
        "stage": "REGULAR_SEASON",
        "group": "Regular Season",
        "lastUpdated": "2021-01-03T05:33:18Z",
        "odds": {
          "msg": "Activate Odds-Package in User-Panel to retrieve odds."
        },
        "score": {
          "winner": null,
          "duration": "REGULAR",
          "fullTime": {
            "homeTeam": null,
            "awayTeam": null
          },
          "halfTime": {
            "homeTeam": null,
            "awayTeam": null
          },
          "extraTime": {
            "homeTeam": null,
            "awayTeam": null
          },
          "penalties": {
            "homeTeam": null,
            "awayTeam": null
          }
        },
        "homeTeam": {
          "id": 546,
          "name": "Racing Club de Lens"
        },
        "awayTeam": {
          "id": 522,
          "name": "OGC Nice"
        },
        "referees": []
      },
      {
        "id": 297061,
        "competition": {
          "id": 2015,
          "name": "Ligue 1",
          "area": {
            "name": "France",
            "code": "FRA",
            "ensignUrl": "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg"
          }
        },
        "season": {
          "id": 596,
          "startDate": "2020-08-22",
          "endDate": "2021-05-23",
          "currentMatchday": 18,
          "winner": null
        },
        "utcDate": "2021-02-01T00:00:00Z",
        "status": "SCHEDULED",
        "matchday": 22,
        "stage": "REGULAR_SEASON",
        "group": "Regular Season",
        "lastUpdated": "2020-07-16T18:50:57Z",
        "odds": {
          "msg": "Activate Odds-Package in User-Panel to retrieve odds."
        },
        "score": {
          "winner": null,
          "duration": "REGULAR",
          "fullTime": {
            "homeTeam": null,
            "awayTeam": null
          },
          "halfTime": {
            "homeTeam": null,
            "awayTeam": null
          },
          "extraTime": {
            "homeTeam": null,
            "awayTeam": null
          },
          "penalties": {
            "homeTeam": null,
            "awayTeam": null
          }
        },
        "homeTeam": {
          "id": 518,
          "name": "Montpellier HSC"
        },
        "awayTeam": {
          "id": 546,
          "name": "Racing Club de Lens"
        },
        "referees": []
      },
      {
        "id": 297078,
        "competition": {
          "id": 2015,
          "name": "Ligue 1",
          "area": {
            "name": "France",
            "code": "FRA",
            "ensignUrl": "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg"
          }
        },
        "season": {
          "id": 596,
          "startDate": "2020-08-22",
          "endDate": "2021-05-23",
          "currentMatchday": 18,
          "winner": null
        },
        "utcDate": "2021-02-04T00:00:00Z",
        "status": "SCHEDULED",
        "matchday": 23,
        "stage": "REGULAR_SEASON",
        "group": "Regular Season",
        "lastUpdated": "2020-07-16T18:50:57Z",
        "odds": {
          "msg": "Activate Odds-Package in User-Panel to retrieve odds."
        },
        "score": {
          "winner": null,
          "duration": "REGULAR",
          "fullTime": {
            "homeTeam": null,
            "awayTeam": null
          },
          "halfTime": {
            "homeTeam": null,
            "awayTeam": null
          },
          "extraTime": {
            "homeTeam": null,
            "awayTeam": null
          },
          "penalties": {
            "homeTeam": null,
            "awayTeam": null
          }
        },
        "homeTeam": {
          "id": 546,
          "name": "Racing Club de Lens"
        },
        "awayTeam": {
          "id": 516,
          "name": "Olympique de Marseille"
        },
        "referees": []
      },
      {
        "id": 297089,
        "competition": {
          "id": 2015,
          "name": "Ligue 1",
          "area": {
            "name": "France",
            "code": "FRA",
            "ensignUrl": "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg"
          }
        },
        "season": {
          "id": 596,
          "startDate": "2020-08-22",
          "endDate": "2021-05-23",
          "currentMatchday": 18,
          "winner": null
        },
        "utcDate": "2021-02-08T00:00:00Z",
        "status": "SCHEDULED",
        "matchday": 24,
        "stage": "REGULAR_SEASON",
        "group": "Regular Season",
        "lastUpdated": "2020-07-16T18:50:57Z",
        "odds": {
          "msg": "Activate Odds-Package in User-Panel to retrieve odds."
        },
        "score": {
          "winner": null,
          "duration": "REGULAR",
          "fullTime": {
            "homeTeam": null,
            "awayTeam": null
          },
          "halfTime": {
            "homeTeam": null,
            "awayTeam": null
          },
          "extraTime": {
            "homeTeam": null,
            "awayTeam": null
          },
          "penalties": {
            "homeTeam": null,
            "awayTeam": null
          }
        },
        "homeTeam": {
          "id": 546,
          "name": "Racing Club de Lens"
        },
        "awayTeam": {
          "id": 529,
          "name": "Stade Rennais FC 1901"
        },
        "referees": []
      },
      {
        "id": 297096,
        "competition": {
          "id": 2015,
          "name": "Ligue 1",
          "area": {
            "name": "France",
            "code": "FRA",
            "ensignUrl": "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg"
          }
        },
        "season": {
          "id": 596,
          "startDate": "2020-08-22",
          "endDate": "2021-05-23",
          "currentMatchday": 18,
          "winner": null
        },
        "utcDate": "2021-02-15T00:00:00Z",
        "status": "SCHEDULED",
        "matchday": 25,
        "stage": "REGULAR_SEASON",
        "group": "Regular Season",
        "lastUpdated": "2020-07-16T18:50:57Z",
        "odds": {
          "msg": "Activate Odds-Package in User-Panel to retrieve odds."
        },
        "score": {
          "winner": null,
          "duration": "REGULAR",
          "fullTime": {
            "homeTeam": null,
            "awayTeam": null
          },
          "halfTime": {
            "homeTeam": null,
            "awayTeam": null
          },
          "extraTime": {
            "homeTeam": null,
            "awayTeam": null
          },
          "penalties": {
            "homeTeam": null,
            "awayTeam": null
          }
        },
        "homeTeam": {
          "id": 547,
          "name": "Stade de Reims"
        },
        "awayTeam": {
          "id": 546,
          "name": "Racing Club de Lens"
        },
        "referees": []
      },
      {
        "id": 297108,
        "competition": {
          "id": 2015,
          "name": "Ligue 1",
          "area": {
            "name": "France",
            "code": "FRA",
            "ensignUrl": "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg"
          }
        },
        "season": {
          "id": 596,
          "startDate": "2020-08-22",
          "endDate": "2021-05-23",
          "currentMatchday": 18,
          "winner": null
        },
        "utcDate": "2021-02-22T00:00:00Z",
        "status": "SCHEDULED",
        "matchday": 26,
        "stage": "REGULAR_SEASON",
        "group": "Regular Season",
        "lastUpdated": "2020-07-16T18:50:57Z",
        "odds": {
          "msg": "Activate Odds-Package in User-Panel to retrieve odds."
        },
        "score": {
          "winner": null,
          "duration": "REGULAR",
          "fullTime": {
            "homeTeam": null,
            "awayTeam": null
          },
          "halfTime": {
            "homeTeam": null,
            "awayTeam": null
          },
          "extraTime": {
            "homeTeam": null,
            "awayTeam": null
          },
          "penalties": {
            "homeTeam": null,
            "awayTeam": null
          }
        },
        "homeTeam": {
          "id": 546,
          "name": "Racing Club de Lens"
        },
        "awayTeam": {
          "id": 528,
          "name": "Dijon Football Côte d'Or"
        },
        "referees": []
      },
      {
        "id": 297117,
        "competition": {
          "id": 2015,
          "name": "Ligue 1",
          "area": {
            "name": "France",
            "code": "FRA",
            "ensignUrl": "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg"
          }
        },
        "season": {
          "id": 596,
          "startDate": "2020-08-22",
          "endDate": "2021-05-23",
          "currentMatchday": 18,
          "winner": null
        },
        "utcDate": "2021-03-01T00:00:00Z",
        "status": "SCHEDULED",
        "matchday": 27,
        "stage": "REGULAR_SEASON",
        "group": "Regular Season",
        "lastUpdated": "2020-07-16T18:50:57Z",
        "odds": {
          "msg": "Activate Odds-Package in User-Panel to retrieve odds."
        },
        "score": {
          "winner": null,
          "duration": "REGULAR",
          "fullTime": {
            "homeTeam": null,
            "awayTeam": null
          },
          "halfTime": {
            "homeTeam": null,
            "awayTeam": null
          },
          "extraTime": {
            "homeTeam": null,
            "awayTeam": null
          },
          "penalties": {
            "homeTeam": null,
            "awayTeam": null
          }
        },
        "homeTeam": {
          "id": 532,
          "name": "Angers SCO"
        },
        "awayTeam": {
          "id": 546,
          "name": "Racing Club de Lens"
        },
        "referees": []
      },
      {
        "id": 297125,
        "competition": {
          "id": 2015,
          "name": "Ligue 1",
          "area": {
            "name": "France",
            "code": "FRA",
            "ensignUrl": "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg"
          }
        },
        "season": {
          "id": 596,
          "startDate": "2020-08-22",
          "endDate": "2021-05-23",
          "currentMatchday": 18,
          "winner": null
        },
        "utcDate": "2021-03-04T00:00:00Z",
        "status": "SCHEDULED",
        "matchday": 28,
        "stage": "REGULAR_SEASON",
        "group": "Regular Season",
        "lastUpdated": "2020-12-19T08:33:36Z",
        "odds": {
          "msg": "Activate Odds-Package in User-Panel to retrieve odds."
        },
        "score": {
          "winner": null,
          "duration": "REGULAR",
          "fullTime": {
            "homeTeam": null,
            "awayTeam": null
          },
          "halfTime": {
            "homeTeam": null,
            "awayTeam": null
          },
          "extraTime": {
            "homeTeam": null,
            "awayTeam": null
          },
          "penalties": {
            "homeTeam": null,
            "awayTeam": null
          }
        },
        "homeTeam": {
          "id": 527,
          "name": "AS Saint-Étienne"
        },
        "awayTeam": {
          "id": 546,
          "name": "Racing Club de Lens"
        },
        "referees": []
      },
      {
        "id": 297139,
        "competition": {
          "id": 2015,
          "name": "Ligue 1",
          "area": {
            "name": "France",
            "code": "FRA",
            "ensignUrl": "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg"
          }
        },
        "season": {
          "id": 596,
          "startDate": "2020-08-22",
          "endDate": "2021-05-23",
          "currentMatchday": 18,
          "winner": null
        },
        "utcDate": "2021-03-15T00:00:00Z",
        "status": "SCHEDULED",
        "matchday": 29,
        "stage": "REGULAR_SEASON",
        "group": "Regular Season",
        "lastUpdated": "2020-07-16T18:50:57Z",
        "odds": {
          "msg": "Activate Odds-Package in User-Panel to retrieve odds."
        },
        "score": {
          "winner": null,
          "duration": "REGULAR",
          "fullTime": {
            "homeTeam": null,
            "awayTeam": null
          },
          "halfTime": {
            "homeTeam": null,
            "awayTeam": null
          },
          "extraTime": {
            "homeTeam": null,
            "awayTeam": null
          },
          "penalties": {
            "homeTeam": null,
            "awayTeam": null
          }
        },
        "homeTeam": {
          "id": 546,
          "name": "Racing Club de Lens"
        },
        "awayTeam": {
          "id": 545,
          "name": "FC Metz"
        },
        "referees": []
      },
      {
        "id": 297150,
        "competition": {
          "id": 2015,
          "name": "Ligue 1",
          "area": {
            "name": "France",
            "code": "FRA",
            "ensignUrl": "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg"
          }
        },
        "season": {
          "id": 596,
          "startDate": "2020-08-22",
          "endDate": "2021-05-23",
          "currentMatchday": 18,
          "winner": null
        },
        "utcDate": "2021-03-22T00:00:00Z",
        "status": "SCHEDULED",
        "matchday": 30,
        "stage": "REGULAR_SEASON",
        "group": "Regular Season",
        "lastUpdated": "2020-07-16T18:50:57Z",
        "odds": {
          "msg": "Activate Odds-Package in User-Panel to retrieve odds."
        },
        "score": {
          "winner": null,
          "duration": "REGULAR",
          "fullTime": {
            "homeTeam": null,
            "awayTeam": null
          },
          "halfTime": {
            "homeTeam": null,
            "awayTeam": null
          },
          "extraTime": {
            "homeTeam": null,
            "awayTeam": null
          },
          "penalties": {
            "homeTeam": null,
            "awayTeam": null
          }
        },
        "homeTeam": {
          "id": 576,
          "name": "RC Strasbourg Alsace"
        },
        "awayTeam": {
          "id": 546,
          "name": "Racing Club de Lens"
        },
        "referees": []
      },
      {
        "id": 297159,
        "competition": {
          "id": 2015,
          "name": "Ligue 1",
          "area": {
            "name": "France",
            "code": "FRA",
            "ensignUrl": "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg"
          }
        },
        "season": {
          "id": 596,
          "startDate": "2020-08-22",
          "endDate": "2021-05-23",
          "currentMatchday": 18,
          "winner": null
        },
        "utcDate": "2021-04-05T00:00:00Z",
        "status": "SCHEDULED",
        "matchday": 31,
        "stage": "REGULAR_SEASON",
        "group": "Regular Season",
        "lastUpdated": "2020-07-16T18:50:57Z",
        "odds": {
          "msg": "Activate Odds-Package in User-Panel to retrieve odds."
        },
        "score": {
          "winner": null,
          "duration": "REGULAR",
          "fullTime": {
            "homeTeam": null,
            "awayTeam": null
          },
          "halfTime": {
            "homeTeam": null,
            "awayTeam": null
          },
          "extraTime": {
            "homeTeam": null,
            "awayTeam": null
          },
          "penalties": {
            "homeTeam": null,
            "awayTeam": null
          }
        },
        "homeTeam": {
          "id": 546,
          "name": "Racing Club de Lens"
        },
        "awayTeam": {
          "id": 523,
          "name": "Olympique Lyonnais"
        },
        "referees": []
      }
    ]
  },
  "youtube": {
    "kind": "youtube#searchListResponse",
    "etag": "NNjyCaL968hU2MxWElkI-vzlpio",
    "nextPageToken": "CAEQAA",
    "regionCode": "IE",
    "pageInfo": {
      "totalResults": 16099,
      "resultsPerPage": 1
    },
    "items": [
      {
        "kind": "youtube#searchResult",
        "etag": "Q3Uenzn8w7qDU43ibxsZbX_7D1Y",
        "id": {
          "kind": "youtube#video",
          "videoId": "jFqSncpRtDo"
        },
        "snippet": {
          "publishedAt": "2020-12-24T00:54:16Z",
          "channelId": "UCQsH5XtIc9hONE1BQjucM0g",
          "title": "RC LENS - STADE BRESTOIS 29 (2 - 1) - Résumé - (RCL - SB29) / 2020-2021",
          "description": "Revivez les meilleurs moments de RC LENS - STADE BRESTOIS 29 (2-1) en vidéo. Ligue 1 Uber Eats - Saison 2020/2021 - 17ème journée STADE ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/jFqSncpRtDo/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/jFqSncpRtDo/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/jFqSncpRtDo/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Ligue 1 Uber Eats",
          "liveBroadcastContent": "none",
          "publishTime": "2020-12-24T00:54:16Z"
        }
      }
    ]
  }
}
			console.log(response);
			var standing = response.standing;
			var matches = response.matches;
			var youtubeVideo = response.youtube;

			var lens = findLens(standing);
			console.log("Standing: " + lens);
			updateStanding(lens);


			if (isMatchLive(matches)) {
				document.getElementById("contener").innerHTML = '<h1 class="center">Lens joue en ce moment, tu n\'as rien à faire ici.</h1>';
			} else {
				var nextMatch = findNextMatch(matches);
				var previousMatch = findPreviousMatch(matches);
				console.log(nextMatch);
				console.log(previousMatch);

				removeLoadingScreen();
				updateNextOpponent(nextMatch);
				updatePreviousOpponent(previousMatch);
		        
				initTimer(nextMatch.utcDate);
		    }

		    updateVideoResume(youtubeVideo.items[0].id.videoId);
	// 	},
	// 	error: function(xhr, status, error) {
	// 	  alert(xhr.responseText);
	// 	}
	// });
}

function initTimer (date) {
	Tick.count.down(date).onupdate = function(value) {
		localTick.value = value;
	}
}

function findLens(response) {
	for (i in response.standings[0].table) {
		if (response.standings[0].table[i].team.id == 546) {
			return response.standings[0].table[i];
		}
	}
}

function isMatchLive(response) {
	for (i in response.matches) {
		if(response.matches[i].status === "IN_PLAY" 
			|| response.matches[i].status === "PAUSED") {
			return true;
		}
	}
	return false;
}

function findNextMatch(response) {
	var nextMatch;

	for (i in response.matches) {
		if (nextMatch === undefined && response.matches[i].status === "SCHEDULED") {
			nextMatch = response.matches[i];
		} else if (response.matches[i].status === "SCHEDULED") {
			if (Date.parse(response.matches[i].utcDate) < Date.parse(nextMatch.utcDate)) {
				nextMatch = response.matches[i];
			}
		}
	}

	return nextMatch;
}

function updateNextOpponent(nextMatch) {
	var html = "Lens joue contre <b>" + getOpponentName(nextMatch) + "</b> dans :";
	document.getElementById("divOpponentNextMatch").innerHTML = html;
}

function updatePreviousOpponent(previousMatch) {
	var html = "<p class=\"souligne\">Dernier match:</p>";
	html += "<p>" + printMatchResult(previousMatch) + "</p>";
	document.getElementById("divOpponentPreviousMatch").innerHTML = html;
}

function updateStanding(lens) {
	var html = "<p class=\"souligne\">Classement:</p>";
	html += "<p>Nous sommes actuellement " + printPosition(lens.position) + " et 1<sup>er</sup> dans nos cœurs</p>";
	document.getElementById("divPosition").innerHTML = html;
}

function updateVideoResume(videoId) {
	var html = "<iframe width=\"560\" height=\"315\" src=\"//www.youtube.com/embed/" + videoId + "\" frameborder=\"0\" allowfullscreen></iframe>";
;
	document.getElementById("divVideoYoutube").innerHTML = html;
}

function removeLoadingScreen() {
	document.getElementById("loadingScreen").innerHTML = "";
}

function printPosition(position) {
	if (position == 1) {
		return "<b>1<sup>er</sup></b>";
	}
	return "<b>" + position + "<sup>e</sup></b>";
}

function printMatchResult(match) {
	if (match.score.extraTime.homeTeam !== null) {
		var finalScore = match.score.extraTime;
	} else if (match.score.fullTime.homeTeam !== null) {
		var finalScore = match.score.fullTime;
	}
	return match.homeTeam.name + " <b>" + finalScore.homeTeam + "</b> - <b>" + finalScore.awayTeam + "</b> " + match.awayTeam.name + "";
}

function getOpponentName(match) {
	if (match.awayTeam.id == 546) {
		return match.homeTeam.name;
	} else {
		return match.awayTeam.name;
	}
}

function findPreviousMatch(response) {
	var previousMatch;

	for (i in response.matches) {
		if (previousMatch === undefined && response.matches[i].status === "FINISHED") {
			previousMatch = response.matches[i];
		} else if (response.matches[i].status === "FINISHED") {
			if (Date.parse(response.matches[i].utcDate) > Date.parse(previousMatch.utcDate)) {
				previousMatch = response.matches[i];
			}
		}
	}

	return previousMatch;
}

function getDateIn99days() {
 	var d = new Date();
 	d.setDate(d.getDate()+99);
	return formatDate(d);
}

function getDateOut99days() {
 	var d = new Date();
 	d.setDate(d.getDate()-99);
	return formatDate(d);
}

function formatDate(d) {
	var month = d.getMonth()+1;
	var day = d.getDate();

	return d.getFullYear() + '-' +
		(month<10 ? '0' : '') + month + '-' +
		(day<10 ? '0' : '') + day;
}

var localTick;
function handleTickInit(tick) {
	var locale = {
	    YEAR_PLURAL: 'An',
	    YEAR_SINGULAR: 'Ans',
	    MONTH_PLURAL: 'Mois',
	    MONTH_SINGULAR: 'Mois',
	    WEEK_PLURAL: 'Semaines',
	    WEEK_SINGULAR: 'Semaine',
	    DAY_PLURAL: 'Jours',
	    DAY_SINGULAR: 'Jour',
	    HOUR_PLURAL: 'Heures',
	    HOUR_SINGULAR: 'Heure',
	    MINUTE_PLURAL: 'Minutes',
	    MINUTE_SINGULAR: 'Minute',
	    SECOND_PLURAL: 'Secondes',
	    SECOND_SINGULAR: 'Seconde',
	    MILLISECOND_PLURAL: 'Millisecondes',
	    MILLISECOND_SINGULAR: 'Milliseconde'
	};
	for (var key in locale) {
	    if (!locale.hasOwnProperty(key)) { continue; }
	    tick.setConstant(key, locale[key]);
	}

	localTick = tick;

	requestData();

}