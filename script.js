let input = document.getElementById("userinput");
let button = document.getElementById("enter");
let list = document.querySelector("ul");
let items = document.querySelectorAll("li");


function createNewItem () {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    list.appendChild(li);
    input.value = "";
}

button.addEventListener("click", function () {
    if (input.value.length > 0) {
        createNewItem ()
}
})

items.forEach(element => {
    element.addEventListener("click", function () {
        element.classList.toggle("done");
    })
});

