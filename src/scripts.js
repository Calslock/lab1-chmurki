fields = ["#lb", "#ny", "#sd"];

function getTime(){
    $.ajax({
        url: 'time.php',
        success: function(data){
            var timedata = data.slice(0, -1);
            timedata = timedata.split('!');
            for (i in fields){
                $(fields[i]).html(timedata[i]);
            }
        }
    })
    setTimeout(getTime, 500);
}