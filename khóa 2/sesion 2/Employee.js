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
export default Employee;