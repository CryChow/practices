/**
 * 深拷贝
 * @param obj 要拷贝的对象
 * @param c 用时可不必填
 * @returns {*|{}}
 */
const deepCopy = (obj, c) => {
    let cObj = c || {};
    for(let key in obj){
        if(typeof obj[key] === "Object"){
            cObj[key] = obj[key].constructor === Array ? [] : {};
            deepCopy(obj[key],cObj[key]);
        }else{
            cObj[key] = obj[key];
        }
    }
    return cObj;
};
const obj = {
    name: "Cry",
    age: 20,
    skill: function () {
        this.name = "Doudou";
    },
    happyArray: [2,4,5,2,5,4]
};

obj.happyArray.name = "Cry";
let anObj = deepCopy(obj);

console.log(anObj);
anObj.skill();
console.log(obj,anObj);