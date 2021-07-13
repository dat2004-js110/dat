//Ex1:
function adjacentElementsProduct(items) {
    var product = null;
    let maxIndex = -1;
    for (var i = 0; i < items.length - 1; i++) {
       let result = items[i] * items[i + 1];
            if (product == null){
                product = result;
                maxIndex=i;
            }
            else if (result > product){
                product = result;
                maxIndex=i;
            }
    }
    console.log(items[maxIndex],items[maxIndex+1]);
    return product;
}
console.log(adjacentElementsProduct([2, 3, -5, -2, 4]));

//Ex2: 
const alternatingSums = array => {
    let team1 = 0, team2 = 0;
    for (let i = 0; i < array.length; i++){
        if( i % 2==0){
            team1 = team1 + array[i];
        }
        else{
            team2 = team2 + array[i];
        }
    }
    return [team1, team2]
}
console.log(alternatingSums([60, 40, 55, 75, 64]));

//Ex 3;
async function getShortenURL() {
    const url = document.getElementById('enterUrl').value;
    const typeUrl = document.getElementById('typeLink').value;
    const resultOK = document.querySelector('.result-ok');
    const resultFalse = document.querySelector('.result-false');
    resultOK.style.display = 'none';
    resultFalse.textContent = "";
    if(url == "") {
        resultFalse.textContent = 'Hãy điền Url bạn muốn rút gọn';
   