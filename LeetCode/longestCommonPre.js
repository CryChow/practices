/**
 * 获取字符串数组的最大共同前缀
 * @param strs 字符串数组
 * @returns {*} 返回最大共同前缀
 */
const longestCommonPre = function(strs) {
  if(strs.length === 0) {
    return '';
  } else if(strs.length === 1){
    return strs[0];
  }
  let minLen = strs[0].length,
    resultPre = '';
  strs.forEach(str => {
    minLen = str.length < minLen ? str.length : minLen;
  });
  if(minLen === 0) {
    return '';
  }
  for(let i=0; i<minLen; i++) {
    for(let j=1;j<strs.length;j++) {
      if(strs[j][i] !== strs[j-1][i]) {
        return resultPre;
      }
    }
    resultPre += strs[0][i];
  }
  return resultPre;
};
const strs = [
  '  aasadbbsfdsfdf',
  '  aasadb',
  '  aasadbdfs',
  '  aasadb'
];
console.log(longestCommonPre(strs));