// Ex 1:

class Employee {
    constructor (id, name, image, created_at,) {
        this._id = id;
        this._name = name;
        this._image = image;
        this._created_at = created_at;
    }

    set id(id){
        this._id = id;
    } 

    get id() {
        return this._id;
    }

    set name(name){
        this._name = name;
    } 

    get name() {
        return this._name;
    }

    set image(image){
        this._image = image;
    } 

    get image() {
        return this._image;
    }

    set created_at(created_at){
        this._created_at = created_at;
    } 

    get created_at() {
        return this._created_at;
    }

    show(){
        console.log(`ID: ${this._id}`);
        console.log(`Name: ${this._name}`);
        console.log(`Image: ${this._image}`);
        console.log(`Created At: ${this._created_at}`);
      }
      update(updName,updImage) {
        this._name = updName;
        this._image = updImage;
      };
}


const emp1 = new Employee(1,"Dat","Image1","3-6-2021");
emp1.update("Duong Thanh Dat","Image3","20-04-1995");
emp1.show();

// EmployeeCollection
const employees = [];
class EmployeeCollection extends Employee {
    constructor(name, image, createdAt, owner) {
        super(name, image, createdAt);
        this._owner = owner;
    }
    get owner() {
        return this._owner;
    }
    set owner(value) {
        this._owner = value;
    }
        add(data){
        employees.push(data);
    }
        delete(id){
        for (const i in employees) {
        if (id == employees[i].id) {
            employees.splice(i,1);
        }
        }
    }
        update(id,data){
        for (const i in employees) {
        if (id == employees[i].id) {
            employees[i].name = data.name;
            employees[i].image = data.image;
            employees[i].created_at = data.created_at;
            employees[i].owner = data.owner;
        }
        }
    }
        show(id){
        for (const i in employees) {
        if (id == employees[i].id) {
            console.log(`ID: ${employees[i].id}`);
            console.log(`Name: ${employees[i].name}`);
            console.log(`Image: ${employees[i].image}`);
            console.log(`Created At: ${employees[i].created_at}`);
            console.log(`Owner: ${employees[i].owner}`);
        }
        }
    }
}

const emp2 = new Employee(2,"Databc","Image2","3-6-2021");
const emp3 = new Employee(3,"duong van A","Image","4-7-2021");
const newEmployee = new EmployeeCollection();
newEmployee.add(emp1);
newEmployee.add(emp2);
newEmployee.add(emp3);
newEmployee.delete(2);
newEmployee.update(1,{name:"ABc",image:"linkurl",created_at:"0-0-0",owner:"Dương Thanh Dat"});
newEmployee.show(1);
newEmployee.show(2);
console.log(employees)
Ex2:
class Item {
    constructor (id, name, price, origin, sale){
        this._id = id;
        this._name = name;
        this._price = price;
        this._origin = origin;
        this._sale = sale;
        this._date = today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear();
    }

    get id (){
        return this._id;
    }

    set name (value){
        this._name = value;
    }

    get name (){
        return this._name;
    }

    set price (value){
        this._price = value;
    }

    get price (){
        return this._price;
    }

    set origin (value){
        this._origin = value;
    }

    get origin (){
        return this._origin;
    }

    set sale (value){
        this._sale = value;
    }

    get sale (){
        return this._sale;
    }

    get createdAt (){
        return this._date;
    }
}
class ĐồGiaDụng extends Item {
    constructor (id, name, price, origin, doBen){
        super (id, name, price, origin, 0.1);
        this._doBen = doBen;
    }
}
class Clothing extends Item {
    constructor (id, name, price, origin, xuatXu){
        super (id, name, price, origin, 0.05);
        this._xuatXu = xuatXu;
    }
}
class Food extends Item {
    constructor (id, name, price, origin, taste){
        super (id, name, price, origin, 0.02);
        this._taste = taste;
    }
}
