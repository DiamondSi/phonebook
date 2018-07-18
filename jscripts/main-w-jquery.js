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

        contactListItem.text(lastNameValue + " " + firstNameValue + " " + phoneValue);
        contactListItem.append(taskDelButton);
        contactList.append(contactListItem);
        firstName.val("");
        lastName.val("");
        phone.val("");
    });
// формируем новые поля\
    var number = 1;
    jQuery('.plus').click(function () {
        jQuery('.contact_json_plus').before(
            '<tr>' +
            '<td><input type="text" class="form-control" id="contact_json_number[]" placeholder=' + number + '></td>' +
            '<td><input type="text" class="form-control" id="contact_json_last_name[]" placeholder="Фамилия"></td>' +
            '<td><input type="text" class="form-control" id="contact_json_first_name[]" placeholder="Имя"></td>' +
            '<td><input type="tel" class="form-control bfh-phone" data-format="+7 (ddd) ddd-dddd"' +
            ' pattern="(?:\\+|\\d)[\\d\\-\\(\\) ]{9,}\\d/g" id="contact_json_phone[]" placeholder="Телефон"></td>' +
            '<td><span class="btn btn-danger minus pull-right">x</span></td>' +
            '</tr>'
        );
        number++;
    });
// on - так как элемент динамически создан и обычный обработчик с ним не работает
    jQuery(document).on('click', '.minus', function () {
        jQuery(this).closest('tr').remove(); // удаление строки с полями
    });
});
