function modify() {
  var list = document.getElementById("list");
  var items = list.getElementsByTagName("li");

  for (var i = 0; i < items.length; i++) {
    if (!items[i].querySelector(".editButton") && !items[i].querySelector(".confirmEditButton")) {
      var editButton = document.createElement("button");
      editButton.innerHTML = "Edit";
      editButton.classList.add("editButton");
    
    editButton.addEventListener("click", function() {
      var index = Array.prototype.indexOf.call(items, this.parentNode);
      var currentName = items[index].getElementsByTagName("p")[0];
      var textField = document.createElement("input");
      textField.type = "text";
      textField.value = currentName.innerHTML;
      textField.classList.add("editTextInput");
      var confirmButton = document.createElement("button");
      confirmButton.innerHTML = "Confirm";
      confirmButton.classList.add("confirmEditButton");
      removeEditButton(); 
      confirmButton.addEventListener("click", function() {
        var newParagraph = document.createElement("p");
        newParagraph.innerHTML = textField.value;

        items[index].replaceChild(newParagraph, textField);
        items[index].removeChild(confirmButton);
        items[index].removeChild(cancelButton); 
        removeEditButton();
      });

      var cancelButton = document.createElement("button");
      cancelButton.innerHTML = "Cancel";
      cancelButton.addEventListener("click", function() {
        items[index].replaceChild(currentName, textField);
        items[index].removeChild(confirmButton);
        items[index].removeChild(cancelButton); 
        removeEditButton(); 
      });

      items[index].replaceChild(textField, currentName);
      items[index].appendChild(confirmButton);
      items[index].appendChild(cancelButton);
      items[index].removeChild(this); 
    });

    items[i].appendChild(editButton);
  }
}
}

document.addEventListener("click", function(event) {
  var target = event.target;
  if (!target.matches(".editTextInput") && !target.matches(".editButton") && !target.matches(".modifyButton") ) {
    removeEditButton();
  }
});

function removeEditButton() { 
  var list = document.getElementById("list");
  var items = list.getElementsByTagName("li");
  var input =document.querySelectorAll(".editTextInput");
  if (input.length>0){
  for (var i = 0; i < input.length; i++) {
    input[i].remove();
  }
  }
  var editButton=document.querySelectorAll(".editButton");
  if (editButton.length>0){
  for (var i = 0; i < editButton.length; i++) {
    editButton[i].remove();
  }
  }

  
  var confirmEditButton=document.querySelectorAll(".confirmEditButton");
  if (editButton.length>0){
  for (var i = 0; i < confirmEditButton.length; i++) {
    confirmEditButton[i].remove();
  }
  }
}