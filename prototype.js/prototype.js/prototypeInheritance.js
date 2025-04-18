onsole.log("new js")

function constructor(name,age) {

     

    this.name=name;

    this.age=age;

 

   console.log(this.name);

 

 

     

   

   

}

 

constructor.prototype.button=()=>{

 

    const but =document.getElementById("but");

    but.addEventListener("click",()=>{

        alert("hi");

    })

 

}

       

 

 

 

   

 

constructor.prototype.details=()=>{

    const color=document.getElementById("oi");

    color.style.color="pink";

}

 

 

constructor.prototype.sound=()=>{

    console.log("dark")

}

 

constructor.prototype.obj={

    time:20,

    red:()=>{

        const ser=document.getElementById("red");

        ser.addEventListener("click",()=>{

            alert("bye");

        })

    }

 

}

 

 

 

let a= new constructor("a",20);

 a.details();

 a.sound();

console.log(a.name)

 console.log(a.obj.red());

 a.button();

 

 

 

function constr(car) {

    this.car=car;

    console.log("car");

}

 

constr.prototype.horn="kee kee";

 

 

 

 

let person = new constr("albert");

 

console.log(person.horn);

 

let change ={horn:"cow cow"};

constr.prototype=change;

 

let personTwo=new constr("albert");

 

console.log(personTwo.horn);

 

console.log(person.horn);

 

console.log(personTwo._proto_ ===constr.prototype);

 