//your code here

var list = document.getElementById("todoList");
function addfunction(){
	var value= document.getElementById("newTodoInput").value;
	var li = document.createElement("LI");
	var textNode = document.createTextNode(value);
	li.appendChild(textNode);
	list.appendChild(li);	

	list.addEventListner("click",function(){
	list.removeChild();
	});
	
}

