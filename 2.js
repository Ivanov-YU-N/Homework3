function griting(name) {
    let message = 'Привет' + " " + name;
    return message;
}
console.log(griting(prompt('Введите имя ')));