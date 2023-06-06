function remove() {
    var list = document.getElementById("list");
    var items = list.getElementsByTagName("li");
  
    for (var i = 0; i < items.length; i++) {
      if (!items[i].querySelector(".removeButton")) {
      var removeButton = document.createElement("button");
      removeButton.innerHTML = "Remove";
      removeButton.classList.add("removeButton");
      }
      removeButton.addEventListener("click", function() {
        var listItem = this.parentNode;
        var index = Array.prototype.indexOf.call(items, listItem);
        list.removeChild(listItem);
        hideRemoveButtons(); 
      });
  
      items[i].appendChild(removeButton);
    }
  }
  document.addEventListener("click", function(event) {
    var target = event.target;
    if (!target.matches(".removeButton") && !target.matches(".deleteButton")) {
      removeEditButtons()
    }
  })
  function hideRemoveButtons() {
    var removeButtons = document.querySelectorAll(".removeButton");
    var list = document.getElementById("list");
    var items = list.getElementsByTagName("li");
    for (var i = 0; i < items.length; i++) {
    items[i].removeChild(removeButtons);
  }
  }