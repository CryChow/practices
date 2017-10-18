/**
 * 快速排序
 * @param arr 需排序数组
 * @param left 左边界
 * @param right 有边界
 */
const quickSort = (arr, left, right) => {
    if(left >= right)
        return;
    let pivotIndex = partition(arr, left, right);
    quickSort(arr, left, pivotIndex-1);
    quickSort(arr, pivotIndex+1, right);
};
/**
 * 分区操作
 * @param arr
 * @param left
 * @param right
 * @returns {int}
 */
const partition = (arr, left, right) => {
    let pivot = right,                 //以子区右边界为pivot基准
        index = left;
    for(let i=left; i<right;i++){
        if(arr[i] < arr[pivot])
            swap(arr, i, index++)
    }
    swap(arr, index, pivot);
    return index;
};
/**
 * 交换位置
 * @param arr
 * @param i
 * @param j
 */
const swap = (arr, i, j)=> {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};
// 测试
// const arr = [ -1, 1, 2, 3, 3, 3, 3, 5, 5, 6, 6, 7, 8, 35, 54, 54, 232, 2342 ];
// quickSort(arr, 0, arr.length-1);
// console.log(arr);
