var container = document.getElementById('container');

// Creating full todo list----------------------------------------------------------

// creating h1---------------------------
var h1 = document.createElement('h1');
container.appendChild(h1);
h1.innerHTML = 'To Do List';

// creating div for input and button------------------------
var div = document.createElement('div');
container.appendChild(div);
div.setAttribute('id', 'input-container');

// creating input field-----------------------------
var input = document.createElement('input');
div.appendChild(input);
input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'Enter To Do Tasks');
input.setAttribute('id', 'input');

// creating add button-----------------------------
var button = document.createElement('button');
div.appendChild(button);
button.innerHTML = 'Add Task';
button.setAttribute('id', 'add-button');
button.setAttribute('onclick', 'addListTasks()');

// creating list container ul-----------------------------
var listContainer = document.createElement('ul');
container.appendChild(listContainer);
listContainer.setAttribute('id', 'list-container');

// Creating Function for list tasks value-----------------------------
function addListTasks() {

    if (input.value === "") {
        alert('Please enter the Task');
        return;
    }

    // Creating list li for tasks-----------------------------
    var list = document.createElement('li');
    list.setAttribute('id', 'list');
    listContainer.appendChild(list);

    // creating p tag for list tasks value-----------------------------
    var inpValue = document.createElement('p');
    list.appendChild(inpValue);
    inpValue.innerHTML = input.value;

    // Creating edit button-----------------------------
    var editBTN = document.createElement('img');
    editBTN.setAttribute('src', 'https://cdn-icons-png.freepik.com/256/8679/8679951.png')
    // editBTN.style.width = '45px'; // adjust size as needed
    list.appendChild(editBTN);

    // Adding addEventListener function for Editing list tasks value -----------------------------
    editBTN.addEventListener('click', function () {
        var updateTaksValue = prompt("Edit your task:", inpValue.innerHTML);
        if (updateTaksValue === null || updateTaksValue === "") {
            return;
        };
        inpValue.innerHTML = updateTaksValue;
    });

    // Creating delete button-----------------------------
    var deleteBTN = document.createElement('img');
    deleteBTN.setAttribute('src', 'https://images.freeimages.com/fic/images/icons/99/office/256/close.png');
    list.appendChild(deleteBTN);

    // Adding addEventListener function for Deleting list tasks -----------------------------
    deleteBTN.addEventListener('click', function () {
        listContainer.removeChild(list);
    });

    input.value = "";
}
