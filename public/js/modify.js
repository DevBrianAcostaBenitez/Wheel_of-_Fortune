function modify() {
    var list = document.getElementById("list");
    var items = list.getElementsByTagName("li");
  
    for (var i = 0; i < items.length; i++) {
      var editButton = document.createElement("button");
      editButton.innerHTML = "Edit";
      editButton.addEventListener("click", function() {
        var index = Array.prototype.indexOf.call(items, this.parentNode);
        var currentName = items[index].getElementsByTagName("p")[0];
        var textField = document.createElement("input");
        textField.type = "text";
        textField.value = currentName.innerHTML;
  
        var confirmButton = document.createElement("button");
        confirmButton.innerHTML = "Confirm";
        hideEditButtons();
        confirmButton.addEventListener("click", function() {
          var newParagraph = document.createElement("p");
          newParagraph.innerHTML = textField.value;
  
          items[index].replaceChild(newParagraph, textField);
          items[index].removeChild(confirmButton);
          items[index].removeChild(cancelButton); 
          hideEditButtons(); 
        });
  
        var cancelButton = document.createElement("button");
        cancelButton.innerHTML = "Cancel";
        cancelButton.addEventListener("click", function() {
          items[index].replaceChild(currentName, textField);
          items[index].removeChild(confirmButton);
          items[index].removeChild(cancelButton); 
          hideEditButtons();
        });
  
        items[index].replaceChild(textField, currentName);
        items[index].appendChild(confirmButton);
        items[index].appendChild(cancelButton);
        items[index].removeChild(this); 
      });
  
      items[i].appendChild(editButton);
    }
  }
  
  function hideEditButtons() {
    var editButtons = document.querySelectorAll("#list button");
    for (var i = 0; i < editButtons.length; i++) {
      editButtons[i].style.display = "none";
    }
  }