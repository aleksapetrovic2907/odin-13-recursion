function fibs(index) {
    let array = [0, 1];

    if (index === 0) return [0];
    else if (index === 1) return array;

    for(let i = 2; i < index; i++) {
        array.push(array[i - 1] + array[i - 2]);
    }

    return array;
}