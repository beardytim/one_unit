
function calculate(){
    var message;
    var strength = document.getElementById("strength").value;
    if(strength<=0){
        message = "Enter a positive number :-)";
    } else if(strength>100){
        message = "More than a 100% WOW";
    } else {
        var measurement = (1000/strength);
        message = "One unit of a "+round(strength)+"% alcoholic drink is <strong>"+round(measurement)+"ml</strong>.";
    }
    document.getElementById("message").innerHTML = message;
}

function round(value){
    return Number(Number(value).toFixed(2));
}
