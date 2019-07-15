let myDog = 
{
    coatType : "fluffy", 
    breed: "Husky",
    color: "white",
    size: "meduim",
    bark: function bark()
    {

        console.log('woof...');

    },
    describeYourself: function describeYourself()
    {
        console.log("Hello I am a: "+ this.breed, "My color is: " + this.color, "I am:" + this.coatType);
       
    }

}

myDog.bark();
myDog.describeYourself();

