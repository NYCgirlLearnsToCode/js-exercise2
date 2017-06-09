var userSubmit = document.querySelector('#user-submit');
var toDoList = document.querySelector('#to-do-list');
function addToDo(event){
	event.preventDefault();// prevents form pg from refreshing

	var userInput = document.querySelector('#user-input');//brings back single element userinput
	

	if(userInput.value === ' '){
		return false;//stops any other code from executing underneath
	}
	toDoList.innerHTML = '<li> ' + userInput.value + '<i class="fa fa-window-close close-to-do" aria-hidden="true"></i></li>' + toDoList.innerHTML ;//the order counts puts new li on top

	//takes content of innerHTML and adds it to the top of the list

	userInput.value = ' '; //clears out user input value to empty string

}
function removeToDo(event) {
	if(event.target.classList.contains('close-to-do')){//classlist manipulates classes true/false
		var li = event.target.parentElement;
		toDoList.removeChild(li);//mdethod tht u pass in element that you want to remove

		
	}
}

toDoList.addEventListener('click', removeToDo, false); 
userSubmit.addEventListener('click', addToDo, false);
