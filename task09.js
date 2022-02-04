function findVowels(str)//"My Old name is Tasneem"
{
   var foundVowels = "";
  // var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
   var VOWELS = "aeiouAEIOU";

    for (let i = 0; i < str.length; i++)
    {
        if (VOWELS.includes(str[i]))
        {
          foundVowels += str[i]  + ",";
        }
    }
    foundVowels = "Vowels: " + foundVowels; 
    console.log(foundVowels);

   
}
findVowels("My Old name is Tasneem");

