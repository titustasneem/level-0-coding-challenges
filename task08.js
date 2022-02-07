function convertToHoursAndMinutes(num)
{
   const hours = Math.floor (num / 60);
   const minutes = num % 60;
   const results = hours +  (hours === 1 ? " hour" : " hours")  + ", " + minutes + (minutes == 1 ? " minute" : " minutes");

    console.log(results);
}