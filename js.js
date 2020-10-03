//ligue 1 id: 2015
//http://api.football-data.org/v2/competitions/2015/teams

//lens id : 546

// https://pqina.nl/flip/#presets


function getNextMatchAndStartTimer() {
	var param = "";
	param += "status=SCHEDULED,PAUSED,IN_PLAY";
	param += "&dateFrom=" + getCurrentDate();
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
			console.log(nextMatch);
	        
	    	Tick.count.down(nextMatch.utcDate).onupdate = function(value) {
	      	localTick.value = value;
	        };
		}
		
	});
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
		} else {
			if (Date.parse(response.matches[i].utcDate) < Date.parse(nextMatch.utcDate)
				&& response.matches[i].status === "SCHEDULED") {
				nextMatch = response.matches[i];
			}
		}
	}

	return nextMatch;
}



function getCurrentDate() {
	return formatDate(new Date());
}

function getDateIn99days() {
 	var d = new Date();
 	d.setDate(d.getDate()+99);
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

        // Uncomment to set labels to different language ( in this case Dutch )
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