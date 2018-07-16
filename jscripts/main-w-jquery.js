$(document).ready(function () {
    var addContactButton = $("#add-contact-button");
    var taskName = $("#task-name-input");
    var taskList = $("#task-list");

    addContactButton.click(function () {
        var textValue = taskName.val();
        var taskListItem = $("<li>");

        var taskDelButton = $("<button>")
            // .css({"margin-left": "30px"})
            .text("Удалить")
            .addClass("del-task-button")
            .click(function () {
                taskListItem.remove();
            });

        taskListItem.text(textValue);
        taskListItem.append(taskDelButton);
        taskList.append(taskListItem);
        taskName.val("");
    });
});
