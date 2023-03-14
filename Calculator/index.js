var myInputText = "";
var myInput = document.getElementById("display");

var clearInput = "0";

let inputBtn = document.querySelectorAll(".btn");
console.log(inputBtn)


Array.from(inputBtn).forEach((button) => {
    button.addEventListener("click", (e) => {
        console.log("YES: ", e.target.innerHTML)

        if (e.target.innerHTML == "=") {
            myInputText = eval(myInputText);
            document.querySelector('#display').value = myInputText;
        }

        else if (e.target.value == "C") {
            myInputText = "";
            document.querySelector('#display').value = clearInput;
        }


        else {
            
            myInputText = myInputText + e.target.value;
            document.querySelector('#display').value = myInputText;

        }
    })
})


