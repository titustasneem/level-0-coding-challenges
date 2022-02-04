function findVowels(str)//"My Old name is Tasneem"
{
   let foundVowels = "";
  
   let VOWELS = "aeiouAEIOU";

    for (let i = 0; i < str.length; i++)
    {
        if (VOWELS.includes(str[i]))
        {
          if(!foundVowels.includes(str[i])){
            foundVowels += str[i]  + ",";
          }
        }
    }
    foundVowels = "Vowels: " + foundVowels; 
    console.log(foundVowels);

   
}


