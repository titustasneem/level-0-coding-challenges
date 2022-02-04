function findCommonCharacters(str1, str2)
{
    var foundCharacters = "";

    for (let i = 0; i < str1.length; i++)
 {
    if (str2.includes(str1[i]))
    {
     foundCharacters += str1[i] + ",";
    }

 } 
  // remove last comma
  if (foundCharacters.endsWith(","))
  {
    foundCharacters = foundCharacters.substring(0, foundCharacters.length-1);
  }

 foundCharacters = "Common letters: " + foundCharacters;
 console.log(foundCharacters);
} 
findCommonCharacters("Tasneem", "Titus");