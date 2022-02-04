function convertToHoursAndMinutes(num)
{
   let hours = Math.floor (num / 60);
   let minutes = num % 60;
   let results = hours +  (hours === 1 ? " hour" : " hours")  + ", " + minutes + (minutes == 1 ? " minute" : " minutes");

    console.log(results);
}
