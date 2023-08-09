import $ from "jquery";

$(function () {
    const $form = $('form');

    $form.on('submit', function (e) {
        e.preventDefault();
        const data = $form.serialize();
        $.get(
            e.target.action,
            data,
            function (res) {
                $('.header__btn').attr('disabled', true);
                console.log(res);
            }
        )
    })
});



