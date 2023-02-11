const alertHello = () =>{
    alert("Hello");
}

const createTask = () =>{
    let taskName = document.getElementById("input-text").value; // obtaining text value
    console.log(taskName);

    let li = document.createElement('li'); // creating list itself

    li.classList.add("list-item"); //setting class to the list item

    let checkbox = document.createElement('input'); //creating input for checkbox
    checkbox.setAttribute("type","checkbox"); // setting attribute to make it chackbox

    let a = document.createElement('a');


    let img = document.createElement('img'); // creating img
    img.classList.add("trash-icon");
    img.setAttribute("src","https://cdn-icons-png.flaticon.com/512/1869/1869668.png");

    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(taskName));
    li.appendChild(img);

    document.getElementById('task-list').appendChild(li);
}

const findTask = () => {

}

const deleteTask = () => {
    list = document.getElementById('task-list').children;
    
    for(const child of list){
        console.log(child);
    }

    document.activeElement.id
}