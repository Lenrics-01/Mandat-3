let nom = document.getElementById("name");
let btn = document.getElementById("btn");


btn.addEventListener("click", function() {
        location.reload();
        nom.focus();
        nom.value = "";
});