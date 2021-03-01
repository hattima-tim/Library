let myLibrary=[];
function Book(title,author,pages,read){
    this.title=title
    this.author=author
    this.pages=pages
    this.read=read
}
let displayDiv=document.querySelector("#display")
function display(){
    let div=document.createElement("div")
    let text1=document.createElement("p")
    text1.textContent=myLibrary[a].title
    let text2=document.createElement("p")
    text2.textContent=myLibrary[a].author
    let text3=document.createElement("p")
    text3.textContent=myLibrary[a].pages
    let removeButton=document.createElement("button")
    removeButton.textContent="Remove"
    removeButton.classList.add("removeButton")
    removeButton.setAttribute('data-index',`${myLibrary.indexOf(myLibrary[a])}`)
    div.appendChild(text1)
    div.appendChild(text2)
    div.appendChild(text3)
    div.appendChild(removeButton)
    div.classList.add("div")
    displayDiv.appendChild(div)
}
let form=document.querySelector("#form")
let createButton=document.getElementById("newBook")
createButton.addEventListener('click',()=>{
    form.setAttribute('id','super');
    submitButton.style.display="block"
})
let a=0;
let b;
let submitButton=document.querySelector("#submit")
let removeButtons;
submitButton.addEventListener('click',()=>{
    /*form.setAttribute('id','form');
    submitButton.style.display="none"*/    
    title=form[0].value;
    author=form[1].value;
    pages=form[2].value;
    myLibrary[a]=new Book(title,author,pages);
    display();
    b=0;
    removeButtons=document.querySelectorAll('.removeButton')
    removeButtons[a].addEventListener('click',(e)=>{
        a--;
        myLibrary.splice(`${e.target.dataset.index}`,1)
        console.log(`${e.target.dataset.index}`)
        console.log(e.target.parentNode)
        displayDiv.removeChild(e.target.parentNode)
    })
    a++;
})
/*function removeCard(){
    removeButtons=document.querySelectorAll('.removeButton')
    for (let remove of removeButtons){       
        remove.addEventListener('click',()=>{
        console.log(remove)
        myLibrary.splice(`${remove.dataset.index}`,1)
        console.log(`${remove.dataset.index}`)
        displayDiv.children[`${remove.dataset.index}`].remove();
        a--;
        b++;
    })
    if (b>0){
        b=0;
        break;
    }
}
}*/
