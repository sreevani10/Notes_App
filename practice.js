const notesContainer = document.querySelector(".notes-Container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes(){
    notesContainer.innerHTML=localStorage.getItem("notes");
}
showNotes();
function updateStrorage(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}
createBtn.addEventListener("click",()=>{
    let inputBox = document.createElement("p");
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable","true");
    let img = document.createElement("img");
    img.src="images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);

})

notesContainer.addEventListener("click",function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStrorage()
    }
    else if(e.target.tagName==="P"){
        notes= document.querySelectorAll(".input-box")
        notes.forEach(nt =>{
            nt.onkeyup = function(){
                updateStrorage();
            }
        })
    }
})

document.addEventListener("keydown",event =>{
    if(event.key==="Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})



