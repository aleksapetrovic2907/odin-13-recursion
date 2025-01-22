function fibs(index) {
    let array = [0, 1];

    if (index === 0 || index === 1) {
        return array[index];
    }

    for(let i = 2; i < index; i++) {
        array.push(array[i - 1] + array[i - 2]);
    }

    return array;
}