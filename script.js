

const daje = document.getElementById("ciao");


for(i =1; i<= 100; i++){

    let newDiv = document.createElement('div');
    newDiv.innerHTML = i;
    daje.append(newDiv);
}