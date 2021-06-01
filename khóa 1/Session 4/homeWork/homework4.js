// Ex 1.1: What does x receives from product, property or value? x= property
// Ex 1.2:Use the for loop to print/log out the following output
    // const product = {
    //     name: 'Xiaomi rice cooker',
    //     price: 1700,
    //     brand: 'Xiaomi',
    //     color: 'white',
    // };
    // for (let x in product) {
    //     console.log(`${x}:${product[x]}`);
    // } 

// Ex 2: Then use one line of code to destructure to obtain subject, dueDate and assignTo from this object:
/*{
    const task = {
        subject: 'Implement login feature',
        createdBy: 'Hoang Ngoc Duc',
        assignTo: 'Nguyen Phuong Nam',
        dueDate: '2019-10-08T18:00:24+0000',
        expectedHours: 0.5,
    };
    let {subject, dueDate, assignTo} = task;
    console.log(subject);
    console.log(dueDate);
    console.log(assignTo);
    // for (let x in task){
    //     console.log(`${x}: ${task[x]}`);
    // }
}*/

// Ex 3.1: What is the data type of the outermost layer (Number, String, Object, Array or else)? the data type of the outermost layer is Object
//    3.2: The hits property is where the job results are stored, is it a Number, String, Array, Object or something else? The hits property is where the job results are stored, is it a Array
//    3.3: In each hit of hits, how to find the job’s title, locations, salary, benefits, skills and requirements.. clrt+f

// Ex 4: Write a script to simulate the lookup of the dictionary initialized in the previous example
// let dictionary = {
//     debug: 'The process of figuring out why your program has a certain error and how to fix it',
//     done: 'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)',
//     defect: 'The formal word for ‘error’',
//     pm: 'The short version  of Project Manager, the person in charge of the final result of a project',
//     'ui/ux': 'UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels'
// };
        /*{
            alert("Hi there, this is dev dictionary");
            let word = prompt("Enter a keyword?");
            if (dictionary[word]){
                alert(`${word}: ${dictionary[word]}`);
            }
            else{
                alert("We could't find the word : dev");
            }
        }*/

// Ex 4.2: Update your script so that it can let users contribute the explanation to the dictionary
/*{
    alert("Hi there, this is dev dictionary");
    let word = prompt("Enter a keyword?");
    if (dictionary[word]){
        alert(`${word}: ${dictionary[word]}`);
    }
    else{
        let newWord = prompt(`We could not find your word: ${word}, leave your explanation`)
            if(newWord == null){
                alert("Goobye!")
            }
            else{
                dictionary[word] = newWord;
                alert("Done!");
            }
    }
    console.log(dictionary);
}*/

// Ex 5.1: Print/log name and price of all the products out 
// let products = [
//     {
//         Name: 'Xiaomi portable charger 20000mah',
//         Brand: 'Xiaomi',
//         Price: 428,
//         Color: 'White',
//         Category: 'Charger'
//     },
//     {
//         Name: 'VSmart Active 1',
//         Brand: 'VSmart',
//         Price: 5487,
//         Color: 'Black',
//         Category: 'Phone'
//     },
//     {
//         Name: 'Iphone X',
//         Brand: 'Apple',
//         Price: 21490,
//         Color: 'Gray',
//         Category: 'Phone'
//     },
//     {
//         Name: 'Samsung Galaxy A9',
//         Brand: 'Samsung',
//         Price: 8490,
//         Color: 'Blue',
//         Category: 'Phone'
//     }
// ];
//  for (let x of products){
//     let {Name, Price} = x;
//      console.log("-----------------------");
//      console.log(`Name: ${Name}`);
//      console.log(`Price: ${Price}`);
//  }

// Ex 5.2: Write a script printing/logging out the products with their number, then print/logging out the details of a product with its position entered by users
// tham khảo bài của Hữu Dũng:
// for (let x in products){
//     let {Name, Price} = products[x];
//      console.log("-----------------------");
//      console.log(`#${Number(x) + 1}. ${Name}`);
//      console.log(` Price: ${Price}`);
//     }
// let position = Number(prompt("Enter product position:"));
// for (let i in products[position-1]){
//     console.log(`${i}:${products[position-1][i]}`);
// }

// Ex 5.3: Write a script printing/logging out the products based on category input by users
// tham khảo bài của Hữu Dũng:
    // let cate = prompt("Enter your category").toLowerCase();
    // let check = false;
    // for (let x of products) {
    //     if (x.Category.toLowerCase() == cate) {
    //         check = true;
    //         console.log('---------------------------------');
    //         let { Name, Price } = x;
    //         console.log(`Name: ${Name}`);
    //         console.log(`Price: ${Price}`);
    //     }
    // }
    // if (!check) {
    //     console.log(`Have not category product: ${cate}`);
    // }

// Ex 5.4:Add providers to each product
    // products[0].Providers = ['Phukienzero', 'Dientuccc'];
    // products[1].Providers = ['Tgdd', 'Ddghn', 'VhStore'];
    // products[2].Providers = ['Tgdd'];
    // products[3].Providers = ['Tgdd'];
    // for (let i in products) {
    //     let { Name, Price, Providers } = products[i];
    //     console.log(`#${Number(i) + 1}. ${Name}`);
    //     console.log(`    Price: ${Price}`);
    //     console.log(`    Providers: ${Providers.join(" ")}`);
    // }

// Ex 5.5:(Optional) Search the products based on the wanted provider entered by users, if you need more directions, find the hints at the end of this homework

// Ex 6.1:Write a script to store and process the learning tasks to become a front-end developerPrint it out
let learningFrontEndDev = [
    { Task: 'HTML', Complete: false },
    { Task: 'CSS', Complete: false },
    { Task: 'Basic of JavaScript', Complete: false },
    { Task: 'Node Package Manager (npm)', Complete: false },
    { Task: 'Git', Complete: false }
];
// console.log("Hi there, this is your learning tasks to front-end developer career:")
// for (x in learningFrontEndDev){
//     console.log(`#.${Number(x)+1}.${learningFrontEndDev[x].Task}`);
//     console.log(`  Complete: ${learningFrontEndDev.Complete}`);
// };

// Ex 6.2: Let users add new task
// let choose = prompt("Enter your command(New, Delete, Update, Complete)");
//     if (choose.toLowerCase() == 'new') {
//         let newTask = prompt("Enter new task");
//         learningFrontEndDev.push({ Task: newTask, Complete: false });
//     };
//     console.log(learningFrontEndDev);

// // Ex 6.3: Let users add Update task    

//     if (choose.toLowerCase() == 'update') {
//         let posUpdate = Number(prompt("Enter position:"));
//         learningFrontEndDev[posUpdate - 1].Task = prompt("Enter new title");
//     };
//     console.log(learningFrontEndDev);
// // Ex 6.4: Let users add Complete task    

//     if (choose.toLowerCase() == 'complete') {
//         let posComplete = Number(prompt("Enter position:"));
//         learningFrontEndDev[posComplete - 1].Complete = true;
//     }

// //Ex 6.5: Let users delete task (No illustrative image, you already know the drill)

//     if (choose.toLowerCase() == 'delete') {
//         let posDel = Number(prompt("Enter position:"));
//         learningFrontEndDev.splice(posDel - 1, 1);
//     }

// Ex 6.6:(Optional) Make printing / logging better
