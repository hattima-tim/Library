let form=document.querySelector("#form");
let addBookButton=document.querySelector("#addBook");
addBookButton.onclick=()=>{
    form.style.display="block"
}

let myLibrary=[];
class Book{
    constructor(title,author,pages,read){
        this.title=title;
        this.author=author;
        this.pages=pages;
        this.read=read;
    }
    toggleStatus(){
        if (this.read=="read"){
            this.read="Not Read";
        }
        else if(this.read=="Not Read"){
            this.read="read";
        }
    }
}

let displayDiv=document.querySelector("#display");
function display(){
    let div=document.createElement("div");
    let text1=document.createElement("p");
    text1.textContent=myLibrary[a].title;
    let text2=document.createElement("p");
    text2.textContent=myLibrary[a].author;
    let text3=document.createElement("p");
    text3.textContent=myLibrary[a].pages;
    let text4=document.createElement("p");
    text4.textContent=myLibrary[a].read;    

    let toggleStatusButton=document.createElement("button"); 
    if (myLibrary[a].read=="read"){
        toggleStatusButton.textContent="Didn't Read";
    }
    else if(myLibrary[a].read=="Not Read") {
        toggleStatusButton.textContent="read";
    }
    toggleStatusButton.classList.add("toggleStatus");
    toggleStatusButton.setAttribute('data-index',`${myLibrary.indexOf(myLibrary[a])}`);
    
    let removeButton=document.createElement("button");
    removeButton.textContent="Remove";
    removeButton.classList.add("removeButton");
    removeButton.setAttribute('data-index',`${myLibrary.indexOf(myLibrary[a])}`);
    
    div.appendChild(text1);
    div.appendChild(text2);
    div.appendChild(text3);
    div.appendChild(text4);
    div.appendChild(toggleStatusButton);
    div.appendChild(removeButton);
    div.classList.add("div");
    displayDiv.appendChild(div);
}

let a=0;
let toggleStatusButton;
let removeButtons;
let updateIndexOfToggleButton;
let submitButton=document.querySelector("#submit");
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
    if (title!='Title-' && author!="Author-" && pages!='Pages-' && (form[3].checked || form[4].checked)){
        myLibrary[a]=new Book(title,author,pages,read);
        display();

        toggleStatusButton=document.querySelectorAll(".toggleStatus");
        toggleStatusButton[a].addEventListener('click',(e)=>{
            myLibrary[e.target.dataset.index].toggleStatus();
            let c=e.target.parentNode;
            c.children[3].textContent=`${myLibrary[e.target.dataset.index].read}`;
            if (myLibrary[e.target.dataset.index].read=="read"){
                c.children[4].textContent="Didn't Read";
            }
            else if(myLibrary[e.target.dataset.index].read=="Not Read") {
                c.children[4].textContent="Read";
            }
        })
    
        removeButtons=document.querySelectorAll('.removeButton');
        removeButtons[a].addEventListener('click',(e)=>{
            a--;
            myLibrary.splice(`${e.target.dataset.index}`,1);
            displayDiv.removeChild(e.target.parentNode);
            updateIndexOfToggleButton=document.querySelectorAll(".toggleStatus");
            for(let i=0;i<=a-1;i++){
                updateIndexOfToggleButton[i].dataset.index=`${myLibrary.indexOf(myLibrary[i])}`;
            }
        })
        a++;
        form.style.display="none";
    }
})
let closeForm=document.querySelector(".close");
closeForm.onclick=()=>{
    form.style.display="none";
}
