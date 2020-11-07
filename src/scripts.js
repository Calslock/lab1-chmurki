fields = ["#lb", "#ny", "#sd"];
timezones = ["Europe/Warsaw", "America/New_York", "Australia/Sydney"];

function getTime(){
    var time;
    for(i in fields){
        $(fields[i]).html(luxon.DateTime.local().setZone(timezones[i]).setLocale('pl').toFormat("HH:mm:ss, dd LLL yyyy"));
    }
    setTimeout(getTime, 500);
}