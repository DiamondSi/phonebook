$(document).ready(function () {
    $(document).on('click', '.plus', function () {
        // получаем поля из формы ввода. возможные опасные символы конвертируем в мнемоники
        var lastName = htmlEncode($('#last-name-input').val());
        var firstName = htmlEncode($('#first-name-input').val());
        var phone = htmlEncode($('#phone-input').val());

        $('form input').each(function () {
            var temp = $(this).val();
            if (temp === "") {
                $(this).addClass('is-invalid');
            } else {
                $(this).removeClass('is-invalid');
            }
        });
        if (lastName !== "" && firstName !== "" && phone !== "") {
            $('.table tbody').append(
                '<tr>' +
                '<td><input type="text" class="form-control row-index" value="' + $('.table tr').length + '"/></td>' +
                '<td><input type="text" class="form-control" value="' + lastName + '"/></td>' +
                '<td><input type="text" class="form-control" value="' + firstName + '"/></td>' +
                '<td><input type="text" class="form-control bfh-phone" data-format="+7 (ddd) ddd-dddd" value="' + phone + '"/></td>' +
                '<td><button type="button" class="btn btn-danger minus pull-right">Удалить</button></td>' +
                '</tr>'
            );
            resetInput();
        }
    });
    $(document).on('click', '.minus', function () {
        $(this).closest('tr').remove();
        $('.row-index').each(function (i) {
            $(this).val(i + 1);
        });
    });

    function resetInput() {
        $(".contact-form").find("input").val("");
    }

    function htmlEncode(value){
        return $('<div/>').text(value).html();
    }
});
