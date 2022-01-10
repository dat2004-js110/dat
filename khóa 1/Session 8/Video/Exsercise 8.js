// Ex 1:Implement a counter with count up and count down button
function cau1(){
    let count = 0;
    document.getElementById("ketqua").textContent = count;
    let posUp = document.getElementById("countUp");
    posUp.addEventListener('click',() => {document.getElementById("ketqua").textContent = ++count});
    let posDown = document.getElementById("countDown");
    posDown.addEventListener('click', () =>{ document.getElementById("ketqua").textContent= --count});
}
// cau1();

// Ex 2: Implement a timer, with time out entered and can be stopped by users
function cau2(){
    let input = document.getElementById("input");
    let start = document.getElementById("start");
    let stop = document.getElementById("stop");
    let posKq = document.getElementById("ketqua2");
    let setTime;
    start.addEventListener('click', () => {
        let count = Number(input.value);
        posKq.textContent = count;
        setTime = setInterval(() => { posKq.textContent = count++;},1000);
    
    setTimeout(() => {posKq.textContent = "Time Out";
        clearInterval(setTime)},
        Number(input.value) * 1000 + 500);
        });
    stop.addEventListener('click', () =>{
    posKq.textContent = "Stopped";
    clearInterval(setTime);
        })
}
cau2();

// Ex 3: Implement an offline random quote app
function cau3(){
    let list = [
        {
            "quoteText": "Genius is one percent inspiration and ninety-nine percent perspiration.",
            "quoteAuthor": "Thomas Edison"
        },
        {
            "quoteText": "You can observe a lot just by watching.",
            "quoteAuthor": "Yogi Berra"
        },
        {
            "quoteText": "A house divided against itself cannot stand.",
            "quoteAuthor": "Abraham Lincoln"
        },
        {
            "quoteText": "Difficulties increase the nearer we get to the goal.",
            "quoteAuthor": "Johann Wolfgang von Goethe"
        },
        {
            "quoteText": "Fate is in your hands and no one elses",
            "quoteAuthor": "Byron Pulsifer"
        },
        {
            "quoteText": "Be the chief but never the lord.",
            "quoteAuthor": "Lao Tzu"
        },
        {
            "quoteText": "Nothing happens unless first we dream.",
            "quoteAuthor": "Carl Sandburg"
        },
        {
            "quoteText": "Well begun is half done.",
            "quoteAuthor": "Aristotle"
        },
        {
            "quoteText": "Life is a learning experience, only if you learn.",
            "quoteAuthor": "Yogi Berra"
        },
        {
            "quoteText": "Self-complacency is fatal to progress.",
            "quoteAuthor": "Margaret Sangster"
        },
        {
            "quoteText": "Peace comes from within. Do not seek it without.",
            "quoteAuthor": "Buddha"
        },
        {
            "quoteText": "What you give is what you get.",
            "quoteAuthor": "Byron Pulsifer"
        },
        {
            "quoteText": "We can only learn to love by loving.",
            "quoteAuthor": "Iris Murdoch"
        },
        {
            "quoteText": "Life is change. Growth is optional. Choose wisely.",
            "quoteAuthor": "Karen Clark"
        },
        {
            "quoteText": "You'll see it when you believe it.",
            "quoteAuthor": "Wayne Dyer"
        },
        {
            "quoteText": "Today is the tomorrow we worried about yesterday.",
            "quoteAuthor": ""
        },
        {
            "quoteText": "It's easier to see the mistakes on someone else's paper.",
            "quoteAuthor": ""
        },
        {
            "quoteText": "Every man dies. Not every man really lives.",
            "quoteAuthor": ""
        },
        {
            "quoteText": "To lead people walk behind them.",
            "quoteAuthor": "Lao Tzu"
        },
        {
            "quoteText": "Having nothing, nothing can he lose.",
            "quoteAuthor": "William Shakespeare"
        },
        {
            "quoteText": "Trouble is only opportunity in work clothes.",
            "quoteAuthor": "Henry J. Kaiser"
        },
        {
            "quoteText": "A rolling stone gathers no moss.",
            "quoteAuthor": "Publilius Syrus"
        },
        {
            "quoteText": "Ideas are the beginning points of all fortunes.",
            "quoteAuthor": "Napoleon Hill"
        },
        {
            "quoteText": "Everything in life is luck.",
            "quoteAuthor": "Donald Trump"
        },
        {
            "quoteText": "Doing nothing is better than being busy doing nothing.",
            "quoteAuthor": "Lao Tzu"
        },
        {
            "quoteText": "Trust yourself. You know more than you think you do.",
            "quoteAuthor": "Benjamin Spock"
        },
        {
            "quoteText": "Study the past, if you would divine the future.",
            "quoteAuthor": "Confucius"
        },
        {
            "quoteText": "The day is already blessed, find peace within it.",
            "quoteAuthor": ""
        },
        {
            "quoteText": "From error to error one discovers the entire truth.",
            "quoteAuthor": "Sigmund Freud"
        },
        {
            "quoteText": "Well done is better than well said.",
            "quoteAuthor": "Benjamin Franklin"
        },
        {
            "quoteText": "Bite off more than you can chew, then chew it.",
            "quoteAuthor": "Ella Williams"
        },
        {
            "quoteText": "Work out your own salvation. Do not depend on others.",
            "quoteAuthor": "Buddha"
        },
        {
            "quoteText": "One today is worth two tomorrows.",
            "quoteAuthor": "Benjamin Franklin"
        },
        {
            "quoteText": "Once you choose hope, anythings possible.",
            "quoteAuthor": "Christopher Reeve"
        },
        {
            "quoteText": "God always takes the simplest way.",
            "quoteAuthor": "Albert Einstein"
        },
        {
            "quoteText": "One fails forward toward success.",
            "quoteAuthor": "Charles Kettering"
        },
        {
            "quoteText": "From small beginnings come great things.",
            "quoteAuthor": ""
        },
        {
            "quoteText": "Learning is a treasure that will follow its owner everywhere",
            "quoteAuthor": "Chinese proverb"
        },
        {
            "quoteText": "Be as you wish to seem.",
            "quoteAuthor": "Socrates"
        },
        {
            "quoteText": "The world is always in movement.",
            "quoteAuthor": "V. Naipaul"
        },
        {
            "quoteText": "Never mistake activity for achievement.",
            "quoteAuthor": "John Wooden"
        },
        {
            "quoteText": "What worries you masters you.",
            "quoteAuthor": "Haddon Robinson"
        },
        {
            "quoteText": "One faces the future with ones past.",
            "quoteAuthor": "Pearl Buck"
        },
        {
            "quoteText": "Goals are the fuel in the furnace of achievement.",
            "quoteAuthor": "Brian Tracy"
        },
        {
            "quoteText": "Who sows virtue reaps honour.",
            "quoteAuthor": "Leonardo da Vinci"
        },
        {
            "quoteText": "Be kind whenever possible. It is always possible.",
            "quoteAuthor": "Dalai Lama"
        },
        {
            "quoteText": "Talk doesn't cook rice.",
            "quoteAuthor": "Chinese proverb"
        },
        {
            "quoteText": "He is able who thinks he is able.",
            "quoteAuthor": "Buddha"
        },
        {
            "quoteText": "Be as you wish to seem.",
            "quoteAuthor": "Socrates"
        },
        {
            "quoteText": "A goal without a plan is just a wish.",
            "quoteAuthor": "Larry Elder"
        },
        {
            "quoteText": "To succeed, we must first believe that we can.",
            "quoteAuthor": "Michael Korda"
        },
        {
            "quoteText": "Learn from yesterday, live for today, hope for tomorrow.",
            "quoteAuthor": "Albert Einstein"
        },
        {
            "quoteText": "A weed is no more than a flower in disguise.",
            "quoteAuthor": "James Lowell"
        },
        {
            "quoteText": "Do, or do not. There is no try.",
            "quoteAuthor": "Yoda"
        },
        {
            "quoteText": "All serious daring starts from within.",
            "quoteAuthor": "Harriet Beecher Stowe"
        },
        {
            "quoteText": "The best teacher is experience learned from failures.",
            "quoteAuthor": "Byron Pulsifer"
        },
        {
            "quoteText": "Think how hard physics would be if particles could think.",
            "quoteAuthor": "Murray Gell-Mann"
        },
        {
            "quoteText": "Love is the flower you've got to let grow.",
            "quoteAuthor": "John Lennon"
        },
        {
            "quoteText": "Don't wait. The time will never be just right.",
            "quoteAuthor": "Napoleon Hill"
        },
        {
            "quoteText": "One fails forward toward success.",
            "quoteAuthor": "Charles Kettering"
        },
        {
            "quoteText": "Time is the wisest counsellor of all.",
            "quoteAuthor": "Pericles"
        },
        {
            "quoteText": "You give before you get.",
            "quoteAuthor": "Napoleon Hill"
        },
        {
            "quoteText": "Wisdom begins in wonder.",
            "quoteAuthor": "Socrates"
        },
        {
            "quoteText": "Without courage, wisdom bears no fruit.",
            "quoteAuthor": "Baltasar Gracian"
        },
        {
            "quoteText": "Change in all things is sweet.",
            "quoteAuthor": "Aristotle"
        },
        {
            "quoteText": "What you fear is that which requires action to overcome.",
            "quoteAuthor": "Byron Pulsifer"
        }
    ];
    let quoteText = document.getElementById("quoteText");
    let quoteAuthor = document.getElementById("quoteAuthor");
    let reload = document.getElementById("reload");
    let random = Math.floor(Math.random() * list.length);
    quoteText.textContent = list[random].quoteText;
    quoteAuthor.textContent = list[random].quoteAuthor;
    reload.addEventListener('click', () => {
        let random = Math.floor(Math.random() * list.length);
        quoteText.textContent = list[random].quoteText;
        quoteAuthor.textContent = list[random].quoteAuthor;
    });
}
// cau3();

// Ex 4: Take a look at the following Timesheet
function cau4(){
    //4.1 In JS, Initialize a variable named timeSheetData to store the data above, log/print it out
    let timeSheetData = [
        {
            Project: "Learn front-end",
            Task: "Learn HTML",
            "Time Spent": 6
        },
        {
            Project: "Learn front-end",
            Task: "Learn CSS",
            "Time Spent": 8
        },
        {
            Project: "Learn front-end",
            Task: "Learn JS Variables and Data Types",
            "Time Spent": 6
        },
        {
            Project: "Learn git",
            Task: "Learn git basics",
            "Time Spent": 2
        }
    ]

//4.3 Get (Read) the table body from DOM
const tbody = document.getElementById("ts_tbody");
console.log(tbody);

//4.4  Insert ALL of the data in timeSheetData into the table body, each task in a row
// tham khảo bài hữu dung
for (let i in timeSheetData) {
    tbody.insertAdjacentHTML('beforeend', '<tr></tr>')
}
const listTr = document.querySelectorAll("#ts_tbody tr");
for (let i = 1; nodeTr = listTr[i]; ++i) {
    for (let pro in timeSheetData[i - 1]) {
        nodeTr.insertAdjacentHTML('beforeend', `<td>${timeSheetData[i - 1][pro]}</td>`)
    }
}

// The first, placeholder, row now can be removed
    // listTr[0].remove();

// 4.5 Update the UI (HTML) as follows:
    const inputProject = document.getElementById("project");
    const inputTask = document.getElementById("task");
    const inputTime = document.getElementById("timespent");
    const add = document.getElementById("add_btn");
// 4.6  Perform add new line when ‘Add’ button is clicked (note: Instead of only inserting new HTML into the table body, you should update timeSheetData first, then use timeSheetData to update the table)
// tham khảo bài hữu dung    
    add.addEventListener('click', () => {
        console.log(`${inputProject.value} ${inputTask.value} ${inputTime.value}`);
        timeSheetData.push({
            Project : inputProject.value,
            Task : inputTask.value,
            "Time Spent" : inputTime.value
        });
        tbody.insertAdjacentHTML('beforeend', '<tr></tr>');
        const listTr = document.querySelectorAll("#ts_tbody tr");
        let last = timeSheetData.length - 1;
        for (let pro in timeSheetData[last]) {
                listTr[last].insertAdjacentHTML('beforeend',`<tr>${timeSheetData[last][pro]}</tr>`)
        }
        document.getElementById("input").reset();
        console.log(timeSheetData);
    })
// 4.7 Add new columns name Actions, with each line, add a delete button in the newly added column
// tham khảo bài hữu dung
        const theadTr = document.querySelector("thead tr");
        theadTr.insertAdjacentHTML('beforeend', `<th>Actions</th>`);
        // const listTr = document.querySelectorAll("#ts_tbody tr");
        for (let i = 0; nodetr = listTr[i]; ++i) {
            nodetr.insertAdjacentHTML('beforeend', `<td class="actions"><button class="remove" id="remove${i}">x</button></td>`)
        }
// 4.8 When users click on the delete button, remove the respective line
// tham khảo bài hữu dung
        let listRemove = document.querySelectorAll(".remove");
        // const listTr = document.querySelectorAll("#ts_tbody tr");
        for (let i = 0; nodeMove = listRemove[i]; ++i) {
            nodeMove.addEventListener('click', () => {
                listTr[i].remove();
                let id = listRemove[i].id;
                let index = Number(id.slice(6, id.length));
                console.log(index);
                for (let j = i + 1; j < listRemove.length; ++j) {
                    let tmp = Number(listRemove[j].id.slice(6, id.length));
                    listRemove[j].id = "remove" + String(tmp - 1);
                }
                timeSheetData.splice(index, 1);
                console.log(timeSheetData);
            });
        }
// 4.9 Add Update, Clear buttons and U button in each line
// tham khảo bài hữu dung
    let listActions = document.getElementsByClassName("actions");
    add.insertAdjacentHTML('afterend', '<button id="update">Update</button><button id="clear">Clear</button>');
    let update = document.getElementById("update");
    update.style.display = "none";
    for (let i = 0; nodeAc = listActions[i]; ++i) {
        nodeAc.insertAdjacentHTML('beforeend', `<button class="buttonU" id="update${i}">U</button>`);
    }
    let listU = document.getElementsByClassName("buttonU");
    for (let i = 0; nodeU = listU[i]; ++i) {
        nodeU.addEventListener('click', () => {
            let id = listU[i].id;
            let index = Number(id.slice(6, id.length));
            inputProject.value = timeSheetData[index].Project;
            inputTask.value = timeSheetData[index].Task;
            inputTime.value = timeSheetData[index]["Time Spent"];
            add.style.display = "none";
            update.style.display = "block";
            update.addEventListener('click', () => {
                timeSheetData[index].Project = inputProject.value;
                timeSheetData[index].Task = inputTask.value;
                timeSheetData[index]["Time Spent"] = inputTime.value;
                let nodeTr = document.querySelectorAll("#ts_tbody tr")[index].childNodes;
                nodeTr[0].textContent = timeSheetData[index].Project;
                nodeTr[1].textContent = timeSheetData[index].Task;
                nodeTr[2].textContent = timeSheetData[index]["Time Spent"];
                setTimeout(() => {
                    document.getElementById("input").reset();
                    add.style.display = "block";
                    update.style.display = "none";
                    console.log(timeSheetData);
                }, 50);
            })
        })
    }
    document.getElementById("clear").addEventListener('click', () => {
        document.getElementById("input").reset();
        add.style.display = "block";
        update.style.display = "none";
    });
}
cau4();

