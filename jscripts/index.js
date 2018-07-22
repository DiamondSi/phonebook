$(document).ready(function () {
    $(document).on('click', '.plus', function () {
        // получаем поля из формы ввода
        var lastName = $('#last-name-input').val();
        var firstName = $('#first-name-input').val();
        var phone = $('#phone-input').val();

        $('.table tr:last').after(
            '<tr>' +
            '<td><input type="text" class="form-control row-index" value="' + $('.table tr').length + '"/></td>' +
            '<td><input type="text" class="form-control" value="' + lastName + '"/></td>' +
            '<td><input type="text" class="form-control" value="' + firstName + '"/></td>' +
            '<td><input type="text" class="form-control bfh-phone" data-format="+7 (ddd) ddd-dddd" value="' + phone + '"/></td>' +
            '<td><button type="button" class="btn btn-danger minus pull-right">Удалить</button></td>' +
            '</tr>'
        );

    });
    $(document).on('click', '.minus', function () {
        $(this).closest('tr').remove();
        $('.row-index').each(function (i) {
            $(this).val(i + 1);
        });
    });
});
