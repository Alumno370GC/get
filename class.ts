interface User{
name: string;
id: number;

}

class UserAccount{
name: string;
id: number

constructor(name:string, id:number){
this.name =name;
this.id= id;


}

}

const user: User = new UserAccount("Murphy",1);

//There is no difference

class VirtualPoint{
x: number;
y: number;


constructor(x: number, y: number){

    this.x =  x;
    this.y = y;


}


}

const newPoint=new VirtualPoint(13,  56);
console.log(newVPoint);





