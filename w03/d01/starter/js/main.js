$(function() {

    var box = $("input");
    var log = $('textarea');
    var add, minus, multiply, divide;
    var num;
    var r = 0;
    var result;
    var history;

    $("#clear").click(function() {
        box.val('');
    });

    $("#zero, #one, #two, #three, #four, #five, #six, #seven, #eight, #nine").click(function() {
        box.val(box.val() + $(this).val());

    });

    $("#plus").click(function() {
        add = true;
        minus = false;
        multiply = false;
        divide = false;
        if (box.val()) {
            num = parseInt(box.val());
            box.val('');
        };
    });

    $("#subtract").click(function() {
        add = false;
        minus = true;
        multiply = false;
        divide = false;
        if (box.val()) {
            num = parseInt(box.val());
            box.val('');
        };
    });

    $("#multiply").click(function() {
        add = false;
        minus = false;
        multiply = true;
        divide = false;
        if (box.val()) {
            num = parseInt(box.val());
            box.val('');
        };
    });

    $("#divide").click(function() {
        add = false;
        minus = false;
        multiply = false;
        divide = true;
        if (box.val()) {
            num = parseInt(box.val());
            box.val('');
        };
    });

    $("#equals").click(function() {
        var num2 = parseInt(box.val());
        if (num && add) {
            box.val(num + num2);
        } else if (num && minus) {
            box.val(num - num2);
        } else if (num && multiply) {
            box.val(num * num2);
        } else if (num && divide) {
            box.val(num / num2);
        } else {
            //$(body).insertBefore("img", );
        }

    r++;
    result = box.val();
    log.prepend(r + ") " + result + "\n");
    history = log.val();
    localStorage.setItem('history', history);

    if (localStorage.getItem('history')) {
        $('#history').html(localStorage.getItem('history'));
    }

    $("#clear-log").click(function() {
        window.localStorage.clear();
        log.val('');
    });

    });
});
