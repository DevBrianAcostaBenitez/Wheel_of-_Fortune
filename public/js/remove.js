function remove() {
    var list = document.getElementById("list");
    var items = list.getElementsByTagName("li");
  
    for (var i = 0; i < items.length; i++) {
      var removeButton = document.createElement("button");
      removeButton.innerHTML = "Remove";
  
      removeButton.addEventListener("click", function() {
        var listItem = this.parentNode;
        var index = Array.prototype.indexOf.call(items, listItem);
  
        list.removeChild(listItem);
        hideRemoveButtons(); // Hide all remove buttons
      });
  
      items[i].appendChild(removeButton);
    }
  }
  
  function hideRemoveButtons() {
    var removeButtons = document.querySelectorAll("#list button");
    for (var i = 0; i < removeButtons.length; i++) {
      removeButtons[i].style.display = "none";
    }
  }