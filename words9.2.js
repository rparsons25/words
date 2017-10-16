var xhr = new XMLHttpRequest ();
xhr.onreadystatechange = function (){
  if (xhr.readyState === 4) {
    console.log(xhr.responseText);
    console.log(typeof xhr.responseText);
    var words1 = JSON.parse (xhr.responseText);
    
    console.log (words1.length);
    console.log (words1[20].word);
    console.log (words1[20].word.length);
      findWord(words1);
      console.log (randomWord);
  }
  };

xhr.open ('Get', 'level1.json');

xhr.send();
//global variables
var y = 0;
var x = 0;

//random word function
function findWord(words1) {
   if (y < 2){
        randomWord = words1[x][0];
        console.log (randomWord);
        g1 = randomWord
        alert (g1 + ' g1');
        alert (x);
       printHTML();
                }else {
                    console.log ('Oops! ' +randomWord+ ' has too many points!');
                    randomNumber();
                }
    return randomWord;
}


    
