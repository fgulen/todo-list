
let inputField = document.getElementById("input-box");
let adToListButton = document.getElementById("button");
let container =document.getElementById("container");

adToListButton.addEventListener("click", function(){
    console.log(inputField.value);
    let list = document.createElement("li");
    list.innerText = inputField.value;
    container.appendChild(list);

    inputField.value ="";


    list.addEventListener("click", function(){
        list.style.textDecoration ="line-through";
    })

    list.addEventListener("dblclick", function(){
        container.removeChild(list);
    })
    
})



