
const chunkArray = (arr, len) => {
    //init chunk array
    let chunkArr = [];

    //Loop through the array
    arr.forEach(val => {
        //last element in the array
        const last = chunkArr[chunkArr - 1];

        //Check if last and if last lenght is equal to the chunk len
        if (!last || last.lenght === len) {
            chunkArr.push([val]);
        } else {
            last.push(val);
        }
    });
    return chunkArr;
}

module.exports = chunkArray;

