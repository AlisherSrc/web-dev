const alertHello = () =>{
    alert("Hello");
}

const createTask = () =>{
    let taskName = document.getElementById("inputText").value;
    console.log(taskName);
    let listItem = document.createElement('div'); // createing div itself
    listItem.classList.add("list-item");

    let textInput = document.createElement('input'); //creating input
    textInput.setAttribute("type","checkbox");

    let li = document.createElement('li');
    li.appendChild(document.createTextNode(taskName));

    let img = document.createElement('img');
    img.classList.add("trash-icon");

    document.getElementById('taskList').appendChild(listItem);
}

