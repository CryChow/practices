/**
 * 数组去重原型调用
 */
if(!Array.prototype.unique){
    Array.prototype.unique = function () {
        let arr = [];
        arr = arr.concat(this);
        this.length = 0;
        for(let i=0;i<arr.length;i++){
            if(this.indexOf(arr[i]) < 0){
                this.push(arr[i]);
            }
        }
    };
}
// var arr = [1,1,12,2,2,2,3,3,3];
// Array.prototype.unique= function () {
//     var b = {};
//
//     for(var i = 0;i < this.length;i++){
//         b[this[i]+""]="0";
//     }
//     this.length = 0;
//     for(var i in b){
//         this.push(parseInt(i));
//     }
//     console.log(this);
// }
// arr.unique();
