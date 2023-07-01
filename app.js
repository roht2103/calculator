const app = document.getElementById("app");
let inputNumber = document.querySelector(".inputNumber");
// app.innerHTML = ``;
const controls = app.querySelector(".controls");
const btnArray = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "/", "*", "-", "+", "="];
const buttonElements = btnArray.map((num) => `<button>${num}</button>`);
controls.innerHTML = buttonElements.join("");
controls.style.display="grid"
controls.style.gridTemplateColumns="repeat(3,1fr)"
inputNumber.style.height="1.7rem"
inputNumber.style.border="1px solid black"
inputNumber.style.borderRadius="7px"
inputNumber.style.backgroundColor="white"
inputNumber.style.color="black"
inputNumber.style.margin=".5rem 0rem"
// controls.addEventListener("click",(e)=>{
//     console.log("clicked")
//     inputNumber.innerHTML=Event.target.value
//     console.log(typeof(controls.innerText))

// })
let op="";
let sol=0;
let num1 = "";
let num2 = "";
let value = "";
controls.addEventListener("click", (event) => {
  const clickedButton = event.target;
  if (clickedButton.tagName === "BUTTON") {
    let buttonValue = clickedButton.textContent;
    // console.log("Clicked button:", buttonValue);
    //   buttonValue=Number(buttonValue)
    // console.log(typeof buttonValue);

    if (buttonValue == "=") {
    //   inputNumber.innerHTML = "calculation " + value;
      num2=value
      num2=num2.replace(op,"")
      console.log("num1: " + num1);
      console.log("num2: "+num2)
      solution(num1,num2,op);
    } else {
      handleOperator(buttonValue);
        console.log(op)
      value += buttonValue;
      buttonValue=""
      inputNumber.innerHTML = value;
    }
  }
//   num2 += buttonValue;
//     console.log("num2: " + num2);
});

function handleOperator(operator) {
  // Perform specific actions based on the operator
  switch (operator) {
    case "/":
      console.log("Division operator clicked");
      op="/"
      num1 = value;
      value = "";
      break;
    case "*":
      console.log("Multiplication operator clicked");
      op="*"
      num1 = value;
      value = "";
      break;
    case "-":
      console.log("Subtraction operator clicked");
      op="-"
      num1 = value;
      value = "";
      break;
    case "+":
      console.log("Addition operator clicked");
      op="+"
      num1 = value;
      value = "";
  }
}

function solution(num1,num2,op){
    num1=Number(num1)
    num2=Number(num2)

    if(op=="+"){
        sol=num1+num2;
        inputNumber.innerHTML=sol
    }
    else if(op=="-"){
        sol=num1-num2;
        inputNumber.innerHTML=sol
    }
    else if(op=="/"){
        sol=num1/num2;
        inputNumber.innerHTML=sol
    }
    else if(op=="*"){
        sol=num1*num2;
        inputNumber.innerHTML=sol
    }
}