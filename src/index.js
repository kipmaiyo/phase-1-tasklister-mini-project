document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form =document.querySelector("#create-task-form");
  form.addEventListener("submit", (e) => {
      e.preventDefault();
      const Tasks = e.target.querySelector("#new-task-description").value
      buildList(Tasks);
      form.reset();
  })
});



function buildList(Tasks){
  
  let tasksList = document.getElementById("tasks");
  let li = document.createElement("li");
  li.textContent = `${Tasks} `;
  let btn = document.createElement("button");
  btn.addEventListener("click", handleDelete);
  btn.textContent = "X";
  li.appendChild(btn);
  tasksList.appendChild(li);
}

function handleDelete (e){
  e.target.parentNode.remove()
}
