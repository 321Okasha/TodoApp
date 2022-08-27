var list = document.getElementById('list')
function addTodo(){
    var todo_item = document.getElementById('todo_item')

    // create li tag with textNode
    var li = document.createElement('li')
    var liText = document.createTextNode(todo_item.value)
    li.appendChild(liText);
    list.appendChild(li)
    todo_item.value = " ";

    // delete Btn
    var delBtn = document.createElement('button')
    var delText = document.createTextNode(" Delete ")
    delBtn.setAttribute("class","btn")
    delBtn.setAttribute("onclick","deleteItem(this)")
    delBtn.appendChild(delText)
    li.appendChild(delBtn)

    var editBtn = document.createElement('button')
    var editText = document.createTextNode(" EDIT ")
    editBtn.appendChild(editText)
    li.appendChild(editBtn)
    editBtn.setAttribute("onclick","editItem(this)")
    console.log(li)
}
function deleteItem(e){

    e.parentNode.remove();
}
function deleteAll(){
    list.innerHTML = " ";
}
function editItem(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter edit value ", val)
    e.parentNode.firstChild.nodeValue = editValue;
}