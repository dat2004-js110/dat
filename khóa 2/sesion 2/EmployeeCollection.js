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
export default EmployeeCollection;