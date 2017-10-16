//global variables




var xhr = new XMLHttpRequest ();
xhr.onreadystatechange = function (){
  if (xhr.readyState === 4) {
    console.log(xhr.responseText);
    console.log(typeof xhr.responseText);
    var words1 = JSON.parse (xhr.responseText);
    
    console.log (words1.length);
    console.log (words1[20].word);
    console.log (words1[20].word.length);
      randomNumber(words1);
//random word function
function randomNumber(){
   var x = Math.floor(Math.random()*words1.length);
   var y = words1[x].word;
    console.log(y);
    return randomNumber;
}
  }
  };

xhr.open ('Get', 'level1.json');

xhr.send();




    
