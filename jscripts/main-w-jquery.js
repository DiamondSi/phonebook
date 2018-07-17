$(document).ready(function () {
    var addContactButton = $("#add-contact-button");
    var lastName = $("#last-name-input");
    var firstName = $("#first-name-input");
    var phone = $("#phone-input");
    var contactList = $("#contact-list");

    addContactButton.click(function () {
        var lastNameValue = lastName.val();
        var firstNameValue = firstName.val();
        var phoneValue = phone.val();
        var contactListItem = $("<li>");

        var taskDelButton = $("<button>")
            // .css({"margin-left": "30px"})
            .text("Удалить")
            .addClass("del-contact-button")
            .click(function () {
                contactListItem.remove();
            });

        contactListItem.text(lastNameValue+" "+firstNameValue+" "+phoneValue);
        contactListItem.append(taskDelButton);
        contactList.append(contactListItem);
        firstName.val("");
        lastName.val("");
        phone.val("");
    });
});
