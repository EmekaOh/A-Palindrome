let main = document.createElement("MAIN");                                               //Create a <main> element
main.id = "main"                                                                         //Assign the <main> element created, an Id
let div1 = document.createElement("DIV");                                                //Create a <div> element
div1.id = "div1"                                                                         //Assign the <div> element created, an Id
let div2 = document.createElement("DIV");                                                //Create a <div> element
div2.id = "div2"                                                                         //Assign the div created an Id
let div3 = document.createElement("DIV");                                                //Create a <div> element
div3.id = "div3"                                                                         //Assign the div created an Id
let heading1 = document.createElement("H1");                                             //Create a <h1> tag
heading1.id = "head"                                                                     //Assign the <h1> tag an Id
let heading2 = document.createElement("H3");                                             //Create a <h3> tag
heading2.id = "head2"                                                                    //Assign the <h3> tag an Id
let input = document.createElement("INPUT");                                             //Create a <input> tag
input.id = "inp"                                                                         //Assign the <input> tag an Id
let btn = document.createElement("BUTTON");                                              //Create a <button> element
btn.id = "btn"
let p = document.createElement("p");                                                     //Create a <button> element
p.id = "p"
document.body.id = "body"

document.body.appendChild(main);                                                         //Here we nest the <main> element inside the <body> element
document.body.appendChild(heading2);                                                     //Here we nest the <h3> element inside the <body> element                 
document.body.appendChild(p);                                                            //Here we nest the <p> element inside the <body> element
main.appendChild(div1);                                                                  //Here we nest the <div1> element inside the <main> element  
main.appendChild(div2);                                                                  //Here we nest the <div2> element inside the <main> element     
div1.appendChild(heading1);                                                              //Here we nest the <h1> element inside the <div1> element                 
div1.appendChild(input);                                                                 //Here we nest the <input> element inside the <div1> element                 
div2.appendChild(btn);                                                                   //Here we nest the <button> element inside the <div2> element             

heading1.innerHTML = "Palindrome";                                                       //Insert text
btn.innerHTML = "CHECK";                                                                 //Insert text                                                               //Insert text
document.getElementById("inp").placeholder = "Type in a word";                           //Insert text

//here we assigned simple css to make our code look nice
document.getElementById("body").style.backgroundColor = "#79ADDC";

document.getElementById("main").style.textAlign = "center";
document.getElementById("main").style.backgroundColor = "#fff";
document.getElementById("main").style.margin = "10rem auto 0 auto";
document.getElementById("main").style.width = "70%";
document.getElementById("main").style.height = "250px";
document.getElementById("main").style.border = "thick solid #FED766";

document.getElementById("inp").style.padding = ".5rem 5rem .5rem .5rem";

document.getElementById("div2").style.marginTop = "5rem"; 
document.getElementById("div2").style.textAlign = "right"; 
document.getElementById("div2").style.paddingRight = "4rem"; 

document.getElementById("btn").style.padding = ".7rem 3rem .7rem 3rem"; 
document.getElementById("btn").style.backgroundColor = "red";
document.getElementById("btn").style.border = "none";
document.getElementById("btn").style.cursor = "pointer"
document.getElementById("btn").style.fontSize = "17px"

document.getElementById("head2").style.margin = "3rem 4rem 0 0"
document.getElementById("head2").style.textAlign = "right";

document.getElementById("p").style.margin = "0 4rem 0 0"
document.getElementById("p").style.textAlign = "right"

document.getElementById("btn").onclick = function() {myFunction()};

let guess = "";
let checker = "";

function palindrome(str) {
    
    // Step 1. Lowercase the string and use the RegExp to remove unwanted characters from it
    var re = /[\W_]/g; // or var re = /[^A-Za-z0-9]/g;
    
    var lowRegStr = str.toLowerCase().replace(re, '');
    // str.toLowerCase() = "A man, a plan, a canal. Panama".toLowerCase() = "a man, a plan, a canal. panama"
    // str.replace(/[\W_]/g, '') = "a man, a plan, a canal. panama".replace(/[\W_]/g, '') = "amanaplanacanalpanama"
    // var lowRegStr = "amanaplanacanalpanama";
       
    // Step 2. Use the same chaining methods with built-in functions from the previous article 'Three Ways to Reverse a String in JavaScript'
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    // lowRegStr.split('') = "amanaplanacanalpanama".split('') = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
    // ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].reverse() = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
    // ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].join('') = "amanaplanacanalpanama"
    // So, "amanaplanacanalpanama".split('').reverse().join('') = "amanaplanacanalpanama";
    // And, var reverseStr = "amanaplanacanalpanama";
     
    // Step 3. Check if reverseStr is strictly equals to lowRegStr and return a Boolean
    guess = reverseStr === lowRegStr; // "amanaplanacanalpanama" === "amanaplanacanalpanama"? => true
    return guess
    
}
function myFunction() {
    checker = document.getElementById("inp").value;

    document.getElementById("head2").innerHTML = palindrome(checker);

    let correct = `Correct ${checker} is a PALINDROME!!!`;

    let incorrect = `Incorrect ${checker} is not a PALINDROME`;

    let empty = `it is a palindrome but still, you did not enter any text`

    
        if (checker === ""){
            document.getElementById("main").style.backgroundColor = "#776D5A";
            document.getElementById("body").style.backgroundColor = "#331E36";
            document.getElementById("head2").innerHTML = `"EMPTY" but still ${palindrome(checker)}`
            document.getElementById("p").innerHTML = empty;
            console.log("empty")
        }else {
            if (guess === true){
                document.getElementById("main").style.backgroundColor = "#A9FDAC";
                document.getElementById("body").style.backgroundColor = "#BFC0C0";
                document.getElementById("p").innerHTML = correct;
                console.log(correct)
          } else {
              document.getElementById("main").style.backgroundColor = "#C7EAE4";
              document.getElementById("body").style.backgroundColor = "#DF367C";
              document.getElementById("p").innerHTML = incorrect;
              console.log(incorrect)
          }

        }
        
        console.log(palindrome(checker))
    }


    
   