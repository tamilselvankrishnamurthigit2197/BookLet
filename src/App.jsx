  // Getting values
  var popupoverlay = document.querySelector(".popup-overlay");
  var popupbox = document.querySelector(".popup-box");
  var addpopupbutton = document.getElementById("add-popupbutton");
  
  // Show popup when the add button is clicked
  addpopupbutton.addEventListener("click", function () {
    popupoverlay.style.display = "block";
    popupbox.style.display = "block";
  });
  
  var cancelpopup = document.getElementById("cancel-popup");
  
  // Close popup when cancel button is clicked
  cancelpopup.addEventListener("click", function (event) {
    event.preventDefault();
    popupbox.style.display = "none";
    popupoverlay.style.display = "none";
  });
  
  // Select the container for books
  var container = document.querySelector(".container");
  var addBook = document.getElementById("add-book");
  
  // Input fields for book details
  var bookTitleInput = document.getElementById("book-title-input");
  var bookAuthorInput = document.getElementById("book-author-input");
  var bookDescriptionInput = document.getElementById("book-description-input");
  
  // Add a new book
  addBook.addEventListener("click", function (event) {
    event.preventDefault();
  
    /* validate input fields */
    var title = bookTitleInput.value.trim();
    var author = bookAuthorInput.value.trim();
    var description = bookDescriptionInput.value.trim();
  
    if (title === "" || author === "" || description === "") {
      alert("please fill the input fields before adding");
      return;
    }
  
    var div = document.createElement("div")
    div.setAttribute("class", "book-container");
  
    // Fill the new book container with details
    div.innerHTML = `
      <h2>${title}</h2>
      <h5>${author}</h5>
      <p>${description}</p>
      <button onclick="deleteBook(event)">Delete</button>
    `;
  
    // Append the new book container to the main container
    container.append(div);
  
    // Clear the popup input fields
    bookTitleInput.value = "";
    bookAuthorInput.value = "";
    bookDescriptionInput.value = "";
  
    // Close the popup
    popupbox.style.display = "none";
    popupoverlay.style.display = "none";
  });
  
  // Delete a book
  function deleteBook(event) {
    event.target.parentElement.remove();
  }