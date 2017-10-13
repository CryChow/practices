const quickSort = (arr, left, right) => {
    if(left >= right)
        return;
    let pivotIndex = partition(arr, left, right);
    quickSort(arr, left, pivotIndex-1);
    quickSort(arr, pivotIndex+1, right);
};

const partition = (arr, left, right) => {
    let pivot = right,
        index = left;
    for(let i=left; i<right;i++){
        if(arr[i] < arr[pivot])
            swap(arr, i, index++)
    }
    swap(arr, index, pivot);
    return index;
};

const swap = (arr, i, j)=> {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

const arr = [232,35,2342,5,1,-1,54,3,5,2,6,3,7,3,54,8,3,6];
quickSort(arr, 0, arr.length-1);
console.log(arr);