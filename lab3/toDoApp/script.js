var cnt = 0;

const getUniqueId = () =>{
    cnt++;
    return cnt;
}

const alertHello = () =>{
    alert("Hello");
}

const createTask = () =>{
    let taskName = document.getElementById("input-text").value; // obtaining text value

    let li = document.createElement('li'); // creating list itself

    li.classList.add("list-item"); //setting class to the list item

    let checkbox = document.createElement('input'); //creating input for checkbox
    checkbox.setAttribute("type","checkbox"); // setting attribute to make it chackbox

    let img = document.createElement('img'); // creating img
    img.classList.add("trash-icon"); 
    img.setAttribute("src","https://cdn-icons-png.flaticon.com/512/1869/1869668.png");


    let button = document.createElement('button');
    button.classList.add("trash");
    button.setAttribute("onclick","deleteTask()");
    button.appendChild(img);

    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(taskName));
    li.appendChild(button);

    li.id = getUniqueId(); // setting id to it it order to be able to delte this task

    document.getElementById('task-list').appendChild(li);
    
}

const deleteTask = () => {
    list = document.getElementById('task-list').children;

    for(const child of list){
        if(child.id == document.activeElement.parentNode.id){
            child.remove();
        }
    }
}