/**
 * Determine whether an integer is a palindrome. Do this without extra space.
 * 判断一个整型数是不是回文
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
    if(x<0){
        return false;
    }
    let len = (x+"").length;
    for(let i=0;i<(len/2);i++){
        let a = parseInt(x/Math.pow(10,len-1-i))%10;
        let b = parseInt(x/Math.pow(10,i))%10;
        if( a !== b ){
            return false;
        }
    }
    return true;
};
let x = 10000000001;
console.log(isPalindrome(x));