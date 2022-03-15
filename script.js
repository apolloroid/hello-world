const submitTaskBtn = document.getElementById('submittaskbtn');
const theTaskList = document.getElementById('thetasklist')

submitTaskBtn.onclick = function() {
    const newTaskInput = document.getElementById('newtaskinput')
    const newListItem = document.createElement('li');
    const newListItemText = document.createTextNode(newTaskInput.value);
    newListItem.appendChild(newListItemText);
    console.log(newListItem);
    theTaskList.appendChild(newListItem)
};