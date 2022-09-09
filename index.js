var arrayCount = [];
var count = 0;

document.querySelector(".increase").addEventListener("click", function(){
    count++;
    arrayCount.push(count);
    

    document.querySelector(".counter").innerHTML = arrayCount[(arrayCount.length - 1)]

    document.querySelector(".counter").style.color = "green";
})


document.querySelector(".reset").addEventListener("click", function(){
    document.querySelector(".counter").innerHTML = "0";
    document.querySelector(".counter").style.color = "black";

    arrayCount = [];
    count = 0;
})

document.querySelector(".decrease").addEventListener("click", function(){
    count--;
    if(arrayCount.length === 0){
        arrayCount.push(count);
    }
    else{
        var lastElement = arrayCount.pop() - 1;
        arrayCount.push(lastElement);
    }

    document.querySelector(".counter").innerHTML = arrayCount[(arrayCount.length - 1)]

    document.querySelector(".counter").style.color = "red";
})