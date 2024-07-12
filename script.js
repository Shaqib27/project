const inputfield = document.getElementById("inputfield");
const taskList = document.getElementById("taskList");


function additem() {
    if (inputfield.value == "") {
        alert("please add some task");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputfield.value;
        taskList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputfield.value = "";
    savedata();
}

taskList.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savedata();
    } else {
        if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
            savedata();
        }
    }
}, false)

function savedata() {
    localStorage.setItem("data", taskList.innerHTML);
}

function showdata() {
    taskList.innerHTML = localStorage.getItem("data");
}

showdata();