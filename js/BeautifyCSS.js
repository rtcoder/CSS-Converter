function BeautifyCSS() {
    document.getElementById('result').value = "";
    var css = document.getElementById('source').value
            .replace(/\}/g,"\n}\n")
            .replace(/\;\}/g,";\n}\n")
            .replace(/;/g, ";\n\t")
            .replace(/\}/g,"}\n")
            .replace(/\{/g,"{\n\t")
            .replace(/,/g, ', ')
            .replace(/\n\t\n/g, "\n")
            .replace(/\n\t\*\//g, "\*\/")
            .replace(/\*\//g, "\*\/\n")
            .replace(/\n\n/g, "\n")

    document.getElementById('result').value = css;
}
