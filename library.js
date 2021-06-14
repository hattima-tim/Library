let form=document.querySelector("#form");
let containerElementForAllBooks=document.querySelector("#display");
let myLibrary=JSON.parse(localStorage.getItem('myLibrary')) || [];

let addBookButton=document.querySelector("#addBook");
addBookButton.onclick=()=>{
    form.style.display="block"
}

let book=(title,author,pages,readStatus)=>{
    return {title,author,pages,readStatus};
}

let toggle_read_status_of_book_in_book_object=(book)=>{
    if(book.readStatus=='read'){
        book.readStatus='Not Read';
        localStorage.setItem('myLibrary',JSON.stringify(myLibrary)); /*since I changed the value of a book object of myLibrary array
        I am updating myLibrary array stored in localStorage */
    }
    else {
        book.readStatus='read';
        localStorage.setItem('myLibrary',JSON.stringify(myLibrary));
    }
}
let toggle_read_status_of_book_in_book_DOM_struture=(e)=>{
    let book_info_container_element_of_selected_book=e.target.parentNode;
    let index_of_the_element_showing_book_read_status=3;
    let index_of_toggle_read_status_button=4;

    book_info_container_element_of_selected_book.children[index_of_the_element_showing_book_read_status].textContent=`${myLibrary[e.target.dataset.index].readStatus}`;

    if (myLibrary[e.target.dataset.index].readStatus=="read"){
        book_info_container_element_of_selected_book.children[index_of_toggle_read_status_button].textContent="Didn't Read";
    }
    else if(myLibrary[e.target.dataset.index].readStatus=="Not Read") {
        book_info_container_element_of_selected_book.children[index_of_toggle_read_status_button].textContent="Read";
    }
}

let removeBook=(e)=>{
    myLibrary.splice(`${e.target.dataset.index}`,1);
    localStorage.setItem('myLibrary',JSON.stringify(myLibrary));
    containerElementForAllBooks.removeChild(e.target.parentNode);

}

let update_index_of_toogle_read_status_remove_book_buttons=()=>{
    let toggleReadButtons=document.querySelectorAll(".toggleReadStatusButton");
    let bookRemoveButtons=document.querySelectorAll('.removeButton');
    for(let i=0;i<=myLibrary.length-1;i++){
        toggleReadButtons[i].setAttribute('data-index',`${i}`);
        bookRemoveButtons[i].setAttribute('data-index',`${i}`);
    }
}

let createDomStructureForBook=(indexOfBook)=>{
    let bookInfoContainerElement=document.createElement("div");
    let bookTitle=document.createElement("p");
    bookTitle.textContent=myLibrary[indexOfBook].title;
    let bookAuthor=document.createElement("p");
    bookAuthor.textContent=myLibrary[indexOfBook].author;
    let bookPageAmount=document.createElement("p");
    bookPageAmount.textContent=myLibrary[indexOfBook].pages;
    let bookReadStatus=document.createElement("p");
    bookReadStatus.textContent=myLibrary[indexOfBook].readStatus;    

    let toggleReadStatusButton=document.createElement("button"); 
    if (myLibrary[indexOfBook].readStatus=="read"){
        toggleReadStatusButton.textContent="Didn't Read";
    }
    else if(myLibrary[indexOfBook].readStatus=="Not Read") {
        toggleReadStatusButton.textContent="Read";
    }

    toggleReadStatusButton.classList.add("toggleReadStatusButton");
    toggleReadStatusButton.setAttribute('data-index',`${indexOfBook}`);
    toggleReadStatusButton.addEventListener('click',(e)=>{
        toggle_read_status_of_book_in_book_object(myLibrary[e.target.dataset.index]);
        toggle_read_status_of_book_in_book_DOM_struture(e);
    })

    let removeButton=document.createElement("button");
    removeButton.textContent="Remove";
    removeButton.classList.add("removeButton");
    removeButton.setAttribute('data-index',`${myLibrary.indexOf(myLibrary[indexOfBook])}`);
    removeButton.addEventListener('click',(e)=>{
        removeBook(e);
        update_index_of_toogle_read_status_remove_book_buttons();
    })
    
    bookInfoContainerElement.appendChild(bookTitle);
    bookInfoContainerElement.appendChild(bookAuthor);
    bookInfoContainerElement.appendChild(bookPageAmount);
    bookInfoContainerElement.appendChild(bookReadStatus);
    bookInfoContainerElement.appendChild(toggleReadStatusButton);
    bookInfoContainerElement.appendChild(removeButton);
    bookInfoContainerElement.classList.add("div");
    containerElementForAllBooks.appendChild(bookInfoContainerElement);
}

let showAllStoredBooks=()=>{
    for (let i=0;i<myLibrary.length;i++){
        createDomStructureForBook(i);
    }
}
showAllStoredBooks();

let formSubmitButton=document.querySelector("#submit");
formSubmitButton.addEventListener('click',()=>{
    title=`Title-${form[0].value}`;
    author=`Author-${form[1].value}`;
    pages=`Pages-${form[2].value}`;
    if (form[3].checked==true){
        readStatus=form[3].value;
    }
    else if(form[4].checked==true){
        readStatus=form[4].value;
    }
    if (title!='Title-' && author!="Author-" && pages!='Pages-' && (form[3].checked || form[4].checked)){
        myLibrary.push(book(title,author,pages,readStatus));
        localStorage.setItem('myLibrary',JSON.stringify(myLibrary));
    
        let indexOfNewBook=myLibrary.length-1;
        createDomStructureForBook(indexOfNewBook);

        form.style.display="none";
    }
})
let closeForm=document.querySelector(".close");
closeForm.onclick=()=>{
    form.style.display="none";
}
