/**
 * 随机打乱数组元素,直接打乱数组本身
 * @param arr
 * @returns {Array} 返回打乱后的数组
 */
const messArray = (arr) => {
    arr.forEach((item,index,arr) => {
         let mIndex = getRandomIndex(arr.length);
        swap(arr, mIndex, index);
    });
    return arr;
};
//得到一个随机index (- [ 0, end )
const getRandomIndex = (end) => {
    return Math.round(Math.random()*(end-1));
};

const swap = (arr, i, j)=> {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};
const arr = [8,2,15,1,3];
console.log(messArray(arr));