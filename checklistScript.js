console.log("Script Working!");

function addToList(){
    //GET INPUT
    

    var inputValue = document.getElementById("inputID").value;  //get input text using getElementById

    
//CREATE ITEM

    
    var li = document.createElement("li"); //create list
    var text = document.createTextNode(inputValue); //create text 
    li.appendChild(text); //add text to list
    
    //check input
    if(inputValue === ''){ //check there is text 
        alert("Must input text");
    }
    else{
        document.getElementById("list").appendChild(li); //adds item to list 
       
    }

    document.getElementById("inputID").value = "";
    
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close"; 
    span.appendChild(text);
    li.appendChild(span); 

    for (i=0; i < close.length; i++){
        close[i].onclick = function(){
            var div = this.parentElement;
            div.style.display = "none"; 
        }
    }
}



    
//Close button crteation 
var myNodeList = document.getElementById("list");
var i; 
for(i=0;i<myNodeList.length;i++){
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close"; 
    span.appendChild(text);
    myNodeList[i].appendChild(span);
}

//close button functionality 
var close = document.getElementsByClassName("close");
var i; 
for (i = close.length;i < close.length; i++){
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = "none"; 
    }
}

//Add check 
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);