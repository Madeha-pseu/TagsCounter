var tags = ['html', 'javascript', 'css', 'json', 'css', 'xml', 'css', 'html', 'json'];

var filteredTags = tags.map(tag => tag.toUpperCase()).filter(tag => tag != 'JSON' && tag != 'XML');
var tagsCounter = filteredTags.reduce((count, tag) => {
    if (typeof count[tag] !== "undefined")
        count[tag]++;
    else
        count[tag] = 1;
    return count;
}, {})
var s = "";
for (var i in tagsCounter) {
    s += i + ": " + tagsCounter[i] + "  ";
}
document.write(s);