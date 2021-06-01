//Ex 1.1:
    // console.log("var, let và const là các từ khóa (keywords) dùng để khai báo biến.");
    // console.log('const là từ khóa khai báo biến hằng số');

//Ex 1.2:
    // console.log("var có phạm vi lớn , còn let có phạm vi khối (block scoped).");
    // console.log("Trong phạm vi sử dụng, dùng var: các biến có thể cập nhật và khai báo lại, còn dùng let: các biến có thể cập nhật nhưng không được khai báo lại.");
    
//Ex 1.3:
    // console.log("let có thể được khai báo mà không cần khởi tạo giá trị, còn const phải được khởi tạo giá trị khi khai báo.");

//Ex 1.4:
    // console.log("Dùng const khi biết giá trị của biến không thay đổi(bất biến).");
    // console.log("Dùng let trong các trường hợp giá trị của biến thay đổi và biến được đặt trong 1 block(như vòng lặp for, câu lệnh điều kiện if,...).");
    // console.log("Dùng var trong các trường hợp giá trị của biến thay đổi và biến là biến toàn cục trong chương trình.");

//Ex 2.1:
    // console.log("Boolean là kiểu dữ liệu logic.");
//Ex 2.2:
    // console.log("Boolean chỉ có 2 giá trị là true và false.");

//Ex 3.a:
/*{
    for (let x = 0; x < 7; ++x){
        console.log(x)
    }
}*/

//Ex 3.b:
/*{
    let n = prompt("Enter a number?");
    for (let x = 0; x < n; ++x){
       console.log(x);}
}*/

//Ex 3.c:
/*{
    let n = prompt("Enter a number?");
    for (let x = 3; x < n; ++x){
        console.log(x);
    }
}*/

//Ex 3.d:
/*{
    let n = Number(prompt("Enter n"));
    let c = Number(prompt("Enter c"));
    while (c < n) {
        console.log(c);
        c = c + 3;
    }
}*/

//Ex 3.f:
/*{
    let n = Number(prompt("Enter n"));
    let c = Number(prompt("Enter c"));
    let s = Number(prompt("Enter s"));
    while (c<n){
        console.log(c);
        c = c + s;
    }
}*/

//Ex 4:
/*{
    let n = Number(prompt("Enter a number"));
    let factorial = 1;
    for(let i = 1; i<=n; i++){
        factorial= factorial*i;
    }
    alert(`The factorial of ${n} is ${factorial}`);
}*/

//Ex 5:
/*{
    let age = Number(prompt("Enter your age"));
    if (age < 14) {
        alert("You is too young to enter this web")
    } else {alert("Enjoy");}
}*/

//Ex 6:
/*{
    let x = Number(prompt("Enter a number"));
    if(x>9)
    {
        alert('Không thỏa mãn điều kiện');
    }
    else
    {
        let n=9/2;
        if(x>n)
        {
            alert(`${x} là nửa trên của 9`);
        }
        else if(x=n)
        {
            alert(`${x} bằng một nửa của 9`);
        }
        else
        {
            alert(`${x} là nửa dưới của 9`);
        }
    }
}*/

//Ex 7:
/*{
    let x = Number(prompt("nhập x"));
    let n = Number(prompt("nhập n"));
    if(x>n)
    {
        alert('Bạn nhập sai, '+x+' lớn hơn '+ n +'!');
    }
    else 
    {
        n = n/2;
        if(x==n)
        {
            alert(x+' bằng '+ n +'!');
    
        }
        else if(x<n)
        {
            alert(x+' là nửa dưới của '+n*2);
        }
        else
        {
            alert(x+' là nửa trên của '+n*2);
        }
    }
}*/

//Ex 8:
/*let x = Number(prompt('Nhập một số x: '));
    if(x%2)
    {
        alert('Đây là số lẻ');
    }
    else
        alert('Đây là số chẵn');
*/

//Ex 9.a:
/*{
    for (let i = 1; i <= 6; ++i) {
        if (i < 4) {
            console.log("L");
        }
        else {
            console.log("H");
        }
    }
}*/

//Ex 9.b:
/*{
    let n = Number(prompt("Enter the total number of L's and H's?"));
    let tmp = n / 2;
    while (n > 0) {
        if (n > tmp) {
            console.log("L");
        }
        else {
            console.log("H");
        }
        n--;
    }
}*/

//Ex 9.c:
/*{
for (let i = 0; i < 8; ++i) {
    if (i % 2) {
        console.log("1");
    }
    else {
        console.log("0");
    }
 }
}*/

//Ex 9.d:
{
    let n = Number(prompt("Enter the total number of 1's and 0's"));
    for (let i = 0; i < n; ++i) {
        if (i % 2) {
            console.log("1");
        }
        else {
            console.log("0");
        }
    }
}

//Ex 10:
/*{
    let w = Number(prompt(" cân nặng của bạn là (kg)?"));
    let h = Number(prompt(" chiều cao của bạn là (cm)?"));
    h = h / 100;
    let bmi = w / (h * h);
    alert(`Cân nặng của bạn là ${w}kg. Chiều cao là ${h}m`);
    if(bmi<16)
    {
        alert('Suy dinh dưỡng');
    }
    else if( bmi < 18.5)
    {
        alert('Thiếu cân');
    }
    else if( bmi > 18.5 && bmi < 25)
    {
        alert('Bình thường');
    }
    else if( bmi > 25 && bmi < 30)
    {
        alert('Thừa cân');
    }
    else
    {
        alert('Béo phì');
    }
}*/