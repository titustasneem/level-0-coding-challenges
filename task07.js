function celcius(tempInCel)
{
    //°C to °F	Divide by 5, then multiply by 9, then add 32
  
  var tempInFah = (tempInCel / 5) * 9 + 32;
console.log(tempInFah);

}
celcius(41);

  


function fahrenheit(degreeF)
{
  
   var degreeC = (degreeF - 32) * 5 / 9;
console.log(degreeC);
}
fahrenheit(126);
//°F to °C	Deduct 32, then multiply by 5, then divide by 9