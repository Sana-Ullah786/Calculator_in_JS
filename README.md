**Web-based Calculator**  
I have made a web-based calculator using HTML, CSS and Javascript.  
Create a simple web based calculator as shown in the image below.  
 <img width="192" alt="image" src="https://user-images.githubusercontent.com/91070350/160280177-c3337191-5132-46bb-b858-f78f54c151e3.png">  
Following are the important functionalities of the calculator:  
	Whenever a user presses any number (0-9) or operations (+,-,x,/,±, .), it must be shown in the input text field (see example image below).  
  <img width="190" alt="image" src="https://user-images.githubusercontent.com/91070350/160280201-a60b815e-0ab4-42cc-b1a3-1c4a58258a4c.png">     
	1. In case of ‘.’ button pressed, a ‘0’ must be added at the end of the string as shown in above image.   
	2. When ‘=’ button is pressed result is shown in the text field.  
	3. ‘C’ button must clear and reset everything (text field, any storage variables).  
	4. For a given input N, ‘1/x’ should give the results of 1/N (e.g. input =5, result = 0.20) of the given input.  
	5. For a given input N, ‘x2’ should square the input (e.g. input =5, result = 25).  
	6. The square root button, √,should calculate the square root of the input.  
	7. The ‘±’ button should add/remove a ‘–’ sign to the input value.  
	8. MS button must store the numeric input value written in the text field in a variable.  
  9. In case of an equation as shown in the image above, it should not store anything.  
	10. MC button should clear stored numeric value.  
	11. MR button should recall the stored value and display it in the input text field.  
	12. M+ button should add the input value given in the text field in to the stored value in memory and save it as stored value.  

**Hints:**  
	1. JS ‘OnClick’ event will be attached to all buttons in the calculator.  
	2. To handle value storage (MS, MC, MR, M+), create a global variable, M, and change its value according to the button pressed.  
	3. To display inputs as a sequence of numbers and arithmetic operation (e.g. 2+3-5+7/2.5), use string concatenation.  
	4. You can use JS eval() function to directly execute a string as a JS statement. See example below:  
     var input= “2+3-5+2.5/2.5”;  
     eval(input);   // output: 1.0. 
	5. Keep in mind point 4 on eval(), when “=” button is pressed just call  
     var result = eval(document.getElementByID(“inputTextField”).value);    
     
  **How To Run**
  1. Download the folder from github repository.  
  2. Run the Calculator.html file in your web browser.  
  3. Type any expression and press '=' to get the desired output.  
  4. To enter another expression, press 'C' to clear the previous output.    
  
  **Sample Output ScreenShot:**    
  <img width="1439" alt="image" src="https://user-images.githubusercontent.com/91070350/160280262-9d349dee-4b57-47cd-8c49-f63482af6cef.png">
  
