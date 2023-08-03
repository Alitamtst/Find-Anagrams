/* //First Solution, time complexity: O(n³)

const anagrams = [
    "oz bilal tochberer",  
    "it's razorbill beachcomber", 
    "och robe tilblazer", 
    "bib chorizo cellarmaster", 
    "thor bble carizole", 
    "zll borcht aberoie", 
    "brzl orche atobile", 
    "dame shelburne characterizing", 
    "uber englishman characterized", 
    "agnes rhumbline characterized", 
    "rehab scrutinized charlemagne", 
    "dreams zurich interchangeable", 
    "bam hamster technocratic", 
    "mechatronic masterbatch", 
    "bam ratchet mechatronics"
    ]


const output = []

function isAnagramInArray(anagram, arr){
    for(let i=0; i < arr.length ; i++){
        let count = 0;
        let duplicate = -1;
        if(anagram.length == arr[i].length){
            for(let j=0; j < arr[i].length ; j++){
                duplicate = -1;
                for(let z=0; z < arr[i].length ; z++){
                    if( arr[i].charAt(j) == anagram.charAt(z)){
                        count++;
                        duplicate ++;
                    }
                }
                if(duplicate > 0 ){
                    count= count - duplicate;
                }
            }
            if(count == anagram.length){
                output.push(arr[i]);
            }
        }        
    }
    return output;
}

console.log(isAnagramInArray("Bob Ziroll Teacher", anagrams));

*/



//Second Solution, time complexity: O(n)

const anagrams = [
    "oz bilal tochberer",  
    "it's razorbill beachcomber", 
    "och robe tilblazer", 
    "bib chorizo cellarmaster", 
    "thor bble carizole", 
    "zll borcht aberoie", 
    "brzl orche atobile", 
    "dame shelburne characterizing", 
    "uber englishman characterized", 
    "agnes rhumbline characterized", 
    "rehab scrutinized charlemagne", 
    "dreams zurich interchangeable", 
    "bam hamster technocratic", 
    "mechatronic masterbatch", 
    "bam ratchet mechatronics"
    ]

    const output = []

    function isAnagramInArray(anagram, arr){
        anagram = anagram.split("").sort().join("");
        for(let i=0; i < arr.length ; i++){
            wordInArr = arr[i].split("").sort().join("");
            if(anagram.length == arr[i].length && anagram == wordInArr ){
                    output.push(arr[i]);
            }        
        }
        return output;
    }
    
    console.log(isAnagramInArray("Bob Ziroll Teacher", anagrams));
    