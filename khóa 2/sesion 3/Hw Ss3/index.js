import Employee from "./Employee.js"
import "./ListEmployee.js"
var firebaseConfig = {
    apiKey: "AIzaSyCBCO_4lC5K48bQAb6VcA3564Nn9xWPsX4",
    authDomain: "js-ci63-demo.firebaseapp.com",
    projectId: "js-ci63-demo",
    storageBucket: "js-ci63-demo.appspot.com",
    messagingSenderId: "447942836806",
    appId: "1:447942836806:web:ae3705beee8f0220d10047"
  };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    
    async function renderUser() {
        const result = await firebase.firestore().collection("users").get();
        let list = ``;
        result.docs.forEach((doc) => {
            let entry = `
            <list-data id="${doc.id}" email="${doc.data().email}" password="${doc.data().password}"></list-data>
            `;
    
            list += entry;
            document.querySelector(".listUser").innerHTML = list;
        });
    }
    
    renderUser();
    
    //delete
    export const remove = (id) => {
        deleteEm(id);
    }
    async function deleteEm(id) {
        await firebase.firestore().collection("users").doc(id).delete();
        console.log(id);
        renderUser();
    }
    
    //update
    export const update = (id) => {
        let email = prompt("Nhập email mới");
        let password = prompt("Nhập password mới");
    
        updateEntry(id, email, password);
    }
    async function updateEntry(id, email, password) {
        console.log(id);
    
        if (email != null && email != "") {
            await firebase.firestore().collection("users").doc(id).update({
                email: email
            });
        }
        if (password != null && password != "") {
            await firebase.firestore().collection("users").doc(id).update({
                password: password
            });
        }
    
        renderUser();
    
    }
    
    
    //add
    const addUser = (user) => {
        firebase.firestore().collection("users").add(
            {
                email: user.email,
                password: user.password
            }
        );
    }
    
    document.getElementById("addUser").onclick = () => {
        const email = document.getElementById("email").value;
        const pass = document.getElementById("password").value;
    
        if (email === "" || pass === "") {
            alert("Vui lòng nhập đủ thông tin!");
        } else {
            const newEm = new Employee(email, pass);
            console.log(newEm)
            addUser(newEm);
            renderUser();
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
        }
    }
