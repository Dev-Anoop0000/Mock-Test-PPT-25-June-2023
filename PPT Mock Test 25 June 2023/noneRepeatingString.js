let s = "alakbbjcdjcdk";
let array = s.split('');
console.log(array);
let count;

function repeatString(array) {
    for (let i = 0; i < array.length; i++) {
        count = 0;
        for (let j = 0; j < array.length; j++) {
            if (array[i] == array[j]) {
                count++;

            }


        }
        if (count == 1) {
            console.log("Repeated Element : ", array[i]);
            return i
        }
    }
    return -1;
}
let repeatingS = repeatString(array);
console.log("Index of repeating strings : ", repeatingS)