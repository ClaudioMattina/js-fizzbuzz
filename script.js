

const daje = document.getElementById("ciao");


for(i = 1; i <= 100; i++){

    let newDiv = document.createElement('div');
    newDiv.innerHTML = i;
    newDiv.classList.add("box")
    

    if( i % 15 == 0 ){
        newDiv.innerHTML = "FizzBuzz";
    }
    else if( i % 3 == 0){
        newDiv.innerHTML = "Fizz";
    }
    else if( i % 5 == 0) { 
        newDiv.innerHTML = "Buzz";
    
    }
    else {
        newDiv.innerHTML = i;
    }

    daje.append(newDiv);
};