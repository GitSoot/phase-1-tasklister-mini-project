document.addEventListener("DOMContentLoaded", () => {
  // Const for elements to feed feedback
  const text = document.getElementById("create-task-form");
  const addTaskButton = document.getElementById("new-task-description");
  const saveTaskButton = document.getElementById("new-task-priority");
  const listBox = document.getElementById("tasks");
  text.addEventListener("submit", todo);
});
//feedback expected
function todo(e) {
  e.preventDefault();
  let newTodo = document.getElementById("new-task-description");
  let newTask = document.createElement("li");
  newTask.innerText = ` Pending ${newTodo.value} task`;

  appendNewTask(newTask);
}
//newTaskList
const appendNewTask = (list) => {
  document.getElementById("tasks").appendChild(list);
};

//deleteTask

 removeTask.addEventListener('click', function(e) {
    node.parentNode.removeChild(node)

});
//Priority value selection
//-use drop down html