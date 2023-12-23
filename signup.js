const cancelButton = document.getElementById("cancel");
const male=document.querySelector("#gender-1");
const female=document.querySelector("#gender-2");
    cancelButton.addEventListener("click", function() {
        window.close("signup.html");
        window.location.href = "main-1.html";
    });



function getans(){
    const gender=document.querySelectorAll(".gender input[type=submit]");

    gender.forEach(e=>{
        e.onclick=()=>{
            gender.forEach(button=>button.style.backgroundColor="");
            e.style.backgroundColor="Black";
        }
    })
}
getans();

