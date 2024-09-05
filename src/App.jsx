/* getting values */
var popupoverlay = document.querySelector("popup-overlay");
var popupbox = document.querySelector("popup-box");
var addpopupbutton = document.getElementById("add-popupbutton");

/* for addpopup button */
addpopupbutton.addEventListener("click", function(){
  popupoverlay.style.display = "block";
  popupbox.style.display = "block";
})

var cancelpopup = document.getElementById("cancel-popup");

/* to cancel the zoomed popup box */

cancelpopup.addEventListener("click", function(event){
  event.preventDefault();

  popupbox.style.display = "none";
  popupoverlay.style.display = "none";
})

var container = document.querySelector("container");
var addBook = document.getElementById("add-book");
var bookTitleInput = document.getElementById("book-title-input");
var bookAuthorInput = document.getElementById("book-author-input");
var bookDescriptionInput = document.getElementById("book-description-input");

addBook.addEventListener("click", function(event){
  event.preventDefault();

  var div = document.createElement(div)
  div.setAttribute("class", "book-container");

  /* inside popupbox filling */
  div.innerHTML = `<h2>${bookTitleInput}</h2>
                    <h5>${bookAuthorInput}</h5>
                    <h2>${bookDescriptionInput}</h2>
                    <button onclick={deleteBook(event)}></button>`
  container.append(div);
})

/* delete Function */

function deleteBook(event) {
  event.target.parentElement.remove();
}