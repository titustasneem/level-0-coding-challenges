function celcius(tempInCel)
{
    //°C to °F	Divide by 5, then multiply by 9, then add 32
  
  let tempInFah = (tempInCel / 5) * 9 + 32;
  return tempInFah;

}


  


function fahrenheit(degreeF)
{
  
  let degreeC = (degreeF - 32) * 5 / 9;
  return degreeC;
}
//°F to °C	Deduct 32, then multiply by 5, then divide by 9