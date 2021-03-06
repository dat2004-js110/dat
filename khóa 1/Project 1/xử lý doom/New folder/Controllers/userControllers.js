//process homepage

//set display homepage to block

let homePageID = document.getElementById("logo");
homePageID.addEventListener('click', () => {
    setPageNone();
    blockHTML("homepage");
    getResetHomePage();
})

async function getHomePage() {
    setPageNone();
    blockHTML("homepage");
    blockHTML("logoHomePage");
    let response = await fetch(musicsUrl);
    let listMusics = await response.json();
    let listMusicsSortCountSeen = listMusics.sort((a, b) => { return b.countSeen - a.countSeen });
    getMusicsDB(listMusicsSortCountSeen, "musicHayNhat", "xemThemHayNhat");
    let listMusicsGenre = {};
    for (let x of listMusics) {
        if (listMusicsGenre[x.genre.toUpperCase()] == undefined) {
            listMusicsGenre[x.genre.toUpperCase()] = [];
            listMusicsGenre[x.genre.toUpperCase()].push(x);
        }
        else {
            listMusicsGenre[x.genre.toUpperCase()].push(x);
        }
    }
    getGenreHomePage(listMusicsGenre);

    //process search
    let keyWord = document.getElementById("searchHomePage");
    keyWord.addEventListener('input', (e) => {
        removeListHTML("#searchMusic li")
        let keyWords = e.target.value;
        if (keyWords == "") {
            noneHTML("searchMusic");
        }
        else {
            document.getElementById("searchMusic").style.display = "flex";
            let count = 0;
            for (let x of listMusics) {
                if (xoa_dau(x.name).toLowerCase().search(keyWords.toLowerCase()) != -1 || xoa_dau(x.singer).toLowerCase().search(keyWords.toLowerCase()) != -1) {
                    document.getElementById("searchMusic").insertAdjacentHTML('beforeend', `
                    <li>
                        <p class="nameSearch" onclick="getPageMusic(${x.id})">${x.name}</p>
                        <p class="singerSearch">${x.singer}</p>
                    </li>`);
                    count++;
                }
            }
            if(count > 6){
                document.getElementById("searchMusic").style.height = "280px";
                document.getElementById("searchMusic").style.overflow = "scroll";
            }
            else{
                document.getElementById("searchMusic").style.height = "auto";
                document.getElementById("searchMusic").style.overflow = "hidden";
            }
        }
    })
}

function getMusicsDB(listMusics = [], contentHTMLID, xemThemID) {
    let listMusicsID = document.getElementById(contentHTMLID);
    let xemThem = document.querySelector(`#${xemThemID} p`);
    let indexPrint = 0;
    for (let i = indexPrint; i < indexPrint + 8; ++i) {
        listMusicsID.insertAdjacentHTML('beforeend', `<li></li>`);
        if (i == 99 || i == listMusics.length - 1) {
            noneHTML(xemThemID);
            break;
        }
    }
    let listLi = document.querySelectorAll(`#${contentHTMLID} li`);
    for (let i = indexPrint; nodeLi = listLi[i]; ++i) {
        nodeLi.insertAdjacentHTML('beforeend', `<p class="name" onclick="getPageMusic(${listMusics[i].id})">${listMusics[i].name}</p>`);
        nodeLi.insertAdjacentHTML('beforeend', `<p class="singer">- ${listMusics[i].singer}</p>`);
        nodeLi.insertAdjacentHTML('beforeend', `<p class="countSeen"><i class="fas fa-headphones-alt"></i>${listMusics[i].countSeen}</p>`);
        nodeLi.insertAdjacentHTML('beforeend', '<hr>');
    }
    indexPrint += 8;
    xemThem.addEventListener('click', () => {
        for (let i = indexPrint; i < indexPrint + 8; ++i) {
            listMusicsID.insertAdjacentHTML('beforeend', `<li></li>`);
            if (i == 99 || i == listMusics.length - 1) {
                noneHTML(xemThemID);
                break;
            }
        }
        let listLi = document.querySelectorAll(`#${contentHTMLID} li`);
        for (let i = indexPrint; nodeLi = listLi[i]; ++i) {
            nodeLi.insertAdjacentHTML('beforeend', `<p class="name" onclick="getPageMusic(${listMusics[i].id})">${listMusics[i].name}</p>`);
            nodeLi.insertAdjacentHTML('beforeend', `<p class="singer">- ${listMusics[i].singer}</p>`);
            nodeLi.insertAdjacentHTML('beforeend', `<p class="countSeen"><i class="fas fa-headphones-alt"></i>${listMusics[i].countSeen}</p>`);
            nodeLi.insertAdjacentHTML('beforeend', '<hr>');
            if (i == 99 || i == listMusics.length - 1) {
                break;
            }
        }
        indexPrint += 8;
    })
}

function getGenreHomePage(listMusicsGenre = {}) {
    let listGenreID = document.getElementById("theLoais");
    for (let i in listMusicsGenre) {
        listGenreID.insertAdjacentHTML('beforeend', `<li onclick = "getMusicsGenre('${listMusicsGenre[i][0].genre.toUpperCase()}')"> ${i}</li>`);
    }
}

async function getMusicsGenre(gen) {
    let response = await fetch(musicsUrl);
    let listMusics = await response.json();
    let listMusicsGenre = {};
    for (let x of listMusics) {
        if (listMusicsGenre[x.genre.toUpperCase()] == undefined) {
            listMusicsGenre[x.genre.toUpperCase()] = [];
            listMusicsGenre[x.genre.toUpperCase()].push(x);
        }
        else {
            listMusicsGenre[x.genre.toUpperCase()].push(x);
        }
    }
    document.querySelector("#theLoaiContent h1").textContent = gen;
    noneHTML("logoHomePage");
    blockHTML("theLoaiContent");
    removeListHTML("#xemThemMusicsTheLoai p");
    let listLi = document.querySelectorAll("#musicTheLoai li");
    for (let i = 0; nodeLi = listLi[i]; ++i) {
        nodeLi.remove();
    }
    document.getElementById("xemThemMusicsTheLoai").insertAdjacentHTML('beforeend', `<p>Xem th??m</p>`);
    blockHTML("xemThemMusicsTheLoai");
    getMusicsDB(listMusicsGenre[gen], "musicTheLoai", "xemThemMusicsTheLoai");
}

function getResetHomePage() {
    removeListHTML("#musicHayNhat li");
    removeListHTML("#theLoais li");
    removeListHTML("#musicTheLoai li");
    removeListHTML("#xemThemMusicsTheLoai p");
    removeListHTML("#xemThemHayNhat p");
    document.getElementById("xemThemHayNhat").insertAdjacentHTML('beforeend', `<p>Xem th??m</p>`);
    document.getElementById("xemThemMusicsTheLoai").insertAdjacentHTML('beforeend', `<p>Xem th??m</p>`);
    blockHTML("logoHomePage")
    blockHTML("xemThemHayNhat");
    blockHTML("xemThemMusicsTheLoai");
    getHomePage();
}



getHomePage();


//process page music

async function getPageMusic(musicID) {
    let response = await fetch(musicsUrl);
    let listMusics = await response.json();

    let index = 0;
    for (let x of listMusics) {
        if (x.id == musicID) break;
        index++;
    }
    let musicUpdate = listMusics[index];
    musicUpdate.countSeen += 1;
    updateData(musicsUrl, musicID, musicUpdate);

    // set page music display to block
    setPageNone();
    blockHTML("pageMusic");
    document.getElementById("nameMusic").textContent = `${listMusics[index].name}`;
    document.getElementById("singerTitleMusic").textContent = `${listMusics[index].singer}`;
    let iframeID = document.querySelector("#pageMusic iframe");
    iframeID.src = listMusics[index].iframeUrl;
    document.getElementById("authorMusic").textContent = `S??ng t??c: ${listMusics[index].author}`;
    document.getElementById("singerMusic").textContent = `Ca s??: ${listMusics[index].singer}`;
    document.getElementById("lyricsMusic").innerText = `L???i b??i h??t:\n${listMusics[index].lyrics}`;
    let gen = listMusics[index].genre.toUpperCase();
    document.querySelector("#musicSameGenre h1").textContent = gen;
    let listMusicsGenre = {};
    for (let x of listMusics) {
        if (listMusicsGenre[x.genre.toUpperCase()] == undefined) {
            listMusicsGenre[x.genre.toUpperCase()] = [];
            listMusicsGenre[x.genre.toUpperCase()].push(x);
        }
        else {
            listMusicsGenre[x.genre.toUpperCase()].push(x);
        }
    }
    removeListHTML("#musicSame li");
    removeListHTML("#xemThemMusicsSame p");
    document.getElementById("xemThemMusicsSame").insertAdjacentHTML('beforeend', `<p>Xem th??m</p>`);
    getMusicsDB(listMusicsGenre[gen], "musicSame", "xemThemMusicsSame");
}

//process upload music

let uploadID = document.getElementById("uploadID");
uploadID.addEventListener('click', () => {
    setPageNone();
    blockHTML("dangbaihat");
})
let addUploadID = document.getElementById("addUpload");
addUploadID.addEventListener('click', () => {
    let nameUpload = document.getElementById("nameUpload");
    let authorUpload = document.getElementById("authorUpload");
    let singerUpload = document.getElementById("singerUpload");
    let genreUpload = document.getElementById("genreUpload");
    let lyricsUpload = document.getElementById("lyricsUpload");
    let iframeUrlUpload = document.getElementById("linkUpload");
    let resultUpLoad = document.getElementById("uploadResult");
    if (nameUpload.value == "" || iframeUrlUpload.value == "") {
        resultUpLoad.style.color = "red";
        resultUpLoad.textContent = "B???t bu???c ph???i ??i???n tr?????ng c?? d???u (*)";
    }
    else {
        resultUpLoad.style.color = "green";
        resultUpLoad.textContent = "Th??nh c??ng! ??ang ch??? admin x??t duy???t!"
        let musicUpLoad = {
            name: nameUpload.value,
            author: authorUpload.value,
            singer: singerUpload.value,
            genre: genreUpload.value,
            lyrics: lyricsUpload.value,
            iframeUrl: iframeUrlUpload.value,
        }
        postData(uploadUrl, musicUpLoad);
        document.querySelector("#upload form").reset();
    }
})


//process request music

let requestID = document.getElementById("requestID");
requestID.addEventListener('click', () => {
    setPageNone();
    blockHTML("yeucaubaihat");
})
let addRequestID = document.getElementById("addRequest");
addRequestID.addEventListener('click', () => {
    let nameRequest = document.getElementById("nameRequest");
    let singerAuthorRequest = document.getElementById("singerAuthorRequest");
    let resultRequest = document.getElementById("requestResult");
    if (nameRequest.value == "" || singerAuthorRequest.value == "") {
        resultRequest.style.color = "red";
        resultRequest.textContent = "B???t bu???c ph???i ??i???n tr?????ng c?? d???u (*)";
    }
    else {
        resultRequest.style.color = "green";
        resultRequest.textContent = "Th??nh c??ng! ??ang ch??? admin x??? l??!"
        postData(requestUrl, { name: nameRequest.value, singerAuthor: singerAuthorRequest.value, checkSeen: "Not seen" });
        document.querySelector("#request form").reset();
    }
})

//process lien he gop y

let suggestionID = document.getElementById("suggestionID");
suggestionID.addEventListener('click', () => {
    setPageNone();
    blockHTML("lienhegopy");
})
let addSuggestionID = document.getElementById("addSuggestion");
addSuggestionID.addEventListener('click', () => {
    let emailSuggestion = document.getElementById("emailSuggestion");
    let subjectSuggestion = document.getElementById("subjectSuggestion");
    let contentSuggestion = document.getElementById("contentSuggestion");
    let resultSuggestion = document.getElementById("suggestionResult");
    if (emailSuggestion.value == "" || contentSuggestion.value == "") {
        resultSuggestion.style.color = "red";
        resultSuggestion.textContent = "B???t bu???c ph???i ??i???n tr?????ng c?? d???u (*)";
    }
    else {
        resultSuggestion.style.color = "green";
        resultSuggestion.textContent = "H??? th???ng ???? ghi nh???n! C???m ??n b???n ???? g??p ??!"
        postData(suggestionsUrl, { email: emailSuggestion.value, subject: subjectSuggestion.value, content: contentSuggestion.value, checkSeen: "Not seen" });
        document.querySelector("#suggestion form").reset();
    }
})

//process login 

let loginID = document.getElementById("loginID");
loginID.addEventListener('click', () => {
    setPageNone();
    blockHTML("dangnhap");
})

async function processLogin() {
    let response = await fetch(adminsUrl);
    let listAdmin = await response.json();
    let addLoginID = document.getElementById("addLogin");
    let userNameLogin = document.getElementById("userName");
    let passWordLogin = document.getElementById("passWord");
    let resultLogin = document.getElementById("loginResult");
    addLoginID.addEventListener('click', () => {
        if (userNameLogin.value == "" || passWordLogin.value == "") {
            resultLogin.style.color = "red";
            resultLogin.textContent = "C???n nh???p ????? c??c tr?????ng!";
        }
        else {
            let check = false;
            for (let x of listAdmin) {
                if (userNameLogin.value == x.userName && passWordLogin.value == x.passWord) {
                    check = true;
                    break;
                }
            }
            if (check) {
                setPageNone();
                blockHTML("adminHomePage");
                noneHTML("header");
                noneHTML("footer");
                document.querySelector("#login form").reset();
            }
            else {
                resultLogin.style.color = "red";
                resultLogin.textContent = "Th??ng tin ????ng nh???p sai!";
                document.querySelector("#login form").reset();
            }
        }
    })
}

processLogin();

setPageNone();
blockHTML("adminHomePage");
noneHTML("header");
noneHTML("footer");



