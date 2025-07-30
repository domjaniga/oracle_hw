function print_string(num) {
    let result = "";

    if (num % 2 == 0) {
        result = result + "Baz";
    }

    if (num % 5 == 0) {
        result = result + "inga!";
    }

    if (result == "") {
        return num;
    }

    return result;
}

for (let num = 1; num < 100; num++) {
    console.log(print_string(num));
}
