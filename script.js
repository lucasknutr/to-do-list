// let button = document.getElementById("enter");
// let newItem = document.getElementById("userinput");
// let li = document.querySelector("ul");

// button.addEventListener("click", function () 
//     {
//     let newLi = document.createElement("li");
//     newLi.appendChild(document.createTextNode(newItem.value));
//     li.appendChild(newLi);
//     newItem.value = "";
//     }
//     )

let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let list = document.querySelector("ul");

button.addEventListener("click", function () {
    if (input.value.length > 0) {
        let newList = document.createElement("li");
        newList.appendChild(document.createTextNode(input.value));
        list.appendChild(newList);
        input.value = "";
        
}
    else {
        input.value = "";
    }
}
)

