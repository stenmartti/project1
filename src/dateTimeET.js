const dateFormattedET = function(){
    let timeNow = new Date();
    let dateNow = timeNow.getDate();
    let monthNow = timeNow.getMonth();
    let yearNow = timeNow.getFullYear();
    let dayNow = timeNow.getDay();
    let dayNamesET = ['pühapäev', 'esmaspäev', 'teisipäev', 'kolmapäev', 'neljapäev', 'reede', 'laupäev',];
    let kalendri_tüüp = Math.floor(Math.random());
    let monthNamesET = ['jaanuar', 'veebruar', 'märts', 'aprill', 'mai', 'juuni', 'juuli', 'august', 'september', 'oktoober', 'november', 'detsember'];
    let monthNamesRahvas = ['näärikuu', 'küünlakuu', 'paastukuu', 'jürikuu', 'lehekuu', 'jaanikuu', 'heinakuu', 'lõikuskuu', 'mihklikuu', 'viinakuu', 'talvekuu', 'jõulukuu'];
    if (kalendri_tüüp == 1){
        return dayNamesET[dayNow] + ' ' + dateNow + '.' + monthNamesET[monthNow] + ' ' + 'aasta ' + yearNow;
    }
    else if (kalendri_tüüp == 0){
        return dayNamesET[dayNow] + ' ' + dateNow + '.' + monthNamesRahvas[monthNow] + ' ' + 'aasta ' + yearNow;
    }
}

const timeFormattedET = function(){
    let timeNow = new Date();
    let hourNow = timeNow.getHours();
    let minuteNow = timeNow.getMinutes();
    let secondNow = timeNow.getSeconds();
    //console.log(timeNow);
    if (minuteNow < 10){
        minuteNow = '0' + timeNow.getMinutes();
    }
    if (secondNow < 10){
        secondNow = '0' + timeNow.getSeconds();
    }
    return hourNow + ':' + minuteNow + ':' + secondNow;
}

//ekspordin kõik vajalikud funtktsioonid koos mugavamate nimedega
module.exports = {time: timeFormattedET, date: dateFormattedET};