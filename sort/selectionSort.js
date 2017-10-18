/**
 * 选择排序
 * @param arr
 * @returns {*}
 */
const selectionSort = (arr) => {
    let tIndex;
    for(let i=0;i<arr.length;i++){
        tIndex = i;
        for(let j=i+1; j<arr.length;j++){
            if(arr[j] < arr[tIndex]){
                 tIndex = j;
            }
        }
        swap(arr, i, tIndex);
    }
    return arr;
};

const swap = (arr, i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

let arr = [1,2,333,6,25,23,7,6];
console.log(selectionSort(arr));
