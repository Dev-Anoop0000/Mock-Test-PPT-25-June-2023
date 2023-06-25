function moveZero(num) {
    let noneZeroEl = 0;

    for (let i = 0; i < num.length; i++) {
        if (num[i] !== 0) {

            num[noneZeroEl] = num[i];
            noneZeroEl++;
        }
    }


    while (noneZeroEl < num.length) {
        num[noneZeroEl] = 0;
        noneZeroEl++;
    }
}

const num = [1, 5, 6, 9, 0, 5, 7, 0, 8, 6];

moveZero(num);

console.log("After moving zero in last :", num);