const fromJsonp = function(str) {
    let start = str.indexOf("({");
    let end = str.lastIndexOf("})");
    return str.substring(start + 1, end + 1);
}

const fromJavaScript = function(str, arr) {
    eval(str);
}

module.exports = {
    fromJsonp
}
