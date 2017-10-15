var xhr = new XMLHttpRequest ();
xhr.onreadystatechange = function (){
  if (xhr.readyState === 4) {
    console.log(xhr.responseText);
    
    console.log(typeof xhr.responseText);
    var words1 = JSON.parse (xhr.responseText);
      console.log (words1[20].word);
  }
    
  };
xhr.open ('Get', 'level1.json');

xhr.send();


    
