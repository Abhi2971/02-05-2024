// // // set
// // const oddNum = new set([1,3,5,7,9,13]);
// // console.log(oddNum);

// // let a = oddNum.add(19);
// // console.log(a);

// // // oddNum.clear();
// // console.log(oddNum);

// // let b = oddNum.delete(19);
// // console.log(b);

// // let c = oddNum.has(17);
// // console.log(c);

// // map
// const frd= new Map([
//     ["Abhishek","shelke"],
//     ["Ganesh","pawar"]
// ]);

// console.log(frd.delete("Abhishek"));

// console.log(frd.get("Abhishek"));

// console.log(frd.has("ganesh"));// It is an case censative 
// console.log(frd.has("Ganesh"));
// console.log(frd.size);
//****************************************** how to create OBJECTS/CLASSES ****************************************************************

class animal{
    // #color;  it is private 
    static className = "in animal class";
    static count=0;
    color;
    height;
    weight;
    food;
    #hairColor;
    constructor(color,height,weight,food,hairColor){
        this.color = color;
        this.food = food;
        this.weight = weight;
        this.height = height;
        this.#hairColor=hairColor;
        animal.count += 1;
    }
    eats(){

    }
    sleep(){
        console.log("abhi");
    }
    running(){

    }
    set hairColor(hairColor){
        this.#hairColor=hairColor; // this set value of function which acess the values which deriverd from outside the class

    }
    get hairColor(){
        return this.#hairColor;
    } // private member access. It covert to public from private.
}

let myCat = new animal("red",10,10,"mouse","black");

console.log(myCat.color);
myCat.eats();
// setter
console.log(myCat.hairColor);
// getter
myCat.hairColor = "pink";
console.log(myCat.hairColor);

// INHERITANCE

class Dog extends animal{
    tailColor;

    constructor(color,height,weight,food,hairColor,tailColor){
        super();//it inherit the all properties of animal
        this.tailColor = tailColor;
    }
    barking(){

    }
    sleep(){
        console.log("AbhiShek");// overriding with sleep function in animal class
    }
}
class Cat extends animal{

}
let yourDog = new Dog("red",10,1,"chicken","black","white");
yourDog.color;
yourDog.barking();
yourDog.sleep();//it override with animal 

// static Function
 
console.log(animal.count);