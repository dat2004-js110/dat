class phuong_tien{
    constructor(weight, height){
        this._weight = weight;
        this._height =height;
    }
    set weight(value){
        this._weight = value;
    }
    get weight(){
        return this._weight;
    }
    set height(value){
        this._height = value;
    }
    get height(){
        return this.height;
    }
}
class Cars extends phuong_tien{
    constructor(weight, height){
        super(weight, height);
        this._banhXe = banhxe;
        this._guongXe = guongXe;
    }
    set banhXe(value){
        this._banhXe = value;
    }
    get banhXe(){
        return this._banhXe;
    }
    set guongXe(value){
        this._guongXe = value;
    }
    get guongXe(){
        return this._guongXe;
    }

}
class Bikes extends phuong_tien{
    constructor(weight, height){
        super(weight, height);
        this._banhXe = banhXe;
        this._guongXe = guongXe;
    }
    set banhXe(value){
        this._banhXe = value;
    }
    get banhXe(){
        return this._banhXe;
    }
    set guongXe(number){
        this._guongXe = 2;
    }
    get guongXe(){
        return this._guongXe;
    }

}
let newBike = new Bikes();
console.log(newBike.guongXe);
