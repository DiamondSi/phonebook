document.addEventListener("DOMContentLoaded", function () {
    var addTaskButton = document.getElementById("add-task-button");
    var taskName = document.getElementById("task-name-input");
    var taskList = document.getElementById("task-list");

    addTaskButton.addEventListener("click", function () {
        var textValue = taskName.value;
        var taskListItem = document.createElement("li");

        var taskDelButton = document.createElement("button");
        taskDelButton.type = "reset";
        taskDelButton.textContent = "Удалить";
        taskDelButton.className="del-task-button";

        taskDelButton.addEventListener("click", function () {
            taskListItem.remove();
        });

        taskListItem.innerText = textValue;
        taskListItem.appendChild(taskDelButton);
        taskList.appendChild(taskListItem);
        taskName.value = "";
    });
});