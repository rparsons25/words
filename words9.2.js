var xhr = new XMLHttpRequest ();
xhr.onreadystatechange = function (){
  if (xhr.readyState === 4) {
    console.log(xhr.responseText);
    console.log(typeof xhr.responseText);
    var words1 = JSON.parse (xhr.responseText);
    
    console.log (words1.length);
    console.log (words1[20].word);
    console.log (words1[20].word.length);
      randomNumber();

  }
  };

xhr.open ('Get', 'level1.json');

xhr.send();
//global variables
var y = "";
var x = 0;

//random word function
function randomNumber(){
    x = Math.floor(Math.random()*words1.length);
    y = words1[x].word;
    console.log(y);
    return randomNumber;
}



    
