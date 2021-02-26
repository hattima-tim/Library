let myLibrary=[];
function Book(title,author,pages,read){
    this.title=title
    this.author=author
    this.pages=pages
    this.read=read
}
function addToLibrary(){
    title=prompt("Title")
    author=prompt("Author")
    pages=prompt("pages")
    read=prompt("Did you finished it?")
    let a=0;
    myLibrary[a]=new Book(title,author,pages,read)
    a++;
}
addToLibrary()
let displayDiv=document.querySelector("div")
function display(){
    let books=myLibrary.map(book=>{
        let div=document.createElement("div")
        let text1=document.createElement("p")
        text1.textContent=book.title
        let text2=document.createElement("p")
        text2.textContent=book.author
        let text3=document.createElement("p")
        text3.textContent=book.pages
        div.appendChild(text1)
        div.appendChild(text2)
        div.appendChild(text3)
        div.classList.add("div")
        displayDiv.appendChild(div)
    })
}
display()