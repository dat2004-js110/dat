class List extends HTMLElement {
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
        <link rel="stylesheet" href="./style.css">
    <table style="width:60%">
    <tr>
        <th>${this.id}</th>
        <th>${this.email}</th>
        <th>${this.password}</th>
        <th><div class="action">
            <div class="update" onclick="import('./index.js').then(e => e.update('${this.id}'))" >Sửa</div>
            <p>|</p>
            <div class="remove" onclick="import('./index.js').then(e => e.remove('${this.id}'))" >Xóa</div>
        </div></th>
    </tr>
    </table>

          `;
        this.shadow.innerHTML = template;

    }

    get id() {
        return this.getAttribute("id");
    }

    set id(val) {
        this.setAttribute("id", val);
    }

    get email() {
        return this.getAttribute("email");
    }

    set email(val) {
        this.setAttribute("email", val);
    }

    get password() {
        return this.getAttribute("password");
    }

    set password(val) {
        this.setAttribute("password", val);
    }
}
// export module
window.customElements.define("list-data", List);