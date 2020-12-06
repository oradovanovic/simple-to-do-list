const ul = document.querySelector('ul');
const input = document.getElementById('todoinput');
const btn = document.getElementById('btn');



function addItem(){
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    var dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("X"));
    li.appendChild(dBtn);
    dBtn.addEventListener("click", deleteListItem);

    li.addEventListener('click',completeListItem);

    function deleteListItem(){
        li.classList.add('delete');
    }

    function completeListItem(){
        li.classList.toggle('done');
    }
}

function addAfterClick(){
    if(input.value.length > 0){
        addItem();
    }
}

function addAfterEnter(){
    if(input.value.length > 0 && event.which === 13){
        addItem();
    }
}

btn.addEventListener('click', addAfterClick);
input.addEventListener('keypress', addAfterEnter);
