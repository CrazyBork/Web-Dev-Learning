var randNum = Math.round(Math.random() * 99) +1;
var guessCount =1;

    function sendData(form){
    


    var guessNum = form.inputbox.value;

    if (guessNum == randNum)
    {
        alert("Congrats U R Correct" +guessCount);
        document.body.style.backgroundImage="url(https://media.giphy.com/media/xT1Ra4ngFITD6wHA9q/giphy.gif)"
    }

    else if (guessNum < randNum)
    {
        guessCount++;
        alert("To Low, Try again! ");
        console.log("no");
    }
    else  
    {
        guessCount++;
        alert("To High, Try again!");
        console.log("yes");
    }

}

    