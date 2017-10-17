/**
 * 冒泡排序
 * @param arr
 * @returns {*}
 */
const bubbleSort1 = (arr) => {
    for(let i=0;i<arr.length;i++){
        for(let j=1; j<arr.length-i; j++){
            if(arr[j] < arr[j-1])
                swapWithPre(arr, j);
        }
    }
    return arr;
};

const bubbleSort2 = (arr) => {
    let i = arr.length,
        lastPos;
    while(i > 0){
        lastPos = 0;
        for(let j=1; j<i; j++){
            if(arr[j] > arr[j-1]){
                swapWithPre(arr, j);
                lastPos = j - 1;
            }
        }
    }
};
const swapWithPre = (arr, index) => {
    const temp = arr[index];
    arr[index] = arr[index-1];
    arr[index-1] = temp;
};
console.log(bubbleSort2([8,2,15,1,3]));