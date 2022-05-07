const animalSound= {
    sound: (s)=> {
        console.log(s)
    }
};
const Dog = new Object();
Dog.prototype.test = "anything"; 
const cat = {
    breed: "persian cat"
    
}
const dog= {
    breed: "labrador"
}
cat.__proto__ = animalSound;
dog.__proto__ = animalSound;
cat.sound("meow");
dog.sound("booh")
//console.log(cat.sound("meow"));
//console.log(dog.sound("booh"));



