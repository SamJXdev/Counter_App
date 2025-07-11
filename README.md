# Counter_App
## Date:
## Objective:
To build a live character counter using JavaScript that dynamically displays the number of characters entered into a textarea — similar to what you see in Twitter or feedback forms.

## Tasks:

#### 1. Create the HTML Structure:
Add a ```<textarea>``` for user input.

Place a ```<div> or <p>``` below it to show the live character count.

Include a label or heading like “Write your message”.

#### 2. Style with CSS:
Center the layout using margin or flexbox.

Style the textarea with border, padding, and font size.

Style the counter to be bold and place it neatly below the input area.

#### 3. Add JavaScript Functionality:
Use addEventListener("input", ...) on the textarea.

Inside the function, get the length of the value (.value.length).

Update the counter element with this number in real time.

#### 4. Enhancements:
Set a maximum character limit (e.g., 100) and show remaining characters.

Change the text color if the user exceeds the limit.

Add emojis or icons using Unicode for visual feedback.
## HTML Code:
```
<!DOCTYPE html>
<HTML>
    <head>
        <title>
            Character-Counting
        </title>
        <link href = "style.css" rel="stylesheet">
    </head>
    <body>
        <div class="container">
                <h2>Live Character Count</h2>
                    <textarea placeholder="Enter your text" id="textareaa"></textarea>
                        <h2>Number of Characters</h2>
                        <h2 id="nums">0</h2>
                                </div>
                <script src="script.js"></script>
    </body>
</HTML>
```

## CSS Code:
```
body{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(https://tse1.mm.bing.net/th/id/OIP.YuTfWF1jA8YqMJDOFRn8UAHaEK?pid=Api&P=0&h=180);
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  
}

.container{
  text-align: center;
  background-color: gold;
  width: 800px;
  height: 400px;
  border-radius: 20px;
  box-shadow: 0 0 5px rgba(0,0,0,0.5);
}

textarea{
  padding: 20px;
  width: 500px;
  height: 100px;
  border-radius: 20px;
  font-size: 30px;
}
```

## JS code:
```
let num = document.getElementById('textareaa');

let nums=document.getElementById('nums');
num.addEventListener("input",()=>
{

  let length= num.value.length;
  nums.innerHTML=length+'✅';  
  if(length>100){
    let sign= '❌';
    nums.innerHTML=length+sign;
  }
})
```
## Live web page:

## Output:
![Uploading image.png…]()


## Result:
A live character counter using JavaScript that dynamically displays the number of characters entered into a textarea — similar to what you see in Twitter or feedback forms is built successfully.
