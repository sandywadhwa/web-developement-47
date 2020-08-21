// Sync Functions--- Return a value
// Aync Functions--- Call the callback


// We can call a function with new Keyword
// This function is constructor function
// Inside this function we can use this keyword to define or init members
function Student(){
    var prop = '';          // Like a private member
    this.name =  '';
    this.age = 0;
    // this.height = 0;

    this.printDetails = function(){
        console.log("Name is "+this.name+ " Age is "+this.age);
    }
}

Student.prototype.height = 0;
Student.prototype.isValidAge = function(){
    return this.age > 0;
}

var st1 = new Student();
st1.name = 'Kaushik';
st1.age = 20;
st1.height = 5.3;

console.log(st1);
console.log(JSON.stringify(st1));

st1.printDetails();
console.log("IS AGE VALID: " + st1.isValidAge());
st1.age = 0;
console.log("IS AGE VALID: " + st1.isValidAge());
