console.log("hellow");
let editor = document.getElementById("editor");
let prev = document.getElementById("prev")
editor.addEventListener("input",function(){prev.innerHTML=marked.parse(editor.value)});