// 1. đảo ngược chuỗi
function reverString(str) {
    let arrayOfChars = str.split("");
    let strToArray = arrayOfChars.reverse();
    let newStr = strToArray.join("");
    return newStr;
}
console.log( reverString("hello"));
// 2. Kiển tra chuỗi đối xứng
function findOppositeNumber(n,inputNumber){
    let i = n/2;
    if(i > inputNumber){
    let kQ = i + inputNumber;
    alert (kQ)
    } else{
    let kQ = inputNumber - i;
    alert (kQ)
    }
}
// findOppositeNumber(10,2);
// 3 tìm phần tử lớn t2
let array1 =[2,3,4,5,6,7,8,9];

    function findNumber (){
        let maxNuber = Math.max(array1)
        console.log(maxNuber)
    }
// findNumber();
