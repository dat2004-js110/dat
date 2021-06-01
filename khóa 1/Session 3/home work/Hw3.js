// Ex 1:Variable swap Swapping variable is to exchange the values of two variable so that at the end, one variable contains the value of the other. Google ‘JS swap variables’ to learn about at least 2 ways to perform this task, write at least 2 examples to demonstrate you have acquired them, if you need hints, they are at the last page of this homework

// cách 1
/*{
    let a = 5;
    let b = 6;
    let tmp;
    tmp = a;
    a = b;
    b = tmp;
    console.log (a,b);
}*/

// cách 2
/*{   let a = 5;
    let b = 6;
    [a,b] = [b,a];
    console.log(a,b);
}*/

//Ex 2: Split String into Array
/*{
    let s = 'Hello beauty there';
    let a = s.split(" ");
    console.log(a);
}*/

//Ex 3: In JavaScript, the spread operator (three dots): … can be useful in several tasks. Of these tasks is to log (print out) an array without using loops, try it:
/*{
const a = [4, 5, 7, -8];
    console.log(...a);
}*/

//Ex 4: Write a script to simulate a clothes shop, asking and performing certain tasks from users
/*{
     let listItems = ["Jeans", "T-Shirt", "Socks"];
    let i = prompt("Hi there, welcome to shop admin panel, what do you want (C, R, U, D)?");
    if ( i == 'r' || i == 'R'){ 
        console.log("The currents items are:");
        for (let n in listItems) {
        console.log(`${Number(n)+1}. ${listItems[n]}`);
        }
    }
    else if( i == 'c' || i == 'C'){
        listItems.push(prompt("Enter the name of the new item"));
            alert("Done");
            console.log(listItems);
    }
    else if (i == 'u' || i == 'U') {
        let update = Number(prompt("Enter the position you want to update"));
        listItems[update-1] = prompt("Enter the new name");
        alert("Done");
        console.log(listItems);
    }
    else if (i == 'd' || i == 'D'){
        let del = Number(prompt("Enter the position you want to delete"));
        listItems.splice(del-1,1);
        alert("Done");
        console.log(listItems);
    }
    else{
        alert("This command is not supported");
    }
}*/

//Ex 5: Write a script to ask users enter a sequence of numbers, the Numbers are separated by commas, calculate the sum of the numbers and show it to users
/*{
    let listNum = prompt("Nhập 1 dãy số, mỗi số ngăn cách nhau bằng dấu phẩy(,)");
    let aNum = listNum.split(",");
    let sum =0;
    for (let i = 0; i < aNum.length; i++) {
        aNum[i] = Number(aNum[i]);
        sum +=aNum[i];
    }
    alert(`Tổng của dãy số đó là ${sum}`);

}*/

//Ex 6: Write a script asking users to enter a sequence of numbers, the numbers are separated by commas, find the smallest number and log it out to users
/*{
    let listNum = prompt("Nhập 1 dãy số, mỗi số ngăn cách nhau bằng dấu phẩy(,)");
    let aNum = listNum.split(",");
    let min = Infinity;
    for(let x of array){
        min = min > Number(x) ? x : min;
    }
    alert(`The smallest number is ${min}`);
}*/
//Ex 7: Create an array containing at least 5 numbers, then ask users enter a number, perform a search to look for the number in the array, if the number is found, tell user that with the index of it in the array, if not, also tell them so
/*{
    const arr = [3, 4, 6, -9, 10, -88, 2];
    let inNum = Number(prompt('Tìm 1 số trong mảng'));
    let index = arr.indexOf(inNum);
    if(index != -1)
    {
        console.log(`Số ${inNum} có trong mảng nằm ở vị trí ${index}`);
       
    }
    else
    {
        console.log(`Số ${inNum} không có trong mảng`);
    }
}/*
//Ex 8.1: Create an array to represent the sizes of your flock, and log all of your flock size, expected screen output:
/*{
    let sheepSizes = [5, 7, 300, 90, 24, 50, 75];
    console.log("Hello, my name is Đạt and here is my sheep sizes:");
    console.log(sheepSizes.join(" "));
}*/
//Ex 10:
/*{
    let name = prompt("Enter a sequence of names");
    console.log(name);
    let aName = name.split(",");
    for(i=0;i<aName.length;i++)
    {
        aName[i]= '<'+aName[i]+'>';
    }
        alert(name+'=>'+aName);
    
}*/
//Ex 11:
/*{
    let listNum = prompt("Nhập 1 dãy số, mỗi số ngăn cách nhau bằng dấu phẩy(,), in ra màn hình dãy số lẻ");
    let aNum = listNum.split(",");
    let oddNum = [];
    for(i=0;i<aNum.length;i++)
    {
        
        if(aNum[i]%2 != 0)
        {
            oddNum.push(aNum[i]);
        }
    }
    alert(listNum+' => '+oddNum);
}*/