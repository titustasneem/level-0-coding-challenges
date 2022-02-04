function convertToHoursAndMinutes(num)
{
   var hours = Math.floor (num / 60);
   var minutes = num % 60;
   var results = hours +  (hours == 1 ? " hour" : " hours")  + ", " + minutes + (minutes == 1 ? " minute" : " minutes");

    console.log(results);
}
convertToHoursAndMinutes(181);