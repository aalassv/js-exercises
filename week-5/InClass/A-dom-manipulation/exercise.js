/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
let allPElement = document.querySelectorAll("p");
console.log(allPElement);

let firstDivElement = document.querySelector("div")
console.log(firstDivElement);

let idJumbotron = document.querySelector("#jumbotron-text")
console.log(idJumbotron);

let allPElementInside = document.querySelectorAll(".primary-content p")
console.log(allPElementInside);

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
let myButton = document.querySelector("#alertBtn");
myButton.addEventListener("click", alertSome);

function alertSome() {
  alert("Thanks for visiting Bikes for Refugees!");
}

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
let clickToChange = document.querySelector("#bgrChangeBtn");
clickToChange.addEventListener("click", changeBackground);

function changeBackground(){
    document.styleSheets
}

/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/

    let addTextBtn = document.querySelector("#addTextBtn");
    addTextBtn.addEventListener("click", addText);

    function addText (){
        let myElement = document.querySelector("#jumbotron-text");
        let paragraph = document.createElement("p"); // here we're just creating it, element is not visible yet
        myElement.appendChild(paragraph);
        paragraph.innerText = "Read more below.";
    }

    addText();
/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

document.querySelector("#largerLinksBtn").addEventListener("click", increaseSizeLinks);

function increaseSizeLinks(){
    document.querySelectorAll("a");
    
}