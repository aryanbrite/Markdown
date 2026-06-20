console.log("hellow");
let editor = document.getElementById("editor");
let prev = document.getElementById("prev")
editor.value = localStorage.getItem('markdown')
prev.innerHTML=marked.parse(editor.value);
editor.addEventListener("input",function(){prev.innerHTML=marked.parse(editor.value);
    localStorage.setItem('markdown',editor.value)
});
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js")
        .then(() => console.log("SW registered"))
        .catch(err => console.error("SW failed", err));
}