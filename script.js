//your code here

// var list = document.getElementById("todoList");
// function addfunction(){
// 	var value= document.getElementById("newTodoInput").value;
// 	var li = document.createElement("LI");
// 	var textNode = document.createTextNode(value);
// 	li.appendChild(textNode);
// 	list.appendChild(li);	

// 	list.addEventListner("click",function(){
// 	list.removeChild();
// 	});
	
// }

function addList(){
	var item= document.getElementById("newTodoInput");
	var list = document.getElementById("todoList");
	if(item.value !=""){
		var li = document.createElement("LI");
		li.appendChild(document.createTextNode(item.value));
		list.appendChild(li);

		item.value ="";
		li.onclick = function(){
        this.parentNode.removeChild(this);
      }
	}
	else{
 
    // Alert msg when value of box is "" empty.
    alert("plz add a value to item");
  }
}

