class Address{
    constructor(zip,street){
        this.zip = zip;
        this.street= street;

    }
}

class User{
    constructor(name,{age,phone='1234567890',address}={})
        { 
            this.name=name;
            this.address=address;
            this.phone=phone;
            this.age=age;
        }
}

 let user=new User('bob',{address: new address('123','main st')})