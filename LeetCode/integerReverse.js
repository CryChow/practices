/**
 * Reverse digits of an integer.
 * @param {number} x
 * @return {number}
 * Note:The input is assumed to be a 32-bit signed integer. Your function should return 0 when the reversed integer overflows.
 */
const reverse = (x) => {
    if(Math.abs(x) > 2147483647){
        return 0;
    }else{
        let y = +((Math.abs(x)+"").split("").reverse().join(""));
        if(y > 2147483647){
            return 0;
        }
        return x < 0 ? -y : y;
    }
};
let x = 123456789;
console.log(reverse(x));