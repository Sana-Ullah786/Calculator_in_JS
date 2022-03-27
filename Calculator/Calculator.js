//Glabal variables 

//For all Inputs
var input = "";
//For Memory save Function
var MS = 0;
//for Controlling
var flag = false;

//Function that Gets the Value of Button when it is pressed
function getValue(id) {
  //Get Value
  var value = document.getElementById(id).value;
  //Check if it is Oprand
  if (value >= 0 || value <= 9) {
    //append it to the Input
    input += value;
    //Update the Expression on Screen
    document.getElementById("exp").value = input;
  }
  //Operator
  else {
    if (value == "+" || value == "-" || value == "*" || value == "/") {
      //Check if there is square root before next Operator
      if (flag) {
        getSqrt();
      }
      //append it to the Input
      input += " " + value + " ";
      //Update the Expression on Screen
      document.getElementById("exp").value = input;
    } else if (value == "x2") {
      if (flag) {
        getSqrt();
      }
      var temp = "";
      //Get Expression from end to till first Operator
      for (let index = input.length - 1; index >= 0; index--) {
        if (input[index] >= 0 || input[index] <= 9 || input[index] == " ") {
          temp += input[index];
        } else {
          break;
        }
      }
      //Append Multiplication
      input += " * ";
      //Reverse the Temp (Previous Expression)
      temp = temp.split("").reverse().join("");
      //Append the Temp
      input += temp;
      document.getElementById("exp").value = input;
    } else if (value == "√") {
      input += " " + value + " ";
      document.getElementById("exp").value = input;
      //Set Flag True
      flag = true;
    } else if (value == ".") {
      if (flag) {
        getSqrt();
      }
      input += value;
      //append .0 to make it Double
      input += 0;
      document.getElementById("exp").value = input;
    } else if (value == "±") {
      if (flag) {
        getSqrt();
      }
      //addMinus() fucntion make oprand to opposit sign
      addMinus();
      document.getElementById("exp").value = input;
    } else if (value == "1/x") {
      if (flag) {
        getSqrt();
      }
      var temp1 = "";
      var i = 0;
      for (let index = input.length - 1; index >= 0; index--) {
        if (input[index] >= 0 || input[index] <= 9 || input[index] == " ") {
          temp1 += input[index];
          i = index;
        } else {
          break;
        }
      }
      //Get Temp1 as we did above 
      temp1 = temp1.split("").reverse().join("");
      //Slice the Strings till last Oprand
      input = input.slice(0, i);
      //Append 1/x of the Pressed value (x)
      input += " (" + "1" + " / " + temp1 + ") ";
      document.getElementById("exp").value = input;
    } else if (value == "=") {
      if (flag) {
        getSqrt();
      }
      //If Expression is not Empty
      if (input.length != 0) {
        //Set Result screen to empty
        document.getElementById("result").value = "";
        //Duplicate input so that we can append '=' in it
        var equ = input;
        //Append 'equal to' to the Last of Input
        equ += " =";
        //Update the Expression Screen
        document.getElementById("exp").value = equ;
        //Get Value of Input using 'eval()' function in js and Update to Result Screen
        document.getElementById("result").value = geteval();
      }//Display Error (No Expression at all)
      else {
        document.getElementById("result").value = "NO INPUT";
      }
    }//Clearing all Screens and input
    else if (value == "C") {
      document.getElementById("result").value = "";
      document.getElementById("exp").value = "";
      input = "";

    }//Memory Save Option
    else if (value == "MS") {
      //If Result is not empty
      if (document.getElementById("result").value != "") {
        //Save The Result in MS
        MS = document.getElementById("result").value;
      }
    } else if (value == "MC") {
      //Memory Clear sets MS=0
      MS = 0;
    } else if (value == "MR") {
      //if MS is having Some Value
      if (MS != 0) {
        //append it to the Input
        input += MS;
        //Update the Input
        document.getElementById("exp").value = input;
      }
    } else if (value == "M+") {
      //if Result is not empty
      if (document.getElementById("result").value != "") {
        //Add result and MS and Update the Result Screen
        MS = parseInt(MS) + parseInt(document.getElementById("result").value);
      }
    }
  }
}

//Square root Function 
function getSqrt() {
  var temp1 = "";
  var i = 0;
  //Get the Input till Last Oprator
  for (let index = input.length - 1; index >= 0; index--) {
    if (input[index] >= 0 || input[index] <= 9 || input[index] == " ") {
      temp1 += input[index];
      i = index;
    } else {
      break;
    }
  }
  //slice the Input at Last Oprator
  input = input.slice(0, i - 1);
  flag = false;
  temp1 = temp1.split("").reverse().join("");
  //If There is no oprand Before Square root append multiply
  if (input[input.length - 1] >= 0 || input[input.length - 1] <= 9) {
    input += " * ";
    input += Math.sqrt(temp1);
  } else {
    //Else append result
    input += Math.sqrt(temp1);
  }
}
//addMinus()
function addMinus() {
  var temp1 = "";
  var i = 0;
  //get Input till last Oprator
  for (let index = input.length - 1; index >= 0; index--) {
    if (input[index] >= 0 || input[index] <= 9 || input[index] == " ") {
      temp1 += input[index];
      i = index;
    } else {
      break;
    }
  }
  temp1 = temp1.split("").reverse().join("");
  //if it is Positive Reverse the sigh
  if (input[i - 1] == "+") {
    input = input.slice(0, i - 1);
    input += " - " + temp1;
  } else if (input[i - 1] == "-") {
    input = input.slice(0, i - 1);
    input += " + " + temp1;
  } else {
    //else just Append negative with the Oprand
    input = input.slice(0, i);
    input += " (" + " -" + temp1 + ") ";
  }
}
//geteval()
function geteval() {
  //returns the mathematical Evaluation of js String
  return eval(input);
}