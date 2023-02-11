const alertHello = () =>{
    alert("Hello");
}

const createTask = () =>{
    let taskName = document.getElementById("inputText").nodeValue;
    let listItem = document.createElement('li');
    listItem.appendChild(document.createTextNode(taskName));

    document.getElementById('taskList').appendChild(listItem);
}