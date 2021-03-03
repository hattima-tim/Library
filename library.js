let myLibrary=[];
function Book(title,author,pages,read){
    this.title=title
    this.author=author
    this.pages=pages
    this.read=read
}
Book.prototype.toggleStatus=function(){
    if (this.read=="read"){
        this.read="Not Read"
    }
    else if(this.read=="Not Read"){
        this.read="read"
    }
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
    let text4=document.createElement("p")
    text4.textContent=myLibrary[a].read    

    let toggleStatusButton=document.createElement("button") 
    if (myLibrary[a].read=="read"){
        toggleStatusButton.textContent="Didn't Read"
    }
    else if(myLibrary[a].read=="Not Read") {
        toggleStatusButton.textContent="read"
    }
    toggleStatusButton.classList.add("toggleStatus")
    toggleStatusButton.setAttribute('data-index',`${myLibrary.indexOf(myLibrary[a])}`)
    
    let removeButton=document.createElement("button")
    removeButton.textContent="Remove"
    removeButton.classList.add("removeButton")
    removeButton.setAttribute('data-index',`${myLibrary.indexOf(myLibrary[a])}`)
    
    div.appendChild(text1)
    div.appendChild(text2)
    div.appendChild(text3)
    div.appendChild(text4)
    div.appendChild(toggleStatusButton)
    div.appendChild(removeButton)
    div.classList.add("div")
    displayDiv.appendChild(div)
}
let form=document.querySelector("#super")
let a=0;
let b;
let submitButton=document.querySelector("#submit")
let toggleStatusButton;
let removeButtons;
let c;
submitButton.addEventListener('click',()=>{
    title=`Title-${form[0].value}`;
    author=`Author-${form[1].value}`;
    pages=`Pages-${form[2].value}`;
    if (form[3].checked==true){
        read=form[3].value;
    }
    else if(form[4].checked==true){
        read=form[4].value;
    }
    if (title!='' && author!='' && pages!='' && form[3].checked || form[4].checked){
    myLibrary[a]=new Book(title,author,pages,read);
    display();
    b=0;
    
    toggleStatusButton=document.querySelectorAll(".toggleStatus")
    toggleStatusButton[a].addEventListener('click',(e)=>{
        myLibrary[e.target.dataset.index].toggleStatus()
        c=e.target.parentNode;
        c.children[3].textContent=`${myLibrary[e.target.dataset.index].read}`;
        if (myLibrary[e.target.dataset.index].read=="read"){
            c.children[4].textContent="Didn't Read"
        }
        else if(myLibrary[e.target.dataset.index].read=="Not Read") {
            c.children[4].textContent="Read"
        }
    })
    
    removeButtons=document.querySelectorAll('.removeButton')
    removeButtons[a].addEventListener('click',(e)=>{
        a--;
        myLibrary.splice(`${e.target.dataset.index}`,1)
        console.log(`${e.target.dataset.index}`)
        console.log(e.target.parentNode)
        displayDiv.removeChild(e.target.parentNode)
    })
    a++;}
    else {
        alert("please properly fill the form!")
    }
})
