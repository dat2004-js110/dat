let obj = 
[
  {
    name:"Aa",
    age:1,
    created_at: "9",
  },
  {
    name:"Bb",
    age:2,
    created_at: "7",
  },
  {
    name:"Cc",
    age:3,
    created_at: "c",
  },
  {
    name:"Dd",
    age:4,
    created_at: "6",
  },
  {
    name:"Ee",
    age:5,
    created_at: "5",
  },
  {
    name:"F",
    age:6,
    created_at: "3",
  }
];
const tbody = document.getElementById("ts_tbody");
for (let i in obj) {
    tbody.insertAdjacentHTML('beforeend', '<tr></tr>')
}
const listTr = document.querySelectorAll("#ts_tbody tr");
for (let i = 1; nodesTr = listTr[i]; ++i) {
    for (let pro in obj[i - 1]) {
        nodesTr.insertAdjacentHTML('beforeend', `<td>${obj[i - 1][pro]}</td>`)
    }
};
const intName = document.getElementById("inputName");
const intAge = document.getElementById("inputAge");
const intCreated_at = document.getElementById("inputCreated_at");
const add = document.getElementById("add_btn");
add.addEventListener('click', () => {
    // console.log(`${intName.value} ${intAge.value} ${intCreated_at.value}`);
    obj.push({
        name : intName.value,
        age : intAge.value,
        created_at : intCreated_at.value
    });
    tbody.insertAdjacentHTML('beforeend', '<tr></tr>');
    // const listTr = document.querySelectorAll("#ts_tbody tr");
    let last = obj.length - 1;
    for (let pro in obj[last]) {
            listTr[last].insertAdjacentHTML('beforeend',`<tr>${obj[last][pro]}</tr>`)
    }
    document.getElementById("input").reset();
    // console.log(obj);
})
