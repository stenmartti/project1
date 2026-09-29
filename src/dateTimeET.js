const dateFormattedET = function(opt){
	let timeNow = new Date();
	let monthNamesET = ['jaanuar', 'veebruar', 'mÃ¤rts', 'aprill', 'mai', 'juuni', 'juuli', 'august', 'september', 'oktoober', 'november', 'detsember'];
	if(opt == 1){
		monthNamesET = ['nÃ¤Ã¤rikuu', 'kÃ¼Ã¼nlakuu', 'paastukuu', 'jÃ¼rikuu', 'lehekuu', 'jaanikuu', 'heinakuu', 'lÃµikuskuu', 'mihklikuu', 'viinakuu', 'talvekuu', 'jÃµulukuu'];
	}
	return timeNow.getDate() + '. ' + monthNamesET[timeNow.getMonth()] + ' ' + timeNow.getFullYear();
}

const addLeadZero = function(numValue){
	if(numValue < 10){
		numValue = '0' + numValue;
	}
	return numValue;
}

const timeFormattedET = function(){
	let timeNow = new Date();
	let hourNow = timeNow.getHours();
	let minuteNow = timeNow.getMinutes();
	let secondNow = timeNow.getSeconds();
	let timeFormatted = hourNow + ':' + addLeadZero(minuteNow) + ':' + addLeadZero(secondNow);
	return timeFormatted;
}

const weekdayET = function(){
	let weekDay = new Date().getDay();
	const weekdayNamesET = ['pÃ¼hapÃ¤ev', 'esmaspÃ¤ev', "teisipÃ¤ev", 'kolmapÃ¤ev', 'neljapÃ¤ev', 'reede', 'laupÃ¤ev'];
	return weekdayNamesET[weekDay];
}

//ekspordin kÃµik vajaliku
module.exports = {fullDate: dateFormattedET, fullTime: timeFormattedET, day: weekdayET}