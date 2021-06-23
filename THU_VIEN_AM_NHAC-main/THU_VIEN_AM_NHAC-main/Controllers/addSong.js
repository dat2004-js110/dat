class AddAdminForm extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({
            mode: "open",
        });
    }
    static get observedAttributes() {

    }

    attributeChangedCallback(name, oldValue, newValue) {

    }

    connectedCallback() {
        const template = `
        <link rel="stylesheet" href="./CSS/main.css" />
            <form id="addMusicForm" style="display: flex; flex-direction: column;">
                        <div style="display: flex; flex-direction: row;">
                            <div style="display: flex; flex-direction: column;">
                                <label for="nameMusicAdmin">Tên bài hát:</label>
                                <input class="halfinputAdmin" type="text" id="nameMusicAdmin" placeholder="name...">
                                <label for="authorMusicAdmin">Sáng tác:</label>
                                <input class="halfinputAdmin" type="text" id="authorMusicAdmin" placeholder="author...">
                            </div>
                            <div style="display: flex; flex-direction: column;">
                                <label for="singerMusicAdmin">Ca sĩ:</label>
                                <input class="halfinputAdmin" type="text" id="singerMusicAdmin" placeholder="singer...">
                                <label for="genreMusicAdmin">Thể loại:</label>
                                <input class="halfinputAdmin" type="text" id="genreMusicAdmin" placeholder="genre...">
                            </div>
                        </div>
                        <div style="display: flex; flex-direction: column;">
                            <label for="iframeMusicAdmin">Iframe Url:</label>
                            <input class="longinputAdmin" type="text" id="iframeMusicAdmin" placeholder="iframeUrl...">
                            <label for="lyricsMusicAdmin">Lời bài hát:</label>
                            <textarea class="longtextareaAdmin" id="lyricsMusicAdmin"
                                placeholder="lyrics..."></textarea>
                        </div>
                    </form>
                    <p id="resultMusicAdmin"></p>
                    <div id="buttonMusicAdmin" style="display: flex; flex-direction: row;">
                        <button id="clearMusicAdmin" class="clearAdmin">Clear</button>
                        <button id="addMusicAdmin">Add</button>
                    </div>

          `;
         this.shadow.innerHTML = template;

         this.shadow.getElementById("clearMusicAdmin").addEventListener("click", () => {
            this.shadow.getElementById("addMusicForm").reset();
         });

         this.shadow.getElementById("addMusicAdmin").addEventListener("click", () => {
            let authorMusicAdmin = this.shadow.getElementById("authorMusicAdmin").value;
            let genreMusicAdmin = this.shadow.getElementById("genreMusicAdmin").value;
            let iframeMusicAdmin = this.shadow.getElementById("iframeMusicAdmin").value;
            let lyricsMusicAdmin = this.shadow.getElementById("lyricsMusicAdmin").value;
            let nameMusicAdmin = this.shadow.getElementById("nameMusicAdmin").value;
            let singerMusicAdmin = this.shadow.getElementById("singerMusicAdmin").value;

            if (authorMusicAdmin=='' || genreMusicAdmin=='' ||  iframeMusicAdmin=='' || lyricsMusicAdmin=='' || nameMusicAdmin=='' || singerMusicAdmin=='') {
                alert("thong tin khong duoc de trong :")
            } else {
                firebase.firestore().collection("Data").add({
                    author:  this.shadow.getElementById("authorMusicAdmin").value,
                    genre: this.shadow.getElementById("genreMusicAdmin").value,
                    iframeUrl:this.shadow.getElementById("iframeMusicAdmin").value,
                    lyrics:this.shadow.getElementById("lyricsMusicAdmin").value,
                    name:this.shadow.getElementById("nameMusicAdmin").value,
                    singer:this.shadow.getElementById("singerMusicAdmin").value
                }).then((res) => {
                    if(res.id){
                        alert("them thanh cong :" +res.id)
                    }
                })
            }
            
         });
    }


// document.getElementById("addMusicAdmin").addEventListener("click", addMusicAdmin);

   
}


// export module
customElements.define("Add-AdminForm", AddAdminForm);