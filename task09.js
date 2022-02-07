function findVowels(str)
{
   let foundVowels = "";
   str  = str.toLowerCase();
  
   const vowels = "aeiouAEIOU";

    for (let i = 0; i < str.length; i++)
    {
        if (vowels.includes(str[i]))
        {
          if(!foundVowels.includes(str[i])){
            foundVowels += str[i]  + ",";
          }
        }
    }
    foundVowels = "Vowels: " + foundVowels; 
    console.log(foundVowels);
}
