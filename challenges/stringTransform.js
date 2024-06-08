//function to change to the ASCII code according to the string passed
function tocharCode(str) {
    const result = arr.map((x) => {
        return x.toString().charCodeAt(0);
    })
    return result.join(' ');
}
function stringTransform(str) {
    let length = str.length;
    arr = Array.from(str);
    if (length % 5 == 0) {
        console.log(tocharCode(str));
    }
    else if (length % 3 == 0) {
        console.log(arr.reverse().join(''));
    }
    else if(length % 3 == 0 && length % 5 == 0){
        console.log(tocharCode(arr.reverse().join('')));
    }
}
stringTransform("Chocolate Chip Cookie");