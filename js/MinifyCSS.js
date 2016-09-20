function MinifyCSS() {
    document.getElementById('result').value = "";
    var css = document.getElementById('source').value
            .replace(/\n/g, "")
            .replace(/\t/g,"")
            .replace(/   /g, ' ')
            .replace(/  /g, '')
            .replace(/ , /g, ',')
            .replace(/, /g, ',')
            .replace(/ , /g, ',')
            .replace(/ : /g, ':')
            .replace(/: /g, ':')
            .replace(/ :/g, ':');

    document.getElementById('result').value = css;
}
