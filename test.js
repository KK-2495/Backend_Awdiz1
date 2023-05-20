// Closure

function outerFunction(){
    var myName = "Awdiz";
    // console.log(myName);
    
    function innerFunction(){
        // var mySurName = "Institute";
        // console.log(mySurName);
        console.log(myName);
    }
    return innerFunction();
}
var myFunc = outerFunction; //[function : innerFunction] var myName//
console.log(myFunc());