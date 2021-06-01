let listSuggestMusic = [];
let pageSuggest = 1;
async function getreQuestAdmin() {
    let response = await fetch(suggestionsUrl);
     listSuggestMusic = await response.json();

     for(let i of listSuggestMusic){
        i.checkSeen = false;
    }
     drawTable(listSuggestMusic);
}
// Vẽ lại giao diện bảng suggest music
function drawTable(data) {
    document.getElementById("tbl_suggest").innerHTML ='';
        document.getElementById("tbl_suggest").insertAdjacentHTML('beforeend', `<tr><th>Bài hát yêu cầu</th>
        <th>Chức năng</th></tr>`);

    let data2 =[];    

    for (let i = 0; i < pageSuggest*10; i++) {
       if (i<data.length) {
        data2.push(data[i]);
       }
        
    }    
    for(let i of data2){
        let checkSeen ='';
        if (i.checkSeen==false) {
            checkSeen='Chưa xem';
        } else {
            checkSeen='Đã xem';
        }
        document.getElementById("tbl_suggest").insertAdjacentHTML('beforeend', `
        <tr>
            <td onclick='updateCheckSeen(${i.id})'>
                ${i.name} - ${i.sigerAuthor} (${checkSeen})
            </td>
            <td>
                <button onclick='deleteByID(${i.id})'>delete</button>
            </td>
        </tr>`);
    }
}
// load data khi bấm vào nút tải dữ liệu
function loadSuggestData() {
    getreQuestAdmin();
}

// Chuyển trạng thái đã xem và chưa xem sau đó vẽ lại giao diện
function updateCheckSeen(id) {

    for(let i of listSuggestMusic){
       if(i.id==id){
           i.checkSeen = true;
       }
    }
    drawTable(listSuggestMusic);
}
// Xóa yêu cầu sau đó vẽ lại giao diện
function deleteByID(id) {

    for(let i of listSuggestMusic){
       if(i.id==id){
        listSuggestMusic.splice(listSuggestMusic.indexOf(i), 1);
       }
    }
    drawTable(listSuggestMusic);
}

function loadMoreSuggest() {
    pageSuggest++;
    drawTable(listSuggestMusic);
}