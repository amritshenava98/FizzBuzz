function fizzBuzz(){
        var numinput = document.getElementById("userval").value;
        if(numinput % 3 == 0){
          if(numinput % 5 == 0){
            console.log("FizzBuzz");
          }
          else {
            console.log("Fizz");
          }
        }
        else if(numinput % 5 == 0){
          console.log("Buzz");
        }
}