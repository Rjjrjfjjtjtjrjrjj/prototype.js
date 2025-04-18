let father={

   

    fun:()=>{

        const ht=document.getElementById('hi');

        ht.style.fontSize="10rem";

    }

}

 

 

 

let child=Object.create(father);

 

 

child.na="albert";

 

child.ownGenetics ={

   

 

    mygen:()=>{

        console.log("im taller than father genetics");

       

    }

 

   

}

 

child.ownGenetics.mygen();

 

let grandfather=Object.create(child);

grandfather.skills="bike riders";

console.log(grandfather.ownGenetics.mygen());





let grandson=Object.create(grandfather);

grandson.create=()=>{

    const ht=document.getElementById('hi');

    ht.style.color="red";

     

}

console.log(grandson.skills +"And it coming from his grandfather");

console.log(grandson.na);

grandson.fun();

 

grandson.create();

 

