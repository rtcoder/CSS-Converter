function formatCode() {
    var mode = parseInt(document.getElementById('mode').value)

    switch (mode) {
        case 1:
            MinifyCSS();
        break;
        case 2:
            BeautifyCSS();
        break;
        default: return false;
    }
}

document.onreadystatechange = function () {
    var select = document.getElementById('mode');
    var button = document.getElementById('start');
    var result = document.getElementById('result');

    select.addEventListener("change", function () {
        var val = parseInt(this.value);

        switch (val) {
            case 1:
                button.innerHTML = "UglifyCSS";
            break;
            case 2:
                button.innerHTML = "BeautifyCSS";
            break;
            default: return false;
        }
    });
}
