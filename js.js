//ligue 1 id: 2015
//http://api.football-data.org/v2/competitions/2015/teams

//lens id : 546

// https://pqina.nl/flip/#presets


function getNextMatchAndStartTimer() {
	var param = "";
	param += "status=SCHEDULED,PAUSED,IN_PLAY,FINISHED";
	param += "&dateFrom=" + getDateOut99days();
	param += "&dateTo=" + getDateIn99days();

	$.ajax({
		headers: { 'X-Auth-Token': '0c90d6e5fabd41a1ae0ef8a0121b3886' },
		url: 'http://api.football-data.org/v2/teams/546/matches?' + param,
		dataType: 'json',
		type: 'GET'
	}).done(function(response) {
		console.log(response);

		if (matchLive(response)) {
			document.getElementById("contener").innerHTML = '<h1 class="center">Lens joue en ce moment, tu n\'as rien à faire ici.</h1>';
		} else {
			var nextMatch = filterNextMatch(response);
			var previousMatch = filterPreviousMatch(response);
			console.log(nextMatch);
			console.log(previousMatch);

			removeLoadingScreen();
			updateNextOpponent(nextMatch);
			updatePreviousOpponent(previousMatch);
	        
			Tick.count.down(nextMatch.utcDate).onupdate = function(value) {
			localTick.value = value;
	        };
		}
	});


	$.ajax({
		headers: { 'X-Auth-Token': '0c90d6e5fabd41a1ae0ef8a0121b3886' },
		url: 'http://api.football-data.org/v2/competitions/2015/standings',
		dataType: 'json',
		type: 'GET'
	}).done(function(response) {
		console.log(response);

		var lens = getLens(response);
		console.log(lens);

		updateStanding(lens);
		
	});
}

function getLens(response) {
	for (i in response.standings[0].table) {
		if (response.standings[0].table[i].team.id == 546) {
			return response.standings[0].table[i];
		}
	}
}

function matchLive(response) {
	for (i in response.matches) {
		if(response.matches[i].status === "IN_PLAY" 
			|| response.matches[i].status === "PAUSED") {
			return true;
		}
	}
	return false;
}

function filterNextMatch(response) {
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

function filterPreviousMatch(response) {
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

	getNextMatchAndStartTimer();

}