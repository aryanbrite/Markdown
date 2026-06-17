console.log("hellow");
let editor = document.getElementById("editor");
let prev = document.getElementById("prev")
editor.addEventListener("input",function(){prev.innerText=editor.value});